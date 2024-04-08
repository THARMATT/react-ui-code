import React, { Component } from "react";
import Profile from "./Profile";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "",
      },
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("parent-mounting");
  }

  render() {
    console.log("render");
    return (
      <>
        <div>
          <Profile props="first" />
        </div>
      </>
    );
  }
}
export default About;
