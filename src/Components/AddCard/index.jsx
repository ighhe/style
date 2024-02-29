import React from "react";
import classes from "./AddCard.module.css";

const AddCard = () => {
  return (
    <>
      <form className={classes.form}>
        <input placeholder="Название магазина" className={classes.input} />
        <input placeholder="Код с карты" className={classes.input} />
        <select className={classes.select}>
          <option>code128</option>
          <option>code2</option>
          <option>code3</option>
        </select>
        <button className={classes.button}>Добавить</button>
      </form>
    </>
  );
};

export default AddCard;
