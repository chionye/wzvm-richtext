import { useContext } from 'react';
import ToolsOptions from '../data/ToolsOptions';
import Button from './Button';
import { Context } from '../hooks/FormatContext';


function Toolbar(){
    const btnClick = useContext(Context);

    return (
        <div className='grid grid-cols-12'>
            {ToolsOptions.map((items) => 
                items.title === "Paragraph" ? 
                <Button.Paragragh icon={items.icon} handleClick={btnClick?.handleClick}/>
                :
                <Button.Format icon={items.icon} title={items.title} id={items.id} handleClick={btnClick?.handleClick}/>
            )}
        </div>
    )
}

export default Toolbar;