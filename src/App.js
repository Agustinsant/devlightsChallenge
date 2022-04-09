import { useState } from "react";
import axios from "axios";
import useInput from "./hooks/useInput";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import {BiSearch} from 'react-icons/bi'

function App() {
  const search = useInput();
  const [deals, setDeals] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchResults = await axios.get(
      `http://localhost:3001/api/deals?q=${search.value}`
    );
    setDeals(searchResults.data);
    search.setValue('')
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <form className="search_form" onSubmit={handleSearch}>
        <input {...search} type="text" placeholder="Search"></input>
        <button className="search_btn" type="submit"><BiSearch className="search_icon" /></button>
      </form>
      <div className="content_container">
      {deals?.map((item) => {
        return (
          <Card
            key={item.gameId}
            img={item.thumb}
            savings={item.savings}
            title={item.title}
            rate={item.dealRating}
            price={item.normalPrice}
            salePrice={item.salePrice}
          />
        );
      })}
      </div>
      <Footer />

    </div>
  );
}

export default App;
