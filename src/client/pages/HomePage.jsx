import Logo from '../components/Logo';
import { Link } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <>
      <div className="h-[calc(100vh-4rem)] hero bg-base-100">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <Logo className={'text-7xl lg:text-8xl font-bold'} />
            <p className="py-6 text-1xl lg:text-2xl">
              Unlock your productivity potential.
              <br />
              Your Time. Your Way.
            </p>
            <div className="flex justify-evenly">
              <Link to={'/login'}>
                <button className="w-24 btn btn-primary">Login</button>
              </Link>

              <Link to={'/signup'}>
                <button className="w-24 btn btn-primary">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
