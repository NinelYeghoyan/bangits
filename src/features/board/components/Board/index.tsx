import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import { useAppSelector } from '@app/hooks/useAppSelector';
import StyledBoard from '@features/board/components/Board/styled';
import Card from '@features/board/components/Card';
import { setOverdue } from '@features/board/slice';
import { FormType } from '@features/board/types';

const Board: FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.board.items);

    const pendingItems = items.filter((item: FormType) => item.status === 'pending');
    const completedItems = items.filter((item: FormType) => item.status === 'completed');
    const overdueItems = items.filter((item: FormType) => item.status === 'overdue');
    const removedItems = items.filter((item: FormType) => item.status === 'removed');

    useEffect(() => {
        dispatch(setOverdue());
    }, [dispatch]);

    return (
        <StyledBoard className="BG-board flex mt-26">
            <div className="BG-board--item pv-6 ph-6">
                <h2 className="BG-board--title pv-10 ph-10">{t('pending')}</h2>
                <div className="BG-board--content">
                    {pendingItems.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <div className="BG-board--item pv-6 ph-6">
                <h2 className="BG-board--title pv-10 ph-10">{t('completed')}</h2>
                <div className="BG-board--content">
                    {completedItems.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <div className="BG-board--item pv-6 ph-6">
                <h2 className="BG-board--title pv-10 ph-10">{t('overdue')}</h2>
                <div className="BG-board--content">
                    {overdueItems.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <div className="BG-board--item pv-6 ph-6">
                <h2 className="BG-board--title pv-10 ph-10">{t('removed')}</h2>
                <div className="BG-board--content">
                    {removedItems.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </StyledBoard>
    );
};

export default Board;
