import { AiOutlineSearch } from "react-icons/ai";
import "./search.css";

export function Search() {

    return (
        <section className="ContainerSearch">
            <AiOutlineSearch className="Icon " />
            <input
                className="InputField"
                placeholder='Buscar producto, proveedores o ordenes'
                onChange={(e) => console.log(e.target.value)}
            />
        </section>
    )
}