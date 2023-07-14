import {useRef} from 'react';
import Button from './Button';
import Input from './Input';

const Embed = {
    Image: () => {
        const inputRef = useRef<HTMLInputElement | null>(null);
        const handleClick = () => {
            inputRef.current?.click();
        };

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const fileObj = event.target.files && event.target.files[0];
            if (!fileObj) {
                return;
            }

            event.target.value = "";

            console.log(event.target.files);

            console.log(fileObj);
            console.log(fileObj.name);
        };

        return (
            <>
                <p className='text-slate-500 mt-2'>Upload image</p>
                <p className='text-slate-500 my-2'>FILE UPLOAD</p>
                <input
                    className='hidden'
                    title='file'
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                />
                <div className='border-dashed border-2 border-gray-300 h-32 flex justify-center items-center bg-slate-100 rounded-md'>
                    <Button.Outline text='Import Image from Device' title='Click to browse' handleClick={handleClick}/>
                </div>
            </>
        )
    },
    Video: () => {
        const options: string[] = ["Youtube", "Facebook", "Twitter", "LinkedIn", "Threads"];
        return (
            <>
                <p className='text-slate-500 my-2'>VIDEO PROVIDER</p>
                <div>
                    <Input.Select name='social' title='social' options={options}/>
                </div>
                <p className='text-slate-500 mb-2 mt-5'>URL</p>
                <div>
                    <Input.Text name='social' title='social'/>
                </div>
            </>
        )
    },
    Social: () => {
        const options: string[] = ["Youtube", "Facebook", "Twitter", "LinkedIn", "Threads"];
        return (
            <>
                <p className='text-slate-500 my-2'>SOCIAL MEDIA PLATFORM</p>
                <div>
                    <Input.Select name='media' title='media' options={options}/>
                </div>
                <p className='text-slate-500 mb-2 mt-5'>URL</p>
                <div>
                    <Input.Text name='url' title='url'/>
                </div>
                <p className='text-slate-500 mb-2 mt-5'>CODE</p>
                <div>
                    <Input.Text name='url' title='url'/>
                </div>
                <div className='flex justify-between'>
                    <p className='text-slate-500 mt-3'>Disable caption</p>
                    <div className='text-slate-500 mt-3'>
                        <Input.Switch/>
                    </div> 
                </div>
            </>
        )
    },
    Link: () => {
        return (
            <>
                <p className='text-slate-500 mb-2 mt-5'>URL</p>
                <div>
                    <Input.Text name='url' title='url'/>
                </div>
            </>
        )
    }
}

export default Embed;