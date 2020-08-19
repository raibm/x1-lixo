import React from 'react';

import { Container, Banner } from './styles';


interface DuelistProps {
  img: string;
}

const Duelist: React.FC<DuelistProps> = (props) => {
  return (
    <Container>
      <Banner>
        <img src={props.img} alt=""/>
      </Banner>
    </Container>
  );
}

export default Duelist;