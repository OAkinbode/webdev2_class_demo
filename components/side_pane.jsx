import { useRouter } from "next/navigation";

const SidePane = () => {
  const router = useRouter();

  const navigateToLivestock = () => {
    router.push("/livestock");
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="w-1/6 border border-green-600 h-screen py-2 px-4 gap-4 text-green-700 flex flex-col items-start justify-start">
      <div className="w-full">
        <button
          className="w-full bg-white px-2 rounded-md border border-green-600"
          onClick={navigateToHome}
        >
          Home
        </button>
      </div>
      <div className="w-full">
        <button
          className="w-full bg-white px-2 rounded-md border border-green-600"
          onClick={navigateToLivestock}
        >
          Livestock
        </button>
      </div>
      <div className="w-full">
        <button className="w-full bg-white px-2 rounded-md border border-green-600">
          Pets
        </button>
      </div>
      <div className="w-full">
        <button className="w-full bg-white px-2 rounded-md border border-green-600">
          Vegetables
        </button>
      </div>
    </div>
  );
};

export default SidePane;
