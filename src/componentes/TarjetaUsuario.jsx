export function TarjetaUsuario({ usuario }) {
    return (
        <section className="card p-4 shadow">
            <h5 className="card-title fw-bold">
                {usuario.nombre}
            </h5>

            <p className="text-muted">
                ID: {usuario.id}
            </p>

            <p>
                Correo: {usuario.correo}
            </p>

            <p>
                Contraseña: {usuario.contraseña}
            </p>

            <h6>
                Rol: {usuario.rol}
            </h6>
        </section>
    );
}