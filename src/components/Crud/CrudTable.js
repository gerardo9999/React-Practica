import { Fragment } from "react"
import CrudTableRow from "./CrudTableRow"


const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    console.log(data)
    return (
        <div>
            <h3>Tabla datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td>Sin Datos</td>
                        </tr>
                    ) : (data.map((el) => {
                            return (
                                <CrudTableRow key={el.id} 
                                el={el} 
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                                />                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
