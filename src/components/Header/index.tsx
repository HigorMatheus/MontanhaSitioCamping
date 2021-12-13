import { useState } from 'react';
import { useRouter } from 'next/router';
import { Facebook, IconX, Instagram, MenuIcon, WhatsApp } from '@/assets/icons';
import { Logo } from '../Logo';
import { Container, Menu, ButtonMenu, MobileMenu } from './styles';

export const Header = () => {
  const route = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleMenu = () => {
    setIsShowMenu((state) => !state);
  };

  const handleNavigation = (url: string) => {
    setIsShowMenu(false);
    route.push(url);
  };
  const pages = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Historia',
      link: '/historia',
    },
  ];
  return (
    <Container>
      <div>
        <Logo />
        <h1>Montanha Sitio Camping</h1>

        <span>
          <Instagram />
          <Facebook />
          <WhatsApp />
          <ButtonMenu onClick={handleMenu}>
            <MenuIcon />
          </ButtonMenu>
        </span>
      </div>
      {/* <SideBarMenu /> */}
      <Menu>
        <nav>
          {pages.map((page) => (
            <button
              key={page.title}
              type="button"
              onClick={() => handleNavigation(page.link)}
            >
              <p>{page.title}</p>
            </button>
          ))}
        </nav>
      </Menu>

      <MobileMenu isActive={isShowMenu}>
        <section>
          <button type="button" onClick={handleMenu}>
            <IconX />
          </button>
          {pages.map((page) => (
            <button
              key={page.title}
              type="button"
              onClick={() => handleNavigation(page.link)}
            >
              <p>{page.title}</p>
            </button>
          ))}
        </section>
      </MobileMenu>
    </Container>
  );
};
