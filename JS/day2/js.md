# JavaScript 기초 정리

## 1. 자료형 (Data Type)

JavaScript의 자료형은 값의 종류를 나타낸다. Python과 마찬가지로 변수를 선언할 때 자료형을 직접 지정하지 않아도 된다.

| 자료형 | 설명 | 예시 |
| --- | --- | --- |
| `number` | 정수와 실수를 나타내는 숫자 | `10`, `3.14` |
| `string` | 문자열 | `"Hello"`, `'JavaScript'` |
| `boolean` | 참과 거짓 | `true`, `false` |
| `null` | 의도적으로 값이 없음을 나타냄 | `null` |
| `undefined` | 값이 할당되지 않았거나 존재하지 않음을 나타냄 | `undefined` |

```javascript
let age = 30;
let name = "JavaScript";
let isStudent = true;
let result = null;
let score;

console.log(age);       // 30
console.log(name);      // JavaScript
console.log(isStudent); // true
console.log(result);    // null
console.log(score);     // undefined
```

### null과 undefined의 차이

- `null`: 값이 없다는 것을 명시적으로 표현할 때 사용한다.
- `undefined`: 변수에 값이 할당되지 않았거나 존재하지 않는 속성에 접근하는 등의 상황에서 나타난다.

```javascript
let user = null;
let email;

console.log(user);  // null
console.log(email); // undefined
```

참고로 JavaScript에는 위 자료형 외에도 `bigint`, `symbol`, `object`가 있다. 배열도 객체의 한 종류이다.

## 2. 변수 선언 (Variable Declaration)

변수는 데이터를 저장하고 사용하기 위해 선언한다. JavaScript에서는 주로 `let`과 `const`를 사용한다.

| 키워드 | 재할당 | 같은 스코프에서 재선언 | 선언 시 초기화 |
| --- | --- | --- | --- |
| `let` | 가능 | 불가능 | 선택 |
| `const` | 불가능 | 불가능 | 필수 |

### let

값을 변경할 수 있는 변수를 선언한다.

```javascript
let age = 20;
age = 21;

console.log(age); // 21
```

### const

변수에 다른 값을 재할당할 수 없도록 선언한다.

```javascript
const PI = 3.14;
console.log(PI); // 3.14

// PI = 3.15; // TypeError
```

`const`로 선언한 배열이나 객체는 변수 자체를 재할당할 수 없지만, 내부 요소나 속성은 변경할 수 있다.

```javascript
const fruits = ["apple", "banana"];
fruits.push("orange");

console.log(fruits); // ["apple", "banana", "orange"]
```

`let`과 `const`는 모두 블록 스코프를 가진다. 일반적으로 재할당이 필요하지 않으면 `const`, 필요하면 `let`을 사용한다.

## 3. 산술 연산 (Arithmetic Operation)

| 연산자 | 설명 | 예시 | 결과 |
| --- | --- | --- | --- |
| `+` | 더하기 | `10 + 3` | `13` |
| `-` | 빼기 | `10 - 3` | `7` |
| `*` | 곱하기 | `10 * 3` | `30` |
| `/` | 나누기 | `10 / 4` | `2.5` |
| `%` | 나머지 | `10 % 3` | `1` |
| `**` | 거듭제곱 | `2 ** 3` | `8` |

```javascript
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 약 3.3333333333333335
console.log(a % b); // 1
```

`%` 연산자는 나머지를 구할 때 사용하며, 짝수와 홀수를 구분할 때도 활용할 수 있다.

```javascript
console.log(10 % 2 === 0); // true (짝수)
console.log(11 % 2 !== 0); // true (홀수)
```

JavaScript의 `%`는 나머지 연산자이므로 음수가 포함되면 Python의 `%`와 결과가 다를 수 있다. 예를 들어 JavaScript의 `-10 % 3`은 `-1`, Python에서는 `2`이다.

### Math 내장 객체

`Math`는 수학 연산에 필요한 상수와 함수를 제공하는 내장 객체이다. 별도의 import 없이 사용할 수 있다.

| 메서드 또는 속성 | 설명 | 예시 | 결과 |
| --- | --- | --- | --- |
| `Math.round()` | 가까운 정수로 반올림 | `Math.round(3.6)` | `4` |
| `Math.floor()` | 주어진 값 이하의 가장 큰 정수 | `Math.floor(3.9)` | `3` |
| `Math.ceil()` | 주어진 값 이상의 가장 작은 정수 | `Math.ceil(3.1)` | `4` |
| `Math.trunc()` | 소수 부분 제거 | `Math.trunc(-3.9)` | `-3` |
| `Math.abs()` | 절댓값 | `Math.abs(-10)` | `10` |
| `Math.max()` | 최댓값 | `Math.max(10, 20, 30)` | `30` |
| `Math.min()` | 최솟값 | `Math.min(10, 20, 30)` | `10` |
| `Math.sqrt()` | 제곱근 | `Math.sqrt(16)` | `4` |
| `Math.pow()` | 거듭제곱 | `Math.pow(2, 3)` | `8` |
| `Math.random()` | 0 이상 1 미만의 난수 | `Math.random()` | 실행마다 달라짐 |
| `Math.PI` | 원주율 | `Math.PI` | 약 `3.14159` |

