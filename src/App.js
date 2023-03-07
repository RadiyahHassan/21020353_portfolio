import "./App.css";
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom";
import { Fragment } from "react";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
        <Fragment>
          <Home />
        </Fragment>
    </div>
  );
}

export default App;
