import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BoardStateType, FormType } from '@features/board/types';

const initialState: BoardStateType = {
    items: [],
};

const slice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<FormType>) => {
            state.items.push({ ...action.payload, status: 'pending' });
        },
        editItem: (state: BoardStateType, action: PayloadAction<{ id: string; updates: Partial<FormType> }>) => {
            const { id, updates } = action.payload;
            const itemToEdit = state.items.find((item: FormType) => item.id === id);
            if (itemToEdit) {
                Object.assign(itemToEdit, updates);
            }
        },
        removeItem: (state: BoardStateType, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const itemToRemove = state.items.find((item: FormType) => item.id === itemId);
            if (itemToRemove) {
                itemToRemove.status = 'removed';
            }
        },
        setStatus: (
            state: BoardStateType,
            action: PayloadAction<{ id: string; status: 'pending' | 'completed' | 'overdue' }>,
        ) => {
            const { id, status } = action.payload;
            const itemToSetStatus = state.items.find((item: FormType) => item.id === id);
            if (itemToSetStatus) {
                itemToSetStatus.status = status;
            }
        },
        setOverdue: (state: BoardStateType) => {
            const now = new Date();
            state.items = state.items.map((item) => {
                if (item.status !== 'completed' && item.status !== 'removed' && new Date(item.date) < now) {
                    return { ...item, status: 'overdue' };
                }
                return item;
            });
        },
    },
});

export const { addItem, editItem, removeItem, setStatus, setOverdue } = slice.actions;
export default slice.reducer;
