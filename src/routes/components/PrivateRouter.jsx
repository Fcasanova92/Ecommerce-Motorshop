// PrivateRouter.jsx
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router";
import { Spinner } from "@/components/Spinner";
import { PathConfig } from "@/utils/pathConfig";

export const PrivateRouter = ({ children }) => {
  const { currentUser, isOnline } = useAuth();

  console.log(currentUser)

  if (currentUser === null) return <Spinner />; // mientras carga

  if (!isOnline) return <Navigate to={PathConfig.Login} replace />;

  return children;
};