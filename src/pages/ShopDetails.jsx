import { useParams, Link } from "react-router-dom";
import { floorsData } from "../data/floorsData";

function ShopDetails() {
  const { floorId, shopId } = useParams();

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
  const shop = floor?.shops.find((s) => s.id === shopId);

  if (!shop) return <h2>Shop not found</h2>;

  return (
    <div>
      <h1>{shop.name}</h1>
      <p><strong>Owner:</strong> {shop.owner.name}</p>
      <p><strong>Phone:</strong> {shop.owner.phone}</p>
      <p><strong>Email:</strong> {shop.owner.email}</p>

      <Link to={`/floors/${floorId}`}>
        <button>⬅ Back to {floor.name}</button>
      </Link>
    </div>
  );
}

export default ShopDetails;
