import {reservas} from '../services/datosReserva.js'

export function ListaReserva() {

	return (

	<>
		<section className="row g-4">

			{
				reservas.map((reserva) => (
					<div className="col-md-4" key={reserva.id}>
						<section className="card p-4 shadow h-100">
							<h5 className="card-title fw-bold">Reserva #{reserva.id}</h5>
							<p className="text-muted">Fecha: {reserva.fecha}</p>
							<h3>Hora: {reserva.tiempo}</h3>
						</section>
					</div>
				))
			}

		</section>
	</>

	)

}
