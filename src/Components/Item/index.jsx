import React from 'react';
import styled from  'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tipo = styled.span`
  font-weight: bold;
`;
const Loja = styled.span`
  color: ${ ({theme}) => theme.text };
  opacity: 75%;
`;
const Valor = styled.span`
  color: #FF0000;
`;

export default ({type, from, value}) => {
  return(
    <Item>
      <Tipo>
        {type}
      </Tipo>
      <Loja>
        {from}
      </Loja>
      <Valor>
        R$ {value}
      </Valor>
    </Item>
  )
}