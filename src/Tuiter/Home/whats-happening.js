import React, {useState} from "react";
import {FaChartBar, FaImage, FaSmile} from "react-icons/fa";
import "./whats-happening.css"
import {HiOutlineDocumentText} from "react-icons/hi";
import {GrLocation} from "react-icons/gr";
import {useDispatch} from "react-redux";

import {createTuit} from "../Tuits/tuits-reducer.js";

import {AddNewTuitThunk} from "../../Service/tuits-thunks.js"

const WhatsHappening = ( ) =>
{
    const dispatch = useDispatch();


    const[whatshappening, whatshappeninghandler] = useState('');


    const tuithandler = ( )=>
    {
        console.log("tuit handler" + " " +whatshappening);

        const newTuit = {
            tuit: whatshappening
        }

        /*dispatch(createTuit(newTuit));*/
        console.log(newTuit);
        dispatch(AddNewTuitThunk(newTuit));
    }

    return(
        <div className="row">

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">

                <img className="wd-whatshappeingpic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"/>

            </div>

            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">

                <div className="form-floating">
                    <textarea value={whatshappening} className="form-control wd-form" placeholder="whats happening" id="floatingTextarea"
                    onChange={(event)=> whatshappeninghandler(event.target.value)}></textarea>
                    <label htmlFor="floatingTextarea">What's happening?</label>
                </div>

                <div className="wd-iconsdiv">

                    <FaImage size={25} className="wd-icons"/>
                    <HiOutlineDocumentText size={25}  className="wd-icons"/>
                    <FaChartBar  size={25}  className="wd-icons"/>
                    <FaSmile  size={25}  className="wd-icons"/>
                    <GrLocation size={25}  className="wd-icons"/>

                </div>

                <button className="btn btn-primary wd-tuitbtn" type="submit" onClick={tuithandler}>Tweet</button>


            </div>


        </div>

    );
}


export default WhatsHappening;

