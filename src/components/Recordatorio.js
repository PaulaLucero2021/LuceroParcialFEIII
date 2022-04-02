import React, { Component } from 'react'

export default class Recordatorio extends Component {
  render() {
    return (
        <div className="recordatorio">
        <h3>
            Selección Anterior: {this.props.selecAnterior}
        </h3>
        <h4>
            Historial de opciones elegidas:

        </h4>
        <ul>
            {this.props.historial.map((elemento, index) => <li key={elemento + index}>{elemento}</li>)}
        </ul>
    </div>
    )
  }
}
