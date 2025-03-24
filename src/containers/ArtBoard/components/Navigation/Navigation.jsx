import React from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import './Navigation.scss'

const Navigation = ({size, onReset, onMapSize, inputRef, onInputChange}) => {
return (
    <div className="art-board__navigation">
        <div className="art-board-item item--size">
            <Input inputRef={inputRef} type="number" label="Size" onChange={onInputChange} value={size} />
            <Button onClick={onMapSize}>Map size</Button>
        </div>
        <div className="art-board-item">
            <Button onClick={onReset}>Refresh Nap</Button>
        </div>
    </div>
)
}

export default Navigation;