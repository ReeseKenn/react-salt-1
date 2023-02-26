import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  color: #60A3BC;
  &:hover{
    border: 1px solid #60A3BC;
  }
`
const RedHeader = styled(Header)`
  background-color: #999;
`
export const Welcome2: React.FC = () => {
  return (
    <div>
      <Header>
        海盐账本
      </Header>
      <RedHeader>
        <NavLink to="/welcome/3">下一页</NavLink>
      </RedHeader>
      </div>
  )
}
