import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MacBookPro141.module.css';
import { Rectangle1_1 } from './Rectangle1_1/Rectangle1_1';
import { Rectangle1_12 } from './Rectangle1_12/Rectangle1_12';

interface Props {
  className?: string;
}
/* @figmaId 5:10 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}>
        <Rectangle1_1 />
        <Rectangle1_12 />
      </div>
    </div>
  );
});
