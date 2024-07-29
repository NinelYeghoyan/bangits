import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Modal from '@features/modal/components/Modal';
import Layout from '@layout/index.tsx';
import GlobalStyles from '@style/theme/global.styled';
import theme from '@style/theme/theme';

import '@style/scss/styles.scss';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Layout />

            <Modal />
        </ThemeProvider>
    );
};

export default App;
