export function TarjetaReserva({reserva}){

return (
    <>

<section className="card p-4 shadow h-100">
    <img src={reserva.foto} alt={reserva.nombre} className="img-fluid" />
    <h5 className="card-title fw-bold">{reserva.nombre}</h5>
    <p className="text-muted">{reserva.descripcion}</p>
    <h3>Aforo: {reserva.aforo}</h3>

</section>

    </>
)

}