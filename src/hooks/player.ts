import { create } from "zustand";

interface usePlayerActionStore {
  isPlayed: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const usePlayerAction = create<usePlayerActionStore>((set) => ({
  isPlayed: false,
  onPlay: () => set({ isPlayed: true }),
  onPause: () => set({ isPlayed: false }),
  onNext: () => set({ isPlayed: true }),
  onPrev: () => set({ isPlayed: false }),
}));

export default usePlayerAction;
