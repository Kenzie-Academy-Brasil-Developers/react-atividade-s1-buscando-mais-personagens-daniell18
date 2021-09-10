import CharCard from "../CharCard";
import "./style.css";
function Characters({ characterList }) {
  return (
    <div className="main">
      <h1>Meus Personagens</h1>
      <div className="character-list">
        {characterList.map((element, index) => (
          <div key={index}>
            <CharCard character={element} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Characters;