```javascript
// 1부터 10까지의 임의의 정수 생성
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
```

## 4. 비교 연산 (Comparison Operation)

비교 연산자는 두 값을 비교하며 결과를 `true` 또는 `false`로 반환한다.

| 연산자 | 설명 | 예시 | 결과 |
| --- | --- | --- | --- |
| `<` | 작다 | `10 < 20` | `true` |
| `>` | 크다 | `10 > 20` | `false` |
| `<=` | 작거나 같다 | `10 <= 10` | `true` |
| `>=` | 크거나 같다 | `10 >= 20` | `false` |
| `==` | 동등 비교 | `10 == "10"` | `true` |
| `===` | 일치 비교 | `10 === "10"` | `false` |
| `!=` | 동등하지 않음 | `10 != "10"` | `false` |
| `!==` | 일치하지 않음 | `10 !== "10"` | `true` |

### ==와 ===의 차이

- `==` (동등 연산자): 자료형이 다르면 일정한 규칙에 따라 암묵적 형 변환을 수행하여 비교한다.
- `===` (일치 연산자): 암묵적 형 변환 없이 비교한다. 자료형이 다르면 `false`를 반환한다.

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
console.log(10 === 10);   // true
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

예상하지 못한 형 변환을 방지하기 위해 일반적으로 `===`와 `!==`를 사용하는 것이 좋다. 객체와 배열은 내용이 아니라 동일한 객체를 참조하는지를 비교한다.

### typeof

`typeof` 연산자는 값의 자료형을 문자열로 반환한다.

```javascript
console.log(typeof 10);        // "number"
console.log(typeof "10");      // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
```

`typeof null`이 `"object"`인 것은 JavaScript 초기 구현에서 유래한 예외이다. `null` 자체는 원시 자료형이며, 확인할 때는 `value === null`을 사용한다. 배열을 확인할 때는 `Array.isArray(value)`를 사용한다.

## 5. 논리 연산 (Logical Operation)

논리 연산자는 여러 조건을 조합하거나 조건을 반전할 때 사용한다.

| 연산자 | 의미 | 설명 |
| --- | --- | --- |
| `&&` | AND (논리곱) | 두 조건이 모두 참일 때 참 |
| `\|\|` | OR (논리합) | 하나 이상의 조건이 참일 때 참 |
| `!` | NOT (부정) | 참과 거짓을 반전 |

| A | B | A && B | A \|\| B |
| --- | --- | --- | --- |
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

```javascript
const age = 25;
const hasTicket = true;

console.log(age >= 19 && hasTicket); // true
console.log(age < 19 || hasTicket);  // true
console.log(!hasTicket);             // false
```

`&&`와 `||`는 반드시 boolean을 반환하는 것은 아니다. 조건 평가에 따라 피연산자 자체를 반환하며, 결과가 결정되면 나머지 피연산자를 평가하지 않는다(단축 평가).

```javascript
console.log("" || "기본값"); // 기본값
console.log(0 && "실행");    // 0
```

`false`, `0`, `0n`, `""`, `null`, `undefined`, `NaN` 등은 조건문에서 거짓으로 평가되는 값(falsy)이다. 빈 배열 `[]`과 빈 객체 `{}`는 참으로 평가된다.

## 6. 문자열 연산 (String Operation)

### + 연산자로 문자열 이어 붙이기

```javascript
const first = "Hello";
const second = "JavaScript";

console.log(first + " " + second); // Hello JavaScript
```

### 템플릿 리터럴 (Template Literal)

