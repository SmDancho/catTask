import { FC } from "react";

import style from "./style.module.scss";
import { dataTypes } from "../../types/dataTypes";
import { useState } from "react";
export const Card: FC<dataTypes> = ({
  name,
  type,
  portion,
  gift,
  weight,
  disabled,
}) => {
  const [active, setActive] = useState(false);

  const checkForDisabled = () => {
    return disabled ? style.disabled : "";
  };

  const checkForActive = () => {
    return active && !disabled ? style.active : "";
  };
  return (
    <>
      <div className={style.wrapper}>
        <div
          className={`${style.card} ${checkForDisabled()} ${checkForActive()}`}
          onClick={() => {
            setActive((prev) => !prev);
          }}
        >
          <div className={style.cardText}>
            <div className={style.upperTitle}>Сказочное заморское яство</div>
            <div className={style.title}>{name}</div>
            <div className={style.undertitle}>{type}</div>
          </div>
          <div className={style.Cardportion}>
            <div className="portion">{portion} порций </div>
            <div className="gift">{gift}</div>
          </div>
          <div className={style.imgblock}>
            <img src="/assets/cat.svg" alt="cat" />
          </div>

          <div className={style.weightBlock}>
            <div className={style.weight}>{weight}</div>
            <div className={style.measure}>кг</div>
          </div>
        </div>

        <div className={style.callToAction}>
          Чего сидишь? Порадуй котэ,
          <a
            onClick={(e) => {
                e.preventDefault();
              setActive((prev) => !prev);
            }}
            href="2"
          >
            купи
          </a>
          .
        </div>
      </div>
    </>
  );
};
