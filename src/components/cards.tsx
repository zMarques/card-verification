import { BackCard } from "./cards/backCard";
import { FrontCard } from "./cards/frontCard";

import { ICard } from "../App";
import style from "../styles/cards.module.css";

export function Cards({ card }: { card: ICard }) {
  return (
    <div className={style.cardContainer}>
      <FrontCard card={card} />
      <BackCard card={card} />
    </div>
  );
}
