const { Typography } = MaterialUI;

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
    <MyButton style={{ margin: "8px" }} variant="Mycontained">
      click aqui !
    </MyButton>
    <MyButton style={{ margin: "8px" }} variant="Myoutlined">
      click aqui !
    </MyButton>
    <MyButton style={{ margin: "8px" }} variant="MytextButton">
      click aqui !
    </MyButton>
  </React.Fragment>
);
