import pic from '../assets/icons/w1.svg'
import add from '../assets/icons/add.svg'
export const StratPage: React.FC = () => {
  return <div>
  <div flex justify-center items-center>
    <img mt-16vh mb-16vh width="128" height="128" src={pic} />
  </div>
  <div px-16px>
    <button s-btn w='100%'>开始记账</button>
  </div>
  <button p-4px w-56px h-56px bg-primary rounded="50%" b-none text-white
    text-6xl fixed bottom-16px right-16px flex justify-center items-center>
    <img src={add} max-w-28px max-h-28px />
  </button>
</div>
}