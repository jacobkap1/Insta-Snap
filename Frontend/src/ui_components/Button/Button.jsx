import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children, onClick, type, variant, disabled }) => {
    return (
        <StyledButton onClick={onClick} type={type} variant={variant} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    disabled: PropTypes.bool
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    variant: 'primary',
    disabled: false
};

export default Button;
