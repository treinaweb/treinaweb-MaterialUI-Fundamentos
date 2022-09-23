import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import isPropValid from "@emotion/is-prop-valid";

export const FooterStyled = styled("footer")`
  padding: ${({ theme }) => theme.spacing(5, 0)};
`;

export const TitleStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isRed",
})`
  text-align: center;
`;

export const SubtitleStyled = styled(Typography)`
  text-align: center;
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
