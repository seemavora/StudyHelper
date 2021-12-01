import React, { useState, useEffect } from 'react';
import { Button } from '../../Components/Button/Button';
import Plus from '../../static/img/cardnquestions/plus.png';

import NoteCardList from '../../Components/NoteCard/NoteCardList';

import { notecard } from '../../Components/CollectHelp/CollectHelp';

import './NoteCard.css';

const NoteCard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newCard, setNewCard] = useState(false);

  const localCards = localStorage.getItem('cards');

  useEffect(() => {
    if (localCards) {
      setFlashcards(JSON.parse(localStorage.getItem('cards')).cards);
    } else {
      const jsonCards = {
        cards: [...notecard.notecards],
      };

      localStorage.setItem('cards', JSON.stringify(jsonCards));

      setFlashcards(notecard.notecards);
    }
  }, [localCards]);

  console.log(flashcards);

  const addCard = () => {
    setNewCard(true);
  };

  const saveCard = (e) => {
    setFlashcards([
      ...flashcards,
      {
        text: e.text,
        answer: e.answer,
      },
    ]);

    setNewCard(false);
  };

  const saveSet = (e) => {
    const jsonCard = {
      cards: [...flashcards],
    };

    localStorage.setItem('cards', JSON.stringify(jsonCard));
    window.location = '/Collection';
  };

  const deleteCard = (e) => {
    const flashcardsCopy = flashcards;
    flashcardsCopy.splice(e, 1);
    setFlashcards([...flashcardsCopy]);
  };

  return (
    <div className='notes-body'>
      <div className='notes-wrapper'>
        <div className='notes-save-btn'>
          <Button onClick={saveSet} children='Save' />
        </div>
        <div className='notes-content'>
          <div className='notes-header'>
            <p className='notes-header-title'>
              Note Cards: How to grow your brain
            </p>
            <div className='notes-header-add'>
              <p>Add New</p>
              <img onClick={addCard} src={Plus} alt='add' />
            </div>
          </div>
          <div className='notes-cards'>
            <NoteCardList
              flashcards={flashcards}
              mode={'card'}
              newCard={newCard}
              save={saveCard}
              deleteCard={deleteCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
