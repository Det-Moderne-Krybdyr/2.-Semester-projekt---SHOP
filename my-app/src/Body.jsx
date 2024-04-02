import "./Body.css";

function Body() {
  return (
    <div className="Body">
      <Box title="Produkter"></Box>
      <Box title="Guides"></Box>
      <Box title="Om os"></Box>
    </div>
  );
}

function Box(props) {
  const { title } = props;
  return (
    <div className="Box">
      <a href="/">
        <img src="https://dummyimage.com/200x400" alt="Placeholder"></img>
      </a>
      <div className="TextOverlay">
        <p>{title}</p>
      </div>
    </div>
  );
}


export default Body;
