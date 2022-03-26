import React from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../../../constants';
import './LeftPanel.css';

const getName = (id, format = false) => {
  const name = content?.destination?.entries?.[id - 1]?.name;
  return format ? name.toLowerCase?.().replace(' ', '-') : name;
};

const LeftPanel = () => {
  const { destinationId } = useSelector((state) => state);
  const [imageSrc, setImageSrc] = React.useState('');
  const name = getName(destinationId, true);

  React.useEffect(() => {
    import(`../../../../assets/destination/image-${name}.png`).then((image) => {
      setImageSrc(image.default);
    });
  }, [name, setImageSrc]);

  return (
    <>
      <div className='destination--image'>
        <img src={imageSrc} alt={getName(destinationId)} />
      </div>
    </>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
