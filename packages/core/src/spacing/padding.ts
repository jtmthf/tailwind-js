import { apply } from '../utils';
import { ThemedUtil } from '../types';

export const p = (key: string | number): ThemedUtil => theme => ({
  padding: theme.padding?.[key],
});
export const pt = (key: string | number): ThemedUtil => theme => ({
  paddingTop: theme.padding?.[key],
});
export const pr = (key: string | number): ThemedUtil => theme => ({
  paddingRight: theme.padding?.[key],
});
export const pb = (key: string | number): ThemedUtil => theme => ({
  paddingBottom: theme.padding?.[key],
});
export const pl = (key: string | number): ThemedUtil => theme => ({
  paddingLeft: theme.padding?.[key],
});
export const py = (key: string | number) => apply(pt(key), pb(key));
export const px = (key: string | number) => apply(pr(key), pl(key));

export const p0 = p(0);
export const p1 = p(1);
export const p2 = p(2);
export const p3 = p(3);
export const p4 = p(4);
export const p5 = p(5);
export const p6 = p(6);
export const p8 = p(8);
export const p10 = p(10);
export const p12 = p(12);
export const p16 = p(16);
export const p20 = p(20);
export const p24 = p(24);
export const p32 = p(32);
export const p40 = p(40);
export const p48 = p(48);
export const p56 = p(56);
export const p64 = p(64);
export const ppx = p('px');

export const py0 = py(0);
export const py1 = py(1);
export const py2 = py(2);
export const py3 = py(3);
export const py4 = py(4);
export const py5 = py(5);
export const py6 = py(6);
export const py8 = py(8);
export const py10 = py(10);
export const py12 = py(12);
export const py16 = py(16);
export const py20 = py(20);
export const py24 = py(24);
export const py32 = py(32);
export const py40 = py(40);
export const py48 = py(48);
export const py56 = py(56);
export const py64 = py(64);
export const pypx = py('px');

export const px0 = px(0);
export const px1 = px(1);
export const px2 = px(2);
export const px3 = px(3);
export const px4 = px(4);
export const px5 = px(5);
export const px6 = px(6);
export const px8 = px(8);
export const px10 = px(10);
export const px12 = px(12);
export const px16 = px(16);
export const px20 = px(20);
export const px24 = px(24);
export const px32 = px(32);
export const px40 = px(40);
export const px48 = px(48);
export const px56 = px(56);
export const px64 = px(64);
export const pxpx = px('px');

export const pt0 = pt(0);
export const pt1 = pt(1);
export const pt2 = pt(2);
export const pt3 = pt(3);
export const pt4 = pt(4);
export const pt5 = pt(5);
export const pt6 = pt(6);
export const pt8 = pt(8);
export const pt10 = pt(10);
export const pt12 = pt(12);
export const pt16 = pt(16);
export const pt20 = pt(20);
export const pt24 = pt(24);
export const pt32 = pt(32);
export const pt40 = pt(40);
export const pt48 = pt(48);
export const pt56 = pt(56);
export const pt64 = pt(64);
export const ptpx = pt('px');

export const pr0 = pr(0);
export const pr1 = pr(1);
export const pr2 = pr(2);
export const pr3 = pr(3);
export const pr4 = pr(4);
export const pr5 = pr(5);
export const pr6 = pr(6);
export const pr8 = pr(8);
export const pr10 = pr(10);
export const pr12 = pr(12);
export const pr16 = pr(16);
export const pr20 = pr(20);
export const pr24 = pr(24);
export const pr32 = pr(32);
export const pr40 = pr(40);
export const pr48 = pr(48);
export const pr56 = pr(56);
export const pr64 = pr(64);
export const prpx = pr('px');

export const pb0 = pb(0);
export const pb1 = pb(1);
export const pb2 = pb(2);
export const pb3 = pb(3);
export const pb4 = pb(4);
export const pb5 = pb(5);
export const pb6 = pb(6);
export const pb8 = pb(8);
export const pb10 = pb(10);
export const pb12 = pb(12);
export const pb16 = pb(16);
export const pb20 = pb(20);
export const pb24 = pb(24);
export const pb32 = pb(32);
export const pb40 = pb(40);
export const pb48 = pb(48);
export const pb56 = pb(56);
export const pb64 = pb(64);
export const pbpx = pb('px');

export const pl0 = pl(0);
export const pl1 = pl(1);
export const pl2 = pl(2);
export const pl3 = pl(3);
export const pl4 = pl(4);
export const pl5 = pl(5);
export const pl6 = pl(6);
export const pl8 = pl(8);
export const pl10 = pl(10);
export const pl12 = pl(12);
export const pl16 = pl(16);
export const pl20 = pl(20);
export const pl24 = pl(24);
export const pl32 = pl(32);
export const pl40 = pl(40);
export const pl48 = pl(48);
export const pl56 = pl(56);
export const pl64 = pl(64);
export const plpx = pl('px');
