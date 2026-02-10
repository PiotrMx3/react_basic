import type {Penguin} from "../../App";

interface PenguinCardProps {
  penguin: Penguin;
}

const PenguinCard = ({penguin}: PenguinCardProps) => {
  return (
    <>
      <div
        style={{
          background: "bisque",
          width: "min-content",
          borderRadius: "25px",
        }}
      >
        <img
          style={{
            height: "200px",
            width: "250px",
            padding: "0.5rem",
            borderRadius: "25px",
          }}
          src={penguin.image}
          alt={penguin.nickname}
        />
        <div style={{color: "black"}}>
          <h3>{penguin.nickname}</h3>
          <p>
            <b>Species ID: </b>
            {penguin.id}
          </p>
          <p>
            <b>Description: </b> {penguin.description}
          </p>
          <b>Island: </b> {penguin.island}
          <p></p>
        </div>
      </div>
    </>
  );
};

export default PenguinCard;
