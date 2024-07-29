import { FC } from 'react';

import IconEdit from '@assets/Edit';

import StyledEditAction from './styled';

type EditActionProps = {
    onClick?: () => void;
    className?: string;
};

const EditAction: FC<EditActionProps> = ({ onClick, className }) => (
    <StyledEditAction onClick={onClick} className={`${className} BG-edit-action flex-center cursor-pointer`}>
        <IconEdit />
    </StyledEditAction>
);

export default EditAction;
