import React from "react";
import { connect } from "react-redux";

import TopNav from "./top-nav";

import "./header.css";
import { restartGame, updateAuralStatus } from "../actions";

export function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.dispatch(updateAuralStatus())}
        onRestartGame={() => props.dispatch(restartGame())}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

export default connect()(Header);
