import { Link } from 'react-router-dom';

import './CatalogCard.css'
export default function CatalogCard() {
    return (
        <div className="card">
            <img src="./porche/45.png" alt="Car Image"></img>
            <div className="card-content">
                <div className="car-title">Luxury Sedan</div>
                <div className="price">$50,000</div>
                <Link to="/details/123" className="button">Learn More</Link>
            </div>
        </div>
    )
}