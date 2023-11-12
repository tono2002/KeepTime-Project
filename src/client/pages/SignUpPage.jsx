import Logo from '../components/Logo';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Skyline from '../images/skyline.svg';
import Button from '../components/Button';
import NavBar from '../components/Navbar';
import Card from '../components/Card';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    loader.authProvider.register(data);
  };

  useEffect(() => {
    if (loader.authProvider.isAuth) {
      navigate('/projects');
    }
  }, [loader.authProvider.isAuth]);

  const hidden = 'invisible label-text-alt';
  const visible = 'label-text-alt';

  return (
    <>
      <div className="flex flex-col items-center gap-2 h-[100vh] pt-20 overflow-hidden bg-transparent">
        <NavBar authContext={loader.authProvider} />
        <div className="relative flex flex-col items-center justify-center">
          <Logo
            className={
              'absolute top-0 md:-top-5 text-6xl  md:text-8xl p-5 font-bold z-10 max-w-max90'
            }
          />
          <img src={Skyline} className="w-full pt-20 md:max-w-max50" />
        </div>

        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="pb-1 pl-4 label">
              <span className="text-neutral-content label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="w-full p-2 pl-4 bg-white border border-gray-100 rounded-md shadow-md input-ghost bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-10px focus:outline-accent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] "
              {...register('name')}
            />
            <label className="pl-4 label">
              <span className={errors.name ? visible : hidden}>
                This is required
              </span>
            </label>

            <label className="pb-1 pl-4 label">
              <span className="text-neutral-content label-text">Email</span>
            </label>
            <input
              id="email"
              type="text"
              placeholder="Type here"
              className="w-full p-2 pl-4 bg-white border border-gray-100 rounded-md shadow-md input-ghost bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-10px focus:outline-accent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] "
              {...register('email')}
            />
            <label className="pl-4 label">
              <span className={errors.email ? visible : hidden}>
                This is required
              </span>
            </label>

            <label className="pt-2 pb-0 pl-4 label">
              <span className="label-text text-neutral-content">Password</span>
            </label>
            <input
              placeholder="Type here"
              className="w-full p-2 pl-4 bg-white border border-gray-100 rounded-md shadow-md input-ghost bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-10px focus:outline-accent"
              type="password"
              name="password"
              autoComplete="on"
              {...register('password')}
            />
            <label className="label">
              <span className={errors.password ? visible : hidden}>
                Min. of 8 characters
              </span>
            </label>

            <label className="pt-2 pb-0 pl-4 label">
              <span className="label-text text-neutral-content">
                Confirm Password
              </span>
            </label>
            <input
              placeholder="Type here"
              className="w-full p-2 pl-4 bg-white border border-gray-100 rounded-md shadow-md input-ghost bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-10px focus:outline-accent"
              type="password"
              name="confirm"
              autoComplete="on"
              {...register('confirm')}
            />
            <label className="label">
              <span className={errors.confirm ? visible : hidden}>
                Min. of 8 characters
              </span>
            </label>
            <div className="flex pt-4 justify-evenly">
              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
            <p className="w-full pt-4 text-center">
              Or click{' '}
              <span>
                {
                  <Link to={'/'} from={'/signup'} className="text-accent">
                    here
                  </Link>
                }
              </span>{' '}
              to login up
            </p>
          </form>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
