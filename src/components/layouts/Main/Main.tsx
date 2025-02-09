import { Outlet } from 'react-router';
// import { Toaster } from 'sonner';

const Main = () => {
  return (
    <main>
      <h1>header</h1>
      <Outlet />
      {/* <Toaster position="top-center" richColors /> */}
      <h1>footer</h1>
    </main>
  );
};

export default Main;
