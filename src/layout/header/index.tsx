import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@components/Button';
import { useModal } from '@features/modal/hooks/useModal';
import { ModalStateType } from '@features/modal/types';
import StyledHeader from '@layout/header/styled';

const Header: FC = () => {
    const { t } = useTranslation();
    const { onOpen } = useModal();

    const handleOpenNewModal = () => {
        onOpen(ModalStateType.New);
    };

    return (
        <StyledHeader className="BG-header flex-between">
            <h1 className="BG-header--title">{t('board')}</h1>

            <Button onClick={handleOpenNewModal} size="small">
                {t('newTask')}
            </Button>
        </StyledHeader>
    );
};

export default Header;
