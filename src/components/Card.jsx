import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card bg-base-300 w-50 h-45 shadow-sm text-center">
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
