const Button = ({ text, type = "primary", onClick }) => {
  const btnStyle = {
    borderRadius: "12px",
    fontWeight: "bold",
    padding: "8px 24px",
    fontSize: "0.875rem",
    cursor: "pointer",
  };

  if (type === "primary") {
    btnStyle.color = "#ffffff";
    btnStyle.backgroundColor = "#008000";
  } else {
    btnStyle.color = "#008000";
    btnStyle.backgroundColor = "#ffffff";
    btnStyle.border = "1px solid #008000";
  }

  return (
    <button onClick={onClick} style={btnStyle}>
      {text}
    </button>
  );
};

export default Button;
