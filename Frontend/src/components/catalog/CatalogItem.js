import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CatalogItem({ subcategories }) {
  return (
    <>
      <div className='sub-categories'>
        {subcategories.map((subcategory) => (
          <div className='sub-category' key={subcategory.id}>
					  <NavLink to={`/product-list/${subcategory.slug}`}>
              <h4>{subcategory.name}</h4>
            </NavLink>
            <NavLink to={`/product-list/${subcategory.child[0].slug}`}>
              <p>{subcategory.child[0].name}</p>
            </NavLink>
            <NavLink to={`/product-list/${subcategory.child[0].slug}`}>
              <p>{subcategory.child[1].name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

