import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';
import { apply } from '../utils';

export const m = (key: Key) => (theme: Theme) =>
  css({ margin: theme.margin[key] });
export const mt = (key: Key) => (theme: Theme) =>
  css({ marginTop: theme.margin[key] });
export const mr = (key: Key) => (theme: Theme) =>
  css({ marginRight: theme.margin[key] });
export const mb = (key: Key) => (theme: Theme) =>
  css({ marginBottom: theme.margin[key] });
export const ml = (key: Key) => (theme: Theme) =>
  css({ marginLeft: theme.margin[key] });
export const my = (key: Key) => apply(mt(key), mb(key));
export const mx = (key: Key) => apply(mr(key), ml(key));

export const m0 = m(0);
export const m1 = m(1);
export const m2 = m(2);
export const m3 = m(3);
export const m4 = m(4);
export const m5 = m(5);
export const m6 = m(6);
export const m8 = m(8);
export const m10 = m(10);
export const m12 = m(12);
export const m16 = m(16);
export const m20 = m(20);
export const m24 = m(24);
export const m32 = m(32);
export const m40 = m(40);
export const m48 = m(48);
export const m56 = m(56);
export const m64 = m(64);
export const mAuto = m('auto');
export const mpx = m('px');

export const $m1 = m(-1);
export const $m2 = m(-2);
export const $m3 = m(-3);
export const $m4 = m(-4);
export const $m5 = m(-5);
export const $m6 = m(-6);
export const $m8 = m(-8);
export const $m10 = m(-10);
export const $m12 = m(-12);
export const $m16 = m(-16);
export const $m20 = m(-20);
export const $m24 = m(-24);
export const $m32 = m(-32);
export const $m40 = m(-40);
export const $m48 = m(-48);
export const $m56 = m(-56);
export const $m64 = m(-64);
export const $mpx = m('-px');

export const my0 = my(0);
export const my1 = my(1);
export const my2 = my(2);
export const my3 = my(3);
export const my4 = my(4);
export const my5 = my(5);
export const my6 = my(6);
export const my8 = my(8);
export const my10 = my(10);
export const my12 = my(12);
export const my16 = my(16);
export const my20 = my(20);
export const my24 = my(24);
export const my32 = my(32);
export const my40 = my(40);
export const my48 = my(48);
export const my56 = my(56);
export const my64 = my(64);
export const myAuto = my('auto');
export const mypx = my('px');

export const $my1 = my(-1);
export const $my2 = my(-2);
export const $my3 = my(-3);
export const $my4 = my(-4);
export const $my5 = my(-5);
export const $my6 = my(-6);
export const $my8 = my(-8);
export const $my10 = my(-10);
export const $my12 = my(-12);
export const $my16 = my(-16);
export const $my20 = my(-20);
export const $my24 = my(-24);
export const $my32 = my(-32);
export const $my40 = my(-40);
export const $my48 = my(-48);
export const $my56 = my(-56);
export const $my64 = my(-64);
export const $mypx = my('-px');

export const mx0 = mx(0);
export const mx1 = mx(1);
export const mx2 = mx(2);
export const mx3 = mx(3);
export const mx4 = mx(4);
export const mx5 = mx(5);
export const mx6 = mx(6);
export const mx8 = mx(8);
export const mx10 = mx(10);
export const mx12 = mx(12);
export const mx16 = mx(16);
export const mx20 = mx(20);
export const mx24 = mx(24);
export const mx32 = mx(32);
export const mx40 = mx(40);
export const mx48 = mx(48);
export const mx56 = mx(56);
export const mx64 = mx(64);
export const mxAuto = mx('auto');
export const mxpx = mx('px');

export const $mx1 = mx(-1);
export const $mx2 = mx(-2);
export const $mx3 = mx(-3);
export const $mx4 = mx(-4);
export const $mx5 = mx(-5);
export const $mx6 = mx(-6);
export const $mx8 = mx(-8);
export const $mx10 = mx(-10);
export const $mx12 = mx(-12);
export const $mx16 = mx(-16);
export const $mx20 = mx(-20);
export const $mx24 = mx(-24);
export const $mx32 = mx(-32);
export const $mx40 = mx(-40);
export const $mx48 = mx(-48);
export const $mx56 = mx(-56);
export const $mx64 = mx(-64);
export const $mxpx = mx('-px');

export const mt0 = mt(0);
export const mt1 = mt(1);
export const mt2 = mt(2);
export const mt3 = mt(3);
export const mt4 = mt(4);
export const mt5 = mt(5);
export const mt6 = mt(6);
export const mt8 = mt(8);
export const mt10 = mt(10);
export const mt12 = mt(12);
export const mt16 = mt(16);
export const mt20 = mt(20);
export const mt24 = mt(24);
export const mt32 = mt(32);
export const mt40 = mt(40);
export const mt48 = mt(48);
export const mt56 = mt(56);
export const mt64 = mt(64);
export const mtAuto = mt('auto');
export const mtpx = mt('px');

