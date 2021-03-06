import React from "react";
import ReactDOM from "react-dom";

var DoubleButtons = React.createClass({
  render(){
    var button1 = this.props.firstButton;
    var button2 = this.props.secondButton;
    var disable = "";

    if(this.props.inGame){
      disable = "disabled";
    }

    return(
      <div className="center">
        <button onClick={button1.action}>{button1.text}</button>
        <button className={disable} disabled={disable} onClick={button2.action}>{button2.text}</button>
      </div>
    );
  }
});

module.exports = DoubleButtons;
