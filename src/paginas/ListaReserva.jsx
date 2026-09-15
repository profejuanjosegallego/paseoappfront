import {reservas} from "../services/datosReserva.js"
import {TarjetaReserva} from "../componentes/TarjetaReserva.jsx"

export function ListaReservas() {
    return (
<>

<section className="row g-4">

        {
            reservas.map((reserva) => (
                <div className="col-md-4" key={reserva.id}>
                    <TarjetaReserva reserva={reserva} />
                </div>
            ))
        }

    </section>

</>

    )

}