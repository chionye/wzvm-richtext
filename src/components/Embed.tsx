import {useRef, useState, useContext} from 'react';
import Button from './Button';
import FormInput from './FormInput';
import SocialOptions from '../data/SocialOptions';
import { Context } from '../hooks/FormatContext';

const Embed = {
    Image: () => {
        const imageContext = useContext(Context);
        const inputRef = useRef<HTMLInputElement | null>(null);
        const [image, setImage] = useState<string>();
        const handleClick = () => {
            inputRef.current?.click();
        };

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const fileObj = event.target.files && event.target.files[0];
            if (!fileObj) {
                return;
            }
            const file = URL.createObjectURL(fileObj)
            setImage(file)
            imageContext?.handleInput(event, file);
        };

        return (
            <>
                <FormInput.File
                    visible='hidden'
                    inputRef={inputRef}
                    handleFileChange={handleFileChange}
                />
                <div className='border-dashed border-2 border-gray-300 h-32 flex justify-center items-center bg-slate-100 rounded-md'>
                    {!image ?
                    <Button.Outline text='Import Image from Device' title='Click to browse' handleClick={handleClick}/> 
                    :
                    <img src={image} alt="Uploaded Image" className='w-32'/>
                    }
                </div>
            </>
        )
    },
    Video: () => {
        const video = useContext(Context);
        return (
            <>
                <FormInput.Select name='social' title='social' options={SocialOptions} label='VIDEO PROVIDER' value={video?.inputForm} handleSelect={video?.handleInput}/>
                <FormInput.Text name='url' title='social' label='URL' value={video?.inputForm.url} handleChange={video?.handleInput}/>
            </>
        )
    },
    Social: () => {
        const social = useContext(Context);
        return (
            <>
                <FormInput.Select name='social' title='media' options={SocialOptions} label='SOCIAL MEDIA PLATFORM' value={social?.inputForm.social} handleSelect={social?.handleInput}/>
                <FormInput.Text name='url' title='url' label='URL' handleChange={social?.handleInput} value={social?.inputForm.url}/>
                <FormInput.Text name='code' title='code' label='CODE' handleChange={social?.handleInput} value={social?.inputForm.code}/>
                <div className='flex justify-between'>
                    <p className='text-slate-500 mt-3'>Disable caption</p>
                    <div className='text-slate-500 mt-3'>
                        <FormInput.Switch/>
                    </div> 
                </div>
            </>
        )
    },
    Link: () => {
        const link = useContext(Context);
        return (
            <>
                <FormInput.Text name='url' title='url' label='URL' value={link?.inputForm.url} handleChange={link?.handleInput}/>
            </>
        )
    }
}

export default Embed;