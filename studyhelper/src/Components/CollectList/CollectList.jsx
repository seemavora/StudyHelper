import React from 'react';

import { baseSummary } from '../CollectHelp/CollectHelp';

import './CollectList.css';

const CollectList = ({ list }) => {
  const getLink = (e) => {
    switch (e) {
      case 'Summary':
        return '/Portal';
      case 'Note Cards':
        return '/NoteCard';
      case 'Q&A':
        return '/Questions';

      default:
    }
  };

  const sumData = localStorage.getItem('summary');

  const process = (e) => {
    return {
      title: e.meta.title,
      type: e.meta.type,
      date: e.meta.date,
      link: e.meta.link,
    };
  };

  let data = sumData ? process(baseSummary) : undefined;

  const selectSum = () => {
    console.log('hello');
    localStorage.setItem('sum-selected', true);
  };

  return (
    <div className='collList-body'>
      <div className='collList-header'>
        <p>Title</p>
        <p>Type</p>
        <p>Date Created</p>
        <p>Video Link</p>
      </div>
      <div className='collList-content'>
        {data ? (
          <>
            <div className='collList-content-wrapper' key={data}>
              <div className='collList-content-item collList-title'>
                <a href={getLink(data.type)} onClick={selectSum}>
                  {data.title}
                </a>
              </div>
              <div className='collList-content-item'>{data.type}</div>
              <div className='collList-content-item'>{data.date}</div>
              <div className='collList-content-item collList-video'>
                <a href={data.link}>Link</a>
              </div>
            </div>

            {list.collection.map((x, index) => {
              return (
                <div className='collList-content-wrapper' key={index}>
                  <div className='collList-content-item collList-title'>
                    <a href={getLink(x.type)}>{x.title}</a>
                  </div>
                  <div className='collList-content-item'>{x.type}</div>
                  <div className='collList-content-item'>{x.date}</div>
                  <div className='collList-content-item collList-video'>
                    <a href={x.link}>Link</a>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CollectList;
