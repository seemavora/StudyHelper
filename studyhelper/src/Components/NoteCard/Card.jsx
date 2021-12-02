import React, { useState, useRef } from 'react';

import Check from '../../static/img/cardnquestions/check.svg';
import Trash from '../../static/img/cardnquestions/trash.svg';

import './Card.css';

export default function Flashcard({
  flashcard,
  mode,
  newCard,
  save,
  deleteCard,
  index,
}) {
  const [flip, setFlip] = useState(false);

  const cardCreate = useRef();

  const colors = [
    '#5EC2FB',
    '#FBBC5E',
    '#81CB6F',
    '#FF90D3',
    '#7DC1E7',
    '#BA84FF',
  ];

  const getColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleSave = () => {
    const obj =
      mode === 'card'
        ? {
            text: cardCreate.current.children[0].value,
            answer: cardCreate.current.children[1].value,
          }
        : {
            text: cardCreate.current.children[0].value,
            answer: cardCreate.current.children[1].value,
            options: [...cardCreate.current.children[2].children].map((x) => {
              return x.value;
            }),
          };

    save(obj);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteCard(index);
  };

  if (newCard) {
    return (
      <div className='card'>
        <div>
          <form className='card-new-form'>
            <div className='card-new-label'>
              <label htmlFor='name'>Text:</label>
              <label id='answer' htmlFor='name'>
                Answer (optional):
              </label>
              {mode === 'question' ? (
                <label id='answer' htmlFor='option'>
                  Options:
                </label>
              ) : (
                <></>
              )}
            </div>
            <div ref={cardCreate} className='card-new-fields'>
              <input
                className='card-new-text'
                name='text'
                type='text'
                required
              />
              <input className='card-new-answer' name='answer' type='text' />
              {mode === 'question' ? (
                <div>
                  <input
                    className='card-new-option'
                    name='option'
                    type='text'
                  />
                  <input
                    className='card-new-option'
                    name='option'
                    type='text'
                  />
                  <input
                    className='card-new-option'
                    name='option'
                    type='text'
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </form>
          <img className='card-save' onClick={handleSave} src={Check} alt='' />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
      style={{ backgroundColor: getColor() }}
    >
      <div className='front'>
        <p>{flashcard.text}</p>
        <div className='flashcard-options'>
          {mode === 'question'
            ? flashcard.options.map((option) => {
                return (
                  <div className='flashcard-option' key={option}>
                    <p>{option}</p>
                  </div>
                );
              })
            : ''}
        </div>
        <div className='card-delete'>
          <img onClick={(e) => handleDelete(e)} src={Trash} alt='' />
        </div>
      </div>
      <div className='back'>{flashcard.answer}</div>
    </div>
  );
}
