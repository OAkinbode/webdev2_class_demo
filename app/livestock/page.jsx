import Header from "@/components/header";
import Footer from "@/components/footer";
import Form1 from "@/components/form1";
import Form2 from "@/components/form2";
import Form3 from "@/components/form3";

const Livestock = () => {
  const submitFunction = (event) => {
    event.preventDefault();
    console.log("livestock data: ", e.target);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
        <div className="border border-green-600 bg-yellow-200 rounded-lg shadow-md p-2">
          Cattle
        </div>
        <div className="border border-green-600 bg-green-200 rounded-lg shadow-md p-2">
          Chicken
        </div>
        <div>
          <Form2 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Livestock;
