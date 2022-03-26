import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import { spaceTourismActions } from '../../../redux/slice';
import { content, CREW } from '../../../constants';
import './index.css';

const crewLength = content.crew.entries.length;

const Crew = () => {
  const dispatch = useDispatch();
  const { crewId } = useSelector((state) => state);

  const updateValue = React.useCallback(
    (event, id) => {
      const getNextValue = (id, keyPressed) => {
        let value;
        if (keyPressed === 'ArrowLeft') {
          value = Number(id) === 1 ? String(crewLength) : String(id - 1);
        }
        if (keyPressed === 'ArrowRight') {
          value = Number(id) === crewLength ? '1' : String(Number(id) + 1);
        }
        return value;
      };
      dispatch(
        spaceTourismActions.updateEntry({
          type: CREW,
          value: getNextValue(id, event.key),
        })
      );
    },
    [dispatch]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
        updateValue(e, crewId);
    });
    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
          updateValue(e, crewId);
      });
    };
  }, [crewId, updateValue]);

  return (
    <>
      <section className='crew'>
        <div className='crew--left-panel'>
          <LeftPanel />
        </div>
        <div className='crew--right-panel'>
          <RightPanel />
          <hr />
        </div>
      </section>
    </>
  );
};

Crew.displayName = 'Crew';
export default React.memo(Crew);
