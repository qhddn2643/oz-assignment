# CSS 기초 학습 정리

## 1. CSS란?

<strong>CSS(Cascading Style Sheets)</strong>는 HTML 요소의 **모양과 배치**를 지정하는 스타일 언어이다.

- **HTML:** 제목, 문단, 이미지 등 웹페이지의 구조를 만든다.
- **CSS:** 글자 크기·색상, 정렬, 여백, 테두리 등의 디자인을 적용한다.
- **JavaScript:** 버튼 클릭, 데이터 처리 등 웹페이지의 동작을 구현한다.

### 기본 문법

```css
선택자 {
    속성: 값;
    속성: 값;
}
```

예시:

```css
p {
    color: blue;
    font-size: 18px;
}
```

| 구성 | 코드 | 의미 |
|---|---|---|
| 선택자(Selector) | `p` | 스타일을 적용할 요소를 선택 |
| 속성(Property) | `color` | 무엇을 변경할지 지정 |
| 값(Value) | `blue` | 어떻게 변경할지 지정 |
| 선언(Declaration) | `color: blue;` | 속성과 값의 한 쌍 |
| 선언 블록 | `{ ... }` | 여러 스타일 선언을 묶는 부분 |

**기억할 점:** `p { color: blue; }`는 **모든 `p` 요소의 글자색을 파란색으로 지정**한다는 뜻이다.

---

## 2. CSS를 적용하는 3가지 방식

CSS는 **Inline CSS**, **Internal CSS**, **External CSS**로 적용할 수 있다.

### 2.1 Inline CSS — 인라인 스타일

HTML **요소의 시작 태그 안에 `style` 속성**을 적는 방식이다.

```html
<p style="color: blue; font-size: 20px;">
    파란색 문단
</p>
```

- 특정 요소 **하나에 직접 스타일을 지정**한다.
- 코드가 짧거나 간단한 테스트를 할 때 편리하다.
- 여러 요소에 같은 스타일을 적용하려면 코드가 반복되기 쉽다.

### 2.2 Internal CSS — 내부 스타일 시트

HTML 문서의 `<head>` 안에 `<style>` 요소를 작성하는 방식이다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Internal CSS</title>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>초록색 문단</p>
</body>
</html>
```

- **한 HTML 문서** 안에서 스타일을 관리하기 좋다.
- 같은 선택자에 해당하는 여러 요소에 한 번에 적용할 수 있다.
- 여러 HTML 페이지가 같은 스타일을 공유하려면 내용이 중복될 수 있다.

### 2.3 External CSS — 외부 스타일 시트

CSS를 별도의 `.css` 파일에 작성하고 HTML에서 `<link>`로 불러오는 방식이다.

**파일 구조**

```text
project/
├── index.html
└── style.css
```

**index.html**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>External CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>외부 CSS가 적용된 문단</p>
</body>
</html>
```

**style.css**

```css
p {
    color: purple;
    font-size: 18px;
}
```

- HTML과 CSS 파일을 **분리**하여 관리한다.
- 여러 페이지에서 하나의 CSS 파일을 재사용할 수 있다.
- 스타일을 수정할 때 유지보수가 편리하다.

### 2.4 적용 방식 비교

| 방식 | 작성 위치 | 장점 | 단점 | 주로 사용하는 경우 |
|---|---|---|---|---|
| Inline | 요소의 `style` 속성 | 빠르게 한 요소 수정 | 재사용과 유지보수가 불편 | 간단한 테스트·예외적 수정 |
| Internal | HTML의 `<style>` | 한 페이지의 스타일을 모아 관리 | 페이지 간 중복 가능 | 단일 페이지 실습 |
| External | 별도의 `.css` 파일 | 재사용·협업·유지보수에 유리 | CSS 파일 연결 필요 | 일반적인 웹 프로젝트 |

**추천:** 일반적인 프로젝트에서는 **External CSS**를 기본으로 사용한다.

> **주의:** `Inline → Internal → External` 순서로 무조건 우선 적용되는 것은 아니다. CSS 적용 결과는 선언의 **중요도, 출처, 선택자 우선순위, 작성 순서** 등의 규칙에 따라 결정된다. 같은 조건의 일반 선언에서는 인라인 스타일이 대개 선택자 규칙보다 우선한다.

