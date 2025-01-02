import styled from "@emotion/styled";

export const FlexContainer = styled.div((props) => ({
    display: "flex",
    flexDirection: props.flexDirection || 'column',
    alignItems: 'center',
    flexWrap: "wrap",
    margin: "20px",
    width: props.width || 'auto',
    "&>*": {
        flexBasis: getBasis(props) || props.basis || 'auto',
    },
    "@media(min-width: 500px)": {
        "&>*": {
        flexBasis: getBasis(props, "sm"),
        },
    },
    "& button": {
        marginTop: "auto",
    },
    "@media(min-width: 750px)": {
        "&>*": {
        flexBasis: getBasis(props, "md"),
        },
    },
    "@media(min-width: 900px)": {
        "&>*": {
        flexBasis: getBasis(props, "lg"),
        },
    },
    justifyContent: props.justifyContent || 'space-evenly',
    }));

function getBasis(props, size) {
    const prefix = size ? `${size}-` : "";
    if (props[`${prefix}third`]) return "calc(100% / 3 - 10px)";
    if (props[`${prefix}quarter`]) return "calc(25% - 10px)";
    if (props[`${prefix}half`]) return "calc(50% - 10px)";
    if (props[`${prefix}full`]) return "calc(100% - 10px)";
}
