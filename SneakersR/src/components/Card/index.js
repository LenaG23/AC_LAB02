import styles from "./Card.module.scss";
import React from "react";
import { Link } from "react-router-dom";

function Card({
  id,
  onFavorite,
  title,
  imageUrl,
  price,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          className="cu-p"
          src={isFavorite ? "/img/heardlike.svg" : "/img/unlikee.svg"}
          alt="Favorite"
        />
      </div>
      <Link to={`/item/${id}`}>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
      </Link>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} lei.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/verde.svg" : "/img/btnn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
