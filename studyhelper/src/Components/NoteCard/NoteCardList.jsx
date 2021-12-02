import React from 'react';
import Card from './Card';

import './NoteCardList.css';

export default function NoteCardList({
  flashcards,
  mode,
  newCard,
  save,
  deleteCard,
}) {
  return (
    <div className='card-grid'>
      {newCard ? <Card mode={mode} newCard={newCard} save={save} /> : <></>}

      {flashcards.map((flashcard, index) => {
        return (
          <Card
            flashcard={flashcard}
            key={index}
            index={index}
            mode={mode}
            deleteCard={deleteCard}
          />
        );
      })}
    </div>
  );
}
