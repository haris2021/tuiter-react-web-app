
import "./index.css"

const NavigationBar = ( active ) =>
{

      return(
          `
                            <div class="list-group">
            
                                <li class="list-group-item wd-listcolor ">
                                    <i class="fa-brands fa-twitter  wd-icon"></i>
                                </li>
            
                                <a href="../HomeScreen/index.html" class=" list-group-item list-group-item-action wd-listcolor ${active === 'home' ? 'active' : ''}">
                                    <i class="fa-solid fa-house-chimney wd-icon"></i>
                                    <span class="d-none d-xl-inline" >Home</span>
                                </a>
                                
                                
                                <a  href="../explore/index.html" class=" list-group-item list-group-item-action list-group-item wd-listcolor ${active === 'explore' ? 'active' : ''}">
                                        <i class="fa-sharp fa-solid fa-hashtag  wd-icon"></i>
                                        <span class="d-none d-xl-inline">Explore</span>
                                </a>
                                    
                              
            
                                <a href="#" class=" list-group-item list-group-item-action wd-listcolor ${active === 'notifications' ? 'active' : ''}">
                                    <i class="fa-solid fa-bell  wd-icon"></i>
                                    <span class="d-none d-xl-inline">Notifications</span>
                                </a>
            
                                <a class="list-group-item list-group-item-action wd-listcolor ${active === 'messages' ? 'active' : ''}">
                                    <i class="fa-solid fa-envelope  wd-icon"></i>
                                    <span class="d-none d-xl-inline" href="#">Messages </span>
                                </a>
            
                                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action wd-listcolor ${active === 'bookmarks' ? 'active' : ''}">
                                    <i class="fa-solid fa-bookmark  wd-icon"></i>
                                    <span class="d-none d-xl-inline" >Bookmarks</span>
                                </a>
            
                                <a href="#" class=" list-group-item list-group-item-action wd-listcolor ${active === 'lists' ? 'active' : ''}">
                                    <i class="fa-solid fa-bookmark  wd-icon"></i>
                                    <span class="d-none d-xl-inline">Lists</span>
                                </a>
            
                                <a href="../profile.html" class=" list-group-item list-group-item-action wd-listcolor ${active === 'profile' ? 'active' : ''}">
                                    <i class="fa-solid fa-user  wd-icon"></i>
                                    <span class="d-none d-xl-inline" >Profile</span>
                                </a>
            
                                <a class=" list-group-item list-group-item-action wd-listcolor ${active === 'more' ? 'active' : ''}">
                                    <i class="fa-solid fa-circle-info  wd-icon"></i>
                                    <span class="d-none d-xl-inline" href="#">More</span>
                                </a>
            
                                <button type="button" class="wd-btn1 btn btn-primary btn-sm">Tweet</button>
           </div>
           
           
            `
      );
}

export default NavigationBar;