import React from "react";

//  declartion of the class component simillar like const dec=asyc()=>
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this is how we declare the useState in here
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "child constructor");
  }
  async componentDidMount() {
    // simillar to useEffect but not like useEffect
    // api call
    const data = await fetch("https://api.github.com/users/namir4321");
    const json = await data.json();
    this.setState({
      userInfo: json,
      // we have here initaize the useState like we do in function component like useState(json)
    });
    // console.log(json);
  }

  componentDidUpdate() {
    console.log("Componet did update");
    // to update the ui
  }
  componentWillUnmount() {
    console.log("componet will unmount");
    // it will clear the mmess we have left like when we use
    //  the setTimeOut it will countinously be working in the
    //  background and wont stop so 
    // like we can clear the settimeOut interval to be 
    // stopped
  }

  render() {
    console.log(this.props.name + "child Render");
    // here wwe have destructure the state 
   const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @namir2464</h4>
      </div>
    );
}
}
export default UserClass
/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
