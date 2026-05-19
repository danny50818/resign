const drinks = [
  { category: "原葉鮮萃茶", name: "鮮萃大麥紅茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "海神", prices: { L: 45 } },
  { category: "原葉鮮萃茶", name: "玩火", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "碧螺春", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "四季春", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "玫瑰普洱", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "烏龍綠茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "茉莉烏龍", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "斯里蘭卡烏瓦紅茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "金萱茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "熟滄觀音", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "文山包種", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "東方美人", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "白桃蜜烏龍", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "洛神蜜香紅茶", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "桂花四季春", prices: { L: 50 } },
  { category: "鮮萃茶拿鐵", name: "紅茶拿鐵", prices: { M: 60, L: 65 } },
  { category: "鮮萃茶拿鐵", name: "烏龍拿鐵", prices: { L: 65 } },
  { category: "鮮萃茶拿鐵", name: "金萱拿鐵", prices: { L: 65 } },
  { category: "鮮萃茶拿鐵", name: "觀音拿鐵", prices: { L: 65 } },
  { category: "門市限定", name: "特調咖啡", prices: { M: 45, L: 50 } },
  { category: "門市限定", name: "經典美式咖啡", prices: { M: 55, L: 55 } },
  { category: "門市限定", name: "精品招牌咖啡", prices: { M: 60, L: 60 } },
  { category: "門市限定", name: "莊園拿鐵", prices: { M: 70, L: 70 } },
  { category: "門市限定", name: "咖啡冰沙", prices: { L: 60 } },
  { category: "鮮調果茶", name: "錫蘭紅茶", prices: { M: 25, L: 30 } },
  { category: "鮮調果茶", name: "茉莉綠茶", prices: { M: 25, L: 30 } },
  { category: "鮮調果茶", name: "蜂蜜紅/綠茶", prices: { M: 45, L: 50 } },
  { category: "鮮調果茶", name: "玉荷冰綠", prices: { L: 50 } },
  { category: "鮮調果茶", name: "檸檬冰茶", prices: { M: 50, L: 55 } },
  { category: "鮮調果茶", name: "梅果茶", prices: { M: 50, L: 55 } },
  { category: "鮮調果茶", name: "喜樂多綠茶", prices: { M: 50, L: 55 } },
  { category: "鮮調果茶", name: "百香搖果樂", prices: { M: 55, L: 60 } },
  { category: "鮮調果茶", name: "蘋果冰茶", prices: { M: 55, L: 60 } },
  { category: "鮮調果茶", name: "鳳梨冰茶", prices: { L: 65 } },
  { category: "鮮調果茶", name: "芭樂檸檬綠", prices: { L: 65 } },
  { category: "果然系列", name: "超怕霸氣飲", prices: { L: 50 } },
  { category: "果然系列", name: "蜂蜜蘆薈", prices: { M: 45, L: 50 } },
  { category: "果然系列", name: "金桔檸檬", prices: { M: 50, L: 55 } },
  { category: "果然系列", name: "荔枝玉露", prices: { M: 50, L: 55 } },
  { category: "果然系列", name: "纖美小紫蘇", prices: { M: 50, L: 65 } },
  { category: "果然系列", name: "芭樂多多", prices: { M: 65, L: 85 } },
  { category: "夏季限定", name: "檸檬愛玉風味飲", prices: { L: 55 } },
  { category: "夏季限定", name: "百香果冰沙", prices: { L: 55 } },
  { category: "夏季限定", name: "金芒果優酪", prices: { L: 65 } },
  { category: "夏季限定", name: "葡萄柚綠茶", prices: { L: 65 } },
  { category: "夏季限定", name: "七巧歐蕾", prices: { L: 70 } },
  { category: "夏季限定", name: "青檸香柚QQ", prices: { L: 75 } },
  { category: "奶茶/特調", name: "雙Q奶茶1號", prices: { M: 55, L: 60 } },
  { category: "奶茶/特調", name: "雙Q奶茶2號", prices: { M: 55, L: 60 } },
  { category: "奶茶/特調", name: "招牌奶茶", prices: { M: 45, L: 50 } },
  { category: "奶茶/特調", name: "黃金奶綠", prices: { M: 45, L: 50 } },
  { category: "奶茶/特調", name: "珍珠奶茶", prices: { M: 50, L: 55 } },
  { category: "奶茶/特調", name: "鮮萃大麥奶茶", prices: { L: 60 } },
  { category: "奶茶/特調", name: "海神奶茶", prices: { L: 65 } },
  { category: "奶茶/特調", name: "玩火奶茶", prices: { L: 60 } },
  { category: "奶茶/特調", name: "玫瑰普洱奶茶", prices: { L: 60 } },
  { category: "奶茶/特調", name: "粉條奶茶", prices: { M: 55, L: 60 } },
  { category: "奶茶/特調", name: "仙草凍奶茶", prices: { L: 65 } },
  { category: "奶茶/特調", name: "桂花奶綠", prices: { M: 60, L: 65 } },
  { category: "奶茶/特調", name: "港式厚奶", prices: { L: 70 } },
  { category: "奶茶/特調", name: "觀音厚奶", prices: { L: 70 } },
  { category: "奶茶/特調", name: "經典可可", prices: { M: 50, L: 55 } },
  { category: "奶茶/特調", name: "宇治抹茶", prices: { M: 60, L: 60 } },
  { category: "奶茶/特調", name: "抹茶拿鐵", prices: { L: 80 } },
  { category: "冬季限定", name: "桂圓紅棗", prices: { M: 50 } },
  { category: "冬季限定", name: "暖薑茶", prices: { M: 50 } },
  { category: "冬季限定", name: "暖薑奶茶", prices: { L: 60 } },
  { category: "冬季限定", name: "熱檸茶", prices: { M: 50, L: 55 } },
  { category: "冬季限定", name: "熱桔茶", prices: { M: 50, L: 55 } },
  { category: "冬季限定", name: "紫米奶茶", prices: { M: 60, L: 65 } },
  { category: "冬季限定", name: "紫米可可", prices: { M: 65, L: 70 } },
  { category: "冬季限定", name: "黑糖薑汁可可", prices: { M: 65, L: 70 } },
];

const toppings = [
  { name: "珍珠", price: 10 },
  { name: "雙Q1號", price: 10 },
  { name: "雙Q2號", price: 10 },
  { name: "小芋圓", price: 10 },
  { name: "搖果樂", price: 10 },
  { name: "寒天晶球", price: 10 },
  { name: "小紫蘇", price: 10 },
  { name: "椰果", price: 10 },
  { name: "粉條", price: 10 },
  { name: "愛玉風味凍", price: 10 },
  { name: "蘆薈", price: 10 },
  { name: "荔枝凍", price: 10 },
  { name: "仙草凍", price: 15 },
  { name: "布丁", price: 15 },
  { name: "紫米", price: 15 },
];

const friedItems = [
  { category: "單點", name: "脆皮雞排", price: 85 },
  { category: "單點", name: "深海魷魚", price: 65 },
  { category: "單點", name: "無骨鹽酥雞", price: 65 },
  { category: "單點", name: "雞軟骨", price: 65 },
  { category: "單點", name: "雞蛋豆腐", price: 60 },
  { category: "單點", name: "甘梅地瓜(小)", price: 30 },
  { category: "單點", name: "甘梅地瓜(大)", price: 50 },
  { category: "單點", name: "雞皮", price: 50 },
  { category: "單點", name: "玉米筍", price: 45 },
  { category: "單點", name: "月亮蝦餅", price: 40 },
  { category: "單點", name: "起司條(3條)", price: 40 },
  { category: "單點", name: "煉乳銀絲卷", price: 35 },
  { category: "單點", name: "脆薯", price: 40 },
  { category: "單點", name: "柳葉魚", price: 50 },
  { category: "單點", name: "甜不辣", price: 30 },
  { category: "單點", name: "花枝丸", price: 30 },
  { category: "單點", name: "四季豆", price: 35 },
  { category: "單點", name: "脆皮麻糬", price: 35 },
  { category: "單點", name: "玉米布丁酥(4個)", price: 35 },
  { category: "單點", name: "脆皮雞翅(1支)", price: 30 },
  { category: "單點", name: "脆皮雞翅(4支)", price: 100 },
  { category: "單點", name: "雞屁股", price: 30 },
  { category: "單點", name: "蘿蔔糕(二片)", price: 30 },
  { category: "單點", name: "蛋蛋芋丸(4個)", price: 30 },
  { category: "單點", name: "撈心湯圓", price: 30 },
  { category: "單點", name: "芋巧(鹹)", price: 20 },
  { category: "單點", name: "洋蔥圈(4個)", price: 30 },
  { category: "單點", name: "脆皮米腸", price: 25 },
  { category: "單點", name: "養生杏鮑菇", price: 25 },
  { category: "單點", name: "黑輪", price: 20 },
  { category: "單點", name: "百頁豆腐", price: 25 },
  { category: "單點", name: "脆皮糯米椒", price: 25 },
  { category: "單點", name: "脆皮梅瓜", price: 25 },
  { category: "單點", name: "熱狗", price: 20 },
  { category: "單點", name: "小熱狗", price: 35 },
  { category: "單點", name: "美式薯餅", price: 20 },
  { category: "單點", name: "五香豆干", price: 15 },
  { category: "單點", name: "米血糕", price: 15 },
  { category: "單點", name: "芋粿", price: 15 },
  { category: "飲料", name: "可樂350cc", price: 25 },
  { category: "飲料", name: "可樂600cc", price: 35 },
  { category: "優惠套餐", name: "鹽酥雞+脆薯+可樂350cc", price: 120 },
  { category: "優惠套餐", name: "雞排+甘梅地瓜", price: 110 },
  { category: "優惠套餐", name: "雞排+熱狗", price: 100 },
  { category: "優惠套餐", name: "深海魷魚+豆干", price: 75 },
  { category: "優惠套餐", name: "無骨鹽酥雞+豆干", price: 75 },
  { category: "優惠套餐", name: "雞排+黑輪", price: 100 },
  { category: "優惠套餐", name: "雞排+深海魷魚", price: 100 },
  { category: "優惠套餐", name: "雞排+杏鮑菇+可樂600cc", price: 135 },
];

const els = {
  form: document.querySelector("#orderForm"),
  customerName: document.querySelector("#customerName"),
  drinkSearch: document.querySelector("#drinkSearch"),
  drinkSelect: document.querySelector("#drinkSelect"),
  friedSearch: document.querySelector("#friedSearch"),
  friedSelect: document.querySelector("#friedSelect"),
  sugarSelect: document.querySelector("#sugarSelect"),
  iceSelect: document.querySelector("#iceSelect"),
  toppingList: document.querySelector("#toppingList"),
  summary: document.querySelector("#summary"),
  totalPrice: document.querySelector("#totalPrice"),
  statusMessage: document.querySelector("#statusMessage"),
  recordsBody: document.querySelector("#recordsBody"),
  sheetEndpoint: document.querySelector("#sheetEndpoint"),
  saveEndpoint: document.querySelector("#saveEndpoint"),
  clearRecords: document.querySelector("#clearRecords"),
  clearToppings: document.querySelector("#clearToppings"),
};

const STORAGE_KEYS = {
  records: "farewell-orders-records",
  endpoint: "farewell-orders-sheet-endpoint",
};

const DEFAULT_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbyuPFMhZm9cV4ME32ps1GfpRUa32U9aaTn5Jqwbl-e8iWYibvDBdKRsr02-0z5oLLCq-Q/exec";

function priceLabel(prices) {
  return Object.entries(prices)
    .map(([size, price]) => `${size === "M" ? "中" : "大"} $${price}`)
    .join(" / ");
}

function selectedDrink() {
  return drinks[Number(els.drinkSelect.value)] || drinks[0];
}

function selectedFried() {
  return friedItems[Number(els.friedSelect.value)] || friedItems[0];
}

function selectedSize() {
  const checked = document.querySelector("input[name='drinkSize']:checked");
  return checked?.value || "M";
}

function selectedToppings() {
  return [...document.querySelectorAll("input[name='toppings']:checked")].map((input) => toppings[Number(input.value)]);
}

function groupOptions(select, items, formatter) {
  const groups = new Map();
  items.forEach((item) => {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  });

  select.innerHTML = "";
  groups.forEach((groupItems, category) => {
    const group = document.createElement("optgroup");
    group.label = category;
    groupItems.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.originalIndex;
      option.textContent = formatter(item);
      group.append(option);
    });
    select.append(group);
  });
}

