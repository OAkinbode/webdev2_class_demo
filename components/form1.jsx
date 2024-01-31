import Header from "@/components/header";
import Footer from "@/components/footer";

const Form1 = () => {
  const submitFunction = (event) => {
    event.preventDefault();
    console.log("livestock data: ", e.target);
  };

  return (
    <div>
      <form onSubmit={submitFunction}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
