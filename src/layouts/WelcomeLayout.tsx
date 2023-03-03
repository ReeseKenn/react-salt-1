import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import logo from '../assets/icons/salt.svg'
import { useSwipe } from '../hooks/useSwipe'

export const WelcomeLayout: React.FC = () => {
  const transition = useRef(false)
  const map = useRef<Record < string, ReactNode >>({})
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const main = useRef(null)
  const { direction } = useSwipe(main, { onTouchStart: e => e.preventDefault() })
  const linkMap: Record<string, string> = {
    '/welcome/1': '/welcome/2',
    '/welcome/2': '/welcome/3',
    '/welcome/3': '/welcome/4',
    '/welcome/4': '/start'
  }
  const nav = useNavigate()
  useEffect(() => {
    if (transition.current === true) { return }
    if (direction === 'left') {
      transition.current = true
      nav(linkMap[location.pathname])
    }
  }, [direction])
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    onRest: () => {
      transition.current = false
    },
    config: { duration: 500 }
  })
  return (
    <div flex flex-col items-center h-screen>
      <header text-center m-50px>
        <img src={logo} w-54px h-54px/>
        <h2 text-primary>海盐账本</h2>
      </header>
      <main grow-1 relative w="100%" ref={main}>
        {transitions((style, pathname) =>
        <animated.div key={pathname} style={style} absolute w="100%" h="100%">
          <div grow-1 flex flex-col justify-center items-center >
            {map.current[pathname]}
          </div>
        </animated.div>
        )}
      </main>
      <footer h-30vh w="100%" p-16px text-center>
        {/* TODO: 重构此处重复代码 */}
        <Link to='/welcome/1' style={{ background: location.pathname === '/welcome/1' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        <Link to='/welcome/2' style={{ background: location.pathname === '/welcome/2' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        <Link to='/welcome/3' style={{ background: location.pathname === '/welcome/3' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        <Link to='/welcome/4' style={{ background: location.pathname === '/welcome/4' ? '#3c6382' : '' }}
          bg-primary w-30px h-4px inline-block m-1/>
        {/* 如果当前路由是/welcome/4,展示button */}
        {location.pathname === '/welcome/4'
          && <Link to="/start">
            <div mt-16px>
              <button s-btn w='100%'>开启应用</button>
            </div>
          </Link>}
      </footer>
  </div>
  )
}
