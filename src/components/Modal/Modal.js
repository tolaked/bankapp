import React from "react";
import { GiCancel } from "react-icons/gi";
import { RxCopy } from "react-icons/rx";
import { Link } from "react-router-dom";

import {
  account,
  accountbox,
  boxBottom,
  boxhead,
  cancelbtn,
  iconStyle,
  modalbody,
  modalContent,
  modalHeader,
  modalpara,
  overlay,
  p,
  span,
  wallet,
  walletBalance,
  walletbtn,
  walletchoice,
  walletinput,
  walletLink,
  walletText,
} from "./ModalStyle";

const Modal = () => {
  return (
    <div style={modalbody}>
      <div style={overlay}>
        <div style={modalContent}>
          <p style={modalHeader}>Fund Wallet</p>

          <div style={wallet}>
            <p style={walletText}>wallet balance</p>
            <p style={walletBalance}>$24,000,000</p>
          </div>

          <div style={walletinput}>
            <input type="checkbox" />
            <label style={walletchoice}>Bank Transfer</label>
            <input type="checkbox" />
            <label style={walletchoice}>Fund by Card</label>
          </div>

          {/* <button style={cancelbtn}>
            <GiCancel style={iconStyle} />
          </button> */}

          <div style={accountbox}>
            <div style={boxhead}>
              <div style={account}>
                <p style={p}>Account Number</p>
                <p>123456789</p>
              </div>
              <div>
                <RxCopy />
              </div>
              <div style={account}>
                <p style={p}>Sort Code</p>
                <p>12-34-56</p>
              </div>
            </div>
            <span style={span}></span>
            <div style={boxBottom}>
              <p>Beneficiary Name</p>
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>
      <p style={modalpara}>
        To fund wallet via a bank transfet, pleaase copy the account number
        above and send your funds to it
      </p>
      <button style={walletbtn}>
        <Link to="/" style={walletLink}>
          Done
        </Link>
      </button>
    </div>
  );
};

export default Modal;
