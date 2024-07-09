import { plantList } from "../data/plantList";

function ShoppingList() {
  const uniquePlantCategories = plantList.reduce((unique, plant) => {
    if (!unique.includes(plant.category)) {
      unique.push(plant.category);
    }
    return unique;
  }, []);

  return (
    <div>
      <select>
        {uniquePlantCategories.map((category) => (
          <option value={`${category}`} key={`${category}`}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {plantList.map((plant, index) => (
          <li key={`${plant.name}-${index}`}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
