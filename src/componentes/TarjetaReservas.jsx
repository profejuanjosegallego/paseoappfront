export function TarjetaReserva({reserva}){
    return(
        <>
            <section className= "card p-4 shadow h-100">
                <h5 className= "card-title fw-bold"> {reserva.id}</h5>
                <p className= "">{reserva.date}</p>
                <p className= "text-muted">{reserva.time}</p>
            </section>
        </>
    )
}