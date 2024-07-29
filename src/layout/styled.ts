import styled from 'styled-components';

const StyledLayout = styled.div`
    .BG-main {
        overflow-y: auto;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            overflow-y: initial;
        }
    }

    .BG-board {
        width: 1024px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            width: initial;
        }
    }
`;

export default StyledLayout;
