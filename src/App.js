import React, {Component} from 'react';
import Posts from "./components/Post/Posts";
import Comments from "./components/Comment/Comments";

class App extends Component {
    render() {
        return (
            <div>
              <Posts/>
              {/*  <Comments/>*/}
            </div>
        );
    }
}

export default App;