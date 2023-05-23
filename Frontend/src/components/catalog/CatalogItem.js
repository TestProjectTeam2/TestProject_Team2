import React from 'react';

export default function CatalogItem({ subcategories }) {
  return (
    <>
      <div className='sub-categories'>
        {subcategories.map((subcategory) => (
          <div className='sub-category' key={subcategory.id}>
            <h4>{subcategory.name}</h4>
            <p>{subcategory.child[0].name}</p>
            <p>{subcategory.child[1].name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

