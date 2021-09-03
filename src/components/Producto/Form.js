import React,{useState} from 'react'

const initForm = {
    id : null,
    name : "",
    precio : 0,
    descripcion : ""
}


const FormProducto = ({createProducto,updateProducto,isEdit, setIsEdit}) => {
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name] : [e.target.value]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name  || form.precio < 0 || !form.descripcion) {
            alert("Complete los campos");
            return ;
        }

        if (form.id === null) {
            createProducto(form);
        } else {
            updateProducto(form);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="name" value={form.name}/>
                <input type="number" onChange={handleChange} name="precio" value={form.precio}/>
                <input type="text" onChange={handleChange} name="descripcion" value={form.descripcion}/>
                <input type="submit"  value="Guardar"/>
                <input type="reset"  value="Limpiar"/>
            </form>
        </div>
    )
}

export default FormProducto
