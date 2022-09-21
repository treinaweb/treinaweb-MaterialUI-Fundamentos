const { Typography, Button, Icon } = MaterialUI;

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
      <Button color="error" sx={{ m: 1 }} variant="contained">
        Click
      </Button>
      <Button fullWidth color="error" variant="outlined">
        Click
      </Button>
      <Button variant="text">Click</Button>
    </div>
    <div>
      <Icon color="primary">home</Icon>
      <Icon color="secondary">search</Icon>
      <Icon color="action">delete</Icon>
      <Icon color="error">visibility</Icon>
    </div>
  </React.Fragment>
);
