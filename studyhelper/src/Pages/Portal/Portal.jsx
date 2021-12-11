import React, { useState, useRef, useEffect } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { Button } from '../../Components/Button/Button';
import PortalPreSubmit from '../../Components/PortalPreSubmit/PortalPreSubmit';
import Summary from '../../Components/Summary/Summary';

import { baseSummary } from '../../Components/CollectHelp/CollectHelp';

import './Portal.css';

const Portal = () => {
  const [link, setLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState('');
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);

  const newSummary = useRef();

  const localSum = localStorage.getItem('summary');
  const isSumActive = localStorage.getItem('active');

  useEffect(() => {
    if (isSumActive === 'Summary' && localSum) {
      setSummary({ message: localSum });
      setSubmitted(true);
      localStorage.removeItem('active');
    }
  }, []);

  const inputChange = (e) => {
    setLink(e.target.value);
  };

  const getSummary = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/summary/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset-UTF-8',
      },
      body: JSON.stringify({ message: link }),
    });

    let message = response
      .json()
      .catch()
      .then((e) => {
        return e;
      });

    return message;
  };

  const verifyLink = (url) => {
    return url.startsWith('https://www.youtube.com/watch?v=');
  };

  const onClick = async (e) => {
    if (verifyLink(link)) {
      if (link !== 'https://www.youtube.com/watch?v=1DKaJ41_zJo') {
        await getSummary(e)
          .catch()
          .then((summary) => {
            setSummary(summary);
          });
      } else {
        if (localSum) {
          setSummary({ message: localSum });
        } else {
          localStorage.setItem('summary', baseSummary.text);
          setSummary({ message: baseSummary.text });
        }
      }

      if (!submitted) {
        setSubmitted(true);
      }
    } else {
      setError(true);
    }
  };

  const toggleEdit = () => {
    if (!edit) {
      setEdit(true);
    } else {
      setSummary({ message: newSummary.current.value });
      setEdit(false);
    }
  };

  const save = (e) => {
    localStorage.setItem('summary', summary.message);
    window.location = '/Collection';
  };

  return (
    <div className='portal-body'>
      <div className='portal-form'>
        <SearchBar error={error} textChange={inputChange} />

        <div className='portal-submit'>
          <div className='portal-submit-button'>
            <Button
              children='Submit'
              buttonStyle='btn--primary--solid'
              buttonSize='btn--medium'
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <PortalPreSubmit view={submitted === true ? 'hide' : 'show'} />
      <Summary
        view={submitted}
        data={summary}
        edit={toggleEdit}
        editting={edit}
        setRef={newSummary}
        save={save}
      />
    </div>
  );
};

export default Portal;