export const $mt1 = mt(-1);
export const $mt2 = mt(-2);
export const $mt3 = mt(-3);
export const $mt4 = mt(-4);
export const $mt5 = mt(-5);
export const $mt6 = mt(-6);
export const $mt8 = mt(-8);
export const $mt10 = mt(-10);
export const $mt12 = mt(-12);
export const $mt16 = mt(-16);
export const $mt20 = mt(-20);
export const $mt24 = mt(-24);
export const $mt32 = mt(-32);
export const $mt40 = mt(-40);
export const $mt48 = mt(-48);
export const $mt56 = mt(-56);
export const $mt64 = mt(-64);
export const $mtpx = mt('-px');

export const mr0 = mr(0);
export const mr1 = mr(1);
export const mr2 = mr(2);
export const mr3 = mr(3);
export const mr4 = mr(4);
export const mr5 = mr(5);
export const mr6 = mr(6);
export const mr8 = mr(8);
export const mr10 = mr(10);
export const mr12 = mr(12);
export const mr16 = mr(16);
export const mr20 = mr(20);
export const mr24 = mr(24);
export const mr32 = mr(32);
export const mr40 = mr(40);
export const mr48 = mr(48);
export const mr56 = mr(56);
export const mr64 = mr(64);
export const mrAuto = mr('auto');
export const mrpx = mr('px');

export const $mr1 = mr(-1);
export const $mr2 = mr(-2);
export const $mr3 = mr(-3);
export const $mr4 = mr(-4);
export const $mr5 = mr(-5);
export const $mr6 = mr(-6);
export const $mr8 = mr(-8);
export const $mr10 = mr(-10);
export const $mr12 = mr(-12);
export const $mr16 = mr(-16);
export const $mr20 = mr(-20);
export const $mr24 = mr(-24);
export const $mr32 = mr(-32);
export const $mr40 = mr(-40);
export const $mr48 = mr(-48);
export const $mr56 = mr(-56);
export const $mr64 = mr(-64);
export const $mrpx = mr('-px');

export const mb0 = mb(0);
export const mb1 = mb(1);
export const mb2 = mb(2);
export const mb3 = mb(3);
export const mb4 = mb(4);
export const mb5 = mb(5);
export const mb6 = mb(6);
export const mb8 = mb(8);
export const mb10 = mb(10);
export const mb12 = mb(12);
export const mb16 = mb(16);
export const mb20 = mb(20);
export const mb24 = mb(24);
export const mb32 = mb(32);
export const mb40 = mb(40);
export const mb48 = mb(48);
export const mb56 = mb(56);
export const mb64 = mb(64);
export const mbAuto = mb('auto');
export const mbpx = mb('px');

export const $mb1 = mb(-1);
export const $mb2 = mb(-2);
export const $mb3 = mb(-3);
export const $mb4 = mb(-4);
export const $mb5 = mb(-5);
export const $mb6 = mb(-6);
export const $mb8 = mb(-8);
export const $mb10 = mb(-10);
export const $mb12 = mb(-12);
export const $mb16 = mb(-16);
export const $mb20 = mb(-20);
export const $mb24 = mb(-24);
export const $mb32 = mb(-32);
export const $mb40 = mb(-40);
export const $mb48 = mb(-48);
export const $mb56 = mb(-56);
export const $mb64 = mb(-64);
export const $mbpx = mb('-px');

export const ml0 = ml(0);
export const ml1 = ml(1);
export const ml2 = ml(2);
export const ml3 = ml(3);
export const ml4 = ml(4);
export const ml5 = ml(5);
export const ml6 = ml(6);
export const ml8 = ml(8);
export const ml10 = ml(10);
export const ml12 = ml(12);
export const ml16 = ml(16);
export const ml20 = ml(20);
export const ml24 = ml(24);
export const ml32 = ml(32);
export const ml40 = ml(40);
export const ml48 = ml(48);
export const ml56 = ml(56);
export const ml64 = ml(64);
export const mlAuto = ml('auto');
export const mlpx = ml('px');

export const $ml1 = ml(-1);
export const $ml2 = ml(-2);
export const $ml3 = ml(-3);
export const $ml4 = ml(-4);
export const $ml5 = ml(-5);
export const $ml6 = ml(-6);
export const $ml8 = ml(-8);
export const $ml10 = ml(-10);
export const $ml12 = ml(-12);
export const $ml16 = ml(-16);
export const $ml20 = ml(-20);
export const $ml24 = ml(-24);
export const $ml32 = ml(-32);
export const $ml40 = ml(-40);
export const $ml48 = ml(-48);
export const $ml56 = ml(-56);
export const $ml64 = ml(-64);
export const $mlpx = ml('-px');
