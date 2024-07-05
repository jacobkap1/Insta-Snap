import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => {
        switch (props.variant) {
            case 'blue':
                return '#007bff'; 
            case 'grey':
                return '#6c757d'; 
            case 'red':
                return '#dc3545'; 
            default:
                return '#007bff'; 
        }
    }};
    color: white;
    &:hover {
        background-color: ${props => (props.variant === 'primary' ? '#0056b3' : '#5a6268')};
    }
    
`;
