import React from 'react';

import { Container, Banner, VersusTitleLeftLetter, VersusTitleRightLetter, BattleDate, VersusBox } from './styles';

const Versus: React.FC = () => {
  return (
    <Container>
      <Banner>
        <VersusBox>
        <VersusTitleLeftLetter>V</VersusTitleLeftLetter>
          <VersusTitleRightLetter>S</VersusTitleRightLetter>
        </VersusBox>
          <BattleDate>
            21/09/2020
            <br />
            <p id="hour">21:00</p>
          </BattleDate>
      </Banner>
    </Container>
  );
}

export default Versus;