// 덧셈
function add(num1, num2) {
    return num1 + num2;
}

// 뺄셈
function sub(num1, num2) {
    return num1 - num2;
}

// 곱셈
function mul(num1, num2) {
    return num1 * num2;
}

// 나눗셈
function div(num1, num2) {
    if (num2 === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
    }

    return num1 / num2;
}

// 계산식 분석 및 연산
function calcExpr(expression) {
    // 계산식을 숫자, 연산자, 괄호 단위로 분리
    let tokens = expression.match(/\d+(?:\.\d+)?|\S/g) || [];
    let i = 0; // 현재 토큰의 인덱스

    // 숫자, 부호, 괄호 처리
    function parseFactor() {
        let token = tokens[i++];

        // 재귀 호출을 통한 양수 및 음수 처리
        if (token === "-") {
            return -parseFactor();
        }

        if (token === "+") {
            return parseFactor();
        }

        // 괄호 내부의 계산식을 우선 처리
        if (token === "(") {
            let result = parseExpression();

            if (tokens[i] !== ")") {
                throw new Error("닫는 괄호가 필요합니다.");
            }

            i++;
            return result;
        }

        // 숫자 유효성 검사
        if (token === undefined || !/^\d+(?:\.\d+)?$/.test(token)) {
            throw new Error("잘못된 계산식입니다.");
        }

        return Number(token);
    }

    // 곱셈과 나눗셈을 왼쪽부터 처리
    function parseTerm() {
        let result = parseFactor();

        while (tokens[i] === "*" || tokens[i] === "/") {
            let op = tokens[i++];
            let num = parseFactor();

            if (op === "*") {
                result = mul(result, num);
            } else {
                result = div(result, num);
            }
        }

        return result;
    }

    // 곱셈과 나눗셈 처리 후 덧셈과 뺄셈 수행
    function parseExpression() {
        let result = parseTerm();

        while (tokens[i] === "+" || tokens[i] === "-") {
            let op = tokens[i++];
            let num = parseTerm();

            if (op === "+") {
                result = add(result, num);
            } else {
                result = sub(result, num);
            }
        }

        return result;
    }

    let result = parseExpression();

    // 처리되지 않은 토큰이 남아 있는지 검사
    if (i !== tokens.length) {
        throw new Error("잘못된 계산식입니다.");
    }

    return result;
}

// 계산기 실행
function start() {
    let expression = prompt("계산식을 입력하세요:");

    // 입력 취소 처리
    if (expression === null) {
        return;
    }

    // 계산 결과 출력 및 예외 처리
    try {
        console.log(calcExpr(expression));
    } catch (error) {
        console.log(error.message);
    }
}