---

## 3. CSS Selector(선택자)

<strong>선택자(Selector)</strong>는 스타일을 적용할 HTML 요소를 지정하는 규칙이다.

### 3.1 기본 선택자

| 선택자 | 예시 | 선택 대상 |
|---|---|---|
| 전체 선택자 | `*` | 모든 요소 |
| 태그 선택자 | `p` | 모든 `<p>` 요소 |
| 클래스 선택자 | `.notice` | `class="notice"`인 요소 |
| ID 선택자 | `#header` | `id="header"`인 요소 |
| 그룹 선택자 | `h1, h2` | 모든 `<h1>`과 `<h2>` 요소 |

```html
<h1 id="header">제목</h1>
<p class="notice">공지사항</p>
<p>일반 문단</p>
```

```css
* {
    box-sizing: border-box;
}

p {
    font-size: 16px;
}

.notice {
    color: red;
}

#header {
    text-align: center;
}

h1, h2 {
    font-weight: bold;
}
```

**`class`와 `id` 차이**

- `.notice` → `class="notice"`를 가진 **여러 요소**에 재사용 가능
- `#header` → `id="header"`인 요소 선택. **ID 값은 한 HTML 문서에서 고유하게** 작성하는 것이 원칙

### 3.2 관계(결합자) 선택자

다른 요소와의 **위치·관계**를 기준으로 선택한다.

| 선택자 | 의미 |
|---|---|
| `div p` | `div` 안의 **모든 자손** `p` 선택 |
| `div > p` | `div`의 **바로 아래 자식** `p`만 선택 |
| `div + p` | `div` 바로 뒤에 오는 **인접한 형제** `p` 선택 |
| `div ~ p` | `div` 뒤에 오는 **모든 형제** `p` 선택 |

```html
<div>
    <p>첫 번째 문단</p>
    <section>
        <p>중첩된 문단</p>
    </section>
</div>
<p>div 다음 문단</p>
<p>그다음 문단</p>
```

```css
div p { color: blue; }       /* div 안의 모든 p */
div > p { font-weight: bold; } /* div의 직접 자식 p */
div + p { color: red; }      /* div 바로 다음 형제 p */
div ~ p { text-align: center; } /* div 뒤에 있는 형제 p */
```

여기서 **형제 요소**란 같은 부모를 가진 요소를 말한다. `+`와 `~`는 `div` 안쪽의 요소가 아니라 **`div`와 같은 부모 아래에 있는 뒤쪽 요소**를 선택한다.

### 3.3 속성 선택자

HTML의 속성이 있는지, 특정 값을 가지는지를 기준으로 선택한다.

```css
a[href] {
    color: blue;
}

input[type="text"] {
    border: 1px solid gray;
}
```

- `a[href]`: `href` 속성이 있는 `<a>` 요소
- `input[type="text"]`: `type` 값이 `"text"`인 `<input>` 요소

### 3.4 가상 클래스(Pseudo-class)

요소의 **상태**나 **위치**에 따라 스타일을 적용한다.

| 선택자 | 의미 |
|---|---|
| `:hover` | 마우스를 올린 상태 |
| `:focus` | 키보드·마우스 등으로 포커스를 받은 상태 |
| `:active` | 요소가 활성화된 순간(예: 버튼을 누르는 동안) |
| `:nth-child(2)` | 같은 부모의 자식 중 두 번째에 해당하는 요소 |

```css
a:hover {
    color: orange;
}

input:focus {
    border-color: blue;
}

button:active {
    background-color: gray;
}

li:nth-child(2) {
    font-weight: bold;
}
```

### 3.5 선택자 우선순위 기초

같은 요소의 같은 속성에 여러 CSS 규칙이 적용되면 **어떤 선언을 사용할지** 결정해야 한다.

일반적인 동일 조건에서는 선택자의 구체성(Specificity)이 다음과 같다.

```text
ID 선택자(#id)
   >
클래스·속성·가상 클래스(.class, [type], :hover)
   >
태그 선택자(p, div)
   >
전체 선택자(*)
```

```html
<p id="intro" class="text">안녕하세요</p>
```

```css
p { color: black; }
.text { color: blue; }
#intro { color: red; }
```

