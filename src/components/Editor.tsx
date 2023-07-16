import { useState, useContext } from 'react';
import Toolbar from "./Toolbar";
import Button from "./Button";
import Modal from "./Modal";
import { Context } from '../hooks/FormatContext';

function Editor(){
    const editor =  useContext(Context)!;
    const [toggleToolbar, setToggleToolbar] = useState<boolean>(false);
    const [attachButton, setAttachButton] = useState<boolean>(false);

    const handleSubmit = () => {
        alert("submitted");
    }
    
    return (
        <>
            {editor.modal ? <Modal media={editor.modal} handleClick={editor.openModal}/> : null}
            <div className='container mx-auto'>
                <div className="md:w-2/3 w-full px-3 mx-auto mt-16"> 
                    <div className="border h-12"></div>
                    <div className="border md:p-3 p-1">
                        <div className="py-2">
                            <div contentEditable="true" className="outline-0 font-bold text-3xl text-gray-700 title" data-placeholder="Add post title"></div>
                        </div>
                        {toggleToolbar && <Toolbar />}
                        <div className="py-2 min-h-[450px]">
                            <div contentEditable="true" className="outline-0 py-2 main-content" suppressContentEditableWarning={true} onFocus={() => setToggleToolbar(true)} onKeyUp={() => setAttachButton(true)} data-placeholder={!toggleToolbar ? "Add content" : ""} onKeyDown={(e) => editor.handleCount(e)}></div>
                            {attachButton && <Button.Attachment handleClick={editor.handleClick}/>}
                        </div>
                    </div>
                    <div className="border p-1 px-2 text-right">
                        {editor.count}/1000 words
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