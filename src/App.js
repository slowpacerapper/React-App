import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Components/MyRoutes";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
