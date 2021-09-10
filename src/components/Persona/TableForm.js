import React, { useState, useEffect } from 'react'

const formInit = {
    id : null,
    nombre : "",
    apellidos : "",
    telefono : "",
    direccion : ""
}


function TableForm({dataToEdit,setDataToEdit,createPersona,updatePersona}) {
    const [form, setForm] = useState(formInit)

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(formInit)
        }
    }, [dataToEdit])

    const handleOnChange = (e) => {
        setForm({
            ...form, 
            [e.target.name ] : [e.target.value]
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!form.nombre || !form.apellidos || !form.telefono || !form.direccion) {
            alert("Complete los campos");
            return ;
        }

       if (form.id === null) {
           createPersona(form)
       } else {
           updatePersona(form)
       }
       handleReset()
    }
    const handleReset = () => {
        setForm(formInit)
        setDataToEdit = null
    }

    return (
        <div>
            <h3>{!dataToEdit ? "Agregar Persona" : "Editar Persona"}</h3>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="nombre"    placeholder="" value={form.nombre}    onChange={handleOnChange}  /><br></br>
                <input type="text" name="apellidos" placeholder="" value={form.apellidos} onChange={handleOnChange}  /><br></br>
                <input type="text" name="telefono"  placeholder="" value={form.telefono}  onChange={handleOnChange}  /><br></br>
                <input type="text" name="direccion" placeholder="" value={form.direccion} onChange={handleOnChange}  /><br></br>
                <button type="submit">Guardar</button>
                <button type="reset"onClick={handleReset}>Limpiar</button>
            </form>
        </div>
    )
}

export default TableForm
