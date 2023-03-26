import {RxCross2} from "react-icons/rx";
import "./Editprofile.css"

import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {editprofile} from "../ProfileComponent/ProfileReducer.js";
import {useNavigate} from "react-router";


const Editprofile = () =>
{

    const profilefulldata  = useSelector(state => state.profile);

    const dispatch = useDispatch();


    const[name, setname] = useState(profilefulldata[0].lastName);
    const[bio, setbio] = useState(profilefulldata[0].bio);
    const[website, setwebiste] = useState(profilefulldata[0].website);
    const[dob,setdob] = useState(profilefulldata[0].dateOfBirth);



    let navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path)
    }


    const editprofiledata = (id) =>
    {
        const userprofile =
            {
                _id:id,
                lastName:name,
                bio:bio,
                website:website,
                dateOfBirth:dob
            }

            dispatch(editprofile(userprofile));
            routeChange('../profile');

    }

    const gobacktoprofile =() =>
    {
        routeChange('../profile');
    }
    return(

        <div>
                    <RxCross2 onClick={()=>{gobacktoprofile()}}/>
                    <span className="wd-editprofile">Edit Profile</span>
                    <button type="button" onClick={()=> {editprofiledata(profilefulldata[0]._id)} } className="btn btn-secondary wd-savebtn ">Save</button>

                    <img src={profilefulldata[0].bannerPicture} alt="cover-picture" className="wd-editcoverpicture"/>
                    <img src={profilefulldata[0].profilePicture} alt="profile-picture" className="wd-editprofileicture"/>

                    <div className="wd-textareadiv">

                        <label className="wd-label">Name</label>
                        <textarea value={name} onChange={(event)=>{setname(event.target.value)}} className="wd-textbox"></textarea>

                    </div>

                    <div className="wd-textareadiv1">

                        <label className="wd-label">Bio</label>
                        <textarea value={bio} onChange={(event)=>{setbio(event.target.value)}} className="wd-textbox">bio</textarea>

                    </div>

                    <div className="wd-textareadiv1">

                        <label className="wd-label">Website</label>
                        <textarea value={website} onChange={(event)=>{setwebiste(event.target.value)}} className="wd-textbox"></textarea>

                    </div>

                    <div className="wd-textareadiv1">

                        <label className="wd-label">Date Of Birth</label>
                        <textarea value={dob} onChange={(event)=>{setdob(event.target.value)}} className="wd-textbox"></textarea>

                    </div>

        </div>
    );
}

export default Editprofile;

