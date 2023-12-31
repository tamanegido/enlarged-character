import React, {useEffect, useRef, useState} from 'react';

type WordProps = {
  title: string;
  body: string;
  href: string;
};

const Word: React.FC<WordProps> = (...props) => {
  const [text, setText] = useState('');

  const inputHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // https://stackoverflow.com/questions/59573672/how-do-i-type-e-key-and-e-target-value-with-typescript-in-react
    const target = event.currentTarget;
    setText(target.value);
  };

  return (
    <>
      <div>
        <input type="text" className='word' onInput={inputHandler} autoFocus />
        <p><span className='display'>{text}</span></p>
      </div>
      <style jsx="true">{`
        .word {
          font-size: 150%;
          max-width: 90%;
        }

        .display {
          font-size: 500%;
          max-width: 100%;
        }
      `}</style>
    </>
  );
};
export default Word;
