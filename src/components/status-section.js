import React from "react";
import { connect } from "react-redux";

import GuessList from "./guess-list";
import GuessCount from "./guess-count";
import AuralStatus from "./aural-status";

export function StatusSection(props) {
  //const { guesses, auralStatus } = props;
  //const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={props.guessCount} />
      <GuessList guesses={props.guesses} />
      <AuralStatus auralStatus={props.auralStatus} />
    </section>
  );
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  auralStatus: state.auralStatus,
  guessCount: state.guesses.length
});

export default connect(mapStateToProps)(StatusSection);
