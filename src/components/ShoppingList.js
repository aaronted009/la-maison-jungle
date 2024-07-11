import { plantList } from "../data/plantList";
import "../style/ShoppingList.css"
import PlantItem from "./PlantItem";
import monstera from '../images/monstera.jpg';

function ShoppingList() {
  const categories = plantList.reduce((unique, plant) => {
    if (!unique.includes(plant.category)) {
      unique.push(plant.category);
    }
    return unique;
  }, []);

  return (
    <div>
      <select>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem key={plant.id} id={plant.id} name={plant.name} light={plant.light} water={plant.water} cover={monstera}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
