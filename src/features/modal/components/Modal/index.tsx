import { FC, MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import IconClose from '@assets/Close.tsx';
import Form from '@features/board/components/Form';
import StyledModal from '@features/modal/components/Modal/styled';
import { useModal } from '@features/modal/hooks/useModal';

const Modal: FC = () => {
    const { modalState, editState, onClose } = useModal();

    useEffect(() => {
        if (modalState) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [modalState]);

    if (!modalState) {
        return null;
    }

    return ReactDOM.createPortal(
        <StyledModal className="BG-modal flex-center" onClick={onClose}>
            <div
                className="BG-modal-dialog flex-center relative pv-30 ph-30"
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                aria-hidden="true"
            >
                <div
                    onClick={onClose}
                    onKeyDown={onClose}
                    aria-hidden="true"
                    className="BG-modal-close flex-center cursor-pointer"
                >
                    <IconClose />
                </div>

                <Form type={modalState} editState={editState} onClose={onClose} />
            </div>
        </StyledModal>,
        document.body,
    );
};

export default Modal;
