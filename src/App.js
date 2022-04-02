import React from "react";
import Container from "./components/Container";

//Componente de clase
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
  }

  render(){
    return(
      <div className="App">
      <Container />

      </div>
    );

  }
}

export default App;
