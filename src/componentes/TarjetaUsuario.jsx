export function TarjetaUsuario({ usuario }) {
    return (
        <>
            <section className="card p-4 shadow mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold mb-0">{usuario.nombre}</h5>
                    <span className={`badge ${usuario.rol === 'admin' ? 'bg-danger' : 'bg-primary'}`}>
                        {usuario.rol.toUpperCase()}
                    </span>
                </div>
                <p className="text-muted mb-1">
                    <strong>Correo:</strong> {usuario.correo}
                </p>
                <p className="text-muted small mt-3 mb-0">
                    ID de usuario: #{usuario.id}
                </p>
            </section>
        </>
    );
}