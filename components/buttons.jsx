const Buttons = ({ color, size, comment }) => {
  return (
    <div className={`${color} ${size} bg-blue-100`}>
      {comment.comment}
      {comment.value}
    </div>
  );
};

export default Buttons;
