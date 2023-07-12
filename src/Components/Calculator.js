import React from 'react';

function Calculator() {
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
        <button type="button" style={buttonStyle}>
          AC
        </button>
        <button type="button" style={buttonStyle}>
          +/-
        </button>
        <button type="button" style={buttonStyle}>
          %
        </button>
        <button type="button" style={{ ...buttonStyle, backgroundColor: 'orange' }}>
          /
        </button>
        <button type="button" style={buttonStyle}>
          7
        </button>
        <button type="button" style={buttonStyle}>
          8
        </button>
        <button type="button" style={buttonStyle}>
          9
        </button>
        <button type="button" style={{ ...buttonStyle, backgroundColor: 'orange' }}>
          X
        </button>
        <button type="button" style={buttonStyle}>
          4
        </button>
        <button type="button" style={buttonStyle}>
          5
        </button>
        <button type="button" style={buttonStyle}>
          6
        </button>
        <button type="button" style={{ ...buttonStyle, backgroundColor: 'orange' }}>
          -
        </button>
        <button type="button" style={buttonStyle}>
          1
        </button>
        <button type="button" style={buttonStyle}>
          2
        </button>
        <button type="button" style={buttonStyle}>
          3
        </button>
        <button type="button" style={{ ...buttonStyle, backgroundColor: 'orange' }}>
          +
        </button>
        <button type="button" style={{ ...buttonStyle, gridColumn: '1 / span 2' }}>
          0
        </button>
        <button type="button" style={buttonStyle}>
          .
        </button>
        <button type="button" style={{ ...buttonStyle, backgroundColor: 'orange' }}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
