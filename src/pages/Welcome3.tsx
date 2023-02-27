import { NavLink } from 'react-router-dom'

export const Welcome3: React.FC = () => {
  return (
    <div>
      <header hover:b-1 hover:b-red b-primary b-3 text-primary flex>
         海盐账本
      </header>
      <NavLink to="/welcome/4">下一页</NavLink>
      </div>
  )
}
