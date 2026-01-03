import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props.name + " constructor");

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    // console.log(this.props.name + " componentDidMount");
  }

  componentWillUnmount() {
    // console.log(this.props.name + " componentWillUnmount");
  }

  componentDidUpdate() {
    // console.log(this.props.name + " componentDidUpdate");
  }

  render() {
    // console.log(this.props.name + " render");

    const { name, location, userInfo } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-container">
        <img style={{ width: "20%" }} src={userInfo?.avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>
          Counts: {count}, {count2}
        </h4>
        <p>Login Id: {userInfo?.login}</p>
        <p>Type: {userInfo?.type}</p>

        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 2,
            });
          }}
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default UserClass;
