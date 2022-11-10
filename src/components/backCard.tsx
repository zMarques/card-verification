import "../styles/global.css";

export function BackCard() {
  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#161616",
        color: "#ddd",
        width: "400px",
        height: "250px",
        borderRadius: "8px",
        marginLeft: "30%",
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
          marginTop: "32px",
          color: "#222",
          padding: "8px 24px",
          textAlign: "end",
          letterSpacing: 2,
          fontWeight: "bold",
        }}
      >
        <span>000</span>
      </div>
    </div>
  );
}
