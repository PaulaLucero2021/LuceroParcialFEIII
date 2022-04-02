import React, { Component } from 'react'

export default class Opciones extends Component {
  render() {
    return (
        <div className="opciones">
        <div className="opcion">
            <button id="A" className="botones" onClick={this.props.siguiente}>A</button>
            <h2>{this.props.seleccionA}</h2>
        </div>
        <div className="opcion">
            <button id="B" className="botones" onClick={this.props.siguiente}>B</button>
            <h2>{this.props.seleccionB}</h2>
        </div>
    </div>
    )
  }
}

