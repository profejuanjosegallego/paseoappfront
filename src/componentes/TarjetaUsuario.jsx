export function TarjetaUsuario({usuario}){

return (
    <>

<section className="card p-4 shadow h-100">
    <img src={usuario.foto} alt={usuario.nombre} className="img-fluid" />
    <h5 className="card-title fw-bold">{usuario.nombre}</h5>
    <p className="text-muted">{usuario.descripcion}</p>
    <h3>Aforo: {usuario.aforo}</h3>

</section>

    </>
)

}