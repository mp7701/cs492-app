import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loading-icons'

const Refresh = (nextPage) => {
    //const [mousePos, setMousePos] = useState({});
    let mousePos = {};
    //const [mousePosDown, setMousePosDown] = useState({});
    let mousePosDown = {};
    const [height, setHeight] = useState({ height: 0 +"px", opacity: 0 });
    let mouseDown = false;
    const MAX_PULL_LENGTH = 150;

    useEffect(() => {

    const handleMouseMove = (event) => {
        if(!mouseDown){
            return;
        }
        mousePos = { x: event.clientX, y: event.clientY };
        let delta_Y =0;
        //console.log(mousePosDown);
        if(mousePosDown.y < event.clientY && 230 < event.clientY &&  event.clientY < 900){
            delta_Y = Math.min(Math.abs(mousePosDown.y-event.clientY),MAX_PULL_LENGTH);
            //console.log(delta_Y);
        }
        if(delta_Y === MAX_PULL_LENGTH ){
            window.location.href= nextPage.props;
        }
        let opactity_val = delta_Y/MAX_PULL_LENGTH;
        setHeight({ height: delta_Y + "px", opacity: opactity_val });
    };

    const handleMouseDown = (event) => {
        mouseDown = true;
        mousePosDown = { x: event.clientX, y: event.clientY };
        //setMousePosDown({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', ()=> {
        mouseDown = false;
        setHeight({ height: 0 +"px", opacity: 0 });
    });
    
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
    }, []);

    return(
        <div style={height} class="center" >
            <TailSpin stroke="blue" speed={.75} />
        </div>
    )
};

export default Refresh;