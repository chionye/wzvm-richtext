import { useContext } from 'react';
import ToolbarOptions from '../data/ToolbarOptions';
import Button from './Button';
import { Context } from '../hooks/FormatContext';


function Toolbar(){
    const btnClick = useContext(Context);

    return (
        <div className='grid grid-cols-12'>
            {ToolbarOptions.map((items) => 
                items.title === "Paragraph" ? 
                <Button.Paragragh icon={items.icon} handleClick={btnClick?.handleClick}/>
                :
                <Button.Format icon={items.icon} title={items.title} id={items.id} handleClick={btnClick?.handleClick}/>
            )}
        </div>
    )
}

export default Toolbar;