const { Typography } = MaterialUI;

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyParagrafo() {
  return <Typography variant="h6">Olá mundo novamente</Typography>;
}

root.render(<MyParagrafo />);
