import './App.css';
import User from "./components/User";
import Comment from "./components/Comment";

function App() {

  return (
    <div >
      <h2>Add user</h2>
      <User/>
      <h2>Add comment</h2>
      <Comment/>
    </div>
  );
}

export default App;
