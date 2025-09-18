import { Link } from "react-router-dom";
import { useState } from 'react';

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
    color: "white",
    padding: "20px 40px",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: '0 4px 15px 0 rgba(116, 79, 168, 0.75)',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Helvetica Neue', sans-serif",
        padding: "20px",
        position: 'relative', // Needed for the overlay
      }}
    >
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for better contrast
        zIndex: 1,
      }}></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Title */}
        <h1 style={{ 
          fontSize: "5rem", 
          marginBottom: "10px",
          fontFamily: "'Georgia', serif",
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px #c0f, 0 0 20px #c0f'
        }}>
          Business Square
        </h1>

        {/* Subtitle */}
        <h2 style={{ 
          fontSize: "2.5rem", 
          marginBottom: "60px",
          color: '#e0e0e0',
          fontWeight: '300',
          letterSpacing: '1px'
        }}>
          Your Premier Business Directory
        </h2>

        {/* Floors Button / Link */}
        <Link
          to="/floors"
          style={linkStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Browse Directory
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
