// rsfp
import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRandomColor(){
    const COLOR_LIST = ['black', 'red', 'yellow', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    //c1 :
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    const [color, setColor] = useState(initColor);

    //c2 : initColor sẽ chỉ chạy 1 lần duy nhất => nên dùng
    // const [color, setColor] = useState(() => {
    //     return localStorage.getItem('box_color') || 'deeppink';
    // });

    function handleBoxClick(){
        //get random color --> color
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className={"color-box"}
             style={{ backgroundColor : color }}
             onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;