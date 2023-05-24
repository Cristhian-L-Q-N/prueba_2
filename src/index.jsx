import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from './components/nav_bar'
import { Search } from './components/search'
import { Description } from './components/description'
import { Summary } from './components/summary'
import jsonData1 from './components/description.json'
import jsonData2 from './components/general_description.json'
import { Inventory } from './components/inventory'
import { AiOutlineDropbox } from "react-icons/ai";
import { Platos } from './components/platos'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<div style={{ display: 'inline-flex' }}>
    <NavBar />
    <div style={{ display: 'inline' }}>
        <Search />
        <div style={{ display: 'inline-flex' }}>
            <div style={{ display: 'block' }}>
                <Description name='Reporte de Ventas' jsonuwu={jsonData1} />
                <Description name='Descripcion General' jsonuwu={jsonData2} />
                <Platos />
            </div>
            <div style={{ display: 'block' }}>
                <Summary name='Resumen de Inventario' icon={AiOutlineDropbox} d1={100} d2='Cantidad de platos a la mano' />
                <Summary name='Resumen de Proveedores' icon={AiOutlineDropbox} d1={11} d2='Numero de Proveedores' />
                <Inventory />

            </div>
        </div>
    </div>
</div>
)