백틱(backtick, `` ` ``)과 `${변수명}`을 사용하여 문자열 안에 변수나 표현식을 삽입할 수 있다.

```javascript
const name = "Kim";
const age = 25;

console.log(`이름: ${name}, 나이: ${age}`);
// 이름: Kim, 나이: 25

console.log(`내년 나이: ${age + 1}`);
// 내년 나이: 26
```

템플릿 리터럴은 여러 줄의 문자열도 작성할 수 있다.

```javascript
const message = `Hello
JavaScript`;

console.log(message);
```

### number + string: JavaScript와 Python의 차이

JavaScript에서는 숫자와 문자열을 `+`로 연산하면 숫자가 문자열로 변환되어 이어 붙여진다. Python에서는 `int`와 `str`을 직접 더할 수 없다.

```javascript
console.log(10 + "20"); // "1020"
console.log("10" + 20); // "1020"
console.log(10 + 20);   // 30

console.log(10 + Number("20")); // 30
console.log(String(10) + "20"); // "1020"
```

```python
# print(10 + "20")  # TypeError
print(10 + int("20"))  # 30
print(str(10) + "20")  # 1020
```

| 연산 | JavaScript | Python |
| --- | --- | --- |
| `10 + 20` | `30` | `30` |
| `10 + "20"` | `"1020"` | `TypeError` |
| `"10" + "20"` | `"1020"` | `"1020"` |

JavaScript에서는 `+` 외의 일부 산술 연산자도 암묵적 형 변환을 수행한다. 예를 들어 `"10" - 3`은 `7`이다. 의도하지 않은 결과를 방지하려면 `Number()`나 `String()`으로 자료형을 명시적으로 변환하는 것이 좋다.

## 7. 조건문 (Conditional Statement)

조건문은 조건에 따라 실행할 코드를 결정한다.

JavaScript는 Python의 `elif` 대신 `else if`를 사용한다.

```javascript
const score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// B
```

- `if`: 첫 번째 조건이 참이면 실행한다.
- `else if`: 앞의 조건들이 모두 거짓일 때 추가 조건을 확인한다.
- `else`: 앞의 조건들이 모두 거짓이면 실행한다.

### Python과 비교

```python
score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")
```

JavaScript에서는 조건을 소괄호 `()`로 감싸고, 실행할 코드 블록을 중괄호 `{}`로 구분한다. Python에서는 콜론 `:`과 들여쓰기를 사용한다.

## 8. 반복문 (Loop Statement)

반복문은 동일한 코드를 여러 번 실행할 때 사용한다.

### for

일반적인 `for` 반복문은 초기식, 조건식, 증감식으로 구성된다.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 0, 1, 2, 3, 4 (각 줄에 출력)
```

- `let i = 0`: 반복에 사용할 변수를 초기화한다.
- `i < 5`: 반복을 계속할 조건이다.
- `i++`: 반복이 끝날 때마다 `i`를 1 증가시킨다.

### while

조건이 참인 동안 코드를 반복한다.

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// 0, 1, 2, 3, 4 (각 줄에 출력)
```

조건이 계속 참이면 무한 반복이 발생할 수 있으므로 반복 종료 조건을 확인해야 한다.

### break와 continue

`break`는 반복문을 종료하고, `continue`는 현재 반복만 건너뛴다.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}

// 0, 1, 3 (각 줄에 출력)
```

## 9. 배열 (Array)

배열은 여러 값을 순서대로 저장하는 자료구조이다. Python의 리스트(`list`)와 비슷하며, 인덱스는 0부터 시작한다.

### 배열 선언 및 사용

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);     // apple
console.log(fruits[1]);     // banana
console.log(fruits.length); // 3
console.log(fruits[3]);     // undefined

fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "orange"]
```

배열은 서로 다른 자료형의 값도 저장할 수 있다.

```javascript
const data = [10, "Hello", true, null];
```

### 주요 배열 메서드

| 메서드 또는 속성 | 설명 |
| --- | --- |
| `length` | 배열의 길이 |
| `push()` | 배열 끝에 요소 추가 |
| `pop()` | 배열 끝 요소 제거 및 반환 |
| `unshift()` | 배열 처음에 요소 추가 |
| `shift()` | 배열 처음 요소 제거 및 반환 |
| `splice()` | 지정된 위치의 요소 추가, 제거 또는 교체 |
| `slice()` | 지정 범위의 요소를 새 배열로 복사 |
| `includes()` | 특정 값이 존재하는지 확인 |
| `indexOf()` | 특정 값의 첫 번째 인덱스 반환 (없으면 `-1`) |
| `join()` | 배열 요소를 문자열로 연결 |
| `map()` | 각 요소를 변환하여 새 배열 생성 |
| `filter()` | 조건에 맞는 요소로 새 배열 생성 |

```javascript
const fruits = ["apple", "banana"];

fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

fruits.pop();
console.log(fruits); // ["apple", "banana"]

fruits.unshift("grape");
console.log(fruits); // ["grape", "apple", "banana"]

fruits.shift();
console.log(fruits); // ["apple", "banana"]

