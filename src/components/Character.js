import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';

const Character = (props) => {
    console.log(props);
  

return (
    <div className = 'character'>
        {props.data.name}
        {props.data.birth_year}
</div>
);
}

export default Character;