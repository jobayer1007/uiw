(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[620],{1291:function(n,t,e){"use strict";e.r(t),t.default='Card \u5361\u7247\n===\n\n\u901a\u7528\u5361\u7247\u5bb9\u5668\uff0c\u5c06\u4fe1\u606f\u805a\u5408\u5728\u5361\u7247\u5bb9\u5668\u4e2d\u5c55\u793a\uff0c\u7528\u6765\u663e\u793a\u6587\u5b57\u3001\u5217\u8868\u3001\u56fe\u6587\u7b49\u5185\u5bb9\u3002\n\n```jsx\nimport { Card } from \'uiw\';\n// or\nimport Card from \'@uiw/react-card\';\n```\n\n## \u57fa\u7840\u7528\u6cd5\n\n\u5305\u542b\u6807\u9898\u3001\u5185\u5bb9\u3001\u64cd\u4f5c\u533a\u57df\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Card title="Card\u6807\u9898" extra={<a href="#">\u66f4\u591a</a>} style={{ width: 300 }}>\n      \u5361\u7247\u5185\u5bb9<br/>\n      \u5361\u7247\u5185\u5bb9<br/>\n      \u5361\u7247\u5185\u5bb9<br/>\n    </Card>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u65e0\u8fb9\u6846\n\n\u5728\u7070\u8272\u80cc\u666f\u4e0a\u4f7f\u7528\u65e0\u8fb9\u6846\u7684\u5361\u7247\u3002\n\n\x3c!--DemoStart,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nReactDOM.render(\n  <Card title="Card\u6807\u9898" bordered={false} style={{ width: 300 }}>\n    \u5361\u7247\u5185\u5bb9<br/>\n    \u5361\u7247\u5185\u5bb9<br/>\n    \u5361\u7247\u5185\u5bb9<br/>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u7b80\u6d01\u5361\u7247\n\n\u53ea\u5305\u542b\u5185\u5bb9\u533a\u57df\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nReactDOM.render(\n  <Card style={{ width: 300 }}>\n    \u5361\u7247\u5185\u5bb9<br/>\n    \u5361\u7247\u5185\u5bb9<br/>\n    \u5361\u7247\u5185\u5bb9<br/>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u66f4\u7075\u6d3b\u7684\u5185\u5bb9\u5c55\u793a\n\n\u53ef\u4ee5\u8c03\u6574\u9ed8\u8ba4\u8fb9\u8ddd\uff0c\u8bbe\u5b9a\u5bbd\u5ea6\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nlet titleStyle = { padding: `10px 16px` };\n\nReactDOM.render(\n  <Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>\n    <div>\n      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />\n    </div>\n    <div style={titleStyle}>\n      <h3 style={{margin:0}}>\u6211\u7231\u6f02\u4eae\u59b9\u59b9</h3>\n      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>\n    </div>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u6dfb\u52a0\u9875\u811a\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card, Icon } from \'uiw\';\n\nconst footer = (\n  <a href="https://uiwjs.github.io">\n    <Icon type=\'user\' />&nbsp;\n    16 Friends\n  </a>\n)\n\nReactDOM.render(\n  <Card\n    title="Card\u6807\u9898"\n    footer={footer}\n    style={{ width: 240 }} \n    bodyStyle={{ padding: 0 }}\n  >\n    <div>\n      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />\n    </div>\n    <div style={{ padding: `10px 16px` }}>\n      <h3 style={{margin:0}}>\u6211\u7231\u6f02\u4eae\u59b9\u59b9</h3>\n      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>\n    </div>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u6fc0\u6d3b\n\n\u8bbe\u7f6e\u5c5e\u6027 `active=true` \u5c06\u6fc0\u6d3b\u5361\u7247\uff0c\u9ed8\u8ba4\u5c55\u793a\u9f20\u6807\u7ecf\u8fc7\u7684\u6837\u5f0f\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card, Icon } from \'uiw\';\n\nconst footer = (\n  <a href="https://uiwjs.github.io">\n    <Icon type=\'user\' />&nbsp;\n    16 Friends\n  </a>\n)\n\nReactDOM.render(\n  <Card\n    active\n    title="Card\u6807\u9898"\n    footer={footer}\n    style={{ width: 240 }} \n    bodyStyle={{ padding: 0 }}\n  >\n    <div>\n      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />\n    </div>\n    <div style={{ padding: `10px 16px` }}>\n      <h3 style={{margin:0}}>\u6211\u7231\u6f02\u4eae\u59b9\u59b9</h3>\n      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>\n    </div>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u5361\u7247\u6807\u9898 | String/ReactNode | - |\n| footer | \u9875\u811a\u5185\u5bb9\u7684\u7b80\u5199 | String/ReactNode | - |\n| extra | \u5361\u7247\u53f3\u4e0a\u89d2\u7684\u64cd\u4f5c\u533a\u57df | String/ReactNode | - |\n| bordered | \u662f\u5426\u663e\u793a\u8fb9\u6846 | Boolean | `true` |\n| active | \u5c55\u793a\u9f20\u6807\u7ecf\u8fc7\u7684\u6837\u5f0f\u3002 | Boolean | `false` |\n| noHover | \u53d6\u6d88\u9f20\u6807\u79fb\u8fc7\u65f6\u8fb9\u6846\u9634\u5f71 | Boolean | `false` |\n| bodyStyle | \u8bbe\u7f6e `body` \u7684\u6837\u5f0f | Object | - |\n| bodyClassName | \u8bbe\u7f6e `body` \u7684 `className` | String | - |'}}]);