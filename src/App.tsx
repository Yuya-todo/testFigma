import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/many/_resets.module.css';
import { MacBookPro141 } from './components/many/MacBookPro141/MacBookPro141';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MacBookPro141 />
    </div>
  );
});
