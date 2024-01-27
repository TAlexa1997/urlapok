import { useState } from "react";

function Urlap(props) {
  const [obj, setObj] = useState({ nev: "", szul: "" });
  function kuld(event) {
    event.preventDefault();
    console.log("Objektum:",obj)
    props.kuld(obj)
  }
  function adatValt(event) {
    console.log(event.target)
    console.log(event.target.value)
    console.log(event.target.id)
    const masolat={...obj}  
    masolat[event.target.id] = event.target.value  
    setObj(masolat);  
  }
  return (
    <>
    <h2>Új adatok felvitele</h2>
      <form onSubmit={kuld}>
        <div>
          <label htmlFor="nev">Név: </label>
          <input
            type="text"
            onChange={adatValt}
            id="nev"
            value={obj.nev}
            placeholder="Név"
          />
        </div>
        <div>
          <label htmlFor="szul">Születési dátum: </label>
          <input
            type="date"
            onChange={adatValt}
            id="szul"
            value={obj.szul}
                       
          />
        </div>
        <input type="submit" id="submit" value="OK" />
      </form>
    </>
  );
}
export default Urlap;
