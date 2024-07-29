import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormType } from '@features/board/types';
import { ModalStateType, ModalType } from '@features/modal/types';

const initialState: ModalType = {
    modalState: null,
    editState: null,
};

const slice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalState: (state: ModalType, { payload }: PayloadAction<ModalStateType | null>) => {
            state.modalState = payload;
        },
        setEditState: (state: ModalType, action: PayloadAction<FormType | null>) => {
            state.editState = action.payload;
        },
    },
});

export const { setModalState, setEditState } = slice.actions;

export default slice.reducer;
