import sun from "../images/sun.svg";
import water from "../images/water.svg";

function handleCareScaleClick(careIntensity, careType) {
  if (careIntensity === 1) {
    careType === "light"
      ? alert("Cette plante requiert peu de lumière")
      : alert("Cette plante requiert peu d'arrosage");
  } else if (careIntensity === 2) {
    careType === "light"
      ? alert("Cette plante requiert modérément de lumière")
      : alert("Cette plante requiert modérément d'arrosage");
  } else if (careIntensity === 3) {
    careType === "light"
      ? alert("Cette plante requiert beaucoup de lumière")
      : alert("Cette plante requiert beaucoup d'arrosage");
  }
}

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? sun : water;

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <img
              src={scaleType}
              alt={scaleType === sun ? "light" : "water"}
              onClick={() => handleCareScaleClick(scaleValue, careType)}
            />
          </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
