import React from 'react'

function Language() {
    const emojis = [
        '✨',
        '💫',
        '💥',
        '🪐',
        '🛸',
        '🐉',
        '🦖',
        '🦕',
        '🦄',
        '🧜‍♀️',
        '🧜‍♂️',
        '🧞',
        '🧞‍♀️',
        '🧟',
        '🧙',
        '🧙‍♂️',
        '🧚‍♀️',
        '🧚‍♂️',
        '🧛‍♀️',
        '🧛‍♂️',
        '🦸‍♀️',
        '🦸‍♂️',
        '🦹‍♀️',
        '🦹‍♂️',
        '🎭',
         
      ];
      

 
  const randomNumber = Math.floor(Math.random() * emojis.length);
  

    return (
        <span>
            {emojis[randomNumber]}
        </span>
    )
}

export default Language
