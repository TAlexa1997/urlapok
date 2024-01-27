import Urlap from "./view/Urlap";
import "./App.css";
import DataService from "./DataService";
import { useEffect } from "react";

/** Telepiteni kell az axios-t */
const DS = new DataService()

function App() {
  function kuld(urlapAdat){
    console.log(urlapAdat)
    let vegpont="";
    /*itt küldöm az adatokat az adatbázisba*/
    // DS.postData(vegpont,urlapAdat)
    useEffect(()=>{
      DS.postData(vegpont,urlapAdat)
    },[])
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Ürlap</h1>
      </header>
      <article>
        <Urlap kuld={kuld}/>
      </article>
    </div>
  );
}

export default App;
