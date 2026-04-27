import { HistoryView } from "@/screens/History/History.view";
import { useHistoryViewModel } from "@/screens/History/useHistory.viewModel";

export default function History() {
  const viewModel = useHistoryViewModel();

  return <HistoryView {...viewModel} />;
}
