import { FooterStyled, TitleStyled, SubtitleStyled } from "./footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <TitleStyled isRed={false} component="h4" variant="h6">
        Footer
      </TitleStyled>
      <SubtitleStyled paragraph variant="subtitle2">
        Laborum culpa ex commodo.
      </SubtitleStyled>
      <SubtitleStyled>
        Copyright <span>Seu Website</span> 2022
      </SubtitleStyled>
    </FooterStyled>
  );
}

export default Footer;
