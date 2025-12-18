import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: [{}],
    };
    console.log("About Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    // timer to know use of componentWillUnmount
    // this.timer = setInterval(() => {
    //   console.log("hi from the timer");
    // }, 1000);
    // console.log("About componentDidMount");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("About componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("About componentDidUpdate");
  }
  render() {
    console.log("About render");

    return (
      <div>
        <h1>About US</h1>
        <h2>This is Namaste React Learning App</h2>
        <UserClass
          name="Jyoti"
          location="Pithoragarh"
          userInfo={this.state?.userInfo[0]}
        />
        <UserClass
          name="Divya"
          location="Lucknow"
          userInfo={this.state?.userInfo[1]}
        />
      </div>
    );
  }
}

export default About;
