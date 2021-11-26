import { Facebook, Instagram, WhatsApp } from '@/presentation/assets/icons';
import { Logo } from '../Logo';
import { SideBarMenu } from '../SideBarMenu';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <Logo />
        <h1>Montanha Sitio Camping</h1>

        <span>
          <Instagram />
          <Facebook />
          <WhatsApp />
        </span>
      </div>
      <SideBarMenu />
    </Container>
  );
};
