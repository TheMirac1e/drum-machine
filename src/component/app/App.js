import './App.scss'
import {Component} from "react";
import Drum from "../drum-machine/drum";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Drum/>
            </div>
        );
    }
}

export default App;
