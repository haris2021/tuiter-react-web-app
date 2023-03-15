import {Link} from "react-router-dom";

function Nav ()
{
    console.log("nav");

    return(
        <div>
                <Link to="/a7">Assignment 7</Link>|
                <Link to="tuiter">Tuiter</Link>|
                <Link to="/">Labs</Link>|
                <Link to="/">Assignment6</Link>|

        </div>
    )
}

export default Nav;


