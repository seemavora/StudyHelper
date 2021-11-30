import React, { useState, useRef, useEffect } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { Button } from '../../Components/Button/Button';
import PortalPreSubmit from '../../Components/PortalPreSubmit/PortalPreSubmit';
import Summary from '../../Components/Summary/Summary';

import './Portal.css';

const Portal = () => {
  const [link, setLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState('');
  const [edit, setEdit] = useState(false);

  const newSummary = useRef();

  useEffect(() => {
    const selectSum = localStorage.getItem('sum-selected');
    if (selectSum) {
      setSummary({ message: localStorage.getItem('sum-message') });
      setSubmitted(true);
      localStorage.removeItem('sum-selected');
    }
  }, []);

  const inputChange = (e) => {
    console.log(e.target.value);
    setLink(e.target.value);
  };

  const getSummary = async (e) => {
    e.preventDefault();
    console.log(link);

    console.log(setLink);
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

  const onClick = async (e) => {
    await getSummary(e)
      .catch()
      .then((summary) => {
        setSummary(summary);

        if (!submitted) {
          setSubmitted(true);
        }
      });
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
    localStorage.setItem(
      'sum-meta',
      `lorem epsum something something;Summary;12/3/21;${link}`
    );

    localStorage.setItem('sum-message', summary.message);
    window.location = '/Collection';
  };

  return (
    <div className='portal-body'>
      <div className='portal-form'>
        <SearchBar textChange={inputChange} />

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
