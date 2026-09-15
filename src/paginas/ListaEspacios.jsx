import { espacios } from '../Services/datosEspacios'
import { TarjetaEspacio } from '../componentes/TarjetaEspacio'

export function ListaEspacios () {
    return (
        <section className='row g-4 my-5'>
            {
                espacios.map((espacio) => (
                    <div className='col-md-4' key={espacio.id}>
                        <TarjetaEspacio espacio={espacio} />
                    </div>
                ))
            }
        </section>
    )
}