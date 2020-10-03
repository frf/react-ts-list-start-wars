import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
      align-items: flex-start;

  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;


interface ButtonProps {
  primary?: string;
  fontBig?: string;
  big?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: #0467FB;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 30%;
  height: 30px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #4B59F7;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

