import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../window-dimensions/useWindowDimensions';
import { content, CREW, DESTINATION, TECHNOLOGY } from '../../constants';

const getId = (pageName, idObj) => {
  let id;
  switch (pageName) {
    case DESTINATION:
      id = idObj.destinationId;
      break;
    case CREW:
      id = idObj.crewId;
      break;
    case TECHNOLOGY:
      id = idObj.technologyId;
      break;
    default:
  }
  return id;
};

const getName = (pageName, idObj) => {
  const id = getId(pageName, idObj);
  const name = content?.[pageName]?.entries?.[id - 1]?.name;
  return { imageName: name?.toLowerCase().replace(' ', '-'), imageAlt: name };
};

const getImageMode = (width, checkMode) => {
  const mode = width > 1024 ? '-portrait' : '-landscape';
  return checkMode ? mode : '';
};

export const useImageSrcProvider = ({ pageName, imageType, checkMode }) => {
  const currentPageIdObj = useSelector((state) => state.spaceTourism);
  const { width } = useWindowDimensions();
  const { imageName, imageAlt } = getName(pageName, currentPageIdObj);
  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    import(
      `../../assets/${pageName}/image-${imageName}${getImageMode(
        width,
        checkMode
      )}.${imageType}`
    ).then((image) => {
      setImageSrc(image.default);
    });
  }, [width, checkMode, pageName, imageName, imageType, setImageSrc]);

  return { imageSrc, imageAlt };
};
