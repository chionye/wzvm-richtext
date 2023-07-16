import { Icon } from '@iconify/react';

type AttachmentProp = {
    icon: React.ReactNode,
    title: string,
    text: string,
    action?: React.ReactNode
}[];

const AttachmentOptions: AttachmentProp = [
    {
        icon: <Icon icon="bi:image-fill" />,
        title: "Picture",
        text: "jpeg, png"
    },
    {
        icon: <Icon icon="typcn:video" />,
        title: "Video",
        text: "JW player, Youtube, Vimeo"
    },
    {
        icon: <Icon icon="tabler:social" />,
        title: "Social",
        text: "Instagram, Twitter, TikTok, Snapchat, Facebook"
    },
];

export default AttachmentOptions;