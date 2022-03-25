import React from 'react';
import Moon from '../../../../assets/destination/image-moon.png';
import Mars from '../../../../assets/destination/image-mars.png';
import Europa from '../../../../assets/destination/image-europa.png';
import Titan from '../../../../assets/destination/image-titan.png';
import { content, EUROPA, MARS, MOON, TITAN } from '../../../../constants';
import './LeftPanel.css';

const getImage = (name) => {
  let image;
  switch (name) {
    case MOON:
      image = Moon;
      break;
    case MARS:
      image = Mars;
      break;
    case EUROPA:
      image = Europa;
      break;
    case TITAN:
      image = Titan;
      break;
    default:
  }
  return image;
};

const LeftPanel = ({ name }) => {
  return (
    <>
      <h5 className='destination--super-heading'>
        <span>{content?.main?.superHeadings?.destination?.prefix}</span>
        {content?.main?.superHeadings?.destination?.value}
      </h5>
      <div className='destination--image'>
        <img src={getImage(name || 'Moon')} alt={name} />
      </div>
    </>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
