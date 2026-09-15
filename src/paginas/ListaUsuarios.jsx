import { datosUsuarios } from "../services/datosUsuarios"
import { TarjetaUsuario } from "../componentes/TarjetaUsuario"

export function ListaUsuarios(){
    return(
        <> 
            <section className="row g-4">
            {
                datosUsuarios.map((usuario)=>(
                    <div className = "col-md-4" key={usuario.id}> 
                    <TarjetaUsuario usuario = {usuario}/>
                    </div>
                    
                ))
            }

            </section>
        </>
    )
}