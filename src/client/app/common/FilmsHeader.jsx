import React from 'react';
import Button from '../common/Button';
import './FilmsHeader.css';

const FilmsHeader = () => (
  <div className="films-header flex-container space-beetween standart-padding-left standart-padding-right align-center" >
    <div>results</div>
    <div>Sort by <Button title="release date" /><Button title="rating" isActiveRedColor /></div>
  </div>
);

export default FilmsHeader;
