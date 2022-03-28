// import React from 'react';
// import { useWindowDimensions } from '../../../hooks/use-window-dimensions/useWindowDimensions';
// import { actionNames } from './constants/actions';
// import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '../../../constants';

// const { main, basic, navbarOpen, items, displayPrefix, displayNavToggler } =
//   actionNames;
// const initialValue = {
//   isMain: false,
//   isBasic: false,
//   items: [],
//   isNavbarOpen: false,
//   shouldDisplayPrefix: false,
//   shouldDisplayNavToggler: false,
// };

// const contextReducer = (state, action) => {
//   let updatedState = state;
//   const { name, value } = action;
//   if (name === displayPrefix) {
//     console.log(state);
//     console.log(action);
//   }
//   updatedState[name] = name === navbarOpen ? !state.isNavbarOpen : value;
//   if (name === navbarOpen) {
//     console.log(updatedState);
//   }
//   return updatedState;
// };

// export const Context = React.createContext({});

// const ContextProvider = ({ isMain, isBasic, navItems, children }) => {
//   const { width } = useWindowDimensions();
//   const [state, dispatch] = React.useReducer(contextReducer, initialValue);

//   React.useEffect(() => {
//     dispatch({ name: main, value: isMain });
//     dispatch({ name: basic, value: isBasic });
//     dispatch({ name: items, value: navItems });
//   }, [dispatch, isMain, isBasic, navItems]);

//   React.useEffect(() => {
//     console.log(
//       'prefix',
//       width <= MOBILE_MAX_WIDTH || width > TABLET_MAX_WIDTH
//     );
//     console.log('toggler', width <= MOBILE_MAX_WIDTH);
//     dispatch({
//       name: displayPrefix,
//       value: width <= MOBILE_MAX_WIDTH || width > TABLET_MAX_WIDTH,
//     });
//     dispatch({ name: displayNavToggler, value: width <= MOBILE_MAX_WIDTH });
//   }, [width]);

//   React.useEffect(() => {
//     console.log('state', state);
//   }, []);

//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   );
// };

// export default ContextProvider;
