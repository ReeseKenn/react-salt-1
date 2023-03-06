import { Navigate } from 'react-router-dom'
import { useLocalStore } from '../stores/useLocalStore'

export const Root: React.FC = () => {
  const { hasReadWelcome } = useLocalStore()
  if (hasReadWelcome) {
    return <Navigate to="/start" />
  }
  else {
    return <Navigate to="/welcome/1" />
  }
}
