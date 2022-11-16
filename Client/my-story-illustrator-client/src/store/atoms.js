import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const userTokenAtom = atomWithStorage("userToken", null)
export const userIdAtom = atomWithStorage("userId", null)
