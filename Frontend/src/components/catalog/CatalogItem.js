import React from 'react';

export default function CatalogItem({ subcategories }) {
  return (
    <>
      <div className='sub-categories'>
          {subcategories.map((subcategoryObj) => {
          const subcategoryName = Object.keys(subcategoryObj)[0];
          const subcategoryValues = subcategoryObj[subcategoryName];
          return (
            <div key={subcategoryName} className='sub-category'>
              <h4>{subcategoryName}</h4>
              {subcategoryValues.map((value) => (
                <p key={value}>{value}</p>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

