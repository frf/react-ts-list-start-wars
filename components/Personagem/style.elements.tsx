import styled from 'styled-components';

interface LabelProp {
  color?: any;
}

export const Label = styled.h3<LabelProp>`
  color: ${props => props.color || "black"};
`;