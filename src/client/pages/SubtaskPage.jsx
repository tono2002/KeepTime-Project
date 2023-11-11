import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/Navbar';

const SubtaskPage = ({ useRouteContext }) => {
  const { queryOptions, authContext } = useRouteContext();
  const { data, isLoading, isError } = useQuery(queryOptions);
  console.log(data.data);
  return (
    <>
      <NavBar authContext={authContext} location="Subtask" />
      <div
        className={`flex pb-32 pt-24 flex-col flex-1 h-[100vh] w-full gap-2 p-4 overflow-y-scroll md:items-center scrollbar-hide md:scrollbar-default `}
      >
        <div>Id: {data.data.id}</div>
        <div>title: {data.data.title}</div>
        <div>description: {data.data.description}</div>
      </div>
    </>
  );
};

export default SubtaskPage;
