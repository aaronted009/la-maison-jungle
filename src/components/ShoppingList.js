import { plantList } from "../data/plantList";

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
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
