import { atomWithStorage } from 'jotai/utils';

export const userTokenAtom = atomWithStorage("userToken", null)
export const userIdAtom = atomWithStorage("userId", null)
export const currentBookAtom = atom({
    title: '',
    imageUrl: '',
    author: '',
    style: '',
    spreads: []
})
