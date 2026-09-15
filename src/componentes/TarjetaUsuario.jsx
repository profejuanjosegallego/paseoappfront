export function TarjetaUsuario({ usuario }) {
    return (
        <article className="card shadow h-100">
            <div className="card-body">
                <h5 className="card-title">{usuario.nombres}</h5>
                <p className="card-text">{usuario.correo}</p>
                <p className="card-text">
                    <strong>Rol:</strong> {usuario.rol}
                </p>
            </div>
        </article>
    );
}