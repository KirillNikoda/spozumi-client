import { createSelector } from 'reselect';
import { RootState } from '.';

export const selectCount = (state: RootState) => state.counter.value;

export const countSelector = createSelector(selectCount, (state) => state);
