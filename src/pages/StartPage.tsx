import useSWR from 'swr'
import pic from '../assets/icons/w1.svg'
import { ajax } from '../lib/ajax'
import { AddItemFloatButton } from '../components/AddItemFloatButton'

const fetcher = (path: string) => {
  return ajax.get(path)
}
export const StratPage: React.FC = () => {
  const { data: meData, error: meError } = useSWR('/api/v1/userInfo', (path) => {
    return ajax.get(path)
  })
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, (path) => {
    return ajax.get(path)
  })
  console.log(meData, meError, itemsData, itemsError)
  return <div>
  <div flex justify-center items-center>
    <img mt-16vh mb-16vh width="128" height="128" src={pic} />
  </div>
  <div px-16px>
    <button s-btn w='100%'>开始记账</button>
  </div>
  <AddItemFloatButton/>
</div>
}
