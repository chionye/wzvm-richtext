import { useState } from 'react';
import { Icon } from '@iconify/react';
import MediaDropdowOptions from '../data/MediaDropdowOptions';
import HeaderOptions from '../data/HeaderOptions';


const Button = {
    AttachMedia: ({handleClick}: {handleClick: ((e: React.MouseEvent) => void) | undefined}) => {
        const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

        return (
            <>
                <button type="button" title="Add (Image, Social, Video)" className='bg-green-100 p-2 rounded-full' onClick={() => setToggleDropdown(!toggleDropdown)}>
                   {toggleDropdown ?
                    (<Icon icon="uil:times" color='#3a383d' width={20}/>)
                    :
                    (<Icon icon="tabler:plus" color='#3a383d' width={20}/>)
                   }
                </button>
                {toggleDropdown && 
                    <div className='dropdown border absolute grid grid-rows pr-5 w-fit mt-1 bg-white'>
                        <p className='p-2'><strong className='text-slate-400 text-sm'>EMBEDS</strong></p>
                        {MediaDropdowOptions.map((items) => 
                            <>
                                <div className='p-1 flex justify-start cursor-pointer hover:bg-slate-50' onClick={handleClick} id={items.title}>
                                    <div className='mt-[0.4rem] mr-2 ml-1'>
                                        {items.icon}
                                    </div>
                                    <div className='grid grid-rows-1'>
                                        <span><strong className='text-md'>{items.title}</strong></span>
                                        <span className='text-xs text-slate-500'>{items.text}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                }
            </>
        )
    },
    Format: ({icon, title, id, handleClick} : {icon: React.ReactNode, title: string, id: string | undefined, handleClick: ((e: React.MouseEvent) => void) | undefined}) => {
        return (
            <>
                <button type="button" title={title} id={id} className={`border p-2 flex justify-center hover:text-blue-500`} onClick={handleClick}>
                    {icon}
                </button>
            </>
        )
    },
    Paragragh: ({icon, handleClick} : {icon: React.ReactNode, handleClick: ((e: React.MouseEvent) => void) | undefined}) => {
        const [toggleHeader, setToggleHeader] = useState<boolean>(false);

        return (
            <>
                <button type="button" title="Text size" className='border p-1 flex justify-center hover:text-blue-500 col-span-2' onClick={() => setToggleHeader(!toggleHeader)}>
                    {icon}
                </button>
                {toggleHeader && 
                    <div className='dropdown absolute grid grid-rows w-fit pr-5 mt-8 bg-white'>
                    {HeaderOptions.map((items) => 
                        <button className={`border p-1 hover:text-blue-500 font-bold ${items.classname}`} id={items.title} type='button' title={items.title} onClick={handleClick}>{items.title}</button>
                    )}
                    </div>
                }
            </>  
        )
    },
    Submit: ({text, handleClick}: {text: string, handleClick: (() => void) | undefined}) => {
        return (
            <button type="button" title="post" className='border text-white text-xs border-green-700 w-fit px-6 py-2 mt-3 justify-center items-center rounded-md flex bg-green-700 hover:bg-green-600' onClick={handleClick}>
                {text}
            </button>
        )
    },
    Outline:({text, title, handleClick}: {text: string, title:string, handleClick: (mediaType: string | null) => void}) => {
        return (
            <button type="button" title={title} className='border text-red text-xs border-red-200 w-fit px-6 py-2 mt-3 justify-center items-center rounded-md flex bg-white hover:border-red-400' onClick={() => handleClick(null)}>
                {text}
            </button>
        )
    },
}

export default Button;