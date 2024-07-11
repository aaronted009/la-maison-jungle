import sun from '../images/sun.svg'
import water from '../images/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? sun : water

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}><img src={scaleType} alt={scaleType === sun ? 'light':'water'}/></span> : null
            )}
        </div>
    )
}

export default CareScale;