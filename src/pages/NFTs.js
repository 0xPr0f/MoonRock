import React from "react";

import "../styles/Extras.css";
import styles from "./../styles/Explore.module.scss";
import { nfts } from "./test";
import Button from "../components/Button/Button";
import Options from "../components/Options/Options";
import Summary from "../components/Summary/Summary";
import Toggle from "../components/Toogle/Toggle";
import RangeInput from "../components/RangeInput/RangeInput";
import MultiRangeSlider from "../components/MultiRangeSlider/MultiRangeSlider";
import NFTCard from "../components/NFTCard/NFTCard";

import { useState, useEffect } from "react";

import { GrClose, GrFormCheckmark } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { BsGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoSwapVertical, IoChevronDownOutline } from "react-icons/io5";
import { MenuItem } from "@mui/material";

export const NFTs = () => {
  const [activeTab, setActiveTab] = useState("nft");
  const [filterDisplay, setFilterDisplay] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState("rl");
  const [filterValues] = useState({
    rl: "Recently listed",
    plh: "Price: Low to High",
    phl: "Price: High to Low",
    rhl: "Rarity: High to low",
    rlh: "Rarity: Low to high",
  });
  const [rarityRankRnage, setRarityRankRnage] = useState({ min: 0, max: 0 });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [smallControlDisplay, setSmallControlDisplay] = useState(true);
  const [gridDisplayClass, setGridDisplayClass] = useState(styles.filterLgPrev);

  const rangeInputUpdate = (min, max) => {
    if (min !== rarityRankRnage.min || max !== rarityRankRnage.max) {
      setRarityRankRnage({ min, max });
    }
  };

  useEffect(() => {
    if (filterDisplay && !smallControlDisplay) {
      setGridDisplayClass(styles.filterLgPrev);
    }
    if (filterDisplay && smallControlDisplay) {
      setGridDisplayClass(styles.filterSmPrev);
    }
    if (!filterDisplay && !smallControlDisplay) {
      setGridDisplayClass(styles.lgPrev);
    }
    if (!filterDisplay && smallControlDisplay) {
      setGridDisplayClass(styles.smPrev);
    }
  }, [smallControlDisplay, filterDisplay]);

  return (
    <>
      <div>
        <div className="backgroundImage"></div>
      </div>
      <div className={styles.Explore}>
        <header>
          <div className={styles.ExploreBid}>
            <p>Buy an item on sale</p>
            <Button title="Buy" className={styles.ExploreBidButton} />
          </div>
          <div className={styles.ExploreTab}>
            <span
              className={
                activeTab === "nft"
                  ? styles.ExploreTabActive
                  : styles.ExploreTabInactive
              }
              onClick={() => setActiveTab("nft")}
            >
              NFTs
            </span>
            <span
              className={
                activeTab === "activities"
                  ? styles.ExploreTabActive
                  : styles.ExploreTabInactive
              }
              onClick={() => setActiveTab("activities")}
            >
              Activities
            </span>
          </div>
          <div className={styles.ExploreControls}>
            <Button
              className={[styles.ctrlButton, styles.filterDisplayBtn].join(" ")}
              type={["secondary", "small"]}
              clickFunction={() =>
                setFilterDisplay((showFilter) => !showFilter)
              }
            >
              <IoIosArrowBack />
              <span>Filters</span>
            </Button>
            <div className={styles.SearchBox}>
              <RiSearchLine size={20} className={styles.SearchBoxIcon} />
              <input
                placeholder="Search by Meta Angels"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {searchInput && <GrClose onClick={() => setSearchInput("")} />}
            </div>
            <div className={styles.MenuOptions}>
              <div
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Button
                  className={styles.ctrlButton}
                  type={["secondary", "small"]}
                >
                  <IoSwapVertical />
                  <span>{filterValues[filterType]}</span>
                  <IoChevronDownOutline />
                </Button>
              </div>
              <Options anchorEl={anchorEl} handleClose={handleClose}>
                {Object.keys(filterValues).map((value) => (
                  <MenuItem
                    key={value}
                    className={styles.Menu}
                    onClick={() => {
                      setFilterType(value);
                      return handleClose();
                    }}
                  >
                    <span>{filterValues[value]}</span>
                    {filterType === value && (
                      <GrFormCheckmark size={25} fill="rgb(8, 8, 154)" />
                    )}
                  </MenuItem>
                ))}
              </Options>
            </div>
            <div
              className={[
                styles.ExploreControlsDisplay,
                smallControlDisplay && styles.ExploreControlsDisplaySmall,
              ].join(" ")}
              onClick={() =>
                setSmallControlDisplay((prevDisplay) => !prevDisplay)
              }
            >
              <BsGridFill
                size={20}
                className={[
                  styles.ExploreControlsDisplayControl,
                  !smallControlDisplay &&
                    styles.ExploreControlsDisplayControlActive,
                ].join(" ")}
              />
              <BsFillGrid3X3GapFill
                size={20}
                className={[
                  styles.ExploreControlsDisplayControl,
                  smallControlDisplay &&
                    styles.ExploreControlsDisplayControlActive,
                ].join(" ")}
              />
            </div>
          </div>
        </header>
        <div className={styles.Collections}>
          {filterDisplay && (
            <div className={styles.CollectionsFilter}>
              <div className={styles.CollectionsFilterContainer}>
                <div style={{ height: "2em" }}></div>
                <div className={styles.CollectionsFilterContainerControl}>
                  <Summary title="Status" isActive={true}>
                    <Toggle label={"listed"} title="Listed Items only" />
                    <Toggle
                      label={"c-listing"}
                      title="Only Community listing"
                    />
                  </Summary>
                  <Summary title="Price" isActive={true}>
                    <RangeInput showUnit={true} />
                  </Summary>
                  <Summary title="Rarity Rank (#1 Rarest)" isActive={true}>
                    <RangeInput
                      showUnit={false}
                      minValue={rarityRankRnage.min}
                      maxValue={rarityRankRnage.max}
                      minValCtrl={() => {}}
                      maxValCtrl={() => {}}
                      style={{ marginBottom: ".75em" }}
                    />
                    <MultiRangeSlider
                      min={0}
                      max={10000}
                      onChange={({ min, max }) => {
                        console.log(min, max);
                        return rangeInputUpdate(min, max);
                      }}
                    />
                  </Summary>
                </div>
                <div className={styles.CollectionsFilterContainerButtons}>
                  <Button title="Apply" type="secondary" />
                  <Button title="Clear Filters" type="secondary" />
                </div>
              </div>
            </div>
          )}
          <div className={[styles.CollectionsView, gridDisplayClass].join(" ")}>
            {nfts.map((listedNft, index) => (
              <NFTCard
                key={index}
                image={listedNft.image}
                name={listedNft.name}
                price={listedNft.price}
                bid={listedNft.bid}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
