import React, { useState } from 'react';
import { FormContainer, Label, Select, SaveButton } from './Dropdown.styles';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected Option: ${selectedOption}`);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="Notifications">Notification Settings: </Label>
            <Select id="Notifications" name="notifications" value={selectedOption} onChange={handleDropdownChange}>
                <option value="">- Select -</option>
                <option value="DND">Do Not Disturb</option>
                <option value="Mentions">Mentions Only</option>
                <option value="See All">All</option>
            </Select>

            
            <Label><SaveButton variant="grey">Save Changes</SaveButton></Label>
           
        </FormContainer>
    );
};

export default Dropdown;
