export default function ButtonItem(props) {

    //destrutturazione delle props
    const {isOpen, onToggle, titolo, contenuto} = props;

    return(
        <div className='btn-content'>
            <button type="button" className={isOpen ? "btn btn-warning btn-lg" : "btn btn-primary btn-lg"} onClick={onToggle}>{titolo}</button>
            {isOpen && <div><h3>{titolo}</h3>{contenuto}</div>}
        </div>
    );
}