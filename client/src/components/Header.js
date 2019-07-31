import React from "react";

const style = {
  text: {
    textAlign: "center"
  }
}

const Header = props => (
  <header style={style.text} className="header">
    <nav className="gameBar">
      <h1 className="center" title="Home">Welcome to Your Daily Pill!!</h1><br />
        <h3> Status: {props.status}<br />
        Score: {props.currentScore} {" "}<br />
        Top Score: {props.topScore}</h3>
    </nav>
  </header>
)

export default Header;