import { Icon } from './Icon'

export const AddItemFloatButton: React.FC = () => {
  return (
    <button p-4px w-56px h-56px bg-primary rounded="50%" b-none text-white
    text-2xl fixed bottom-16px right-16px flex justify-center items-center>
      {/* <svg style={{ fill: '#fff', width: '1.2em', height: '1.2em' }}>
        <use xlinkHref="#add"></use>
      </svg> */}
      <Icon className='c-white' name="add"/>
    </button>
  )
}
