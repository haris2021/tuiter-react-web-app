import EachProfile from "./EachProfile.js"

/*
import ProfileData from "./ProfileData.json"
*/

import {useSelector} from "react-redux";

const ProfileIndex = ( ) =>
{
    const ProfileData  = useSelector(state => state.profile);
    console.log(ProfileData);


    return(
                <div>

                    {
                        ProfileData.map( (pdata) =>

                            <EachProfile
                                key ={pdata._id}
                                profile ={pdata}
                            />
                        )

                    }

                </div>
    );
}

export default ProfileIndex;
