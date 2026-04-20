import { CountdownOverlayView } from './CountdownOverlay.view'
import { useCountdownOverlayViewModel } from './useCountdownOverlay.viewModel'

export interface CountdownOverlayProps {
  countdownVisible: boolean
  onComplete: () => void
}

export const CountdownOverlay = ({
  countdownVisible,
  onComplete,
}: CountdownOverlayProps) => {
  const viewModel = useCountdownOverlayViewModel({
    countdownVisible,
    onComplete,
  })
  return <CountdownOverlayView {...viewModel} />
}