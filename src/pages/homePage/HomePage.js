import NavBar from '../../components/NavBar/NavBar';
import './HomePage.scss';

const HomePage = () => (
  <div className="home-outter-container">
    <NavBar />
    <div className="profile-container fade-in">
      <h1 className="profile-container-heading">
        You are an
        {' '}
        <span>owner</span>
      </h1>
      <p className="profile-container-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam
        asperiores dolores, aliquid dolor impedit nam recusandae vero assumenda
        sed architecto similique, laboriosam, debitis error. Sunt laborum
        tempore eum sit.
      </p>
    </div>
  </div>
);

export default HomePage;
