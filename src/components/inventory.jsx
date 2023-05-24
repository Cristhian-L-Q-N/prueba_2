import "./inventory.css";
import inventory from "./inventory.json";
export function Inventory() {
    return (
        <section className="Inventory">
            <section className="TextsInventory">
                <h3 className="p1">Inventario de baja calidad</h3>
                <h4 className="p2">Ver Todos</h4>
            </section>
            {
                inventory.map(
                    (inventoryItem, index) => (
                        <Food key={index}
                            name={inventoryItem.name}
                            cantidad={inventoryItem.cantidad}
                            nivel={inventoryItem.nivel}
                            img={inventoryItem.img}
                        />
                    )
                )
            }
        </section>
    )
}

function Food(props) {
    return (
        <div className="Foods">
            <img src={props.img} className="Image" />
            <section className="Details">
                <h4>{props.name}</h4>
                <h5>Cantidad restante : {props.cantidad}</h5>
            </section>
            <h6 className="Nivel">{props.nivel}</h6>
        </div>
    )
}