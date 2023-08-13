import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ShopContextProvider } from "./context/Shop-Context";
import LinkRoutes from "./components/LinkRoutes";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />

          <LinkRoutes />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
