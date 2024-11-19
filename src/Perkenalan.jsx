import { Link } from "react-router-dom";
import fotoPerkenalan from './images/5334855.jpg'
import styles from "./Perkenalan.module.css"

function Perkenalan(){
  return(
    <div className="Perkenalan">
      <img src={fotoPerkenalan}></img>
      <div className="isiPerkenalan">
        <h1>Hello, I'm Denis Matthew.</h1>
        <p>Welcome to my portfolio! Discover my projects, skills, and more.</p>
      </div>
    </div>
  );
}

export default Perkenalan