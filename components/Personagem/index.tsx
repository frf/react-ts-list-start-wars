import React, {useState} from 'react';
import {
  Label
} from './style.elements';

interface IProps{
    color: string;
    name: string;
}

const Personagem : React.FC<IProps> = ({name, color}) => {

  return (
      <Label color={color}>
        {name} 
      </Label>
  );
}
export default Personagem;