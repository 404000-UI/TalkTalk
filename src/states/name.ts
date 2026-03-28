import { create } from "zustand";

interface NameStore {
  name: string;
  setName: (name: string) => void;
}

const useNameStore = create<NameStore>((set) => ({
  name: "",
  setName: (name: string) => {
    set(() => ({ name: name }));
    localStorage.setItem("name", name);
  },
}));

export default useNameStore;
