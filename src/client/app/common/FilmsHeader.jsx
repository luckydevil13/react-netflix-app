import React from 'react';
import Sorting from '../search/Sorting';
import './FilmsHeader.css';

const FilmsHeader = () => (
  <div className="films-header flex-container space-beetween standart-padding-left standart-padding-right align-center" >
    <div>results</div>
    <Sorting />
  </div>
);

export default FilmsHeader;
