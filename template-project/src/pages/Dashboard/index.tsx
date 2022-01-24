import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import { ExampleComponent } from 'white-my-materials';
import Guide from './components/Guide';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        {/* <Guide /> */}
        <ExampleComponent title="ExampleComponent1111" />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
