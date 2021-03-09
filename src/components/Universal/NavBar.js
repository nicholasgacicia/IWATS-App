import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="header">
      <nav>
        <ul>
          <Link to='/'>Home</Link>{'  '}
          <Link to='/shows'>Shows</Link>{'  '}
          <Link to='/addshow'>Add Show</Link>{'  '}
          <Link to='/myshows'>My Shows</Link>
        </ul>
      </nav>
    </header>
  );
}