위 예제의 결과는 **빨간색 글자**이다. `#intro`의 선택자 구체성이 가장 높기 때문이다.

**주의할 점**

- 같은 중요도·출처·우선순위라면 보통 **나중에 작성한 규칙**이 적용된다.
- 인라인 `style`은 일반적인 선택자 선언보다 대체로 우선한다.
- `!important`는 선언의 중요도를 바꾸지만, 무조건 모든 선언보다 강한 것은 아니다. 남용하지 않는다.

---

## 4. `style` 속성 이해하기

HTML의 **`style` 속성**은 해당 요소에 CSS 선언을 직접 지정하는 속성이다.

```html
<p style="color: red; font-size: 18px; text-align: center;">
    빨간색으로 가운데 정렬된 문단
</p>
```

### `style` 작성 규칙

```text
style="속성: 값; 속성: 값;"
```

- `style`은 **HTML 속성**이다.
- `color`, `font-size`, `text-align`은 **CSS 속성**이다.
- 여러 선언은 세미콜론(`;`)으로 구분한다.
- 인라인 `style` 안에는 `p { ... }`처럼 선택자와 중괄호를 넣지 않는다.

**`style` 속성과 `<style>` 태그의 차이**

| 구분 | `style` 속성 | `<style>` 태그 |
|---|---|---|
| 위치 | 요소의 시작 태그 | 보통 HTML의 `<head>` |
| 작성 형태 | `style="color: red;"` | `p { color: red; }` |
| 적용 대상 | 해당 요소 | 선택자가 일치하는 요소 |

---

## 5. 텍스트 관련 CSS 속성

### 5.1 `font-size` — 글자 크기

```css
h1 {
    font-size: 32px;
}

p {
    font-size: 1rem;
}
```

| 값 | 의미 |
|---|---|
| `16px` | CSS 픽셀 단위 크기 |
| `1rem` | 문서 루트(`<html>`)의 글자 크기를 기준으로 계산 |
| `1.5em` | 해당 요소의 글자 크기 계산 기준에 대한 상대 크기 |
| `small`, `medium`, `large` | 브라우저가 정의한 키워드 크기 |
| `x-large`, `xx-small` | 더 크거나 작은 키워드 크기 |

보통 `1rem`은 기본 설정에서 약 `16px`이지만, 브라우저·사용자 설정에 따라 달라질 수 있다.

### 5.2 `font-weight` — 글자 굵기

```css
h1 {
    font-weight: bold;
}

p {
    font-weight: 400;
}

strong {
    font-weight: 700;
}
```

| 값 | 의미 |
|---|---|
| `normal` | 보통 굵기(일반적으로 `400`) |
| `bold` | 굵게(일반적으로 `700`) |
| `100`~`900` | 숫자로 굵기를 지정하는 대표적 범위 |

숫자가 클수록 대체로 굵다. 다만 실제 표시되는 굵기는 **사용한 폰트가 지원하는 굵기**에 따라 달라진다.

### 5.3 `text-align` — 텍스트 가로 정렬

```css
p {
    text-align: left;
}

h1 {
    text-align: center;
}

footer {
    text-align: right;
}
```

| 값 | 의미 |
|---|---|
| `left` | 왼쪽 정렬 |
| `center` | 가운데 정렬 |
| `right` | 오른쪽 정렬 |
| `justify` | 양쪽 정렬(줄의 간격을 조정할 수 있음) |

**중요:** `text-align: center`는 주로 요소 **안의 텍스트나 인라인 콘텐츠**를 가운데 정렬한다. 요소의 박스 자체를 가운데로 옮기는 속성은 아니다.

### 5.4 함께 알아둘 텍스트 속성

| 속성 | 기능 | 예시 |
|---|---|---|
| `color` | 글자색 | `color: #333;` |
| `font-family` | 글꼴 | `font-family: Arial, sans-serif;` |
| `line-height` | 줄 간격을 포함한 줄 상자의 높이 | `line-height: 1.5;` |
| `text-decoration` | 밑줄 등 꾸밈선 | `text-decoration: underline;` |

```css
.description {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
}
```

**보충:** `font`는 여러 글꼴 속성을 한 번에 지정하는 단축 속성이다.

