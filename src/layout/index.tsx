import { FC } from 'react';

import Board from '@features/board/components/Board';
import Header from '@layout/header';
import StyledLayout from '@layout/styled';

const Layout: FC = () => {
    return (
        <StyledLayout className="BG-layout pv-30 ph-30">
            <Header />

            <main className="BG-main">
                <Board />
            </main>
        </StyledLayout>
    );
};

export default Layout;
