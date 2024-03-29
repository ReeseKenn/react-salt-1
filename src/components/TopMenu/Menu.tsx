import styled from 'styled-components'
import { Icon } from '../Icon'

interface Props {
  className?: string
}

const MyIcon = styled(Icon)`
    width: 32px; height: 32px; margin-right: 16px;
`

export const Menu: React.FC<Props> = ({ className }) => {
  return (
      <ul className={className} bg-white text-20px py-16px
        children-flex children-items-center children-px-16px
        children-py-8px children-mb-4px>
        <li><MyIcon name="chart" />图表统计</li>
        <li><MyIcon name="export" />导出数据</li>
        <li><MyIcon name="burget" />预算管理</li>
        <li><MyIcon name="category" />自定义分类</li>
      </ul>
  )
}
