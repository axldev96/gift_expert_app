import { useState } from "react";
import { AddCategory } from "./AddCategory";
import GiftGrid from "./GiftGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Samurai X"]);

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
