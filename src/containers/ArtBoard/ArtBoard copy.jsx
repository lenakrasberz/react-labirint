import React from "react";

const ArtBoard = ({time, className, children, ...restProps}) => {
   
    console.log('className1', className);
    console.log('time1', time)
    return (
        <div className="art-board__wrapper" {...restProps} >
            <h3>Title</h3>
            <div className="image">
                <img src="" alt="" />
            </div>
            <div className="content">
            {children}

            </div>
            Art_board
        </div>
    )
}


export default ArtBoard;
