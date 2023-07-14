import { Icon } from '@iconify/react';
import Button from './Button';
import Embed from './Embed';

function Modal({media, handleClick}: {media: string | null, handleClick: (mediaType: string | null) => void}){
    const handleSubmit = () => {
        console.log("submitting");
    }

    return (
            <div className='h-full w-full bg-gray-300 absolute top-0 z-50'>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white md:w-[700px] w-11/12 p-6 rounded-md'>
                    <div className='flex justify-between'>
                        <p><strong className='text-md'>Embed</strong></p>
                        <p><Icon icon="uil:times" fontSize={24} className='cursor-pointer' onClick={() => handleClick(null)}/></p>
                    </div>
                    {
                        media === "Picture" ?
                        <Embed.Image /> :
                        media === "Video" ?
                        <Embed.Video />  :
                        <Embed.Social />
                    }
                    <div className='flex justify-start gap-2 mt-3'>
                        <Button.Submit text='Embed' handleClick={() => handleSubmit}/>
                        <Button.Outline text='Cancel' title='Cancel' handleClick={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;