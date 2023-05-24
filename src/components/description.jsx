import "./description.css";
import { AiOutlineDropbox } from "react-icons/ai";
import description from './description.json';


export function Description(props) {

    return (
        <section className="ContainerDescription">
            <h2>{props.name}</h2>
            <div className="UFA" style={{ display: 'inline-flex' }}>
                {
                    props.jsonuwu.map(
                        (descriptionItem, index) => {
                            const IconComponent = eval(descriptionItem.icon)
                            return (
                                <Block
                                    icon={IconComponent}
                                    key={index}
                                    d1={descriptionItem.d1}
                                    d2={descriptionItem.d2}

                                />
                            )
                        }
                    )
                }
            </div>
        </section>

    )
}

function Block(props) {
    return (
        <section className="Block">
            {props.icon && <props.icon className="Icon" />}

            <div className="Texts">
                <h3>{props.d1}</h3>
                <h3>{props.d2}</h3>
            </div>
        </section>
    )
}