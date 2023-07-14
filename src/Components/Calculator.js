import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import calculate from '../logic/calculate';

function Button({ text, className, clickHandler }) {
  return (
    <button type="button" className={className} onClick={clickHandler}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCurrentOperand((prevOperand) => calculate(prevOperand, buttonName));
  };

  const displayValue = currentOperand.next || currentOperand.total || '0';

  return (
    <div className="calculator">
      <div className="output">
        <div className="display">{displayValue}</div>
      </div>

      <div className="button-parent">
        {['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+'].map((buttonName) => (
          <Button key={buttonName} text={buttonName} className={`button ${buttonName}`} onClick={() => handleClick(buttonName)} />
        ))}
        <Button text="0" className="button button-zero" onClick={() => handleClick('0')} />
        <Button text="." className="button" onClick={() => handleClick('.')} />
        <Button text="=" className="button button-orange" onClick={() => handleClick('=')} />
      </div>
    </div>
  );
}
