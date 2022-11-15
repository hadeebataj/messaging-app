import Circle from "better-react-spinkit/dist/Circle";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Circle color="blue" size={60} />
      </div>
    </center>
  );
}

export default Loading;
