import React, { useState, useRef } from 'react';
import { Overlay} from 'react-bootstrap';

export default function CatalogItem({ title, subcategories }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <button ref={target} onMouseEnter={() => setShow(!show)} className='categories'>
        <a>{title}</a>
        <img src="/images/icons/next.svg" />
      </button>
      <Overlay target={target.current} show={show} placement="right">
        {({ show: _show, ...props }) => (
          <div
            className="sub-categories"
            {...props}
          >
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
        )}
      </Overlay>
    </>
  );
}

