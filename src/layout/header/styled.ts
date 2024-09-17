import styled from 'styled-components';

const StyledHeader = styled.header`
    .BG-header--title {
        font-family: ${(p) => p.theme.typography.fontFamily.condensed}, sans-serif;
        font-size: ${(p) => p.theme.typography.fontSize.p26};
        font-weight: ${(p) => p.theme.typography.weight.bold};
        line-height: 26px;

        color: ${(p) => p.theme.palette.primaryTextColor};
    }

    .BG-button {
        width: 114px;
    }
`;

export default StyledHeader;
