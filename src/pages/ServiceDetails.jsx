import { useParams, Link } from "react-router-dom";
import { floorsData } from "../data/floorsData";

function ServiceDetails() {
  const { floorId, serviceId } = useParams();

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
  if (!floor) return <p>Floor not found</p>;

  const service = floor.services.find((s) => s.id === serviceId);
  if (!service) return <p>Service not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{service.name}</h1>
      <p>{service.details}</p>
      <Link to={`/floors/${floorId}`}>⬅ Back to {floor.name}</Link>
    </div>
  );
}

export default ServiceDetails;