function renderDrinkOptions() {
  const keyword = els.drinkSearch.value.trim().toLowerCase();
  const filtered = drinks
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter((item) => `${item.category} ${item.name}`.toLowerCase().includes(keyword));
  groupOptions(els.drinkSelect, filtered, (item) => `${item.name} - ${priceLabel(item.prices)}`);
  updateSizeAvailability();
}

function renderFriedOptions() {
  const keyword = els.friedSearch.value.trim().toLowerCase();
  const filtered = friedItems
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter((item) => `${item.category} ${item.name}`.toLowerCase().includes(keyword));
  groupOptions(els.friedSelect, filtered, (item) => `${item.name} - $${item.price}`);
  updateSummary();
}

function renderToppings() {
  els.toppingList.innerHTML = toppings
    .map((item, index) => `
      <label class="chip">
        <input type="checkbox" name="toppings" value="${index}">
        <span>${item.name} +$${item.price}</span>
      </label>
    `)
    .join("");
}

function updateSizeAvailability() {
  const drink = selectedDrink();
  const radios = [...document.querySelectorAll("input[name='drinkSize']")];
  radios.forEach((radio) => {
    radio.disabled = !drink.prices[radio.value];
  });

  const current = document.querySelector("input[name='drinkSize']:checked");
  if (!current || current.disabled) {
    const firstAvailable = radios.find((radio) => !radio.disabled);
    if (firstAvailable) firstAvailable.checked = true;
  }
  updateSummary();
}

