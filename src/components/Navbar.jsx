const Navbar = () => {
  return (
    <div style={{ width: "100%", border: "1px solid #ffffff", padding: "12px 0", background: "#008000" }}>
      <div style={{ width: "85%", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "middle", color: "#ffffff" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Reeco</p>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </div>
        <div style={{ display: "flex", color: "#ffffff", gap: "8px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff"
            style={{ width: "24px", height: "24px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p>Hello, James</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
