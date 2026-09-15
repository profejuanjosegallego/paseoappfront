export function TarjetaEspacio({espacio}){
    return(
        <>
            <section className= "card p-4 shadow h-100">
                <img src= {espacio.foto} className= "img-fluid"/>
                <h5 className= "card-title fw-bold"> {espacio.nombre}</h5>
                <p className= "text-muted">{espacio.descripcion}</p>
                <h3>{espacio.aforo}</h3>
            </section>
        </>
    )
}