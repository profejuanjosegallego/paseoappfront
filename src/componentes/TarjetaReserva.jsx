export function TarjetaReserva({ reserva }) {
    return (
        <article className="card shadow h-100">
            <div className="card-body">
                <h5 className="card-title">Reserva #{reserva.id}</h5>
                <p className="card-text">
                    <strong>Fecha:</strong> {reserva.fecha}
                </p>
                <p className="card-text">
                    <strong>Hora:</strong> {reserva.hora}
                </p>
            </div>
        </article>
    );
}