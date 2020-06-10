import React from 'react';
import './Button.css';

const Button = ({ buttonLabel, buttonText }) => {
  const [numberOfClicks, setNumberOfClicks] = React.useState(0);
  return (
    <p>
      {numberOfClicks === 0 ? buttonLabel : numberOfClicks}
      <button 
       className="button"
       onClick={() => setNumberOfClicks(numberOfClicks + 1)}>
        {buttonText}
      </button>
    </p>
  )
}

export default Button;