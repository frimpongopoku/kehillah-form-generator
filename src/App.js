import "./App.css";
// import Button from "./widgets/button/Button";
import CheckBox from "./widgets/checkbox/CheckBox";
import RadioGroup from "./widgets/radio-group/RadioGroup";
// import TextBox from "./widgets/textbox/TextBox";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <center>
        <CheckBox />
        <RadioGroup checked />
        {/* <TextBox
          _generics={{ rows: "20" }}
          textarea
          onChange={(e) => console.log("I am the shit", e.target.value)}
        />
        <Button
          onClick={(e) =>
            console.log("i am the the button being clicked my Geeee")
          }
          elevation={3}
       
        >
          I am the children bro
        </Button> */}
      </center>
    </div>
  );
}

export default App;
