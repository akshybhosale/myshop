import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Breadcrum from "../Components/Breadcrumbs/Breadcrum";

function Shop(product) {
  return (
    <div>
    
      <Breadcrum product={product} />
      <Hero />
      <NewCollections />
      <Offer />
      <Popular />
      <NewsLetter />
    </div>
  );
}

export default Shop;
