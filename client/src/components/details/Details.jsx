import './Details.css'
export default function Potat() {
    return (
        <div className="details-container">
            <div className="details-header">
                <h1>Luxury Item Details</h1>
            </div>
            <div className="details-content">
                <div className="item-image">
                    <img src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/10990/1690869580714/front-left-side-47.jpg' alt="Luxury Item"></img>
                </div>
                <div className="item-description">
                    <h2>Product Name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <div className="price">Price: $9999.99</div>
                    <button className="buy-now-button">Buy Now</button>
                </div>
            </div>
        </div>
    );
}