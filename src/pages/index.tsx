import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { Header } from '@/components/Header';
import { Container, Content, ImgBanner, Highlights } from '@/styles/homeStyles';
import { CarrosselIgm } from '@/components/CarrosselIgm';

interface HomeProps {
  highlights: Array<{
    id: string;
    title: string;
    images?: Array<string>;
    description: string;
  }>;
}
const Home: NextPage<HomeProps> = ({ highlights }: HomeProps) => {
  const data = highlights;
  return (
    <Container>
      <Header />
      <Content>
        <ImgBanner src="/banner.svg" alt="banner" />
        <Highlights>
          {data.map(({ images, title, description }, index) => {
            return (
              <div className="Highlight" key={String(index)}>
                <h1>{title}</h1>
                <CarrosselIgm images={images} />
                <aside>
                  <p>{description}</p>
                </aside>
              </div>
            );
          })}
        </Highlights>
      </Content>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const highlights: Array<{
    id: string;
    title: string;
    images?: Array<string>;
    description: string;
  }> = [
    {
      id: '1',
      title: 'Piscina',
      images: [
        './piscina.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq1eJmubZ_FeAB46e7gjI8Xsm7T0SLWNgCTMPkKOQ4MhV_nPO6ZP-uSD1V2GQrD-2tH4&usqp=CAU',
        './piscina.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq1eJmubZ_FeAB46e7gjI8Xsm7T0SLWNgCTMPkKOQ4MhV_nPO6ZP-uSD1V2GQrD-2tH4&usqp=CAU',
      ],
      description:
        ' piscina 1,65 de profundidade, 10 de largura 12 de complemento. Piscina de agua natural',
    },
    {
      id: '2',
      title: 'lago',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq1eJmubZ_FeAB46e7gjI8Xsm7T0SLWNgCTMPkKOQ4MhV_nPO6ZP-uSD1V2GQrD-2tH4&usqp=CAU',
      ],
      description:
        '10 de largura por 22 de complemento. Contém:  tilápia, carpa curimbatá',
    },
  ];

  return { props: { highlights } };
};
