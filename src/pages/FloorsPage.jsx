import { Link } from "react-router-dom";
import './FloorsPage.css'; // Import the new stylesheet

const floors = [
  { id: "basement", name: "Basement" },
  { id: "ground", name: "Ground Floor" },
  { id: "floor1", name: "First Floor" },
  { id: "floor2", name: "Second Floor" },
  { id: "floor3", name: "Third Floor" },
  { id: "floor4", name: "Fourth Floor" },
  { id: "floor5", name: "Fifth Floor" },
  { id: "floor6", name: "Sixth Floor" },
  { id: "floor7", name: "Seventh Floor" },
];

function Header() {
  return (
    <header className="floors-page-header">
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Business Square
      </Link>
      <nav>
        {/* Add other navigation links here if needed */}
      </nav>
    </header>
  );
}


function FloorsPage() {
  return (
    <div className="floors-page-container">
      <div className="floors-page-overlay"></div>
      <div className="floors-page-content">
        <Header />
        <h1 className="floors-page-title">Building Floors</h1>
        <Link to="/" className="back-to-home-button">Back to Home</Link>
        <div className="floor-grid">
          {floors.map((floor) => (
            <Link to={`/floors/${floor.id}`} key={floor.id} className="floor-link">
              <div className="floor-card">
                <h2>{floor.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloorsPage;
