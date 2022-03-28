import React from 'react';
import { useSelector } from 'react-redux';
import { content, MOBILE_MAX_WIDTH } from '../../../../constants';
import { useWindowDimensions } from '../../../../hooks/use-window-dimensions/useWindowDimensions';
import './RightPanel.css';

const getName = (id, format = false) => {
  const name = content?.crew?.entries?.[id - 1]?.name;
  return format ? name?.toLowerCase().replace(' ', '-') : name;
};

const getImageHeight = (id) => (id === '1' ? '100%' : '90%');

const RightPanel = () => {
  const { width } = useWindowDimensions();
  const { crewId } = useSelector((state) => state);
  const [imageSrc, setImageSrc] = React.useState('');
  const name = getName(crewId, true);
  const shouldApplyInlineImgHeight = width > MOBILE_MAX_WIDTH;

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
        alt={getName(crewId)}
      />
    </div>
  );
};

RightPanel.displayName = 'RightPanel';
export default React.memo(RightPanel);
