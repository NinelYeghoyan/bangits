import { forwardRef, ForwardRefExoticComponent, InputHTMLAttributes, RefAttributes } from 'react';

import { StyledInput } from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    type?: 'text' | 'email' | 'password' | 'date';
    variant?: 'primary' | 'secondary' | 'disable';
    sizeType?: 'small' | 'medium' | 'large';
    className?: string;
};

const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> = forwardRef<
    HTMLInputElement,
    InputProps
>(({ error = '', type = 'text', variant = 'secondary', sizeType = 'medium', className = '', ...rest }, ref) => (
    <StyledInput className="BG-input">
        <input ref={ref} className={`${variant} ${sizeType} ${className} ph-18`} type={type} {...rest} />

        {!!error && <p className="BG-input--error mt-8">{error}</p>}
    </StyledInput>
));

export default Input;
