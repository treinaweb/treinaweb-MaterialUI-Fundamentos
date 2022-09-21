const { Typography, Button } = MaterialUI;

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyButton(props) {
  return (
    <button {...props} className={props.variant}>
      {props.children}
    </button>
  );
}

root.render(
  <React.Fragment>
    <MyButton disabled style={{ margin: "8px" }} variant="Mycontained">
      click aqui !
    </MyButton>
    <MyButton style={{ margin: "8px" }} variant="Myoutlined">
      click aqui !
    </MyButton>
    <MyButton style={{ margin: "8px" }} variant="MytextButton">
      click aqui !
    </MyButton>
    <div>
      <Button disabled={true} sx={{ m: 1 }} variant="contained">
        Click
      </Button>
      <Button fullWidth color="error" variant="outlined">
        Click
      </Button>
      <Button variant="text">Click</Button>
    </div>
  </React.Fragment>
);
