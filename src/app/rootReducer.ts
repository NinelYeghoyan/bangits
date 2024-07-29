import { combineReducers } from '@reduxjs/toolkit';

import boardReducer from '@features/board/slice';
import modalReducer from '@features/modal/slice';

const rootReducer = combineReducers({
    board: boardReducer,
    modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
