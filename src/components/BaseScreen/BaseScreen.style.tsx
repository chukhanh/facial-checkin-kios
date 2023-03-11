import styled from 'styled-components';

export const ReScaleBaseScreen = styled.div`
  transform: scale(
    ${props => (props.scaleScreen == 'sm' ? 0.2 : 1.0)},
    ${props => (props.scaleScreen == 'sm' ? 0.2 : 1.0)}
  );
`;

// const corner = styled.div`
//   width: 2rem;
//   height: 2rem;
// `;

// export const StyledBaseScreen = styled.div`
//   position: relative;
//   width: 22.4rem;
//   height: 12.6rem;
//   margin: auto;

//   background: rgba(255, 255, 255, 0.15);
//   border: 0.1rem solid rgba(255, 255, 255, 0.7);
//   box-sizing: border-box;
// `;

// export const StyledCornerUpLeft = styled.div`
//   ${corner}

//   position: absolute;
//   top: 0;
//   left: 0;
//   border-top: 0.1rem solid white;
//   border-left: 0.1rem solid white;
// `;

// export const StyledCornerUpRight = styled.div`
//   ${corner}

//   position: absolute;
//   top: 0;
//   right: 0;
//   border-top: 0.1rem solid white;
//   border-right: 0.1rem solid white;
// `;

// export const StyledCornerDownLeft = styled.div`
//   ${corner}

//   position: absolute;
//   bottom: 0;
//   left: 0;
//   border-bottom: 0.1rem solid white;
//   border-left: 0.1rem solid white;
// `;

// export const StyledCornerDownRight = styled.div`
//   ${corner}

//   position: absolute;
//   bottom: 0;
//   right: 0;
//   border-bottom: 0.1rem solid white;
//   border-right: 0.1rem solid white;
// `;
