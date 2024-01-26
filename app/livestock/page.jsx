import Header from "@/components/header";
import Footer from "@/components/footer";

export const Livestock = () => {
  return <div>These are the apple values</div>;
};

const Apples = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
        <div className="border border-green-600 bg-yellow-200 rounded-lg shadow-md p-2">
          Chicken
        </div>
        <div className="border border-green-600 bg-green-200 rounded-lg shadow-md p-2">
          Turkeys
        </div>
        \
      </div>
      <Footer />
    </div>
  );
};

export default Apples;
