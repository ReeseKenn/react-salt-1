import { Navigate } from 'react-router-dom'

export const Root: React.FC = () => {
  const hasRead = localStorage.getItem('hasReadWelcomes') === 'yes'
  if (hasRead) {
    return <Navigate to="/start" />
  }
  else {
    return <Navigate to="/welcome/1" />
  }
}
