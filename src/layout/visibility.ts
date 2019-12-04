import { VisibilityProperty } from 'csstype';
import css from '@emotion/css';

const visibility = (visibility: VisibilityProperty) => css({ visibility });

export const visible = visibility('visible');
export const invisible = visibility('hidden');
