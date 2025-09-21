
import { Spinner } from '@/components/Spinner';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router';

export const PrivateRouter = ({ children }) => {
  const {isLoading, isLogin } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};