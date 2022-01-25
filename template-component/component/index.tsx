import React from 'react';
import { IProps } from './interface';
import './index.scss';

function FileName(props: IProps) {
  const { title = 'ExampleComponent' } = props;
  return <div className='title'>{title}</div>;
}

export default FileName;
