export function TarjetaReserva({ reserva }) {
    return (
        <>
            <section className="card p-4 shadow mb-3">
                <h5 className="card-title fw-bold">Reserva #{reserva.id}</h5>
                <p className="text-muted mb-1">
                    <strong>Fecha:</strong> {reserva.fecha}
                </p>
                <h3 className="fs-5">
                    <strong>Horario:</strong> {reserva.tiempo}
                </h3>
            </section>
        </>
    );
}