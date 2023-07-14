
import { Icon } from '@iconify/react';
import Button from './Button';

function Toolbar(){
    
    type ToolProp = {
        Icon: React.ReactNode,
        title: string,
        name: string,
    }[];

    const tools: ToolProp = [
        {
            Icon: <div className='flex items-center'><span className='md:pr-5 pr-1 text-[10px] md:text-sm'>Paragraph</span> <Icon icon="ep:arrow-down" /></div>,
            title: "Paragraph",
            name: "paragraph"
        },
        {
            Icon: <Icon icon="ph:link-bold" />,
            title: "Attach a link",
            name: "link"
        },
        {
            Icon: <Icon icon="ph:image-fill" />,
            title: "Attach an image",
            name: "image"
        },
        {
            Icon: <Icon icon="iconoir:align-left" />,
            title: "Align text left",
            name: "align_left"
        },
        {
            Icon: <Icon icon="iconoir:align-right" />,
            title: "Align text right",
            name: "align_right"
        },
        {
            Icon: <Icon icon="iconoir:align-center" />,
            title: "Align text center",
            name: "align_center"
        },
        {
            Icon: <Icon icon="octicon:bold-16" />,
            title: "Bold text",
            name: "bold"
        },
        {
            Icon: <Icon icon="octicon:italic-16" />,
            title: "Italisize text",
            name: "italic"
        },
        {
            Icon: <Icon icon="heroicons:list-bullet-solid" />,
            title: "Bullet point",
            name: "bullet_point"
        },
        {
            Icon: <Icon icon="icon-park-outline:list" />,
            title: "List",
            name: "list_item"
        },
        {
            Icon: <Icon icon="pajamas:list-indent" />,
            title: "Indent",
            name: "indent"
        },
    ];
    
    return (
        <div className='grid grid-cols-12'>
            {tools.map((items: {
                Icon: React.ReactNode,
                title: string,
                name: string
            }) => (
                items.title === "Paragraph" ? 
                <Button.DropDown icon={items.Icon}/>
                :
                <Button.Format icon={items.Icon} title={items.title}/>
            ))}
        </div>
    )
}

export default Toolbar;