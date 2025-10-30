import type { StateCreator } from "zustand";

export interface UserSlice {
  typoraMd: string;
  setTyporaMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  typoraMd: `# Hi 👋\nThis is a simple clone of [Typora](https://typora.io/). Built on top of [Milkdown](https://milkdown.dev/), an open-source WYSIWYG markdown editor.`,
  setTyporaMd: (v) => set(() => ({ typoraMd: v })),
  // load persisted FaceTime images from localStorage (if available)
  faceTimeImages:
    typeof window !== "undefined" && window.localStorage.getItem("faceTimeImages")
      ? JSON.parse(window.localStorage.getItem("faceTimeImages") || "{}")
      : {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      try {
        if (typeof window !== "undefined")
          window.localStorage.setItem("faceTimeImages", JSON.stringify(images));
      } catch (e) {
        // ignore storage errors
      }
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      try {
        if (typeof window !== "undefined")
          window.localStorage.setItem("faceTimeImages", JSON.stringify(images));
      } catch (e) {
        // ignore storage errors
      }
      return { faceTimeImages: images };
    })
});
