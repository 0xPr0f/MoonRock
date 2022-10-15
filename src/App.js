import "./styles/sideNavBar.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Truncate } from "./utils/utils";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { NFTs } from "./pages/NFTs";
import { Account } from "./pages/Account";
import { Auction } from "./pages/Auction";
import { Swap } from "./pages/Swap";

function App() {
  const [address, setAddress] = useState("");
  async function connectToTronLink() {
    await window.tronWeb
      .request({
        method: "tron_requestAccounts",
      })
      .then((x) => {
        if (x.code === 200) {
          console.log(window.tronWeb.ready);
          document.getElementById("myModal").style.display = "none";
        }
      });
  }

  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };

  useEffect(() => {
    if (window.tronWeb !== undefined && window.tronWeb.ready === true) {
      setAddress(window.tronWeb.defaultAddress.base58);
      console.log("tron installed ");
    }
  });
  return (
    <>
      <div className="App">
        <Router>
          <div className="sidebar">
            {/* Routing part of the code */}

            <span className="active">{/*MOONROCK*/} TEST</span>
            <br />
            <br />
            <br />
            <br />
            {console.log(window.tronWeb)}
            <Link to="/home" className="home">
              <button className="home">Home</button>
            </Link>
            <Link to="/nft" className="nft">
              <button className="nft">NFTs</button>
            </Link>
            <Link to="/auction" className="auction">
              <button className="auction">Auction</button>
            </Link>

            <Link to="/swap" className="swap">
              <button className="swap">Swap</button>
            </Link>

            <Link to="/account" className="account">
              <button className="account">Account</button>
            </Link>
            <div className="btm_btn">
              <button
                id="myBtn"
                onClick={() => {
                  document.getElementById("myModal").style.display = "block";
                }}
                className="connect"
              >
                Connect Wallet/ Not connected will finish up later
                {/*  {window.tronWeb.ready == undefined ? (
                <>{Truncate(window.tronWeb.defaultAddress.base58)}</>
              ) : (
                <>Connect</>
              )} */}
              </button>
            </div>
          </div>

          <div id="myModal" className="modal">
            <div className="modal-content">
              <span
                onClick={() => {
                  document.getElementById("myModal").style.display = "none";
                }}
                className="close"
              >
                &times;
              </span>
              <span id="submenu">Connect to wallet</span>
              <br />
              <p id="tiltemenusub">MoonRock</p>
              <br />
              <button
                id="connectwalletbutton"
                onClick={() => {
                  connectToTronLink();
                }}
              >
                TronLink Wallet
              </button>
            </div>
          </div>
          <div className="restofthepage">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/nft" element={<NFTs />} />
              <Route path="/auction" element={<Auction />} />
              <Route path="/swap" element={<Swap />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
