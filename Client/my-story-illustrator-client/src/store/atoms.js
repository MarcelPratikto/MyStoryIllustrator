import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const userTokenAtom = atomWithStorage("userToken", null)
export const userIdAtom = atomWithStorage("userId", null)
export const currentBookAtom = atom({
    title: '',
    imageUrl: '',
    author: '',
    style: '',
    spreads: []
})
