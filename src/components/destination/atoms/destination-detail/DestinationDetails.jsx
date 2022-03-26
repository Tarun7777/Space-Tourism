import React from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../../../constants';
import './DestinationDetails.css';

const DestinationDetail = () => {
  const { destination } = useSelector((state) => state);

  return (
    <>
      <hr />
      <div className='destination--details'>
        <div>
          <p className='sub-heading-2'>
            {content?.destination?.common?.avgDistance}
          </p>
          <p className='sub-heading-1'>
            {content?.destination?.entries?.[destination]?.distance}
          </p>
        </div>
        <div>
          <p className='sub-heading-2'>
            {content?.destination?.common?.estTravelTime}
          </p>
          <p className='sub-heading-1'>
            {content?.destination?.entries?.[destination]?.travel}
          </p>
        </div>
      </div>
    </>
  );
};

DestinationDetail.displayName = 'DestinationDetail';
export default React.memo(DestinationDetail);
