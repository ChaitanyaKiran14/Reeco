import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { sampleProducts } from "../data/order-data";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProductStatus } from "../Redux/reducers/orderReducer";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const productsAddedRef = useRef(false);

  const data = useSelector((state) => state.order.products);
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!productsAddedRef.current) {
      sampleProducts.forEach((product) => {
        dispatch(addProduct(product));
      });

      productsAddedRef.current = true;
    }
  }, [dispatch]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusUpdate = (productId, status) => {
    dispatch(updateProductStatus({ productId, status }));
  };

  const mapTables = () =>
    filteredProducts?.map((product) => (
      <tr key={product.id} style={{ textAlign: "left" }}>
        <td style={{ width: "20%" }}>
          <img src="src/assets/Avocado Hass.jpg" alt="product" />
        </td>
        <td style={{ padding: "2px 4px", fontWeight: "medium", color: "#333" }}>
          {product.name}
        </td>
        <td>{product.brand}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{Number(product.id) * Number(product.price)}</td>
        <td>
          <p
            style={{
              borderRadius: "12px",
              padding: "8px 16px",
              fontWeight: "medium",
              color: "#ffffff",
              textAlign: "center",
              width: "85%",
              backgroundColor:
                product.status === "Approved"
                  ? "#008000"
                  : product.status === "Missing"
                  ? "#e53e3e"
                  : "",
            }}
          >
            {product.status}
          </p>
        </td>
        <td style={{ padding: "6px 4px", textAlign: "right", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <button style={{ fontSize: "1.125rem" }} onClick={() => handleStatusUpdate(product.id, "Approved")}>
            ✓
          </button>
          <button style={{ fontSize: "1.125rem" }} onClick={() => handleStatusUpdate(product.id, "Missing")}>
            X
          </button>
          <button style={{ fontWeight: "medium", color: "#3182ce", textDecoration: "underline" }}>Edit</button>
        </td>
      </tr>
    ));

  return (
    <div style={{ display: "flex", flexDirection: "column", borderRadius: "12px", background: "#ffffff", border: "2px solid #008000", padding: "20px 14px", width: "100%", justifyContent: "center", marginBottom: "4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <input
          style={{ border: "2px solid #000000", borderRadius: "12px", paddingLeft: "10px", width: "40%" }}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#008000" }}>
          <Button type="secondary" text={"Add Item"} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#008000"
            style={{ width: "24px", height: "24px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
        </div>
      </div>

      <div style={{ overflowX: "auto", borderRadius: "12px", marginTop: "4px" }}>
        <table style={{ width: "100%", fontSize: "0.875rem", textAlign: "left", color: "#999", borderCollapse: "collapse", borderTop: "2px solid #999", borderRight: "2px solid #999", borderLeft: "0", borderBottom: "0" }}>
          <thead style={{ fontSize: "0.75rem", color: "#333", textTransform: "uppercase", backgroundColor: "#edf2f7", borderBottom: "2px solid #999" }}>
            <tr>
              <th scope="col" style={{ padding: "6px", width: "5%" }}></th>
              <th scope="col" style={{ padding: "3px 6px", width: "20%" }}>
                Product name
              </th>
              <th scope="col" style={{ paddingRight: "6px", padding: "3px 6px", width: "15%" }}>
                Brand
              </th>
              <th scope="col" style={{ paddingRight: "6px", padding: "3px 6px", width: "15%" }}>
                Price
              </th>
              <th scope="col" style={{ paddingRight: "6px", padding: "3px 6px", width: "15%" }}>
                Quantity
              </th>
              <th scope="col" style={{ paddingRight: "6px", padding: "3px 6px", width: "15%" }}>
                Total
              </th>
              <th scope="col" style={{ paddingRight: "6px", padding: "3px 6px", width: "25%" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>{mapTables()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
