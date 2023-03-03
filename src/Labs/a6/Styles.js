
const Styles = ( ) =>
{

    const colorblack = { color:'Black'};
    const padding10px ={ padding: '10px'};
    const s1 =
    {
        "background-color" : 'orange',
        "color" : "red",
        "padding" : "10px"

    };

    const bgRed =
        {
            "backgroundColor": "lightcoral",
            "color" : "black",
            "padding": "10px"
        };

    const bgblue =
        {
            "backgroundColor": "lightblue",
            "color" : "black",
            "padding": "10px"
        };

    return(

        <div>

            <div style={{"backgroundColor": "lightyellow",
                "color": "black", padding: "10px"}}>
                Yellow background
            </div>

            <div style={s1}>Style 2</div>

            <div style={bgRed}>
                Red background
            </div>

            <div style={bgblue}>
                Blue background
            </div>

        </div>

    );
}

export default Styles;
