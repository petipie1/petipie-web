import styled from "styled-components";

const Wrapper = styled.div`
  .step-count {
    display: inline-flex;
    &__step {
      height: 40px;
      display: inline-flex;
      border: 1px solid black;
      width: 100%;
      text-align: center;
      justify-content: center;
      cursor: pointer;
      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    &__value {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      width: 40px;
      text-align: center;
    }
  }
`;

export default Wrapper;
