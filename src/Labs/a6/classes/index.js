import './index.css';

function Classes() {
    let color="blue";
    let dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`   ${dangerous ? 'wd-bg-red' : 'wd-bg-yellow'} 
                                wd-fg-black wd-padding-10px`}>
                Dynamic Classes
            </div>
        </div>
    )
};
export default Classes;

