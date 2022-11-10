import { ICard } from "../../App";

export function BackCard({ card }: { card: ICard }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#161616",
        color: "#ddd",
        width: "400px",
        height: "250px",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          background: "#333",
          width: "100%",
          height: "45px",
          marginTop: "8%",
        }}
      />
      <div
        style={{
          background: "#aaa",
          width: "80%",
          margin: "0 auto",
          marginTop: "48px",
          color: "#222",
          padding: "8px 24px",
          textAlign: "end",
          letterSpacing: 2,
          fontWeight: "bold",
        }}
      >
        <span>mm/yy</span>
        <span style={{ marginLeft: "32px" }}>
          {card.cvv ? card.cvv : "000"}
        </span>
      </div>
    </div>
  );
}
