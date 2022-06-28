import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPosts} from "./services/user.api.service";

function App() {
    let [info, setInfo] = useState([]);
    
    const choseUser = (id) => {
      getUserPosts(id).then(({data}) => setInfo([...data]));
    }
    return (
        <div>
            <h1>User posts</h1>
            <hr/>
            {
                info.map(value => <div>
                    <h2>User id: {value.userId}</h2>
                    <h3>{value.id}. {value.title}</h3>
                    <p>{value.body}</p>
                </div>)
            }
            <hr/>
            <Users choseUser={choseUser}/>
        </div>
    );
}

export default App;
