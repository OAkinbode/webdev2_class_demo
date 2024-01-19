export const AppleValues = () => {
  return <div>These are the apple values</div>;
};

const Apples = () => {
  return (
    <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
      <div className="border border-green-600 bg-yellow-200 rounded-lg shadow-md p-2">
        Apples are better than Oranges
      </div>
      <div className="border border-green-600 bg-green-200 rounded-lg shadow-md p-2">
        Oranges come with a punch
      </div>
      <AppleValues />
    </div>
  );
};

export default Apples;
