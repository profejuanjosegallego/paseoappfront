export function TarjetaUsuario({usuario}){
    return(
        <>
            <section className= "card p-4 shadow h-100">
                <h5 className= "card-title fw-bold"> {usuario.nombre}</h5>
                <p className= "">{usuario.email}</p>
                <p className= "text-muted">{usuario.password}</p>
                <h3>{usuario.rol}</h3>
            </section>
        </>
    )
}