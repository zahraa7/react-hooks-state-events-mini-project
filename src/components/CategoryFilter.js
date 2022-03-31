import React from "react";

function CategoryFilter({ categories, onButtonClick, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : null}
            onClick={() => onButtonClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;