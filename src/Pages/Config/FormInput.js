import { input } from "@material-tailwind/react";
import "./FormInput.scss"
import { useState } from "react";
export const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props; 
    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className="formInput">
            <label>{label}</label>
            <div>
                <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/> 
                {(props.id == 4) && <span className="font-bold text-xl w-1/3 "> (vnđ)</span>}
            </div>
            
            <span className="Err">{errorMessage}</span>
        </div>
    )
}
export default FormInput;