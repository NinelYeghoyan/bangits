import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import Button from '@components/Button';
import DeleteAction from '@components/DeleteAction';
import EditAction from '@components/EditAction';
import StyledCard from '@features/board/components/Card/styled';
import { removeItem, setStatus } from '@features/board/slice';
import { FormType } from '@features/board/types';
import { useModal } from '@features/modal/hooks/useModal';
import { ModalStateType } from '@features/modal/types';

const Card: FC<FormType> = ({ id, title, description, date, status }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { onOpen } = useModal();

    const completedState = status === 'completed';
    const overdueState = status === 'overdue';
    const removedState = status === 'removed';

    const handleOpenEditModal = () => {
        onOpen(ModalStateType.Edit, { id, title, description, date, status });
    };
    const handleRemoveItem = () => {
        dispatch(removeItem(id));
    };
    const handleCompleted = () => {
        dispatch(setStatus({ id, status: 'completed' }));
    };

    return (
        <StyledCard className="BG-card relative pv-16 ph-16 cursor-pointer">
            {!removedState && (
                <div className="BG-card--actions flex align-center">
                    <EditAction onClick={handleOpenEditModal} />
                    <DeleteAction onClick={handleRemoveItem} />
                </div>
            )}

            {!!date && <div className={`${overdueState ? 'warning' : ''} BG-card--date pv-8 ph-12 mb-18`}>{date}</div>}

            <h2 className="BG-card--title">{title}</h2>

            {!!description && <p className="BG-card--description mt-8">{description}</p>}

            {!overdueState && !removedState && !completedState && (
                <div className="flex justify-end mt-20">
                    <Button
                        onClick={handleCompleted}
                        size="extra-small"
                        variant="secondary"
                        className="BG-card--complete"
                    >
                        {t('markAsComplete')}
                    </Button>
                </div>
            )}
        </StyledCard>
    );
};

export default Card;
