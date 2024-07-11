import CareScale from "./CareScale";
import "../style/PlantItem.css";

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

function PlantItem({ name, cover, id, light, water }) {
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
      {name}
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
}

export default PlantItem;
