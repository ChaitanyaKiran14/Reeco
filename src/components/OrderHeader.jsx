import { useDispatch } from "react-redux";
import Button from "./Button";
import { approveAllProducts } from "../Redux/reducers/orderReducer";

const OrderHeader = () => {
  const dispatch = useDispatch();
  const handleApproveAllProducts = () => {
    dispatch(approveAllProducts());
  };

  return (
    <div style={{ width: "85%", margin: "auto", padding: "8px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
      <p>
        Orders &gt;&nbsp;
        <span style={{ textDecoration: "underline", textDecorationOffset: "4px" }}>Order 32457ABC</span>
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Order 32457ABC</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <Button text={"Back"} type="secondary" />
          <Button onClick={handleApproveAllProducts} text={"Approve Order"} />
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
