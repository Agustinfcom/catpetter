import gatito from "./img/gatito.png";
import gatitoAcariciado from "./img/gatitoAcariciado.png";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    acariciar: false,
  };
  componentDidMount() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }
  acariciarGatito() {
    this.setState({
      acariciar: true,
    });
  }
  desacariciarGatito() {
    this.setState({
      acariciar: false,
    });
  }
  render() {
    return (
      <div
        className="App"
        onTouchStart={() => this.acariciarGatito()}
        onTouchEnd={() => this.desacariciarGatito()}
        onMouseDown={() => this.acariciarGatito()}
        onMouseUp={() => this.desacariciarGatito()}
      >
        <img
          src={this.state.acariciar ? gatitoAcariciado : gatito}
          alt=""
          srcset=""
        />
      </div>
    );
  }
}
