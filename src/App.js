
import MainHeader from "./components/MainHeader";
import MainProduct from "./components/product/MainProduct";
import DetailsProvider from "./context/DetailsProvider";




function App() {
  return (
    <>
        <DetailsProvider>
        <MainHeader />
        <MainProduct />
        </DetailsProvider>
    </>
  );
}

export default App;
