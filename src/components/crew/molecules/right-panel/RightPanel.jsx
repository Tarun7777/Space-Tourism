import React from 'react';
import { useSelector } from 'react-redux';
import { useImageSrcProvider } from '../../../../hooks/image-src-provider/useImageSrcProvider';
import { useWindowDimensions } from '../../../../hooks/window-dimensions/useWindowDimensions';
import { CREW, MOBILE_MAX_WIDTH } from '../../../../constants';
import './RightPanel.scoped.scss';

const imageDetails = {
  pageName: CREW,
  imageType: 'png',
  checkMode: false,
};
const getImageHeight = (id) => (id === '1' ? '100%' : '90%');

const RightPanel = () => {
  const { crewId } = useSelector((state) => state.spaceTourism);
  const { width } = useWindowDimensions();
  const shouldApplyInlineImgHeight = width > MOBILE_MAX_WIDTH;

  const { imageSrc, imageAlt } = useImageSrcProvider(imageDetails);

  return (
    <div className='crew--image'>
      <img
        style={{
          height: `${shouldApplyInlineImgHeight ? getImageHeight(crewId) : ''}`,
        }}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

RightPanel.displayName = 'RightPanel';
export default React.memo(RightPanel);
