import "./App.css";
import {cherry, lemon, plum, seven, watermelon} from "./assets/images/images";

function App() {
  const imageArray = [cherry, lemon, plum, seven, watermelon];

  const random1 = Math.floor(Math.random() * imageArray.length);
  const random2 = Math.floor(Math.random() * imageArray.length);
  const random3 = Math.floor(Math.random() * imageArray.length);

  const slot1 = (
    <img
      style={{width: "75px", height: "75px"}}
      src={imageArray[random1]}
      alt="image"
    />
  );

  const slot2 = (
    <img
      style={{width: "75px", height: "75px"}}
      src={imageArray[random2]}
      alt="image"
    />
  );

  const slot3 = (
    <img
      style={{width: "75px", height: "75px"}}
      src={imageArray[random3]}
      alt="image"
    />
  );

  const isWinning = random1 === random2 && random2 === random3;

  return (
    <>
      <h1>Labo 1: Slots</h1>
      <div id="image-container">
        <img
          style={{width: "75px", height: "75px"}}
          src={cherry}
          alt="image-1"
        />
        <img
          style={{width: "75px", height: "75px"}}
          src={lemon}
          alt="image-2"
        />
        <img style={{width: "75px", height: "75px"}} src={plum} alt="image-3" />
        <img
          style={{width: "75px", height: "75px"}}
          src={seven}
          alt="image-4"
        />
        <img
          style={{width: "75px", height: "75px"}}
          src={watermelon}
          alt="image-5"
        />
      </div>
      <br />
      {isWinning && <h2>Gewonnen !</h2>}

      <br />
      <div id="slot-container">
        {slot1}
        {slot2}
        {slot3}
      </div>
    </>
  );
}

export default App;
