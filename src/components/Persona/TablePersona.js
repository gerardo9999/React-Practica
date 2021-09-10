import React from 'react'
import TablePersonaRow from './TablePersonaRow'


const TablePersona = ({data,setDataToEdit,deletePersona}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>APELLIDOS</th>
                        <th>TELEFONO</th>
                        <th>DIRECCION</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="5">Sin datos</td>
                        </tr> 
                    ) : (
                        data.map((elemento)=> {
                            return (
                                <TablePersonaRow 
                                    key={elemento.id}
                                    elemento={elemento}
                                    setDataToEdit={setDataToEdit}
                                    deletePersona={deletePersona}
                                />
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TablePersona
