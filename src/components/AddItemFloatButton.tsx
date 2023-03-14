import add from '../assets/icons/add.svg'
export const AddItemFloatButton: React.FC = () => {
  return (
    <button p-4px w-56px h-56px bg-primary rounded="50%" b-none text-white
    text-6xl fixed bottom-16px right-16px flex justify-center items-center>
      <img src={add} max-w-28px max-h-28px />
    </button>
  )
}
