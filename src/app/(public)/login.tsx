import { AuthView } from "@/screens/auth/Auth.view";
import { useAuthViewModel } from "@/screens/auth/useAuth.viewModel";

export default function Login() {
  const viewModel = useAuthViewModel();

  return <AuthView {...viewModel} />;
}
