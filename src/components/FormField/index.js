import React from 'react';

function FormField({label, type, name, value, onChange}){

    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';

return (

    <div>
        <label>
            {label}
        <input 
            as = {tag}
            type= {type} 
            name={name}
            value = {value} 
            onChange={onChange}
        />
        </label>
    </div>

);
}

export default FormField;