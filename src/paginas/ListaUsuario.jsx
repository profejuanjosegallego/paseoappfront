import {usuarios} from '../services/datosUsuario.js'

export function ListaUsuario() {

	return (

	<>
		<section className="row g-4">

			{
				usuarios.map((usuario) => (
					<div className="col-md-4" key={usuario.id}>
						<section className="card p-4 shadow h-100">
							<h5 className="card-title fw-bold">{usuario.nombres}</h5>
							<p className="text-muted">{usuario.correo}</p>
							<h3>Rol: {usuario.rol}</h3>
						</section>
					</div>
				))
			}

		</section>
	</>

	)

}
