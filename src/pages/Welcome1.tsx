import { NavLink } from 'react-router-dom'
import c from 'classnames'
import s from './Welcome.module.scss'

export const Welcome1: React.FC = () => {
  return (
    <div className={c(s.wrapper, s.test)}>
      <header>
        <h2>海盐账本</h2>
      </header>
      <NavLink to="/welcome/2">下一页</NavLink>
    </div>
  )
}
