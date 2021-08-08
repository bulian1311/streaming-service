import styled from 'styled-components';

export const StyledControls = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledRange = styled.input`
  -webkit-appearance: none;

  ::-webkit-slider-runnable-track {
    height: 4px;
    background: var(--text-color);
    border-radius: 5px;
  }

  /* ::-moz-range-track {
    height: 5px;
  }
  
  ::-ms-track {
    height: 5px;
  } */

  ::-webkit-slider-thumb {
    height: 12px;
    width: 12px;
    border-radius: 25px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
    background: var(--text-color);
  }
`;
