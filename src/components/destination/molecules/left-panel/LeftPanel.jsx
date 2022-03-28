import React from 'react';
import { useImageSrcProvider } from '../../../../hooks/image-src-provider/useImageSrcProvider';
import { DESTINATION } from '../../../../constants';
import './LeftPanel.scoped.scss';

const imageDetails = {
  pageName: DESTINATION,
  imageType: 'png',
  checkMode: false,
};

const LeftPanel = () => {
  const { imageSrc, imageAlt } = useImageSrcProvider(imageDetails);

  return (
    <div className='destination--image'>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
