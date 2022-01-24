---
title: ExampleComponent
order: 9
---

本 Demo 演示一行文字的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ExampleComponent} from 'white-my-materials';

class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent title="ExampleComponent demo" />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```


## API

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|        |      |      |      |        |      |