```css
.title {
    font: bold 24px Arial, sans-serif;
}
```

이 예제는 글자 굵기, 크기, 글꼴을 한 번에 지정한다. `font` 단축 속성에는 최소한 **글자 크기와 글꼴 목록**이 필요하다.

---

## 6. CSS Box Model(박스 모델)

HTML 요소를 화면에서 **사각형 박스**로 보고 크기와 여백을 계산하는 모델이다.

### 6.1 박스 모델의 4가지 영역

```text
┌─────────────────────────────────┐
│             MARGIN              │
│  ┌───────────────────────────┐  │
│  │           BORDER          │  │
│  │  ┌─────────────────────┐  │  │
│  │  │       PADDING       │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │
│  │  │  │  글자·이미지   │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

안쪽에서 바깥쪽으로 **Content → Padding → Border → Margin** 순서이다.

| 영역 | 의미 | 쉬운 비유 |
|---|---|---|
| `content` | 글자·이미지 등 실제 내용 | 액자 속 사진 |
| `padding` | 내용과 테두리 사이의 안쪽 여백 | 사진과 액자틀 사이 |
| `border` | 요소를 감싸는 테두리 | 액자틀 |
| `margin` | 테두리 바깥쪽의 여백 | 액자와 다른 물건 사이 |

### 6.2 `margin` — 바깥 여백

```css
.box {
    margin: 20px;
}
```

요소 **테두리 바깥쪽의 간격**을 지정한다.

```css
.box {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}
```

단축 표기:

```css
.box {
    margin: 10px 20px 30px 40px;
    /* 위 → 오른쪽 → 아래 → 왼쪽 */
}
```

### 6.3 `padding` — 안쪽 여백

```css
.box {
    padding: 20px;
}
```

요소 **내용과 테두리 사이의 간격**을 지정한다.

```css
.box {
    padding: 10px 20px;
    /* 위·아래 10px, 왼쪽·오른쪽 20px */
}
```

**기억법:** `margin`은 **박스 바깥**, `padding`은 **박스 안쪽**이다.

### 6.4 `border` — 테두리

```css
.box {
    border: 2px solid black;
}
```

| 코드 | 의미 |
|---|---|
| `2px` | 테두리 두께 |
| `solid` | 실선 스타일 |
| `black` | 테두리 색상 |

다른 예시:

```css
.box {
    border: 3px dashed blue;
    border-radius: 8px;
}
```

- `dashed`: 점선 형태의 선분으로 표시
- `border-radius`: 테두리 모서리를 둥글게 처리

### 6.5 `content`, `width`, `height`

`content`는 **실제 내용이 표시되는 영역**이다.

```css
.box {
    width: 200px;
    height: 100px;
}
```

- `width`: 가로 크기
- `height`: 세로 크기

다만 `width`, `height`가 **정확히 어느 영역까지 포함하는지**는 `box-sizing` 설정에 따라 달라진다.

### 6.6 `box-sizing: content-box` — 기본 크기 계산

일반적인 요소의 기본값은 `content-box`이다. 이때 `width`와 `height`는 **콘텐츠 영역의 크기**를 지정한다.

```css
.box {
    box-sizing: content-box;
    width: 100px;
    padding: 50px;
    border: 5px solid black;
    margin: 20px;
}
```

**테두리 바깥까지의 박스 가로 크기**

```text
100px (content)
+ 50px × 2 (padding)
+  5px × 2 (border)
= 210px
```

따라서 `width: 100px`이더라도 **테두리까지 포함한 가로 크기는 210px**이다.

좌우 `margin` 20px씩을 추가한 가로 방향의 전체 간격은 단순 계산으로 `250px`이다. 단, **margin은 박스의 테두리 크기 자체에 포함되지 않는다.**

### 6.7 `box-sizing: border-box` — 테두리까지 포함

```css
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

이때 지정한 `width: 200px`은 **content + padding + border**를 포함한 크기이다.

```text
200px (border-box 전체)
- 20px × 2 (padding)
-  5px × 2 (border)
= 150px (content 영역)
```

다음 비교를 기억하면 된다.

