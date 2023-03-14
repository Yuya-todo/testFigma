import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle1_1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 8:33 */
export const Rectangle1_1: FC<Props> = memo(function Rectangle1_1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
    </div>
  );
});
