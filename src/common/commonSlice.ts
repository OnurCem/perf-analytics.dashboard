import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  processingActions: string[];
}

interface Action {
  actionName: string;
}

const initialState: CommonState = {
  processingActions: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    startAction(state, action: PayloadAction<Action>) {
      const { actionName } = action.payload;

      state.processingActions.push(actionName);
    },
    stopAction(state, action: PayloadAction<Action>) {
      const { actionName } = action.payload;
      const actionIndex = state.processingActions.findIndex((processingAction) => processingAction === actionName);

      state.processingActions.splice(actionIndex, 1);
    },
  },
});

export const { startAction, stopAction } = commonSlice.actions;

export default commonSlice.reducer;
