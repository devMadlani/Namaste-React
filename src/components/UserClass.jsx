import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child Constructor");
  }
  componentDidMount() {
    console.log("child componentDidMount called");
  }
  render() {
    console.log("child render");

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="border border-e w-[200px] min-h-[100px] mx-auto p-3 hover:shadow-xl m-4">
        <h1>Count = {count}</h1>
        <button
          className="border bg-[#f0f0f0] p-1"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h1 className="text-lg font-medium">
          Name: <span className="text-sm font-normal">{name}</span>
        </h1>
        <h1 className="text-lg font-medium">
          Location: <span className="text-sm font-normal">{location}</span>
        </h1>
        <h1 className="text-lg font-medium">
          Contact: <span className="text-sm font-normal">8866174136</span>
        </h1>
      </div>
    );
  }
}
export default UserClass;
