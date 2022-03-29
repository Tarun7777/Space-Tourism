import {
  CREW,
  DESTINATION,
  HOME,
  TECHNOLOGY,
  TITLE_CREW,
  TITLE_DESTINATION,
  TITLE_HOME,
  TITLE_TECHNOLOGY,
} from '../constants';

export const getLastSegmentOfPath = (path) => {
  return path.split('/')[2] || HOME;
};

export const getTitle = (page) => {
  let title;
  switch (page) {
    case HOME:
      title = TITLE_HOME;
      break;
    case DESTINATION:
      title = TITLE_DESTINATION;
      break;
    case CREW:
      title = TITLE_CREW;
      break;
    case TECHNOLOGY:
      title = TITLE_TECHNOLOGY;
      break;
    default:
  }
  return title;
};
