import { createContext, useState } from 'react';
import {contextProp, formProp} from '../data/contextProp';
import { insertMedia, insertLink, formatText, commandsWithValue } from '../utils/Functions';

const Context = createContext<contextProp | null>(null);

function FormatContextProvider({children}: {children: React.ReactNode}) {
    const [buttonPressed, setButtonPressed] = useState<string>("");
    const [modal, setModal] = useState<string | null | HTMLInputElement>(null);
    const [selected, setSelected] = useState<Selection>();
    const [inputForm, setInputForm] =
    useState<formProp>({
        url: "",
        picture: "",
        social: "Youtube",
        code: null,
    })
    const [count, setCount] = useState<number>(0);
    const div = document.querySelector('.main-content')!;

    const handleClick = (e: React.MouseEvent) => {
        const id = e.currentTarget.id;
        setButtonPressed(id);
        if (commandsWithValue.includes(id)) {
              if(
                id === "Picture" ||
                id === "CreateLink" ||
                id === "Video" ||
                id === "Social"
               ){
                openModal(id);
                setSelected(window.getSelection()!);
            }else{
                formatText("formatBlock", false, id);
            }
        }else{
            formatText(id, false, null);
        }
    }

    const openModal = (mediaType: string | null) => {
        setModal(mediaType);
    }

    const handleSubmit = () => {
        if(buttonPressed === "Picture" || buttonPressed === "Video"){
            const data = buttonPressed === "Picture" ? inputForm.picture : inputForm.url;
            insertMedia(data, buttonPressed, div)
        }else if(buttonPressed === "CreateLink"){
            insertLink(inputForm.url, selected!);
        }
        setModal(null);
    }

    const handleWordCount = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const words = event.currentTarget.innerText;
        const wordCount = words.split(" ").length;
        setCount(wordCount);
    }

    const handleInput = (event: React.ChangeEvent, element: string | null) => {
        const { target } = event
        setInputForm({
            ...inputForm,
            [(target as HTMLInputElement).name]: element == null ? (target as HTMLInputElement).value : element
        });
    }

    return (
    <Context.Provider value={{buttonPressed, count, inputForm, modal, handleClick, openModal, handleSubmit, handleWordCount, handleInput}}>
      {children}
    </Context.Provider>
  );
}

export { Context, FormatContextProvider };