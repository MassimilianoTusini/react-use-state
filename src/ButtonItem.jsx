export default function ButtonItem(props) {

    //destrutturazione delle props
    const {className, click, titolo} = props;

    return(
        <>
            <button type="button" className={`btn btn-primary btn-lg ${className}`} onClick={click}>{titolo}</button>
        </>
    );
}