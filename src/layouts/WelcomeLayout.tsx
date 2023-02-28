import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/icons/salt.svg'

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record < string, ReactNode >>({})
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 500 }
  })
  return (
    <div flex flex-col items-center h-screen>
      <header text-center m-50px>
        <img src={logo} w-54px h-54px/>
        <h2 text-primary>海盐账本</h2>
      </header>
      <div grow-1>
        {transitions((style, pathname) =>
        <animated.div key={pathname} style={style}>
          <div style={{ textAlign: 'center' }}>
            {map.current[pathname]}
          </div>
        </animated.div>
        )}
      </div>
      <footer h-100px>
        {/* TODO: 重构此处重复代码 */}
        <Link to='/welcome/1' style={{ background: location.pathname === '/welcome/1' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        <Link to='/welcome/2' style={{ background: location.pathname === '/welcome/2' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        <Link to='/welcome/3' style={{ background: location.pathname === '/welcome/3' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        <Link to='/welcome/4' style={{ background: location.pathname === '/welcome/4' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
      </footer>
  </div>
  )
}
