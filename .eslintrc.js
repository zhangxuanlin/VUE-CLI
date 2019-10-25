module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 0, // 是否启用console
        indent: [2, 4], // 缩进4个空格
        'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
        'vars-on-top': 2, // var必须放在作用域顶部
        'prefer-const': 0, // 首选const
        'padded-blocks': 0, // 块语句内行首行尾是否要空行
        eqeqeq: 2, // 必须使用全等
        'global-require': 0,
        'no-new': 0,
        'no-var': 2, // 禁用var，用let和const代替
        'no-use-before-define': 2, // 未定义前不能使用
        'no-unreachable': 2, // 不能有无法执行的代码
        'no-unused-expressions': 2, // 禁止无用的表达式
        'no-trailing-spaces': 1, // 一行结束后面不要有空格
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-shadow': 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'no-empty': 2, // 块语句中的内容不能为空
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-alert': 0, // 禁止使用alert confirm prompt
        'no-param-reassign': 0, // 禁止给参数重新赋值
        'no-undef': 0, // 不能有未定义的变量
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'object-shorthand': 0, // 强制对象字面量缩写语法
        'max-len': [0, 200],
        'linebreak-style': [0, 'error', 'windows'],
    },
};
