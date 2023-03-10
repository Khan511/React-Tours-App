import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, onClick }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 180)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {!readMore ? `read more` : `show less`}
          </button>
        </p>

        <button onClick={() => onClick(id)} className="delete-btn">
          Delete Tour
        </button>
      </footer>
    </article>
  );
};

export default Tour;
