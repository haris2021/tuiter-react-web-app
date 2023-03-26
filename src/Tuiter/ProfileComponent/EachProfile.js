import "./Profile.css"

import {AiOutlineArrowLeft} from "react-icons/ai";
import {GrLocation} from "react-icons/gr";
import {BsBalloonHeart} from "react-icons/bs";
import {SlCalender} from "react-icons/sl";

import {useState} from "react";
import {useNavigate} from "react-router";


const EachProfile = ({profile}) =>
{
    const [profiledata, setprofiledata]  = useState(false);

    const editbutton = (id ) =>
    {
        setprofiledata(true);
    }

    let navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path);
    }

    const gotohome = () =>
    {
        navigate("../home")
    }

    return(

      <div>
        {profiledata ? ( routeChange("../edit-profile") ) : (

            <div>

                    <AiOutlineArrowLeft onClick={()=>{gotohome()}}/>
                    <span className="wd-topprofilename">{profile.firstName} {profile.lastName}</span>
                <span className="wd-nooftweets">1244 Tweets</span>

                   <img src={profile.bannerPicture} alt="cover-picture" className="wd-coverpicture"/>
                    <img src={profile.profilePicture} alt="profile-picture" className="wd-profileicture"/>

                    <button type="button" className="btn btn-secondary wd-editbtn" onClick={()=>{editbutton(profile._id)}}>Edit Profile</button>

                    <span className="wd-profileusername">{profile.firstName} {profile.lastName}</span>
                    <span className="wd-profilehandler">{profile.handle}</span>
                    <span className="wd-bio">{profile.bio}</span>

                    <div className="row wd-threecoldiv">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">

                            <GrLocation/> {profile.location}

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">

                            <BsBalloonHeart/> {profile.dateOfBirth}

                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">

                            <SlCalender/> {profile.dateJoined}

                        </div>

                    </div>

                    <div className="wd-followersfollowingdiv">

                        <span>{profile.followingCount}</span><span className="wd-following"> Following</span>


                        <span>{profile.followersCount}</span><span className="wd-followers"> Followers</span>

                    </div>

        </div>)}

        </div>


    );
}

export default EachProfile;
