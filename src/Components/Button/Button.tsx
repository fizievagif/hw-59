import React, {memo} from 'react';
import './Button.css';

interface Props {
  onClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({onClick}) => {
  return (
    <>
      <button
        className="btn-joke"
        onClick={onClick}>Get new joke</button>
    </>
  );
};

export default memo(Button);