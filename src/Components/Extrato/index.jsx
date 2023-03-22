import React from 'react';
import { Box, Btn } from '../UI/index';
import { extratoLista } from '../../info';
import Items from '../Items';

export const Extrato = () => {
  return(
    <Box>
      {extratoLista.updates.map(({id, type, from, value, date}) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date}/>
        )
      })}
      <Btn>Ver mais</Btn>
    </Box>
  );
}