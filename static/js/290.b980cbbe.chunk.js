(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[290],{953:function(e,a){!function(e){var a=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+a+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+a),lookbehind:!0,inside:{keyword:/\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)}(Prism)}}]);