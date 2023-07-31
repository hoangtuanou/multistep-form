import { create } from 'zustand'

const useFormStore = create((set) => ({
  data: {},
  updateFrom: (newData) => set({ data: newData }),
  resetForm: () => set({ data: {} }),
}))

export default useFormStore
