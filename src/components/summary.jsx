import "./summary.css";

import { AiOutlineDropbox } from "react-icons/ai";
export function Summary(props) {
    return (
        <section className="ContainerSummary">
            <h3 className="NameSummary">{props.name}</h3>
            {props.icon && <props.icon className="IconS" />}
            <p className="D1">{props.d1}</p>
            <p className="D2">{props.d2}</p>
        </section>
    )
}