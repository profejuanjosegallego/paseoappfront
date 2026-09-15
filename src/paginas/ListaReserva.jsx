import { reservas } from '../Services/datosReserva' 
import { TarjetaReserva } from '../componentes/TarjetaReserva' 

export function ListaReserva () {
    return (
        <section className='row g-4 my-5'>
            {
                reservas.map((reserva) => (
                    <div className='col-md-4' key={reserva.id}>
                        <TarjetaReserva reserva={reserva} />
                    </div>
                ))
            }
        </section>
    )
}