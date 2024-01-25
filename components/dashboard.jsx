import { farmItems } from "./json";

const Dashboard = ({ name, person, no_of_items, calcTotal }) => {
  // const value = newFunction(2, 4);
  return (
    <div className="p-2">
      <div>
        <div>Welcome {name}: These are the items we have: </div>
        {farmItems.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 border-gray-400 w-full p-2 my-1"
            >
              {index + 1}. Type of Animal: {item.name}. Weights:{" "}
              {item.weight_kg}kg. Color: {item.color}.
            </div>
          );
        })}
        <div>
          We will deliver your goods to: {person.address.city}. We will deliver{" "}
          {no_of_items}
        </div>
        <div>Total Price is: {calcTotal(200, 30)}</div>
      </div>
    </div>
  );
};

export default Dashboard;
