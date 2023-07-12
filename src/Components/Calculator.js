import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

function Button({ text, style }) {
  return (
    <button type="button" style={style}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    cursor: PropTypes.string,
    gridColumn: PropTypes.string,
  }).isRequired,
};

export default function Calculator() {
  const calculatorStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
  };

  const displayStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'right',
    borderRadius: '3px',
  };

  const buttonStyle = {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  const buttonParent = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  };

  return (
    <div style={calculatorStyle}>
      <input placeholder="0" style={displayStyle} />

      <div style={buttonParent}>
        <Button text="AC" style={buttonStyle} />
        <Button text="+/-" style={buttonStyle} />
        <Button text="%" style={buttonStyle} />
        <Button text="/" style={{ ...buttonStyle, backgroundColor: 'orange' }} />
        <Button text="7" style={buttonStyle} />
        <Button text="8" style={buttonStyle} />
        <Button text="9" style={buttonStyle} />
        <Button text="X" style={{ ...buttonStyle, backgroundColor: 'orange' }} />
        <Button text="4" style={buttonStyle} />
        <Button text="5" style={buttonStyle} />
        <Button text="6" style={buttonStyle} />
        <Button text="-" style={{ ...buttonStyle, backgroundColor: 'orange' }} />
        <Button text="1" style={buttonStyle} />
        <Button text="2" style={buttonStyle} />
        <Button text="3" style={buttonStyle} />
        <Button text="+" style={{ ...buttonStyle, backgroundColor: 'orange' }} />
        <Button text="0" style={{ ...buttonStyle, gridColumn: '1 / span 2' }} />
        <Button text="." style={buttonStyle} />
        <Button text="=" style={{ ...buttonStyle, backgroundColor: 'orange' }} />
      </div>
    </div>
  );
}
