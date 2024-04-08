import React, { Component } from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/THARMATT");
    const json = await data.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }
  render() {
    return (
      <div className="card  ">
        <img  className="card-img  "src={this.state.userinfo.avatar_url} alt="" />
        <h1>{this.state.userinfo.name}</h1>
      </div>
    );
  }
}
export default Profile;
