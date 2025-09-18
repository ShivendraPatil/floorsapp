import { useParams, Link } from 'react-router-dom';
import { floorsData } from '../data';
import './FloorDetailsPage.css';

function Header() {
  return (
    <header className="floor-details-header">
      <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Business Square
      </Link>
    </header>
  );
}

function FloorDetailsPage() {
  const { floorId } = useParams();
  const floor = floorsData[floorId];

  if (!floor) {
    return <div className="loading">Loading floor details...</div>;
  }

  return (
    <div className="floor-details-container">
      <div 
        className="floor-details-background-image" 
        style={{ backgroundImage: `url(${floor.backgroundImage})` }}
      ></div>
      <div className="floor-details-overlay"></div>
      <Header />
      <div className="floor-details-content">
        <h1 className="floor-name">{floor.name}</h1>
        <p className="floor-description">{floor.description}</p>
        <div className="cards-container">
          <div className="shops-card">
            <h2 className="card-title">Shops</h2>
            <ul className="card-list">
              {floor.shops.map(shop => (
                <li key={shop.id} className="card-list-item">
                  <Link to={`/floors/${floorId}/shops/${shop.id}`} className="card-link">{shop.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="services-card">
            <h2 className="card-title">Services</h2>
            <ul className="card-list">
              {floor.services.map(service => (
                <li key={service.id} className="card-list-item">
                  <Link to={`/floors/${floorId}/services/${service.id}`} className="card-link">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
}

export default FloorDetailsPage;
