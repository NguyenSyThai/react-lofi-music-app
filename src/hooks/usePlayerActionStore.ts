import create from "zustand";

interface PlayerState {
  currentSongs: any[]; // Replace `any[]` with your specific type
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any; // Replace `any` with your specific type
  genreListId: string;
}

interface PlayerStore extends PlayerState {
  setActiveSong: (payload: { song: any; data?: any; i: number }) => void;
  nextSong: (index: number) => void;
  prevSong: (index: number) => void;
  playPause: (isPlaying: boolean) => void;
  selectGenreListId: (genreListId: string) => void;
}

const usePlayerStore = create<PlayerStore>((set) => ({
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",

  setActiveSong: (payload) =>
    set((state) => {
      state.activeSong = payload.song;
      state.currentSongs =
        payload.data?.tracks?.hits || payload.data?.properties || payload.data;
      state.currentIndex = payload.i;
      state.isActive = true;
    }),

  nextSong: (index) =>
    set((state) => {
      state.activeSong =
        state.currentSongs[index]?.track || state.currentSongs[index];
      state.currentIndex = index;
      state.isActive = true;
    }),

  prevSong: (index) =>
    set((state) => {
      state.activeSong =
        state.currentSongs[index]?.track || state.currentSongs[index];
      state.currentIndex = index;
      state.isActive = true;
    }),

  playPause: (isPlaying) => set({ isPlaying }),

  selectGenreListId: (genreListId) => set({ genreListId }),
}));

export default usePlayerStore;
