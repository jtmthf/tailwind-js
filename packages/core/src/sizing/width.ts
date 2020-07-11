import { ThemedUtil } from '../types';

export const w = (key: string | number): ThemedUtil => theme => ({
  width: theme.width?.[key],
});

export const w0 = w(0);
export const w1 = w(1);
export const w2 = w(2);
export const w3 = w(3);
export const w4 = w(4);
export const w5 = w(5);
export const w6 = w(6);
export const w8 = w(8);
export const w10 = w(10);
export const w12 = w(12);
export const w16 = w(16);
export const w20 = w(20);
export const w24 = w(24);
export const w32 = w(32);
export const w40 = w(40);
export const w48 = w(48);
export const w56 = w(56);
export const w64 = w(64);
export const wAuto = w('auto');
export const wpx = w('px');
export const w1_2 = w('1/2');
export const w1_3 = w('1/3');
export const w2_3 = w('2/3');
export const w1_4 = w('1/4');
export const w2_4 = w('2/4');
export const w3_4 = w('3/4');
export const w1_5 = w('1/5');
export const w2_5 = w('2/5');
export const w3_5 = w('3/5');
export const w4_5 = w('4/5');
export const w1_6 = w('1/6');
export const w2_6 = w('2/6');
export const w3_6 = w('3/6');
export const w4_6 = w('4/6');
export const w5_6 = w('5/6');
export const w1_12 = w('1/12');
export const w2_12 = w('2/12');
export const w3_12 = w('3/12');
export const w4_12 = w('4/12');
export const w5_12 = w('5/12');
export const w6_12 = w('6/12');
export const w7_12 = w('7/12');
export const w8_12 = w('8/12');
export const w9_12 = w('9/12');
export const w10_12 = w('10/12');
export const w11_12 = w('11/12');
export const wFull = w('full');
export const wScreen = w('screen');