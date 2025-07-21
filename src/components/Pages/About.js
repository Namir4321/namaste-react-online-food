import React, { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // props are the props send from the parent component
    //console.log("Parent Constructor");
  }
  componentDidMount() {
    // component did mount is used to fetch the data from api because it render after the page initalise and get render for eg in this page the the first thing happens is the 1 component loads 2constructor loads 3 rneder the ui 4 component render and
    // it follows this https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // if there are two child components thenit patch the render method and commit phase
    // so the render method is the mothed that i have describe the render componet order in which it render
    // and commit method is the api fetch we can say it starts after the component is mounted

    console.log("Parent component Did Mount");
  }
  componentDidUpdate() {
    // console.log(this.componentDidUpdate)
  }
  render() {
    console.log("Parent Render");
    // const {name,location}=this.props this is how we get to use props in class
    return (
      <div>
        <h1>About class Component</h1>
        <UserContext.Consumer>
          {({loggedInUser}) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is react class</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
        {/* when there are moe than one child component the react use it 
        fibre algorthim to patch the life cycle like if there are two 
        first thing that will hapen is that it will render the componnet 
        and then the constructor and then the render of the ui where it will 
        be default or emplate ui and then the and the move to the first child and 
        same thing happens there the component -> constructor-> rendering of ui 
        and then to the secound child and same thing reapeats there also 
        component -> constructor-> rendering of the u -> then it came back
        to the parent container and runs the life cycle method like compinentdidMount 
        and other life cylcke mehtod and then does same with first child and then 
        with the secound child like life chylcle method of the child compnetn like 
        componentDidMount */}
      </div>
    );
  }
}
export default About;
