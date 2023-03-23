import styled from 'styled-components'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { Topnav } from '../components/Topnav'
import { ItemsList } from './ItemsPage/ItemsList'
import { ItemsSummary } from './ItemsPage/ItemsSummary'

const Div = styled.div`
  background: linear-gradient(0deg, #82ccdd 0%, #60A3BC 100%);
`

export const ItemsPage: React.FC = () => {
  return (
    <div>
      <Div>
        <Topnav />
        <TimeRangePicker/>
      </Div>
      <ItemsSummary/>
      <ItemsList/>
      <AddItemFloatButton />
    </div>
  )
}
