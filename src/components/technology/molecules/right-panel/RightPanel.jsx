import React from 'react';
import { useImageSrcProvider } from '../../../../hooks/image-src-provider/useImageSrcProvider';
import { TECHNOLOGY } from '../../../../constants';
import './RightPanel.scoped.scss';

const imageDetails = {
  pageName: TECHNOLOGY,
  imageType: 'jpg',
  checkMode: true,
};

const RightPanel = () => {
  const { imageSrc, imageAlt } = useImageSrcProvider(imageDetails);

  return (
    <div className='technology--image'>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

RightPanel.diplayName = RightPanel;
export default React.memo(RightPanel);
