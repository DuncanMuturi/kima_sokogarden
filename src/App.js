import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpComponent from "./components/SignUpComponent";
import SignInComponent from "./components/SignInComponent";
import AddProductComponent from "./components/AddProductComponent";
import GetProducts from "./components/GetProducts";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import MakePayment from "./components/MakePayment";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1>Sokogarden - Buy & Sell Oline</h1>
          </header>

          <Routes>
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/signin" element={<SignInComponent />} />
            <Route path="/addproduct" element={<AddProductComponent />} />
            <Route path="/" element={<GetProducts />} />
            <Route path="/makepayment" element={<MakePayment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
