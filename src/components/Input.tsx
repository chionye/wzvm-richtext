import {useState} from 'react';
import Switch from "react-switch";

const Input = {
    Select: ({options, name, title} : {options: string[], name: string, title: string}) => {
        return (
            <select name={name} title={title} className='w-full p-2 bg-gray-100 border-gray-300 rounded-sm focus:outline-green-300'>
                {options.map((items) => 
                    (
                        <option>{items}</option>
                    )
                )}
            </select>
        )
    },
    Text: ({name, title} : {name: string, title: string}) => {
        return (
            <input type='text' name={name} title={title} className='w-full p-2 bg-gray-100 border-gray-300 rounded-sm hover:border-green-600 focus:outline-green-300'/>
        )
    },
    Switch: () => {
        const [checked, setChecked] = useState<boolean>(false);
        const handleChange = (nextChecked: boolean) => {
            setChecked(nextChecked);
        };
        return (
            <div className="example">
                <label>
                    <Switch
                    onChange={handleChange}
                    checked={checked}
                    className="react-switch"
                    />
                </label>
            </div>
        )
    }
}

export default Input;