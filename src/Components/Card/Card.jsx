import React from "react";
import classes from "./card.module.css";

function Card(props) {
  return (
    <>
      <div className={classes.allcard}>
        <h3>{props.name}</h3>

        <img
          className={classes.pic}
          src="https://avatars.mds.yandex.net/get-entity_search/1539949/527024491/S122x122Fit_2x"
          alt=""
        />
      </div>
    </>
  );
}
export default Card;
