import { ICard } from "../../App";
import chip from "../../assets/chip.svg";

export function FrontCard({ card }: { card: ICard }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#161616",
        color: "#bbb",
        width: "400px",
        height: "250px",
        borderRadius: "8px",
        padding: "24px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div
            style={{
              background: "#bbb",
              borderRadius: "9999px",
              width: "45px",
              height: "45px",
            }}
          />
          <div
            style={{
              background: "#bbb",
              borderRadius: "9999px",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <span>Nome Do Banco</span>
      </div>

      <div style={{ width: "100px" }}>
        <img width={"100%"} src={chip} />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#bbb",
            display: "flex",
            gap: "8px",
            fontSize: "24px",
            letterSpacing: 5,
          }}
        >
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
        </div>
      </div>
      <h2>{card.name ? card.name : "Nome do cartão"}</h2>
    </div>
  );
}
