// Binance API 주소
const url = "https://api4.binance.com/api/v3/ticker/24hr";

// HTML 요소 가져오기
const searchInput = document.querySelector("#searchInput");
const allTab = document.querySelector("#allTab");
const favoritesTab = document.querySelector("#favoritesTab");
const cryptoList = document.querySelector("#cryptoList");
const cryptoTable = document.querySelector("#cryptoTable");
const loading = document.querySelector("#loading");

// 코인 데이터 및 화면 상태 관리
let coins = [];             // 전체 코인 데이터
let favorites = [];         // 관심 코인 목록
let showFavorites = false;  // 관심 코인 표시 여부
let isLoading = false;      // API 요청 진행 여부

// 코인 데이터 가져오기
function getCoins() {

    // 이전 API 요청이 진행 중이면 중복 요청 방지
    if (isLoading) return;

    isLoading = true;

    // Binance API에 GET 요청
    fetch(url)
        .then(response => {

            // API 요청 제한 발생 시 자동 갱신 중단
            if (response.status === 429 || response.status === 418) {
                clearInterval(timer);
                throw new Error("API 요청 제한");
            }

            // HTTP 응답 오류 확인
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            // 응답 데이터를 JavaScript 객체 및 배열로 변환
            return response.json();
        })
        .then(data => {

            // 이전 데이터를 초기화하여 중복 저장 방지
            coins = [];

            // API에서 받은 전체 코인 데이터 순회
            for (const coin of data) {

                // USDT 거래쌍만 필터링
                if (coin.symbol.endsWith("USDT")) {

                    let symbol = coin.symbol;                       // 거래쌍 심볼
                    let lastPrice = Number(coin.lastPrice);         // 현재가
                    let priceChangePercent = coin.priceChangePercent; // 24시간 변동률
                    let highPrice = Number(coin.highPrice);         // 24시간 최고가
                    let lowPrice = Number(coin.lowPrice);           // 24시간 최저가

                    // 필요한 데이터를 객체로 구성하여 배열에 저장
                    coins.push({
                        symbol,
                        lastPrice,
                        priceChangePercent,
                        highPrice,
                        lowPrice
                    });
                }
            }

            // 새로운 데이터로 코인 목록 갱신
            renderCoins();

            // 로딩 메시지를 숨기고 테이블 표시
            loading.classList.add("hidden");
            cryptoTable.classList.remove("hidden");
        })
        .catch(error => console.error("Error:", error))
        .finally(() => {

            // 요청 성공 여부와 관계없이 로딩 상태 해제
            isLoading = false;
        });
}

// 코인 목록 출력
function renderCoins() {

    // 검색어의 앞뒤 공백 제거 및 대문자 변환
    let keyword = searchInput.value.trim().toUpperCase();

    // 기존 테이블 데이터 초기화
    cryptoList.innerHTML = "";

    for (const coin of coins) {

        // 검색어와 일치하지 않는 코인은 건너뛰기
        if (!coin.symbol.includes(keyword)) continue;

        // 관심 코인 모드에서는 등록된 코인만 표시
        if (showFavorites && !favorites.includes(coin.symbol)) continue;

        // 관심 코인 등록 여부에 따라 별 아이콘 변경
        let star = favorites.includes(coin.symbol) ? "★" : "☆";

        // 템플릿 리터럴을 이용하여 테이블 행 생성
        cryptoList.innerHTML += `
            <tr>
                <td>
                    <button class="fav-btn ${favorites.includes(coin.symbol) ? "active" : ""}"
                            onclick="toggleFavorite('${coin.symbol}')"
                            aria-label="${coin.symbol} 즐겨찾기"
                            aria-pressed="${favorites.includes(coin.symbol)}">
                        ${star}
                    </button>
                </td>
                <td>${coin.symbol}</td>
                <td>${coin.lastPrice}</td>
                <td>${coin.priceChangePercent}</td>
                <td>${coin.highPrice}</td>
                <td>${coin.lowPrice}</td>
            </tr>
        `;
    }
}

// 관심 코인 등록 및 해제
function toggleFavorite(symbol) {

    if (favorites.includes(symbol)) {

        // 이미 등록된 코인은 관심 목록에서 제거
        favorites = favorites.filter(coin => coin !== symbol);

    } else {

        // 등록되지 않은 코인은 관심 목록에 추가
        favorites.push(symbol);
    }

    // 변경된 관심 목록을 화면에 반영
    renderCoins();
}

// 검색창에 입력할 때마다 코인 목록 갱신
searchInput.addEventListener("input", renderCoins);

// 전체보기 탭 클릭 시 전체 코인 표시
allTab.addEventListener("click", () => {
    showFavorites = false;
    renderCoins();
});

// 관심항목 탭 클릭 시 등록된 코인만 표시
favoritesTab.addEventListener("click", () => {
    showFavorites = true;
    renderCoins();
});

// 1초마다 API 요청 및 코인 데이터 갱신
const timer = setInterval(getCoins, 1000);

// 페이지 접속 시 최초 데이터 요청
getCoins();