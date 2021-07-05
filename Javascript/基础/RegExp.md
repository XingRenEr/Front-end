RegExp
---

## 一 正则表达式  
### 1.1 正则表达式的构成
```
/pattern/flags
```
- ***pattern***（模式）——任何正则表达式，包括字符类、限定符、分组、向前查找和反向引用。
- ***flags***（标记/修饰符）——每个正则表达式可以带零个或多个flags，用于控制正则表达式的行为。  

### 1.2 修饰符
下面给出了表示匹配模式的 flags：  
- g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。  
- i：不区分大小写，表示在查找匹配时忽略pattern 和字符串的大小写。  
- m：多行模式，表示查找到一行文本末尾时会继续查找。  
- y：粘附模式，表示只查找从lastIndex 开始及之后的字符串。覆盖 g。  
- u：Unicode 模式，启用Unicode 匹配。  
- s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。  

### 1.3 模式
pattern 中以下字符若要作为正常字符使用，必须使用反斜杠来转义：  
```
( [ { \ ^ $ | ) ] } ? * + .
```

pattern 的语法：  

**组和范围**  

组和范围用于查找某个范围内的字符：  

|表达式	|描述									|
| - | - |
|[abc]	|查找方括号之间的任何字符。|
|[^abc]	|查找任何不在方括号之间的字符。|
|[0-9]	|查找任何从 0 至 9 的数字。|
|[A-Z]	|查找任何从大写 A 到大写 Z 的字符。|
|[a-z]	|查找任何从小写 a 到小写 z 的字符。|
|[A-z]	|查找任何从大写 A 到小写 z 的字符。|
|red\|blue\|green	|查找任何指定的选项。	|
|(x)    |捕获组: 匹配x并记住匹配项。 |

**元字符**  

元字符（Metacharacter）是拥有特殊含义的字符：  

|元字符	|描述																				|
| - | - |
|.			|查找单个字符，除了换行和行结束符。					|
|\w			|查找单词字符。															|
|\W			|查找非单词字符。														|
|\d			|查找数字。																	|
|\D			|查找非数字字符。														|
|\s			|查找空白字符。															|
|\S			|查找非空白字符。														|
|\b			|匹配单词边界。															|
|\B			|匹配非单词边界。														|
|\0			|查找 NUL 字符。														|
|\n			|查找换行符。																|
|\f			|查找换页符。																|
|\r			|查找回车符。																|
|\t			|查找制表符。																|
|\v			|查找垂直制表符。														|
|\xxx		|查找以八进制数 xxx 规定的字符。						|
|\xdd		|查找以十六进制数 dd 规定的字符。						|
|\uxxxx	|查找以十六进制数 xxxx 规定的 Unicode 字符。|

**量词**  

|量词		|描述																				|
| - | - |
|n+			|匹配任何包含至少一个 n 的字符串。					|
|n*			|匹配任何包含零个或多个 n 的字符串。				|
|n?			|匹配任何包含零个或一个 n 的字符串。				|
|n{X}		|匹配包含 X 个 n 的序列的字符串。						|
|n{X,Y}	|匹配包含 X 至 Y 个 n 的序列的字符串。			|
|n{X,}	|匹配包含至少 X 个 n 的序列的字符串。				|
|n$			|匹配任何结尾为 n 的字符串。								|
|^n			|匹配任何开头为 n 的字符串。								|
|?=n		|匹配任何其后紧接指定字符串 n 的字符串。		|
|?!n		|匹配任何其后没有紧接指定字符串 n 的字符串。|

## 二 RegExp 对象的创建方式  
- 方式一：正则表达式字面量  

  ```js
  let pattern1 = /[bc]at/i;
  ```

- 方式二：使用 `RegExp` 构造函数  

  接收两个参数：模式字符串和（可选的）标记字符串。  

  ```js
  let pattern2 = new RegExp("[bc]at", "i");
  ```

【注意】所有元字符若要作为正常字符使用，都必须二次转义  

【举例】（包含了元字符的）转义字符序列。如`\n`，在正则表达式字面量字符串中，转义后变为`\\n`，使用 `RegExp` 构造函数的模式字符串时，二次转义变为`\\\\n`。  

## 三 RegExp 实例属性、方法  

### 3.1 RegExp 实例属性  
实际开发中用得不多  
- lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从0 开始。  

  > 可写。  
  >
  > 在 `exec()` 方法中，受 g 标记、y 标记影响。y 标记会覆盖 g 标记。  
- global：布尔值，表示是否设置了 g 标记、。
- ignoreCase：布尔值，表示是否设置了 i 标记。
- unicode：布尔值，表示是否设置了 u 标记。
- sticky：布尔值，表示是否设置了 y 标记。
- multiline：布尔值，表示是否设置了 m 标记。
- dotAll：布尔值，表示是否设置了 s 标记。
- source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。
- flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式形式返回（没有前后斜杠）。

### 3.2 RegExp 实例方法  
#### `exec()`
【作用】在该字符串中执行匹配项的搜索。配合捕获组、`lastIndex` 使用。  

【参数】字符串  

【返回值】一个结果数组或 null。结果数组包含属性 index 和 input；若无捕获组，结果数组的长度为1；否则不为1。  

| 数组索引/属性 |描述|
| - | - |
|[0]|与整个模式匹配的字符串  |
|[1], ...[n]|与捕获组匹配的字符串  |
|index|匹配到的字符的位置  |
|input|原始字符串  |

【栗子1——捕获组】  
```js
let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;
let matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]); // "mom and dad and baby"
console.log(matches[1]); // " and dad and baby"
console.log(matches[2]); // " and baby"
```
【栗子2——全局标记 g】  

每次调用exec()方法会从 ***`lastIndex` 位置开始***返回下一个匹配的信息。  

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/g;
let matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 3
matches = pattern.exec(text);
console.log(matches.index); // 5
console.log(matches[0]); // bat
console.log(pattern.lastIndex); // 8
matches = pattern.exec(text);
console.log(matches.index); // 10
console.log(matches[0]); // sat
console.log(pattern.lastIndex); // 13
```
注意 `index` 和 `lastIndex` 的变化。  

【栗子3——粘附标记 y】  

每次调用exec()就只会在 ***`lastIndex` 位置上***寻找匹配项。粘附标记覆盖全局标记。  

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/y;
let matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 3
// 以索引3 对应的字符开头找不到匹配项，因此exec()返回null
// exec()没找到匹配项，于是将lastIndex 设置为0
matches = pattern.exec(text);
console.log(matches); // null
console.log(pattern.lastIndex); // 0
// 向前设置lastIndex 可以让粘附的模式通过exec()找到下一个匹配项：
pattern.lastIndex = 5;
matches = pattern.exec(text);
console.log(matches.index); // 5
console.log(matches[0]); // bat
console.log(pattern.lastIndex); // 8
```

#### `test()`
【作用】该正则在字符串里是否有匹配。  

【参数】字符串  

【返回值】true/false。  

【应用】经常用在if 语句中  

## 四 RegExp 构造函数属性  
- `RegExp.$1`-`RegExp.$9`  

  分别包含第 1-9 个捕获组的匹配项。  

> 其他的构造函数属性未被标准化  

## 五 参考文献
* [x] [JavaScript RegExp 对象](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)
* [x] 