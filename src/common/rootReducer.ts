import { combineReducers } from '@reduxjs/toolkit';

import commonReducer from 'common/commonSlice';

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;
