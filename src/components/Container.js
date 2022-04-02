import React from "react";
import data from "./data.json";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
class Container extends React.Component {
    constructor(props) {
        super(props);
        //variables dinamicas
        this.state = {
            contador: 0,
            historial: [],
            opcionAnterior: "",
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.contador !== prevState.contador) {
            //los ...(spread operator) reemplazan al push en react para los estados
            this.setState({ historial: [...this.state.historial, this.state.opcionAnterior] })
        }
    }
    siguiente = (e) => {
        const id = e.target.id;
        if (this.state.contador >= 7) {
            window.alert("Acá se termina!")

        }
        else {
            if (id === "A" && this.state.contador === 0) {
                this.setState({ contador: this.state.contador + 1, opcionAnterior: id })
                console.log("A");
            }
            if (id === "B" && this.state.contador === 0) {
                this.setState({ contador: this.state.contador + 2, opcionAnterior: id })
                console.log("B");
            }
            if (this.state.opcionAnterior === "A" && id === "A") {
                this.setState({ contador: this.state.contador + 2, opcionAnterior: id })
            }
            if (this.state.opcionAnterior === "A" && id === "B") {
                this.setState({ contador: this.state.contador + 3, opcionAnterior: id })
            }
            if (this.state.opcionAnterior === "B" && id === "B") {
                this.setState({ contador: this.state.contador + 2, opcionAnterior: id })
            }
            if (this.state.opcionAnterior === "B" && id === "A") {
                this.setState({ contador: this.state.contador + 1, opcionAnterior: id })
            }
        }

    }
    //metodo para renderizar, actualizar contenido, dejo a lo ultimo por buenas practicas
    render() {
        return (
            <div className="layout">
                <h1 className="historia">
                    {data[this.state.contador].historia}
                </h1>
                <Opciones seleccionA={data[this.state.contador].opciones.a} seleccionB={data[this.state.contador].opciones.b}
                    siguiente={this.siguiente} />
                <Recordatorio historial={this.state.historial} selecAnterior={this.state.opcionAnterior} />
            </div>)

    }

}
export default Container;