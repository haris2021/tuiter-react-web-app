/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollow from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function explorescreen ( )
{

    $('#wd-explore').append(
        `
               <div class="row mt-2">

                           <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                                   ${NavigationSidebar()}
                           </div>
                           
                           <div class="col-8 col-lg-6 col-xl-6">
                                ${ExploreComponent()}
                           </div>
                           
                           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
                               ${WhoToFollow()}                        
                             </div>
               </div>
        `
        );
}

$(explorescreen);
