import {useState} from 'react';
import { Icon } from '@iconify/react';

const Button = {
    Add: ({handleClick}: {handleClick: (mediaType: string) => void}) => {
        type DropDownProp = {
            Icon: React.ReactNode,
            title: string,
            text: string,
            action?: React.ReactNode
        }[];

        const options: DropDownProp = [
            {
                Icon: <Icon icon="bi:image-fill" />,
                title: "Picture",
                text: "jpeg, png"
            },
            {
                Icon: <Icon icon="typcn:video" />,
                title: "Video",
                text: "JW player, Youtube, Vimeo"
            },
            {
                Icon: <Icon icon="tabler:social" />,
                title: "Social",
                text: "Instagram, Twitter, TikTok, Snapchat, Facebook"
            },
        ];

        const [toggle, setToggle] = useState<boolean>(false);
        return (
            <>
                <button type="button" title="Add (Image, Social, Video)" className='bg-green-100 p-2 rounded-full' onClick={() => setToggle(!toggle)}>
                   {toggle ?
                    (<Icon icon="uil:times" color='#3a383d' width={20}/>)
                    :
                    (<Icon icon="tabler:plus" color='#3a383d' width={20}/>)
                   }
                </button>
                {toggle && 
                    (
                    <div className='dropdown border absolute grid grid-rows w-96 mt-1 bg-white'>
                        <p className='p-2'><strong className='text-slate-400 text-sm'>EMBEDS</strong></p>
                        {options.map((items: {
                            Icon: React.ReactNode,
                            title: string,
                            text: string,
                        }) => (
                            <>
                                <div className='p-1 flex justify-start cursor-pointer hover:bg-slate-50' onClick={() => handleClick(items.title)}>
                                    <div className='mt-[0.4rem] mr-2 ml-1'>
                                        {items.Icon}
                                    </div>
                                    <div className='grid grid-rows-1'>
                                        <span><strong className='text-md'>{items.title}</strong></span>
                                        <span className='text-xs text-slate-500'>{items.text}</span>
                                    </div>
                                </div>
                            </>
                            )
                        )}
                    </div>
                    )
                }
            </>
        )
    },
    Format: ({icon, title} : {icon: React.ReactNode, title: string}) => {
        return (
            <button type="button" title={title} className='border p-2 flex justify-center hover:text-blue-500'>
                {icon}
            </button>
        )
    },
    DropDown: ({icon} : {icon: React.ReactNode}) => {
        const [toggle, setToggle] = useState<boolean>(false);
        type header = {
            title: string,
            classname: string
        }[]
        const dropDownOptions: header = [
            {
                title: "Header 1",
                classname: "text-2xl"
            },
            {
                title: "Header 2",
                classname: "text-xl"
            },
            {
                title: "Header 3",
                classname: "text-lg"
            },
            {
                title: "Header 4",
                classname: "text-md"
            },
            {
                title: "Header 5",
                classname: "text-sm"
            },
            {
                title: "Header 6",
                classname: "text-xs"
            },
        ];
        return (
            <>
                <button type="button" title="Text size" className='border p-1 flex justify-center hover:text-blue-500 col-span-2' onClick={() => setToggle(!toggle)}>
                    {icon}
                </button>
                {toggle && 
                    (<div className='dropdown absolute grid grid-rows w-32 mt-8 bg-white'>
                    {dropDownOptions.map((items: {
                        title: string,
                        classname: string
                    }) => (
                        <button className={`border p-1 hover:text-blue-500 font-bold ${items.classname}`} type='button' title='header 1'>{items.title}</button>)
                    )}
                    </div>
                    )
                }
            </>  
        )
    },
    Submit: ({text, handleClick}: {text: string, handleClick: () => void}) => {
        return (
            <button type="button" title="post" className='border text-white text-xs border-green-700 w-fit px-6 py-2 mt-3 justify-center items-center rounded-md flex bg-green-700 hover:bg-green-600' onClick={() => handleClick}>
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