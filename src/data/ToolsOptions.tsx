import { Icon } from '@iconify/react';

type ToolProp = {
    icon: React.ReactNode,
    title: string,
    name: string,
    id?: string,
}[];

const ToolsOptions: ToolProp = [
    {
        icon: <div className='flex items-center'>
                <span className='md:pr-5 pr-1 text-[9px] md:text-sm'>Paragraph</span> 
                <Icon icon="ep:arrow-down" />
              </div>,
        title: "Paragraph",
        name: "paragraph",
        id: "formatBlock"
    },
    {
        icon: <Icon icon="ph:link-bold" />,
        title: "Attach a link",
        name: "link",
        id: "CreateLink"
    },
    {
        icon: <Icon icon="ph:image-fill" />,
        title: "Attach an image",
        name: "image",
        id: "Picture"
    },
    {
        icon: <Icon icon="iconoir:align-left" />,
        title: "Align text left",
        name: "align_left",
        id: "justifyLeft"
    },
    {
        icon: <Icon icon="iconoir:align-right" />,
        title: "Align text right",
        name: "align_right",
        id: "justifyRight"
    },
    {
        icon: <Icon icon="iconoir:align-center" />,
        title: "Align text center",
        name: "align_center",
        id:"justifyCenter"
    },
    {
        icon: <Icon icon="octicon:bold-16" />,
        title: "Bold text",
        name: "bold",
        id:"bold"
    },
    {
        icon: <Icon icon="octicon:italic-16" />,
        title: "Italisize text",
        name: "italic",
        id:"italic"
    },
    {
        icon: <Icon icon="heroicons:list-bullet-solid" />,
        title: "Bullet point",
        name: "bullet_point",
        id:"insertUnorderedList"
    },
    {
        icon: <Icon icon="icon-park-outline:list" />,
        title: "List",
        name: "list_item",
        id:"insertOrderedList"
    },
    {
        icon: <Icon icon="pajamas:list-indent" />,
        title: "Indent",
        name: "indent",
        id:"indent"
    },
];

export default ToolsOptions;