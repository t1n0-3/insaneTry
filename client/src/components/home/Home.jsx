import { useState } from 'react'

import CatalogCard from '../catalog/CatalogCard'

import './Home.css'
export default function Home() {
    const [sliderValue, setSliderValue] = useState(1)

    function onChangeRange(e) {
        setSliderValue(e.target.value)
    }

    return (
        <>
            <div className="slideShow">
                <div className='slide-wrapper'>
                    <input className='currentCar' onChange={onChangeRange} type='range' min='1' max='50'></input>
                    <div className='slide'>
                        <div className='carModelSponFront'>
                            <h3 className='modelName'>RS e-tron GT</h3>
                        </div>
                        <img className='carImg' src={`./porche/${sliderValue}.png`}></img>
                    </div>
                    <img className='backPodium' src='./porche/podium21.png'></img>
                </div>
            </div>
            <div className='SponsorsInfo'>
                <div className='carModelSponBack'>
                    <div className='el'>
                        <h3>TOP SPEED</h3>
                        <p className='summary'>250 kph</p>
                    </div>
                    <div className='el'>
                        <h3>ACCELERATION 0-100 KM/H</h3>
                        <p className='summary'>3.3 Seconds</p>
                    </div>
                    <div className='el'>
                        <h3>GEARBOX</h3>
                        <p className='summary'>2-speed / automatic</p>
                    </div>
                </div>
            </div>
            <div className='minicatalog'>
                <div className='cardHolder'>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
                <button></button>
            </div>
        </>
    )
}
{/* <div className='carModelSponBack'>
    <div className='el'>
        <h3>Top speed</h3>
        <p className='summary'>250 kph</p>
    </div>
    <div className='el'>
        <h3>Acceleration 0-100 km/h</h3>
        <p className='summary'>3.3 Seconds</p>
    </div>
    <div className='el'>
        <h3>Gearbox</h3>
        <p className='summary'>2-speed / automatic</p>
    </div>
</div> */}