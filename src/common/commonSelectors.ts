import { RootState } from 'common/rootReducer';

export const isActionsProcessing = (state: RootState, ...actions: string[]): boolean =>
  state.common.processingActions.some((processingAction) => actions.includes(processingAction));
