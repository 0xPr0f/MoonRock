import React from "react";

import "../styles/Extras.css";
import styles from "./../styles/Explore.module.scss";

import Button from "../components/Button/Button";
import Options from "../components/Options/Options";

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
      <header>
        <div className="divholder">
          <div className={styles.ExploreBid}></div>

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
            <div className={styles.MenuOptions}>
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
        </div>
      </header>
    </>
  );
};
