import { combineReducers } from '@reduxjs/toolkit';

import commonReducer from 'common/commonSlice';
import dashboardReducer from 'modules/dashboard/dashboardSlice';

const rootReducer = combineReducers({
  common: commonReducer,
  dashboard: dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
