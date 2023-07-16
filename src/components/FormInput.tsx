import { useState } from 'react';
import Switch from "react-switch";


const FormInput = {
    Select: ({options, name, title, label, value, handleSelect} : {options: string[], name: string, title: string, label: string, value: string | undefined, handleSelect: ((e: React.ChangeEvent)=>void) | undefined}) => {
        return (
            <>
                <label className='text-slate-500 my-2'>{label}</label>
                <div>
                    <select name={name} title={title} value={value} onChange={handleSelect} className='w-full p-2 bg-gray-100 border-gray-300 rounded-sm focus:outline-green-300'>
                        {options.map((items) => 
                            (
                                <option>{items}</option>
                            )
                        )}
                    </select>
                </div>
            </>
        )
    },
    Text: ({name, title, label,value, handleChange} : {name: string, title: string, label: string, value: any, handleChange: ((e: React.ChangeEvent)=>void) | undefined}) => {
        return (
            <>
                <label className='text-slate-500 mb-2 mt-5'>{label}</label>
                <div>
                    <input type='text' name={name} value={value} onChange={handleChange} title={title} className='w-full p-2 bg-gray-100 border-gray-300 rounded-sm hover:border-green-600 focus:outline-green-300'/>
                </div>
            </>
            
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
    },
    File: ({inputRef, handleFileChange, visible}:
        {
            inputRef: React.MutableRefObject<HTMLInputElement | null>, 
            handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void, 
            visible: string
        }) => {
        return (
            <>
                <p className='text-slate-500 mt-2'>Upload image</p>
                <label className='text-slate-500 my-2'>FILE UPLOAD</label>
                <input
                    className={`${visible} w-full p-2 bg-gray-100 border-gray-300 rounded-sm hover:border-green-600 focus:outline-green-300`}
                    title='file'
                    ref={inputRef}
                    type="file"
                    name='picture'
                    onChange={handleFileChange}
                />
            </>
        )
    }
}

export default FormInput;