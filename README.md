show-age
=======

一个显示出生年月日的小组件，不依赖带三方组件

## 引用

```
npm install show-age 

// 或者 yarn
yarn add show-age

```

## 使用

```js
let age = require('show-age')

console.log(age('1993-6-26',{
    now: new Date('2020-2-10')
}))

// 26岁
// 

```

## 显示规则

* 大于`IntegerAge`配置项，按照整岁来显示年龄，例如：`6岁`

* 小于或者等于`IntegerAge`配置项，大于一天的，按照年月日来显示，例如：`1岁9月20天`

* 小于一天的按照小时来展示，少于一小时默认一小时显示，例如：`3小时`

## 配置项说明及其默认值
```js

let options = {
    defaultVal:'--', //时间传递错返回值
    IntegerAge:5, // 根据此配置项来展示月份及其日
    now:new Date(), // 参照时间
    i18n :{ // 国际化相关部分
      year: '岁',
      month:'月',
      days: '天',
      hour:'小时'
    }
}
```

