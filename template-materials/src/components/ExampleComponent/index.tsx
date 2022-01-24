import React from 'react';
import { IProps } from './interface';
import './index.scss';

function ExampleComponent(props: IProps) {
  const { title = 'ExampleComponent' } = props;
  return <div className='example-component'>{title}</div>;
}

export default ExampleComponent;
