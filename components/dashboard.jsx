import { farmItems } from "./json";
import Image from "next/image";

const Dashboard = ({ name, person, no_of_items, calcTotal }) => {
  // const value = newFunction(2, 4);
  return (
    <div className="p-2">
      <div>
        <div>
          On this application we provide you with help to purchase farm items.{" "}
        </div>
        <div className="flex flex-row gap-2">
          <div className="p-2 border border-green">
            <Image src="/kale.jpeg" alt="cow" width={500} height={500}></Image>
          </div>
          <div className="p-2 border border-green">
            <Image src="/cow.webp" alt="cow" width={500} height={500}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