console.log(fruits.includes("apple")); // true
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.join(", "));        // apple, banana
```

`splice()`는 원본 배열을 변경하지만 `slice()`는 원본을 변경하지 않는다. `slice()`의 종료 인덱스는 포함되지 않는다.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.slice(1, 3)); // [20, 30]
numbers.splice(1, 1); // 인덱스 1부터 요소 1개 제거
console.log(numbers); // [10, 30, 40]
```

### 반복문을 이용한 배열 활용

```javascript
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

`for...of`를 사용하면 배열의 각 요소를 직접 가져올 수 있다.

```javascript
for (const fruit of fruits) {
    console.log(fruit);
}
```

### 배열 데이터 처리

```javascript
const numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (const number of numbers) {
    sum += number;
}

console.log(sum);                  // 150
console.log(sum / numbers.length); // 30
```

`map()`과 `filter()`를 사용하면 배열을 변환하거나 필요한 값만 선택할 수 있다.

```javascript
const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(number => number * 2);
const filtered = numbers.filter(number => number >= 30);

console.log(doubled);  // [20, 40, 60, 80, 100]
console.log(filtered); // [30, 40, 50]
```

여기서 `number => number * 2`는 값을 받아 두 배를 반환하는 화살표 함수이다.

## 10. 객체 (Object)

객체는 관련 데이터를 키(key)와 값(value)의 형태로 저장하는 자료구조이다. Python의 딕셔너리(`dict`)와 비슷하지만, JavaScript 객체에는 메서드와 프로토타입 등의 추가 개념이 있다.

### 객체 선언

```javascript
const student = {
    name: "Kim",
    age: 25,
    major: "Computer Science",
    isStudent: true
};
```

### 속성 읽기

점 표기법(`.`)과 대괄호 표기법(`[]`)을 사용한다.

```javascript
console.log(student.name);     // Kim
console.log(student["age"]);   // 25

const key = "major";
console.log(student[key]);     // Computer Science
```

속성 이름이 변수에 저장되어 있거나 공백을 포함할 경우 대괄호 표기법을 사용한다.

### 속성 추가하기

```javascript
student.grade = 4;
console.log(student.grade); // 4
```

### 속성 수정하기

```javascript
student.age = 26;
console.log(student.age); // 26
```

### 속성 제거하기

`delete` 연산자를 사용한다.

```javascript
delete student.major;
console.log(student.major); // undefined
```

### 속성이 객체에 존재하는지 확인하기 (in)

`in` 연산자는 지정한 속성이 객체에 존재하는지 확인한다. 상속된 속성도 확인 대상에 포함한다.

```javascript
console.log("name" in student);  // true
console.log("major" in student); // false
```

속성의 값이 `undefined`이더라도 속성 자체가 존재하면 `in`은 `true`를 반환한다.

```javascript
const user = { email: undefined };

console.log("email" in user); // true
console.log(user.email);      // undefined
```

객체 자신의 속성만 확인하려면 `Object.hasOwn()`을 사용한다.

```javascript
console.log(Object.hasOwn(student, "name")); // true
```

### 객체의 키와 값 확인하기

```javascript
const user = { name: "Kim", age: 25 };

console.log(Object.keys(user));    // ["name", "age"]
console.log(Object.values(user));  // ["Kim", 25]
console.log(Object.entries(user)); // [["name", "Kim"], ["age", 25]]
```

## 11. JavaScript와 Python 문법 비교

| 구분 | JavaScript | Python |
| --- | --- | --- |
| 변수 선언 | `let`, `const` | 별도 선언 키워드 없음 |
| 참 / 거짓 | `true`, `false` | `True`, `False` |
| 명시적인 값 없음 | `null` | `None` |
| 미할당 값 | `undefined` | 직접 대응하는 내장 값 없음 |
| 자료형 확인 | `typeof value` | `type(value)` |
| 논리 연산 | `&&`, `\|\|`, `!` | `and`, `or`, `not` |
| 문자열 보간 | 템플릿 리터럴 | f-string |
| 조건문 | `if`, `else if`, `else` | `if`, `elif`, `else` |
| 반복문 | `for`, `while` | `for`, `while` |
| 배열 / 리스트 | `Array` | `list` |
| 배열 길이 | `arr.length` | `len(arr)` |
| 요소 추가 | `arr.push(value)` | `arr.append(value)` |
| 키-값 자료구조 | `Object` | `dict` |
| 속성 / 키 존재 확인 | `key in obj` | `key in dictionary` |
| 출력 | `console.log()` | `print()` |
| 코드 블록 | 중괄호 `{}` | 들여쓰기 |

> 각 JavaScript 코드 예제는 별도로 실행하는 것을 기준으로 작성하였다. 객체 속성 조작 예제와 일부 배열 반복문 예제는 앞에서 선언한 변수를 이어서 사용한다.
