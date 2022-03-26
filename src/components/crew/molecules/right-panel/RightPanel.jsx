import React from 'react';
import { useSelector } from 'react-redux';
import { content, MOBILE_MAX_WIDTH } from '../../../../constants';
import { useWindowDimensions } from '../../../../hooks/use-window-dimensions/useWindowDimensions';
import './RightPanel.css';

const getName = (id) => {
  const name = content?.crew?.entries?.[id - 1]?.name;
  return name.toLowerCase?.().replace(' ', '-');
};

const getImageHeight = (id) => {
  let height = '90%';
  if (id === '1') height = '100%';
  // if(id === '4') height = '90%'
  return height;
};

const RightPanel = () => {
  const { width } = useWindowDimensions();
  const shouldApplyInlineImgHeight = width > MOBILE_MAX_WIDTH;
  const { crewId } = useSelector((state) => state);
  const [imageSrc, setImageSrc] = React.useState('');
  const name = getName(crewId);

  React.useEffect(() => {
    import(`../../../../assets/crew/image-${name}.png`).then((image) => {
      setImageSrc(image.default);
    });
  }, [name, setImageSrc]);

  return (
    <div className='crew--image'>
      <img
        style={{
          height: `${shouldApplyInlineImgHeight ? getImageHeight(crewId) : ''}`,
        }}
        src={imageSrc}
        alt='douglas'
      />
    </div>
  );
};

RightPanel.displayName = 'RightPanel';
export default React.memo(RightPanel);
