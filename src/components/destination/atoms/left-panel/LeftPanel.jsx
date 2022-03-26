import React from 'react';
import { useSelector } from 'react-redux';
import Moon from '../../../../assets/destination/image-moon.png';
import Mars from '../../../../assets/destination/image-mars.png';
import Europa from '../../../../assets/destination/image-europa.png';
import Titan from '../../../../assets/destination/image-titan.png';
import { EUROPA, MARS, MOON, TITAN } from '../../../../constants';
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

const LeftPanel = () => {
  const { destination } = useSelector((state) => state);
  return (
    <>
      <div className='destination--image'>
        <img src={getImage(destination)} alt={destination} />
      </div>
    </>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
