import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
// { title, items } hawka niktbouhom blasit props w houma deja hekom props 
// ...otherItemProps ya3ni be9i parametre (props) zeda 
// CollectionItem hedi component o5ra feha 5idma  afiche name and price and image 
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;