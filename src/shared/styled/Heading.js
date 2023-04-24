import styled from "@emotion/styled";

const GenericHeading = styled.h1((props) => ({
  color: props.color ? props.theme.palette[props.color].main : props.theme.palette.secondary.main,
  textAlign: "center",
}));

export const H1 = styled(GenericHeading)().withComponent("h1");
export const H2 = styled(GenericHeading)().withComponent("h2");
export const H3 = styled(GenericHeading)().withComponent("h3");
export const H4 = styled(GenericHeading)().withComponent("h4");
export const H5 = styled(GenericHeading)().withComponent("h5");
export const H6 = styled(GenericHeading)().withComponent("h6");