| 구분 | `content-box` | `border-box` |
|---|---|---|
| `width` 기준 | Content 크기 | Content + Padding + Border |
| Padding 증가 | 전체 박스 크기가 커질 수 있음 | 지정 너비 안에서 Content 영역이 작아짐 |
| Border 증가 | 전체 박스 크기가 커질 수 있음 | 지정 너비 안에서 Content 영역이 작아짐 |
| Margin 포함 여부 | 포함 안 함 | 포함 안 함 |
| 대표 용도 | 기본 CSS 동작 | 예측하기 쉬운 크기 관리 |

**같은 조건 비교**

```css
/* 공통: width 200px, padding 20px, border 5px */
.content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* 테두리까지의 가로 크기 = 250px */
}

.border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* 테두리까지의 가로 크기 = 200px */
}
```

실무에서는 다음 설정을 많이 사용한다.

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

이 설정은 **일반 요소와 `::before`, `::after` 가상 요소**에도 동일한 크기 계산 기준을 적용하기 위한 것이다.

> **추가 참고:** `border-box`여도 너무 큰 padding·border 때문에 지정한 너비보다 박스가 더 커질 수 있다. 또한 세로 방향의 인접한 `margin`은 일반 문서 흐름에서 겹쳐 합쳐지는(margin collapsing) 경우가 있다.

---

## 7. CSS 핵심 치트시트

| 구분 | 속성 또는 문법 | 역할 |
|---|---|---|
| Inline CSS | `style="..."` | 한 요소에 직접 스타일 지정 |
| Internal CSS | `<style>...</style>` | HTML 문서 안에 CSS 작성 |
| External CSS | `<link rel="stylesheet" href="style.css">` | 외부 CSS 파일 연결 |
| 전체 선택자 | `*` | 모든 요소 선택 |
| 태그 선택자 | `p` | 해당 종류의 HTML 요소 선택 |
| 클래스 선택자 | `.name` | 지정한 클래스를 가진 요소 선택 |
| ID 선택자 | `#name` | 지정한 ID를 가진 요소 선택 |
| 글자 크기 | `font-size` | 텍스트 크기 지정 |
| 글자 굵기 | `font-weight` | 텍스트 굵기 지정 |
| 글자 정렬 | `text-align` | 요소 안 텍스트 정렬 |
| 글자색 | `color` | 텍스트 색상 지정 |
| 글꼴 | `font-family` | 글꼴 지정 |
| 줄 높이 | `line-height` | 줄 높이 지정 |
| 바깥 여백 | `margin` | 테두리 바깥쪽 간격 |
| 안쪽 여백 | `padding` | 내용과 테두리 사이 간격 |
| 테두리 | `border` | 박스 테두리 설정 |
| 가로 크기 | `width` | 너비 지정 |
| 세로 크기 | `height` | 높이 지정 |
| 크기 계산 | `box-sizing` | `width`·`height`의 포함 범위 지정 |
| 배경색 | `background-color` | 요소 배경색 지정 |

---

## 8. 핵심 요약

1. **CSS**는 HTML 요소의 모양과 배치를 지정하는 언어이다.
2. CSS 적용 방식은 **Inline, Internal, External**이며, 여러 페이지에서 재사용하려면 External CSS가 편리하다.
3. **Selector**는 스타일을 적용할 요소를 선택하는 규칙이다. `.`은 클래스, `#`은 ID를 의미한다.
4. <strong>`style` 속성</strong>은 HTML 요소에 CSS 선언을 직접 적는 방식이다.
5. **`font-size`**, **`font-weight`**, <strong>`text-align`</strong>은 각각 글자 크기, 굵기, 정렬을 다룬다.
6. **Box Model**은 **Content → Padding → Border → Margin** 순서의 구조이다.
7. <strong>`margin`</strong>은 바깥 여백, <strong>`padding`</strong>은 안쪽 여백이다.
8. <strong>`content-box`</strong>는 콘텐츠를 기준으로, <strong>`border-box`</strong>는 테두리까지 포함하여 <strong>`width`</strong>와 <strong>`height`</strong>를 계산한다.

**한 문장으로 기억하기:** CSS는 <strong>어떤 요소(선택자)</strong>의 <strong>어떤 모양(속성)</strong>을 <strong>어떻게(값)</strong> 지정할지 작성하는 언어이다.