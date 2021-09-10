import "./style.css";
function CharCard({ character }) {
  return (
    <div>
      {character.status === "Alive" ? (
        <div className="Alive">
          <img src={character.image} alt="teste" />
          {character.name.length > 15
            ? `${character.name.slice(0, 16)}...`
            : character.name}
        </div>
      ) : (
        <div className="others">
          <img src={character.image} alt="teste" />
          {character.name}
        </div>
      )}
    </div>
  );
}
export default CharCard;
