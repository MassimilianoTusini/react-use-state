import languages from './languages'
import ButtonItem from './ButtonItem';
import { useState } from 'react'

export default function ButtonList() {

    //variabile di stato della lista
    const [activeButtonItem, setActiveButtonItem] = useState(null);

    return (
        <div className='button-list'>

            {languages.map((language) => (
                <ButtonItem
                    titolo={language.title}
                    contenuto={language.description}
                    isOpen={activeButtonItem === language.id}
                    onToggle={()=> setActiveButtonItem(language.id)}
                    key={language.id}
                />
            ))}


        </div>
    )



}