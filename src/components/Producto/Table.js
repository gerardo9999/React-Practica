import React from 'react'
import TableRowProducto from './TableRow'


const TableProducto = ({ data, deleteProducto }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el)=>{
                        return (
                            <TableRowProducto deleteProducto={deleteProducto} key={el.id} el = {el}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableProducto
