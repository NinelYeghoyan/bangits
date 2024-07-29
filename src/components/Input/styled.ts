import styled from 'styled-components';

export const StyledInput = styled.div`
    > input {
        width: 100%;
        height: 35px;

        font-family: ${({ theme }) => theme.typography.fontFamily.condensed}, sans-serif;
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        line-height: 14px;
        letter-spacing: 0.5px;

        border: 1px solid transparent;

        &::placeholder {
            font-family: ${({ theme }) => theme.typography.fontFamily.condensed}, sans-serif;
            line-height: 14px;
            letter-spacing: 0.5px;
        }

        &:focus {
            outline: none;
        }

        &.primary {
            background-color: ${({ theme }) => theme.palette.primary};
            color: ${({ theme }) => theme.palette.secondaryTextColor};

            &::placeholder {
                color: ${({ theme }) => theme.palette.secondaryTextColor};
            }
        }

        &.secondary {
            background-color: ${({ theme }) => theme.palette.secondary};
            color: ${({ theme }) => theme.palette.secondaryTextColor};

            &::placeholder {
                color: ${({ theme }) => theme.palette.secondaryTextColor};
            }
        }

        &.disable {
            pointer-events: none;
            touch-action: none;
            background-color: ${({ theme }) => theme.palette.disableButtonBackgroundColor};
            color: ${({ theme }) => theme.palette.disableButtonTextColor};

            &::placeholder {
                color: ${({ theme }) => theme.palette.disableButtonTextColor};
            }
        }

        &.small {
            font-size: ${({ theme }) => theme.typography.fontSize.p12};
            border-radius: ${({ theme }) => theme.borderRadius.radius8};

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p12};
            }
        }

        &.medium {
            font-size: ${({ theme }) => theme.typography.fontSize.p16};
            border-radius: ${({ theme }) => theme.borderRadius.radius10};

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p16};
            }
        }

        &.large {
            font-size: ${({ theme }) => theme.typography.fontSize.p18};
            border-radius: ${({ theme }) => theme.borderRadius.radius12};

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p18};
            }
        }
    }

    .BG-input--error-field {
        border-color: ${({ theme }) => theme.palette.red};
    }

    .BG-input--error {
        font-family: ${({ theme }) => theme.typography.fontFamily.condensed}, sans-serif;
        font-size: ${({ theme }) => theme.typography.fontSize.p14};
        font-weight: ${({ theme }) => theme.typography.weight.light};
        line-height: 14px;

        color: ${({ theme }) => theme.palette.red};
    }

    input[type='date']::-webkit-calendar-picker-indicator {
        opacity: 0.6;
        filter: invert(0.8);
        cursor: pointer;
    }
`;
