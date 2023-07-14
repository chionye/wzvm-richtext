import { useState } from 'react';
import Toolbar from "./Toolbar";
import Button from "./Button";
import Modal from "./Modal";

function Editor(){
    const [media, setMedia] = useState<string | null>(null);
    const [toggleToolbar, setToggleToolbar] = useState<boolean>(true);
    const [toggleAddButton, setToggleAddButton] = useState<boolean>(true);

    const handleClick = (mediaType: string | null) => {
        setMedia(mediaType);
    }

    const handleSubmit = () => {
        console.log("submitting");
    }
    
    return (
        <>
            {media ? <Modal media={media} handleClick={handleClick}/> : null}
            <div className='container mx-auto'>
                <div className="md:w-2/3 w-full px-3 mx-auto mt-16"> 
                    <div className="border h-12"></div>
                    <div className="border md:p-3 p-1">
                        <div className="py-2">
                            <div contentEditable="true" className="outline-0 font-bold text-3xl text-gray-700 title" data-placeholder="Add post title"></div>
                        </div>
                        {!toggleToolbar && <Toolbar />}
                        <div className="py-2 h-96">
                            <div contentEditable="true" className="outline-0 py-2 main-content" onFocus={() => setToggleToolbar(false)} onKeyUp={() => setToggleAddButton(false)} data-placeholder={toggleToolbar ? "Add content" : ""}></div>
                            {!toggleAddButton && <Button.Add handleClick={handleClick}/>}
                        </div>
                    </div>
                    <div className="border p-1 px-2 text-right">
                        0/1000 words
                    </div>
                    <div className="flex justify-end">
                        <Button.Submit text="Post" handleClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editor;