import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

interface Props {
  userAgent?: string;
}
const Home: NextPage<Props> = ({ userAgent }: Props) => {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
