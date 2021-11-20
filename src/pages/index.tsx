import type { NextPage } from 'next';

import { Container, Content, ImgBanner } from '@/styles/Home';
import { Logo } from '@/components/Logo';
import { Facebook, Instagram, WhatsApp } from '@/assets/icons';

const Home: NextPage = () => (
  <Container>
    <header>
      <div>
        <Logo />
        <h1>Montanha Sitio Camping</h1>

        <div>
          <button type="button">
            <p>Historia</p>
          </button>
          <span>
            <Instagram />
            <Facebook />
            <WhatsApp />
          </span>
        </div>
      </div>
    </header>
    <Content>
      <ImgBanner src="/banner.svg" alt="" />
      <div>
        <h2>lagos</h2>
      </div>
    </Content>
  </Container>
);

export default Home;
