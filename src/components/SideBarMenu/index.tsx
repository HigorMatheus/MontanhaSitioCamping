import { useState } from 'react';
import { useRouter } from 'next/router';
import { MenuIcon } from '@/assets/icons/menu';

import { XIcon } from '@/assets/icons/x';
import { Container, MobileMenu, ButtonMenu } from './styles';

export function SideBarMenu() {
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
    <>
      <Container>
        <nav>
          {pages.map((page) => (
            <button type="button" onClick={() => handleNavigation(page.link)}>
              <p>{page.title}</p>
            </button>
          ))}
        </nav>
      </Container>
      <ButtonMenu onClick={handleMenu}>
        <MenuIcon />
      </ButtonMenu>
      <MobileMenu isActive={isShowMenu}>
        <section>
          <button type="button" onClick={handleMenu}>
            <XIcon />
          </button>
          {pages.map((page) => (
            <button type="button" onClick={() => handleNavigation(page.link)}>
              <p>{page.title}</p>
            </button>
          ))}
        </section>
      </MobileMenu>
    </>
  );
}
