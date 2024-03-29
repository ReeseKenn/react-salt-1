import { useEffect } from 'react'
import pic from '../assets/icons/w4.svg'
import { useLocalStore } from '../stores/useLocalStore'

export const Welcome4: React.FC = () => {
  const { setHasRead } = useLocalStore()
  useEffect(() => {
    setHasRead(true)
  }, [])

  return <>
      <img src={pic}/>
      <h3 text-primary>云备份，不惧数据丢失</h3>
    </>
}
