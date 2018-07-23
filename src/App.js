import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';


class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar"  style={{border:"2px solid",backgroundColor:"white"}} >
    <h2 className="center " style={{backgroundColor:"white",hover:"black"}}>Welcome To DigitalCru </h2>
    </div>
    <PostForm />
    <AllPost />
</div>
);
}
}
export default App;
