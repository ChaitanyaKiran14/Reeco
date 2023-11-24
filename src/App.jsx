import OrderHeader from "./components/OrderHeader";
import SupplierDetails from "./components/SupplierDetails";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div id="app">
      <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)", background: "#ffffff", width: "100%", paddingBottom: "1px" }}>
        <OrderHeader />
      </div>
      <div style={{ width: "85%", margin: "16px auto", display: "flex", flexDirection: "column" }}>
        <SupplierDetails />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

