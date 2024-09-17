import styled from 'styled-components';

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex.index5};

    background-color: rgba(0, 0, 0, 0.5);

    .BG-modal-dialog {
        width: 600px;
        height: 350px;
        border-radius: ${({ theme }) => theme.borderRadius.radius10};
        background-color: ${({ theme }) => theme.palette.base};
    }

    .BG-modal-close {
        width: 24px;
        height: 24px;

        position: absolute;
        top: 24px;
        right: 24px;
        z-index: ${({ theme }) => theme.zIndex.index1};

        color: ${({ theme }) => theme.palette.secondaryIconColor};

        transition: all 0.2s ease-in;
    }
`;

export default StyledModal;
