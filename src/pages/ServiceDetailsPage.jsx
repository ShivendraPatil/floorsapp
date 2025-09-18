import { useParams, Link } from 'react-router-dom';
import { floorsData } from '../data';
import './ServiceDetailsPage.css';

function Header() {
  return (
    <header className="service-details-header">
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Business Square
      </Link>
    </header>
  );
}

function ServiceDetailsPage() {
  const { floorId, serviceId } = useParams();
  const floor = floorsData[floorId];
  const service = floor?.services.find(s => s.id === serviceId);

  if (!service) {
    return <div className="loading">Loading service details...</div>;
  }

  return (
    <div className="service-details-container">
        <Header />
        <div className="service-details-content">
            <div className="service-card-details">
                <h1 className="service-name">{service.name}</h1>
                <p className="service-floor">Located on: {floor.name}</p>
                <p className="service-description">{service.details}</p>
            </div>
            <Link to={`/floors/${floorId}`} className="back-to-floor-button-service">Back to {floor.name}</Link>
        </div>
    </div>
  );
}

export default ServiceDetailsPage;
