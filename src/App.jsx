import { BrowserRouter as Router } from "react-router-dom";
import { ShopContextProvider } from "./context/Shop-Context";
import LinkRoutes from "./components/LinkRoutes";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <LinkRoutes />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
