import styled from 'styled-components';

export const FormContainer = styled.form`
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
`;

export const Label = styled.label`
    margin-left: 10px;
`;

export const Select = styled.select`
    margin-left: 10px;
`;

export const SaveButton = styled.button`
    margin-top: 10px;
    padding: 6px 10px;
    font-size: 12px;
    background-color: ${props => (props.variant === 'grey' ? '#808080' : '#007bff')};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: ${props => (props.variant === 'grey' ? '#A9A9A9' : '#0056b3')};
    }
`;