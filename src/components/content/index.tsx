import style from "./style.module.scss";

import { Card } from "../card";

import { dataTypes } from "../../types/dataTypes";


export const Content = () => {


  const data = require("../../data/data.json");

  return (
    <>
      <div className={style.content}>
        <div className={style.container}>
          <h1 className={style.title}>Ты сегодня покормил кота?</h1>
          <div className={style.cards}>
            {data.map((item: dataTypes, index: number) => (
              <Card  key ={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
