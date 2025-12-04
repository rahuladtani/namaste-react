import React from "react";

class TeamCardUsingClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h4>Count: {count}</h4>
            <h5>Name: {name}</h5>
            <p className="m-0">Location: {location}</p>
          </div>
        </div>
      </>
    );
  }
}

export default TeamCardUsingClassComponent;
