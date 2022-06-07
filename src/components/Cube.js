import React from 'react';
import '../css/Cube.css';

function Cube() {
  return (
    <div className="cube">
      <div>
        <div className="top" />
        <span style={ { '--side': 0 } }>
          <p>
            T
          </p>
        </span>
        <span style={ { '--side': 1 } }>
          <p>
            R
          </p>
        </span>
        <span style={ { '--side': 2 } }>
          <p>
            I
          </p>
        </span>
        <span style={ { '--side': 3 } }>
          <p>
            V
          </p>
        </span>
        <span style={ { '--side': 4 } }>
          <p>
            I
          </p>
        </span>
        <span style={ { '--side': 5 } }>
          <p>
            A
          </p>
        </span>
        <div className="bottom" />
      </div>
    </div>
  );
}

export default Cube;