function buildOrder() {
  const drink = selectedDrink();
  const fried = selectedFried();
  const size = selectedSize();
  const toppingList = selectedToppings();
  const drinkPrice = drink.prices[size] || 0;
  const toppingTotal = toppingList.reduce((sum, item) => sum + item.price, 0);
  const total = drinkPrice + toppingTotal + fried.price;

  return {
    orderedAt: new Date().toLocaleString("zh-TW", { hour12: false }),
    customerName: els.customerName.value.trim(),
    drinkCategory: drink.category,
    drinkName: drink.name,
    drinkSize: size === "M" ? "中杯" : "大杯",
    sugar: els.sugarSelect.value,
    ice: els.iceSelect.value,
    toppings: toppingList.map((item) => item.name).join("、") || "無",
    friedCategory: fried.category,
    friedName: fried.name,
    drinkPrice,
    toppingTotal,
    friedPrice: fried.price,
    total,
  };
}

function updateSummary() {
  const order = buildOrder();
  const name = order.customerName || "尚未填寫";
  els.summary.innerHTML = `
    <div><dt>點餐人</dt><dd>${name}</dd></div>
    <div><dt>飲料</dt><dd>${order.drinkName} / ${order.drinkSize} / ${order.sugar} / ${order.ice}</dd></div>
    <div><dt>加料</dt><dd>${order.toppings}</dd></div>
    <div><dt>炸物</dt><dd>${order.friedName}</dd></div>
  `;
  els.totalPrice.textContent = `$${order.total}`;
}

function getRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.records) || "[]");
  } catch {
    return [];
  }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEYS.records, JSON.stringify(records));
}

function renderRecords() {
  const records = getRecords();
  els.recordsBody.innerHTML = records.length
    ? records.map((order) => `
      <tr>
        <td>${order.orderedAt}</td>
        <td>${order.customerName}</td>
        <td>${order.drinkName} / ${order.drinkSize} / ${order.sugar} / ${order.ice}<br>加料：${order.toppings}</td>
        <td>${order.friedName}</td>
        <td>$${order.total}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="5">還沒有點餐紀錄。</td></tr>`;
}

async function syncToSheet(order) {
  const endpoint = els.sheetEndpoint.value.trim();
  if (!endpoint) return "本機已儲存。貼上 Apps Script URL 後即可同步 Google Sheet。";

  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(order),
  });
  return "已送出並嘗試同步 Google Sheet。";
}

function setStatus(message, isError = false) {
  els.statusMessage.textContent = message;
  els.statusMessage.classList.toggle("error", isError);
}

els.form.addEventListener("input", updateSummary);
els.drinkSearch.addEventListener("input", renderDrinkOptions);
els.friedSearch.addEventListener("input", renderFriedOptions);
els.drinkSelect.addEventListener("change", updateSizeAvailability);
els.friedSelect.addEventListener("change", updateSummary);
els.toppingList.addEventListener("change", updateSummary);

els.saveEndpoint.addEventListener("click", () => {
  localStorage.setItem(STORAGE_KEYS.endpoint, els.sheetEndpoint.value.trim());
  setStatus("Google Sheet 同步網址已儲存。");
});

els.clearToppings.addEventListener("click", () => {
  document.querySelectorAll("input[name='toppings']").forEach((input) => {
    input.checked = false;
  });
  updateSummary();
});

els.clearRecords.addEventListener("click", () => {
  if (!confirm("確定清除這台電腦上的點餐紀錄嗎？")) return;
  saveRecords([]);
  renderRecords();
});

els.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const order = buildOrder();
  if (!order.customerName) {
    setStatus("請先填姓名或綽號。", true);
    els.customerName.focus();
    return;
  }

  const records = getRecords();
  records.unshift(order);
  saveRecords(records);
  renderRecords();

  try {
    const message = await syncToSheet(order);
    setStatus(message);
    els.form.reset();
    els.sheetEndpoint.value = localStorage.getItem(STORAGE_KEYS.endpoint) || DEFAULT_SHEET_ENDPOINT;
    renderDrinkOptions();
    renderFriedOptions();
    document.querySelector("input[name='drinkSize'][value='M']").checked = true;
    updateSizeAvailability();
  } catch (error) {
    setStatus(`本機已儲存，但同步失敗：${error.message}`, true);
  }
});

els.sheetEndpoint.value = localStorage.getItem(STORAGE_KEYS.endpoint) || DEFAULT_SHEET_ENDPOINT;
renderToppings();
renderDrinkOptions();
renderFriedOptions();
renderRecords();
updateSummary();
