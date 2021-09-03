import React from 'react'

const TableRowProducto = ({ el, deleteProducto }) => {
    return (
        <tr>
            <td>{el.name}</td>
            <td>{el.precio}</td>
            <td>{el.descripcion}</td>
            <td>
                <button >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default TableRowProducto
