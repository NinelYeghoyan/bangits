import { FC } from 'react';

import IconTrash from '@assets/Trash';

import StyledDeleteAction from './styled';

type DeleteActionProps = {
    onClick?: () => void;
    className?: string;
};
const DeleteAction: FC<DeleteActionProps> = ({ onClick, className }) => {
    return (
        <StyledDeleteAction onClick={onClick} className={`${className} BG-delete-action flex-center cursor-pointer`}>
            <IconTrash />
        </StyledDeleteAction>
    );
};

export default DeleteAction;
