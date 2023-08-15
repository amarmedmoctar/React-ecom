import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
function App () {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ 
        <>
        <Slider/>
        <ProductsList/></>
      }/>
    <Route path="about" element={<About/>}/>
    <Route path="product/:productId" element={<ProductDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
