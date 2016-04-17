import React from "react";
import ReactDOM from "react-dom";
import DoubleButtons from "./double-buttons";
import UserProfile from "./user-profile";
import GameProfile from "./game-profile";

var Profile = React.createClass({
  logoutExisting(){
    $.ajax({
      url: '/api/v1/sessions',
      type: 'DELETE',
      success: (reply) => {
        if(reply){
          this.props.setMainState({pageView: 0, message: "Logged out"});
        }
      }
    });
  },

  joinGame(){
    this.props.setMainState({ pageView:2 });
  },

  render(){
    return(
      <div>
        <UserProfile user={this.props.user}/>
          <div className="vertical-spacer">
          </div>

        <GameProfile user={this.props.user}/>
          <div className="vertical-spacer">
          </div>

        <DoubleButtons firstButton={{action: this.logoutExisting, text: "Logout"}}
          secondButton={{action: this.joinGame, text:"Let's Play!"}}/>
      </div>
    );
  }

});

module.exports = Profile;

{/*<button type="button" className="btn-big-red" onClick={this.props.sendReset}>RESET</button>*/}