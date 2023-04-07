import { useState } from 'react'
import styled from 'styled-components'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { TimeRangePicker } from '../components/TimeRangePicker'
import type { TimeRange } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { TopMenu } from '../components/TopMenu'
import { useMenuStore } from '../stores/useMenuStore'
import { ItemsList } from './ItemsPage/ItemsList'
import { ItemsSummary } from './ItemsPage/ItemsSummary'

const Div = styled.div`
  background: linear-gradient(0deg, #82ccdd 0%, #60A3BC 100%);
`

export const ItemsPage: React.FC = () => {
  const [timeRage, setTimeRange] = useState<TimeRange>('thisMonth')
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: 'expenses',
      amount: 2800,
      user_id: 1,
      tag_ids: [3],
      happened_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z'
    }, {
      id: 2,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happened_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z'
    }
  ])
  const { visible } = useMenuStore()
  return (
    <div>
      <Div>
        <TopNav />
        <TimeRangePicker selected={timeRage} onSelected={setTimeRange}/>
      </Div>
      <ItemsSummary/>
      <ItemsList items={items}/>
      <AddItemFloatButton />
      {visible ? <TopMenu/> : null}
    </div>
  )
}
