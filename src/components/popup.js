import { Button } from 'bootstrap';
import React from 'react';


function Popup(props){
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
            <Button className="close-btn">close</Button>
            { props.children }

            </div>
        </div>
    ) : "";
}

export default Popup