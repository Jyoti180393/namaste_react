import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: [{}],
    };
    // console.log("About Constructor");
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
    // console.log("About componentWillUnmount");
  }

  componentDidUpdate() {
    // console.log("About componentDidUpdate");
  }
  render() {
    // console.log("About render", this.state.userInfo);

    return (
      <div>
        <h1 className="text-3xl font-bold">About US</h1>
        <h2>This is Namaste React Learning App</h2>
        <div className="flex flex-row gap-2.5 font-bold">
          Developed By
          <UserContext.Consumer>
            {({ userLogged }) => (
              <h3 className="text-purple-500 text-lg">{userLogged}</h3>
            )}
          </UserContext.Consumer>
        </div>

        <h3>Our Team Members:</h3>
        <UserClass
          name="Jhon"
          location="Pithoragarh"
          userInfo={this.state?.userInfo[0]}
        />
        <UserClass
          name="Dave"
          location="Lucknow"
          userInfo={this.state?.userInfo[1]}
        />
      </div>
    );
  }
}

export default About;
