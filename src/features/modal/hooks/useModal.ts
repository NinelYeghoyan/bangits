import { useCallback } from 'react';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import { useAppSelector } from '@app/hooks/useAppSelector';
import { FormType } from '@features/board/types';
import { setEditState, setModalState } from '@features/modal/slice';
import { ModalStateType } from '@features/modal/types';

export const useModal = () => {
    const dispatch = useAppDispatch();
    const modalState = useAppSelector((state) => state.modal.modalState);
    const editState = useAppSelector((state) => state.modal.editState);

    const onClose = useCallback(() => {
        dispatch(setModalState(null));
        dispatch(setEditState(null));
    }, [dispatch]);

    const onOpen = useCallback(
        (type: ModalStateType, item?: FormType) => {
            dispatch(setModalState(type));
            dispatch(setEditState(item || null));
        },
        [dispatch],
    );

    return {
        onClose,
        onOpen,
        modalState,
        editState,
    };
};
