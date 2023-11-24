import { SUPPLIERS_DETAILS } from "../data/order-data";

const SupplierDetails = () => {
  return (
    <div style={{ display: "flex", borderRadius: "12px", background: "#ffffff", border: "2px solid #008000", padding: "20px 14px", width: "100%", justifyContent: "center", marginBottom: "4px" }}>
      {SUPPLIERS_DETAILS.map((detail) => (
        <div key={detail.label} style={{ display: "flex", flexDirection: "column", flexBasis: "1/6" }}>
          <div style={{ margin: "auto", marginLeft: "5px" }}>
            <p style={{ color: "#999", fontWeight: "medium", marginBottom: "4px" }}>{detail.label}</p>
            <p style={{ color: "#000", fontWeight: "bold", fontSize: "1.125rem" }}>{detail.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierDetails;
