import styled from "@emotion/styled";

export const Img = styled.img`
  max-Width: 100%;
  margin: 5px auto;
  clip-path: ${props => (props.clipPath ? props.clipPath : 'none')};
`