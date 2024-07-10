import { plantList } from "../data/plantList";
import "../style/ShoppingList.css"

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
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
