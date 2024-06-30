import React, { useState } from 'react';
import { Input, Label, InputContainer } from './Textbox.styles';

const Textbox = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <InputContainer>
            <Label></Label>
            <Input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search..."
            />
        </InputContainer>
    );
};

export default Textbox;
