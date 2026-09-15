import {usuarios} from "../services/datosUsuario.js"
import {TarjetaUsuario} from "../componentes/TarjetaUsuario.jsx"

export function ListaUsuarios() {
    return (
<>

<section className="row g-4">

        {
            usuarios.map((usuario) => (
                <div className="col-md-4" key={usuario.id}>
                    <TarjetaUsuario usuario={usuario} />
                </div>
            ))
        }

    </section>

</>

    )

}