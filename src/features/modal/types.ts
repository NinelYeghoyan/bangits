import { FormType } from '@features/board/types';

export enum ModalStateType {
    New = 'New',
    Edit = 'Edit',
}
export interface ModalType {
    modalState: ModalStateType | null;
    editState: FormType | null;
}
