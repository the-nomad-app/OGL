import React from 'react';
// import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {/* eslint-disable-next-line */}
        <a className='cards__item__link' href={props.path} target="_blank">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* eslint-disable-next-line */}
            <img
              className='cards__item__img'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;