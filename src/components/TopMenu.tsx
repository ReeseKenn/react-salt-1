import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'

interface Props {
  onMaskClick?: () => void
}

export const TopMenu: React.FC<Props> = (props) => {
  const { onMaskClick } = props
  return (
    <>
      <div fixed top-0 left-0 w-100vw h-screen className="bg-black:60" onClick={onMaskClick}/>
      <div fixed top-0 left-0 w-60vw max-w-20em h-screen flex flex-col bg-primary>
          <CurrentUser className='grow-0 shrink-0'/>
          <Menu className='grow-1 shrink-1'/>
        </div>
    </>
  )
}
