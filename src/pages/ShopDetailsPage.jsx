import { useParams, Link } from 'react-router-dom';
import { floorsData } from '../data';
import './ShopDetailsPage.css';

function Header() {
  return (
    <header className="shop-details-header">
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Business Square
      </Link>
    </header>
  );
}

function ShopDetailsPage() {
  const { floorId, shopId } = useParams();
  const floor = floorsData[floorId];
  const shop = floor?.shops.find(s => s.id === shopId);

  if (!shop) {
    return <div className="loading">Loading shop details...</div>;
  }

  return (
    <div className="shop-details-container">
      <div className="shop-details-overlay"></div>
      <div className="shop-details-content">
        <Header />
        <div className="shop-card-details">
          <h1 className="shop-name">{shop.name}</h1>
          <div className="owner-details">
            <p className="shop-owner"><strong>Owner:</strong> {shop.owner}</p>
            <p className="shop-contact">
              <strong>Contact:</strong> 
              <a href={`tel:${shop.phone}`}>{shop.phone}</a> | 
              <a href={`mailto:${shop.email}`}>{shop.email}</a>
            </p>
          </div>
          <p className="shop-floor">Located on: {floor.name}</p>
        </div>
        <Link to={`/floors/${floorId}`} className="back-to-floor-button">Back to {floor.name}</Link>
      </div>
    </div>
  );
}

export default ShopDetailsPage;
