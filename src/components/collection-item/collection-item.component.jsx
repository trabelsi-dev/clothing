import React from 'react';

import './collection-item.styles.scss';

//`url(${imageUrl} hedi bech tkoun image titbadil 7asib ili 7atitiou parametre ya3ni 
// {name} heka nom de produit hawka yijbid fih mil données 
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;