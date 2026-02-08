import "./App.css";
import {cherry, lemon, plum, seven, watermelon} from "./assets/images/images";

function App() {
  const amountSLots = 3;

  const imageArray = [cherry, lemon, plum, seven, watermelon];
  // eslint-disable-next-line react-hooks/purity
  const getRandom = () => Math.floor(Math.random() * imageArray.length);

  const slotsArray = Array.from({length: amountSLots}, () => getRandom());

  const isWinning = slotsArray.every((e) => e === slotsArray[0]);

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
        {slotsArray.map((e, i) => (
          <img
            key={i}
            style={{width: "75px", height: "75px"}}
            src={imageArray[e]}
            alt="image"
          />
        ))}
      </div>
    </>
  );
}

export default App;
