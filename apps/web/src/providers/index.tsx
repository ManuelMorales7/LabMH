import router from '../routes';
import ReactQueryProvider from './ReactQueryProvider';
import { RouterProvider } from 'react-router-dom';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
      {children}
    </ReactQueryProvider>
  );
};

export default Providers;
