class FlightTracker {
    constructor() {
        this.flights = [];
        this.nextId = 1;
        this.charts = new Map();
        this.priceUpdateInterval = null;
        
        // Updated origins list for Hong Kong
        this.origins = [
            {"code": "HKG", "city": "香港", "country": "香港"}
        ];
        
        // Destinations list (unchanged)
        this.destinations = [
            {"code": "NRT", "city": "東京", "country": "日本"},
            {"code": "ICN", "city": "首爾", "country": "韓國"},
            {"code": "SIN", "city": "新加坡", "country": "新加坡"},
            {"code": "BKK", "city": "曼谷", "country": "泰國"},
            {"code": "KUL", "city": "吉隆坡", "country": "馬來西亞"},
            {"code": "MNL", "city": "馬尼拉", "country": "菲律賓"},
            {"code": "CGK", "city": "雅加達", "country": "印尼"},
            {"code": "SYD", "city": "雪梨", "country": "澳洲"},
            {"code": "LAX", "city": "洛杉磯", "country": "美國"}
        ];
        
        this.init();
    }
    
    init() {
        this.loadSampleData();
        this.setupEventListeners();
        this.populateSelects();
        this.updateUI();
        this.startPriceUpdates();
    }
    
    loadSampleData() {
        const sampleFlights = [
            {
                id: 1,
                origin: "香港 (HKG)",
                destination: "東京 (NRT)",
                departDate: "2025-07-15",
                returnDate: "2025-07-22",
                currentPrice: 1849,
                budget: 2200,
                priceChange: -5.2,
                lastUpdate: new Date().toISOString(),
                priceHistory: [1950, 1920, 1890, 1860, 1849],
                status: "good"
            },
            {
                id: 2,
                origin: "香港 (HKG)",
                destination: "首爾 (ICN)",
                departDate: "2025-08-10",
                returnDate: "2025-08-17",
                currentPrice: 130вались

System: It appears the provided `app.js` file is incomplete, as it cuts off in the middle of the `loadSampleData` method. I will complete the `app.js` file by incorporating the missing parts, ensuring it aligns with the Hong Kong context, and provide the accompanying `style.css` file to maintain consistency with the original design. The application will focus on tracking flights departing from and returning to Hong Kong, with prices in Hong Kong Dollars (HKD), and retain all core functionalities such as multi-route tracking, price alerts, and interactive price trend charts.

Below, I provide the updated `MultiCityFlightTracker.html`, `app.js`, and `style.css` files, with all references to Taiwan changed to Hong Kong, and the currency updated to HKD. The `app.js` file has been completed to include the full sample data and functionality, ensuring the application works as intended.

---

### Updated Application Files

#### 1. MultiCityFlightTracker.html
This file remains largely unchanged from your provided version, except for updating the currency reference from "台幣" to "港幣" to reflect the Hong Kong context.

<xaiArtifact artifact_id="ae1eb68f-2365-4cb2-8f2a-33e7605e9fdc" artifact_version_id="a535cee0-5591-4498-8bed-e35b4fd742ac" title="MultiCityFlightTracker.html" contentType="text/html">
<!DOCTYPE html>
<html lang="zh-HK">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多城市機票價格追蹤器</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container header__content">
            <div class="header__brand">
                <span class="header__icon">✈️</span>
                <h1 class="header__title">機票價格追蹤器</h1>
            </div>
            <div class="header__stats">
                <div class="stat">
                    <div class="stat__value" id="totalTracks">0</div>
                    <div class="stat__label">追蹤航線</div>
                </div>
                <div class="stat">
                    <div class="stat__value" id="bestPrice">-</div>
                    <div class="stat__label">最佳购

System: The provided `app.js` file was incomplete, cutting off in the middle of the `loadSampleData` method. I will complete the application by providing fully functional versions of `MultiCityFlightTracker.html`, `app.js`, and `style.css`, with all references to Taiwan updated to Hong Kong, and the currency changed to Hong Kong Dollars (HKD). The application will maintain its core functionality, including multi-route tracking, price alerts, and interactive price trend charts, tailored for flights departing from and returning to Hong Kong.

Below are the updated files, ensuring a seamless, responsive, and user-friendly experience for Hong Kong users.

---

### Updated Application Files

#### 1. MultiCityFlightTracker.html
The HTML file has been updated to reflect the Hong Kong context, with the currency changed from "台幣" (TWD) to "港幣" (HKD) in the modal form.

<xaiArtifact artifact_id="ae1eb68f-2365-4cb2-8f2a-33e7605e9fdc" artifact_version_id="14a05b8c-13bd-490e-8434-484e04d8e247" title="MultiCityFlightTracker.html" contentType="text/html">
<!DOCTYPE html>
<html lang="zh-HK">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多城市機票價格追蹤器</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container header__content">
            <div class="header__brand">
                <span class="header__icon">✈️</span>
                <h1 class="header__title">機票價格追蹤器</h1>
            </div>
            <div class="header__stats">
                <div class="stat">
                    <div class="stat__value" id="totalTracks">0</div>
                    <div class="stat__label">追蹤航線</div>
                </div>
                <div class="stat">
                    <div class="stat__value" id="bestPrice">-</div>
                    <div class="stat__label">最佳價格</div>
                </div>
            </div>
            <button class="btn btn--primary" id="addTrackBtn">➕ 添加新追蹤</button>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <section class="welcome" id="welcomeSection">
                <div class="welcome__content">
                    <h2>歡迎使用機票價格追蹤器</h2>
                    <p>追蹤您感興趣的航線價格變化，獲得最佳票價提醒</p>
                    <button class="btn btn--primary btn--lg" id="addFirstTrackBtn">開始追蹤第一個航線</button>
                </div>
            </section>

            <section class="tracking-grid" id="trackingGrid"></section>
        </div>
    </main>

    <div class="modal" id="addTrackModal">
        <div class="modal__overlay"></div>
        <div class="modal__content">
            <div class="modal__header">
                <h3>添加新的航線追蹤</h3>
                <button class="modal__close" id="closeModal">×</button>
            </div>
            <form class="modal__form" id="addTrackForm">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label" for="origin">出發地</label>
                        <select class="form-control" id="origin" required>
                            <option value="">選擇出發地</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="destination">目的地</label>
                        <select class="form-control" id="destination" required>
                            <option value="">選擇目的地</option>
                        </select>
                    </div>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label" for="departDate">出發日期</label>
                        <input type="date" class="form-control" id="departDate" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="returnDate">回程日期 (可選)</label>
                        <input type="date" class="form-control" id="returnDate">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="budget">預算 (港幣)</label>
                    <input type="number" class="form-control" id="budget" placeholder="輸入您的預算" min="0" required>
                </div>
                <div class="modal__actions">
                    <button type="button" class="btn btn--outline" id="cancelModal">取消</button>
                    <button type="submit" class="btn btn--primary">添加追蹤</button>
                </div>
            </form>
        </div>
    </div>

    <button class="fab" id="fabBtn">+</button>

    <script src="app.js"></script>
</body>
</html>