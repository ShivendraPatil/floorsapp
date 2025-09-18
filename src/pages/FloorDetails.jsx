import { useParams, Link } from "react-router-dom";
import { floorsData } from "../data/floorsData";

function FloorDetails() {
  const { floorId } = useParams();

  const floorKeyMap = {
    basement: "basement",
    ground: "ground",
    floor1: "first",
    floor2: "second",
    floor3: "third",
    floor4: "fourth",
    floor5: "fifth",
    floor6: "sixth",
    floor7: "seventh"
  };

  const floor = floorsData[floorKeyMap[floorId]];
  if (!floor) return <h2>Floor not found</h2>;

  return (
    <div className="floors-page">
      <h1>{floor.name}</h1>

      <h2>Shops</h2>
      <ul>
        {floor.shops.map((shop) => (
          <li key={shop.id}>
            <Link to={`/floors/${floorId}/shops/${shop.id}`}>{shop.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Services</h2>
      <ul>
        {floor.services.map((service) => (
          <li key={service.id}>
            <Link to={`/floors/${floorId}/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/floors">
        <button>⬅ Back to Floors</button>
      </Link>
    </div>
  );
}

export default FloorDetails;
