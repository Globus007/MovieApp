import './globals.css';
import { Header } from '../components/Header/Header';

export default async function RootLayout({ search, movieList }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {search}
        {movieList}
      </body>
    </html>
  );
}
