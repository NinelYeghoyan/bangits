import styled from 'styled-components';

const StyledCard = styled.div`
    border: 2px solid transparent;
    border-radius: ${(p) => p.theme.borderRadius.radius10};
    background-color: ${(p) => p.theme.palette.base};
    transition: 0.2s 0.1s ease-in-out;

    ~ .BG-card {
        margin-top: 6px;
    }

    &:hover {
        border-color: ${(p) => p.theme.palette.accent};

        .BG-card--actions {
            display: flex;
        }
    }

    .BG-card--actions {
        display: none;
        position: absolute;
        top: 16px;
        right: 16px;
    }

    .BG-card--title {
        font-size: ${(p) => p.theme.typography.fontSize.p16};
        font-weight: ${(p) => p.theme.typography.weight.bold};
        line-height: 20px;
        text-transform: capitalize;

        color: ${(p) => p.theme.palette.primaryTextColor};
    }

    .BG-card--description {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.regular};
        line-height: 16px;
        text-transform: capitalize;

        color: ${(p) => p.theme.palette.secondaryTextColor};
    }

    .BG-card--date {
        font-family: ${({ theme }) => theme.typography.fontFamily.condensed}, sans-serif;
        font-size: ${(p) => p.theme.typography.fontSize.p12};
        font-weight: ${(p) => p.theme.typography.weight.light};
        line-height: 14px;

        display: inline-block;
        border-radius: ${(p) => p.theme.borderRadius.radius4};
        background-color: ${(p) => p.theme.palette.green};
        color: ${(p) => p.theme.palette.white};

        &.warning {
            background-color: ${(p) => p.theme.palette.red};
        }
    }
`;

export default StyledCard;
