type formProp = {
    url: string,
    picture: string,
    social: string,
    code: HTMLElement | null,
};

type contextProp = {
    buttonPressed: string,
    inputForm: formProp,
    count: number,
    modal: string | null | HTMLInputElement,
    handleClick: (e: React.MouseEvent) => void,
    handleSubmit: () => void,
    handleInput: (e: React.ChangeEvent, element: string | null) => void,
    handleCount: (e: React.KeyboardEvent<HTMLDivElement>) => void,
    openModal: (mediaType: string | null) => void,
}

export type {contextProp, formProp};