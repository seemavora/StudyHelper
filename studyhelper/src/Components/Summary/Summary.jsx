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
        setSummary(props.data.message.split(' '));
        setTimeout((x) => {
          setRender(true);
        }, 1500);
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
      >
        <div className='summary-header'>
          <div className='summary-header-title'>
            <p>Summary: How to grow your brain</p>
          </div>
          <div className='summary-header-edit'>
            <img onClick={props.edit} src={Edit} alt='' />
          </div>
          <div className='summary-header-save'>
            <Button
              children='Save'
              buttonStyle='btn--primary--solid'
              buttonSize='btn--medium'
              onClick={(e) => props.save(summary)}
            />
          </div>
        </div>

        <div className='summary-content'>
          <div className='summary-content-wrapper'>
            {!props.editting ? (
              summary.map((x, index) => {
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
              })
            ) : (
              <textarea
                ref={props.setRef}
                className='portal-edit-box'
                defaultValue={props.data.message}
              ></textarea>
            )}
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
                        <p
                          key={item + ' ' + index}
                        >{`Definition (${index}): ${item.definition}`}</p>
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
    </div>
  );
};

export default Summary;
