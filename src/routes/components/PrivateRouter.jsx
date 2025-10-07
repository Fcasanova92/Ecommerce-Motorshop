// PrivateRouter.jsx
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router";
import { Spinner } from "@/components/Spinner";
import { PathConfig } from "@/utils/pathConfig";

export const PrivateRouter = ({ children }) => {
  const { loading, isOnline } = useAuth();

  if (loading) return <Spinner />; // mientras carga

  if (!isOnline) return <Navigate to={PathConfig.Login} replace />;

  return children;
};