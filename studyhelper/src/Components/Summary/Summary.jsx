import React, { useEffect, useState } from 'react';
import Edit from '../../static/img/summary/pencil.png';
import { Button } from '../Button/Button';

import './Summary.css';

const Summary = (props) => {
  const [render, setRender] = useState(false);
  const [summary, setSummary] = useState([]);
  const [dictActive, setDictActive] = useState(false);
  const [dictContent, setDictContent] = useState(undefined);

  useEffect(
    (x) => {
      if (props.view) {
        setTimeout((x) => {
          setRender(true);
          setSummary(props.data.message.split(' '));
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
    }).then((response) => {
      return response.json().then((response) => ({ response }));
    });

    setDictActive(true);
    setDictContent(response);
    console.log(response);
  };

  const disableOverlay = () => {
    setDictActive(false);
  };

  return (
    <div
      className={`summary-container summary-${render ? 'show' : 'hide'}
      `}
    >
      <div
        className={`summary-container-overlay-${dictActive ? 'show' : 'hide'}`}
        onClick={disableOverlay}
      ></div>
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
            {summary.map((x, index) => {
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

      {dictActive && dictContent ? (
        <div className='portal-dict-popup'>
          <div className='portal-dict-content'>
            <div className='portal-dict-title'>
              {`${dictContent.response[0].word} | ${dictContent.response[0].phonetic}`}
            </div>
            <div className='portal-dict-body'>
              <p>{`Part of Speech: ${dictContent.response[0].meanings[0].partOfSpeech}`}</p>
              {dictContent.response[0].meanings[0].definitions.map(
                (item, index) => {
                  return (
                    <>
                      <p>{`Definition (${index}): ${item.definition}`}</p>
                      {`Synonyms: ${item.synonyms.map((s) => {
                        return ' ' + s;
                      })}`}
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Summary;
