import create from 'zustand'

interface Local {
  hasReadWelcome: boolean
  setHasRead: (val: boolean) => void
}
const initHasRead = localStorage.getItem('hasReadWelcomes') === 'yes'
export const useLocalStore = create<Local>(set => ({
  hasReadWelcome: initHasRead,
  setHasRead: (val: Boolean) => {
    const data = val ? 'yes' : 'no'
    localStorage.setItem('hasReadWelcomes', data)
    set(() => ({ hasReadWelcome: data === 'yes' }))
  },
}))
