import styled from "styled-components";

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 100%;
  border: none;
  background-color: #fff;
  color: #fff;
  position: relative;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  &.slider-active {
    opacity: 0.5;
  }
  svg {
    position: absolute;
    font-size: 5em;
    @media screen and (max-width: 768px) {
      font-size: 2em;
    }
    font-weight: 600;
    opacity: 0;
  }
  .active {
    opacity: 1;
  }
`;
