import React from "react";

const Tarjeta = (props) => {
  const {
    data: { sprite: images, id, name, types },
  } = props;

  const display_id = (data_id) => {
    let card_id = data_id.toString();
    card_id = card_id >= 10 && card_id < 100 ? "0" + card_id : card_id;

    card_id = card_id < 10 ? "00" + card_id : card_id;
    return card_id;
  };

  return (
    <div className="card">
      <div className="poke-name">
        {name.toUpperCase()}
        <span>{` #${display_id(id)}`}</span>
      </div>
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
