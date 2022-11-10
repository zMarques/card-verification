import { BackCard } from "./components/backCard";
import { FrontCard } from "./components/frontCard";
import "./styles/global.css";

export function App() {
  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: 1,
        }}
      >
        <FrontCard />
        <BackCard />
      </div>

      <div style={{ flex: 1 }}>
        <h1>Veja se seu cartão </h1>
        <h1>vazou na internet</h1>
        <form action="">
          <div>
            <p>Nome no cartão</p>
            <input type="text" />
          </div>

          <div>
            <p>Numero no cartão</p>
            <input type="text" />
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <p>Data de expiração</p>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <p>CVV</p>
              <input type="text" />
            </div>
          </div>

          <div>
            <p>Senha no cartão</p>
            <input type="text" />
          </div>

          <button>VERIFICAR</button>
        </form>
      </div>
    </div>
  );
}
