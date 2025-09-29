import languages from './languages'
import ButtonItem from './ButtonItem';
import { useState } from 'react'

export default function ButtonList() {

    //variabile di stato della lista
    const [activeButtonItem, setActiveButtonItem] = useState(null);

    return (
        <main className='container my-5'>
            <div className="d-flex gap-4 justify-content-center my-4">
                {languages.map((language) => (
                    <ButtonItem
                        titolo = {language.title}
                        contenuto = {language.description}
                        className = {activeButtonItem?.title === language.title ? 'btn-warning' : ''}
                        click = {()=> setActiveButtonItem(language)}
                        key = {language.id}
                    />
                ))}
            </div>
            {activeButtonItem?.title && (
                <div className="card">
                <h3>{activeButtonItem?.title}</h3>
                <p>{activeButtonItem?.description}</p>
                </div>
            )}
        </main>
    );

}
