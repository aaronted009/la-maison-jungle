import CareScale from "./CareScale";
import "../style/PlantItem.css";

function PlantItem({ name, cover, id, light, water}) {
    return (
        <li key={id} className="lmj-plant-item">
            <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
            {name}
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </li>
    );
}

export default PlantItem;