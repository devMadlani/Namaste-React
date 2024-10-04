import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <User name={"Dev Madlani"} />
        <UserClass name={"Dev Madlani(class)"} location={"Porbandar"} />
      </div>
    );
  }
}

export default About;
