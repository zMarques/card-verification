import { useState } from "react";
import { Cards } from "./components/cards";
import { Form } from "./components/form";

import "./styles/global.css";
import style from "./styles/main.module.css";

export interface ICard {
  name: string;
  number: number;
  cvv: number;
  month: number;
  year: number;
  pass: number;
}

export function App() {
  const [card, setCard] = useState<ICard>({} as ICard);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <Cards card={card} />
        <Form card={card} setCard={setCard} />
      </div>
    </div>
  );
}
