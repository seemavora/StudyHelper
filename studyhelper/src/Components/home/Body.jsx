import React from 'react';
import lightBulb from '../../static/img/lightbulb.png';

export const Body = () => {
  return (
    <div>
      <div className='body'>
        <div className='quote'>
          <div className='quote-showcase'>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              officiis aliquam neque reprehenderit. Esse iste quisquam tempore
              in dolores numquam hic quibusdam laudantium repellat non, beatae
              voluptatum rerum quos. Similique!" - William Shakespeare
            </p>
            <img src={lightBulb} alt='' />
          </div>
        </div>

        <div className='content'>
          <div className='content-left content-item'>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              repudiandae animi delectus ea cupiditate iure nulla nemo eum aut,
              quam minima ratione assumenda veniam quas ullam. Ipsum ipsam eos
              doloremque.
            </p>
          </div>

          <div className='content-right content-item'>
            <h1>AI-Powered</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              repudiandae animi delectus ea cupiditate iure nulla nemo eum aut,
              quam minima ratione assumenda veniam quas ullam. Ipsum ipsam eos
              doloremque.
            </p>
          </div>

          <div className='content-left content-item'>
            <h1>Google Calender</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              repudiandae animi delectus ea cupiditate iure nulla nemo eum aut,
              quam minima ratione assumenda veniam quas ullam. Ipsum ipsam eos
              doloremque.
            </p>
          </div>

          <div className='content-right content-item'>
            <h1>Convienence is Yours</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              repudiandae animi delectus ea cupiditate iure nulla nemo eum aut,
              quam minima ratione assumenda veniam quas ullam. Ipsum ipsam eos
              doloremque.
            </p>
          </div>

          <div className='content-left content-item'>
            <h1>Additional Tools</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              repudiandae animi delectus ea cupiditate iure nulla nemo eum aut,
              quam minima ratione assumenda veniam quas ullam. Ipsum ipsam eos
              doloremque.
            </p>
          </div>
        </div>
        <footer>
          <ul>
            <li>Lorem ipsum</li>
            <li>dolor sit</li>
            <li>amet consectetur</li>
            <li>adipisicing elit</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
