import s from './TimeRangePicker.module.scss'
export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
interface Props {
  selected: TimeRange
  onSelected: (selected: TimeRange) => void
}
export const TimeRangePicker: React.FC<Props> = ({ selected, onSelected }) => {
  const timeRanges: { key: TimeRange; label: string }[] = [
    { key: 'thisMonth', label: '本月' },
    { key: 'lastMonth', label: '上月' },
    { key: 'thisYear', label: '今年' },
    { key: 'custom', label: '自定义时间' },
  ]
  return (
  <ol flex text-white cursor-pointer children-p-16px>
    {timeRanges.map(item => <li key={item.key} className={item.key === selected ? s.selected : ''}
    onClick={() => { onSelected(item.key) }}>{item.label}
    </li>)}
  </ol>
  )
}
