import React from "react";
import { content } from "../../../../constants";
import './DestinationDetails.css'

const DestinationDetail = ({name}) => {
    return (
      <>
        <hr />
        <div className='destination--details'>
          <div>
            <p className='sub-heading-2'>
              {content?.destination?.common?.avgDistance}
            </p>
            <p className='sub-heading-1'>
              {content?.destination?.entries?.[name]?.distance}
            </p>
          </div>
          <div>
            <p className='sub-heading-2'>
              {content?.destination?.common?.estTravelTime}
            </p>
            <p className='sub-heading-1'>
              {content?.destination?.entries?.[name]?.travel}
            </p>
          </div>
        </div>
      </>
    );
}

DestinationDetail.displayName = 'DestinationDetail'
export default React.memo(DestinationDetail);