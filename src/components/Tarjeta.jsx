import React from "react";

const Tarjeta = (props) => {
  const {
    data: { sprite: images, id, name, types },
  } = props;

  return (
    <div className="card">
      <div className="poke-name">{name.toUpperCase()}</div>
      <div className="card__body">
        <img src={images} alt={name} className="card__img" />
        <div className="poke-type">
          {types.map((item) => {
            return <p key={id + name + Math.random()}>{item.type.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
