import React, { useEffect, useState } from 'react';
import { Button } from '../../Components/Button/Button';
import NoteCardList from '../../Components/NoteCard/NoteCardList';
import { question } from '../../Components/CollectHelp/CollectHelp';
import Plus from '../../static/img/cardnquestions/plus.png';

import './Questions.css';

const Questions = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newCard, setNewCard] = useState(false);

  const localCards = localStorage.getItem('questions');

  useEffect(() => {
    if (localCards) {
      setFlashcards(JSON.parse(localCards).cards);
    } else {
      const jsonCards = {
        cards: [...question.question],
      };

      localStorage.setItem('questions', JSON.stringify(jsonCards));

      setFlashcards(question.question);
    }
  }, [localCards]);

  console.log(flashcards);

  const addCard = () => {
    setNewCard(true);
  };

  const saveCard = (e) => {
    const pos = Math.floor(Math.random() * 4);
    const option = [...e.options];
    option.splice(pos, 0, e.answer);

    setFlashcards([
      ...flashcards,
      {
        text: e.text,
        answer: e.answer,
        options: option,
      },
    ]);
    setNewCard(false);
  };

  const saveSet = (e) => {
    const jsonCard = {
      question: [...flashcards],
    };

    localStorage.setItem('questions', JSON.stringify(jsonCard));
    window.location = '/Collection';
  };

  const deleteCard = (e) => {
    const flashcardsCopy = flashcards;
    flashcardsCopy.splice(e, 1);
    setFlashcards([...flashcardsCopy]);
  };

  return (
    <div className='quest-body'>
      <div className='notes-wrapper'>
        <div className='notes-save-btn'>
          <Button onClick={saveSet} children='Save' />
        </div>
        <div className='notes-content'>
          <div className='notes-header'>
            <p className='notes-header-title'>
              Q&#38;A: How to grow your brain
            </p>
            <div className='notes-header-add'>
              <p>Add New</p>
              <img onClick={addCard} src={Plus} alt='add' />
            </div>
          </div>
          <div className='notes-cards'>
            <NoteCardList
              flashcards={flashcards}
              mode={'question'}
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

export default Questions;
