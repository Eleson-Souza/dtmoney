import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styled";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.onOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
