import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../../../../hooks/use-window-dimensions/useWindowDimensions';
import { content } from '../../../../constants';
import './RightPanel.css';

const getName = (id, format = false) => {
  const name = content?.technology?.entries?.[id - 1]?.name;
  return format ? name?.toLowerCase().replace(' ', '-') : name;
};

const RightPanel = () => {
  const { technologyId } = useSelector((state) => state);
  const [imageSrc, setImageSrc] = React.useState('');
  const { width } = useWindowDimensions();
  const name = getName(technologyId, true);

  React.useEffect(() => {
    const mode = width > 1024 ? 'portrait' : 'landscape';
    import(`../../../../assets/technology/image-${name}-${mode}.jpg`).then(
      (image) => {
        setImageSrc(image.default);
      }
    );
  }, [name, setImageSrc, width]);

  return (
    <div className='technology--image'>
      <img src={imageSrc} alt={getName(technologyId)} />
    </div>
  );
};

RightPanel.diplayName = RightPanel;
export default React.memo(RightPanel);
