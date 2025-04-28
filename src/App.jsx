import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a MusicWorldSpace!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando productos..." />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<p>404 - Página no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;