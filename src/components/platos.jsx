import "./platos.css";
import platos from './platos.json';

export function Platos() {
    return (
        <section className="SectionPlatos">
            <section className="TextsPlatos">
                <h4>Platos mas vendidos</h4>
                <h5>Ver Todos</h5>
            </section>
            {
                platos.map(
                    (plato, index) => (
                        <>

                            <hr />
                            <PlatoSection
                                plato={plato.platos}
                                key={index}
                                crestante={plato.crestante}
                                cvendida={plato.cvendida}
                                precio={plato.precio}
                            />

                        </>


                    )
                )
            }

        </section>
    )
}

function PlatoSection(props) {
    return (
        <section className="PlatosSection">
            <h4>{props.plato}</h4>
            <h4>{props.cvendida}</h4>
            <h4>{props.crestante}</h4>
            <h4>{props.precio}</h4>
        </section>
    )
}