import styled from 'styled-components';

const StyledBoard = styled.div`
    .BG-board--item {
        width: 25%;

        min-height: 162px;

        background-color: ${(p) => p.theme.palette.secondary};
        border-radius: ${(p) => p.theme.borderRadius.radius12};

        ~ .BG-board--item {
            margin-left: 12px;
        }
    }

    .BG-board--title {
        font-size: ${(p) => p.theme.typography.fontSize.p16};
        font-weight: ${(p) => p.theme.typography.weight.bold};
        line-height: 21px;
        text-transform: capitalize;

        color: ${(p) => p.theme.palette.accentTextColor};
    }

    .BG-board--content {
        max-height: calc(100vh - 195px);
        overflow-x: auto;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            max-height: calc(100vh - 175px);
        }
    }
`;

export default StyledBoard;
