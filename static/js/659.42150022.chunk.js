(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[659],{1333:function(n,e,r){"use strict";r.r(e),e.default="Textarea \u591a\u884c\u6587\u672c\u8f93\u5165\u6846\n===\n\n\u6807\u51c6\u7684\u591a\u884c\u6587\u672c\u8f93\u5165\u6846\u3002\n\n```jsx\nimport { Textarea } from 'uiw';\n// or\nimport Textarea from '@uiw/react-textarea';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Textarea } from 'uiw';\n\nconst Demo = () => (\n  <div style={{ maxWidth: 300 }}>\n    <Textarea placeholder=\"\u8bf7\u8f93\u5165\u5185\u5bb9\" />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5728\u8868\u5355\u4e2d\u4f7f\u7528\n\n\u5728 [`<Form />`](#/components/form) \u8868\u5355\u4e2d\u5e94\u7528 [`<Textarea />`](#/components/textarea) \u7ec4\u4ef6\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Row, Col, Textarea, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      onSubmit={({initial, current}) => {\n        const errorObj = {};\n        if (!current.commit) {\n          errorObj.commit = '\u5185\u5bb9\u4e3a\u7a7a\uff0c\u8bf7\u8f93\u5165\u5185\u5bb9';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n          throw err;\n        }\n        Notify.success({\n          title: '\u63d0\u4ea4\u6210\u529f\uff01',\n          description: `\u8868\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u5185\u5bb9\u4e3a\uff1a${current.commit}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n        });\n      }}\n      fields={{\n        commit: {\n          children: <Textarea placeholder=\"\u8bf7\u8f93\u5165\u8bf4\u660e\u5185\u5bb9\" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col style={{ maxWidth: 300 }}>{fields.commit}</Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u7981\u7528\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Textarea } from 'uiw';\n\nconst Demo = () => (\n  <div style={{ maxWidth: 300 }}>\n    <Textarea placeholder=\"\u8bf7\u8f93\u5165\u5185\u5bb9\" disabled />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### HTML Textarea\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Textarea } from 'uiw';\n\nconst Demo = () => (\n  <div style={{ maxWidth: 300 }}>\n    <textarea className=\"w-textarea\" placeholder=\"\u8bf7\u8f93\u5165\u5185\u5bb9\" defaultValue=\"\" />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n\u8fd9\u662f\u4e00\u4e2a\u6807\u51c6\u7ec4\u4ef6\uff0c\u4e0e HTML \u4e2d\u5c5e\u6027\u4fdd\u6301\u4e00\u81f4\u3002\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| placeholder | \u89c4\u5b9a\u63cf\u8ff0\u6587\u672c\u533a\u57df\u9884\u671f\u503c\u7684\u7b80\u77ed\u63d0\u793a\u3002 | String | - |\n| disabled | \u7981\u7528\u8f93\u5165\u6846 | Boolean | - |"}}]);