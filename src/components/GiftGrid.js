// import { useState, useEffect } from "react";
import { useFechGifts } from "../hooks/useFetchGifts";
import GiftGridItem from "./GiftGridItem";
import Spinner from "./Spinner";
// import getGifts from "../helpers/getGifts";

const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFechGifts(category);

  return (
    <>
      <h3 className="category-title">{category}</h3>
      {loading && <Spinner />}
      <div className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
