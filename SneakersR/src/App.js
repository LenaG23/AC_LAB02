import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ItemPage from "./pages/ItemPage";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://ac-back-production-8a87.up.railway.app/sneakers")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://ac-back-production-8a87.up.railway.app/cart")
      .then((res) => {
        setCartItems(res.data.map((item) => item.sneaker));
      });
    axios
      .get("https://ac-back-production-8a87.up.railway.app/favorites")
      .then((res) => {
        setFavorites(res.data.map((item) => item.sneaker));
      });
  }, []);

  const onAddToCard = (obj) => {
    const exists = cartItems.find((item) => Number(item.id) === Number(obj.id));

    if (exists) {
      axios.delete(
        `https://ac-back-production-8a87.up.railway.app/cart/${exists.id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post(
        `https://ac-back-production-8a87.up.railway.app/cart/${obj.id}`
      );
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://ac-back-production-8a87.up.railway.app/art/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      const exists = favorites.find((favObj) => favObj.id === obj.id);

      if (exists) {
        axios.delete(
          `https://ac-back-production-8a87.up.railway.app/favorites/${exists.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        await axios.post(
          `https://ac-back-production-8a87.up.railway.app/avorites/${obj.id}`
        );
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Failed to add to Favorites");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
        <Route path="/item/:id" element={<ItemPage items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
