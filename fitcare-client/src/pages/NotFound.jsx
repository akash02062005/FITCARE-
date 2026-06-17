import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import notFoundImage from '../assets/images/404-illustration.png';

const NotFound = () => {
  return (
    <PageWrapper>
      <section className="section-light text-center">
        <div className="container">
          <img
            src={notFoundImage}
            alt="404 Not Found"
            className="img-fluid rounded shadow mb-4"
            style={{ maxHeight: '300px' }}
          />

          <h1 className="display-4 fw-bold text-danger">404</h1>
          <p className="lead">Oops! The page you're looking for doesn't exist.</p>

          <Link to="/" className="btn btn-primary mt-3">
            ⬅ Go Back Home
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

export default NotFound;
