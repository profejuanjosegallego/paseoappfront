export function TarjetaReserva({ reserva }) {
    return (
        <section className="card p-4 shadow">
            <h5 className="card-title fw-bold">
                Reserva #{reserva.id}
            </h5>

            <p>
                Fecha: {reserva.fecha}
            </p>

            <p>
                Hora: {reserva.hora}
            </p>
        </section>
    );
}