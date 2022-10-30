import React, { useState } from "react";
import "../styles/Send.scss";
import Blockie from "react-blockies";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "../components/Button/Button";
import { CustomTokenSelectModal } from "../components/CustomTokenSelectModal/CustomTokenSelectModal";

export const Send = () => {
  const [toAddress, setToAddress] = useState("");
  const [customTokenModalShow, setCustomTokenModalShow] = React.useState(false);
  return (
    <div>
      <div className="SendOuterDiv">
        <div className="swapBoxsend center1 tinytextsend">
          <span style={{ float: "left" }}>Recipient</span>
          <br />
          <div style={{ padding: "0.5em" }} className=" holder">
            <input
              placeholder="tronaddress..."
              className="inputFieldsend address"
              type="text"
              spellCheck="false"
              value={toAddress}
              onChange={(e) => {
                const re = /(?:0[xX])?[0-9a-fA-F]+/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setToAddress(e.target.value);
                }
              }}
            />
            {toAddress.length === 42 ? (
              <Blockie
                seed={"" + toAddress + ""}
                size={10}
                scale={3}
                className="blockieaddr"
              />
            ) : null}
          </div>
        </div>
        <div className="divider"></div>
        <div className="swapBoxsend center1 tinytextsend">
          <div className="swapBoxsendAssets">
            <span>Asset</span>
          </div>
          <br />
          <div
            style={{ padding: "0.5em" }}
            className="dropdownAdjustsend flexout"
          >
            <span
              className="currenttoken"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCustomTokenModalShow(true);
                console.log("show");
              }}
            >
              <span>No Item</span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>

        <div className="center1 approveSendsend">
          <br />
          <Button
            clickFunction={() => {}}
            className="buttonBsend"
            title="Send"
          />
        </div>
      </div>

      <CustomTokenSelectModal
        show={customTokenModalShow}
        onHide={() => setCustomTokenModalShow(false)}
      >
        testtesttesttesttesttesttest
      </CustomTokenSelectModal>
    </div>
  );
};
