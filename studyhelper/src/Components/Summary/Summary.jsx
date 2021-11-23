import React, { useEffect, useState } from 'react';
import Edit from '../../static/img/summary/pencil.png';
import { Button } from '../Button/Button';

import './Summary.css';

const Summary = (props) => {
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);

  useEffect(
    (x) => {
      if (props.view) {
        setTimeout((x) => {
          setRender(true);
          setData(props.data.message.split(' '));
        }, 500);
      }
    },

    [props.data.message, props.view]
  );

  const dictionaryCall = async (e) => {
    e.preventDefault();

    const dictionaryURL = e.target.innerText;

    const response = await fetch('/api/dictionary/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset-UTF-8',
      },
      body: JSON.stringify({
        word: dictionaryURL,
      }),
    });

    console.log(response.json());

    // response
    //   .json()
    //   .catch()
    //   .then((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <div className={`summary-container summary-${render ? 'show' : 'hide'}`}>
      <div className='summary-header'>
        <div className='summary-header-title'>
          <p>
            Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, reiciendis numquam.
          </p>
        </div>
        <div className='summary-header-edit'>
          <img src={Edit} alt='' />
        </div>
        <div className='summary-header-save'>
          <Button
            children='Save'
            buttonStyle='btn--primary--solid'
            buttonSize='btn--medium'
          />
        </div>
      </div>
      <div className='summary-content'>
        <div className='summary-content-wrapper'>
          <div>
            {data.map((x, index) => {
              return (
                <span key={index}>
                  <span
                    className='summary-content-item'
                    onClick={dictionaryCall}
                  >
                    {x}
                  </span>
                  <span>{` `}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
