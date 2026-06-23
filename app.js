const BASE_PRODUCTS = [
  { id: "balcony-single", name: "발코니용 단창", description: "재현하늘창 130 발코니전용 단창 [26T AL간봉 Low-E]", bf: 8602, sf: 5541, glass: 4200, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "balcony-double", name: "발코니용 이중창", description: "재현하늘창 250 발코니전용 이중창 [26T AL간봉 Low-E]", bf: 10000, sf: 5541, glass: 4200, layers: 2, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "integrated-single", name: "공틀일체형 단창", description: "재현하늘창 225 공틀일체형 단창 [24T AL간봉 Low-E]", bf: 6232, sf: 5300, glass: 4000, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "inside-double", name: "내부용 이중창(단독,빌라)", description: "재현하늘창 232 이중창 [24T AL간봉 Low-E]", bf: 8232, sf: 5300, glass: 4000, layers: 2, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "inside-single", name: "내부용 단창(단독,빌라)", description: "재현하늘창 120 단창 [24T AL간봉 Low-E]", bf: 4300, sf: 5300, glass: 4000, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "fix-single", name: "Fix(고정) 단창", description: "재현하늘창 고정 단창", bf: 5541, sf: 0, glass: 4200, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "fix-double", name: "Fix(고정) 이중창", description: "재현하늘창 고정 이중창", bf: 9182, sf: 0, glass: 4200, layers: 2, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "pj", name: "PJ창", description: "재현하늘창 PJ창", bf: 20000, sf: 20000, glass: 4200, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "hall-tempered", name: "복도창 (5T 강화유리)", description: "재현하늘창 120 단창 [5T 강화유리]", bf: 4300, sf: 5300, glass: 3200, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 },
  { id: "hall-lowe", name: "복도창 (16T AL간봉 Low-E 유리)", description: "재현하늘창 120 단창 [16T AL간봉 Low-E]", bf: 4300, sf: 5300, glass: 3500, layers: 1, install: 4500, manufacture: .36, installFactor: 1.3 }
];

const LADDER = [
  ["사용 안 함", 0], ["2층 (1시간)", 120000], ["2층", 200000], ["3층 (1시간)", 120000], ["3층", 200000],
  ["4층 (1시간)", 120000], ["4층", 200000], ["5층 (1시간)", 120000], ["5층", 200000],
  ["6층 (1시간)", 130000], ["6층", 210000], ["7층 (1시간)", 130000], ["7층", 210000],
  ["8층 (1시간)", 140000], ["8층", 220000], ["9층 (1시간)", 140000], ["9층", 220000],
  ["10층 (1시간)", 150000], ["10층", 250000], ["11층 (1시간)", 150000], ["11층", 250000],
  ["12층 (1시간)", 160000], ["12층", 240000], ["13층 (1시간)", 160000], ["13층", 240000],
  ["14층 (1시간)", 170000], ["14층", 270000], ["15층 (1시간)", 180000], ["15층", 280000],
  ["16층 (1시간)", 180000], ["16층", 290000], ["17층 (1시간)", 200000], ["17층", 300000],
  ["18층 (1시간)", 210000], ["18층", 330000], ["19층 (1시간)", 230000], ["19층", 350000],
  ["20층 (1시간)", 250000], ["20층", 370000], ["21층 (1시간)", 280000], ["21층", 400000],
  ["22층 (1시간)", 310000], ["22층", 430000], ["23층 (1시간)", 340000], ["23층", 460000],
  ["24층 (1시간)", 380000], ["24층", 500000], ["25층 (1시간)", 430000], ["25층", 550000]
];

const SKY = [
  ["사용 안 함", 0], ["3.5톤 반나절(9층이하)", 500000], ["3.5톤 온종일(9층이하)", 700000],
  ["5톤 반나절(14층이하)", 600000], ["5톤 온종일(14층이하)", 800000],
  ["54M 반나절", 800000], ["54M 온종일", 1000000], ["65M 반나절", 1000000],
  ["65M 온종일", 1300000], ["75M 반나절", 1400000], ["75M 온종일", 1900000]
];

const BASE_EXTRAS = [
  { id: "protection", name: "보호작업비", price: 100000, qty: 0 },
  { id: "tile", name: "타일", price: 500000, qty: 0 },
  { id: "molding", name: "몰딩", price: 60000, qty: 0 },
  { id: "door", name: "방화문/ABS", price: 900000, qty: 0 },
  { id: "middle-door", name: "중문(3연동)", price: 650000, qty: 0 },
  { id: "security", name: "방범창", price: 120000, qty: 0 },
  { id: "folding", name: "터닝/폴딩도어", price: 350000, qty: 0 },
  { id: "option", name: "OPTION", price: 0, qty: 0 }
];

const NOTES = `○ 공통사항: 유리(외부 26~24T Low-E / 내부 24~22T), 촘촘방충망(외부), 고품질 부자재(폼 및 실리콘)로 시공
○ 무상보증기간: 자재 및 시공 전 부문 2년 (단, 소모품 및 파손 제외)
○ 창호의 기본색상은 흰색(white)이며 색상 변경 시 추가비용이 발생할 수 있습니다.
○ 기존 창호 철거 시 인접 타일 손상이 발생할 수 있으며 타일 마감비는 별도입니다.
○ 창호 교체 후 도배를 새로 하지 않을 경우 몰딩비가 추가될 수 있습니다.
○ 거주 공사의 경우 보양비가 추가될 수 있습니다.
○ 실측 전 견적은 현장 실측 후 다소 차이가 발생할 수 있습니다.
○ 특별한 시공 조건은 계약 전에 반드시 알려주셔야 합니다.`;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const won = value => `₩${Math.round(Number(value) || 0).toLocaleString("ko-KR")}`;
const number = value => Number(value) || 0;
const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
const today = () => new Date().toISOString().slice(0, 10);
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

let products = load("jh-rates", BASE_PRODUCTS);
let state = load("jh-draft", null) || initialState();
let saveTimer;
let folderSaveTimer;
let quoteDirectory = null;
let folderQuotes = [];
let folderPermission = "none";
const DIRECTORY_DB = "jh-estimate-storage";
const DIRECTORY_STORE = "handles";

function initialState() {
  return {
    id: uid(), updatedAt: new Date().toISOString(),
    info: { quoteName: "", siteName: "", customerName: "", customerPhone: "", quoteDate: today(), manager: "곽태일 대리 010-2036-9848", siteAddress: "", memo: "" },
    items: [newItem()],
    extras: structuredClone(BASE_EXTRAS),
    costs: { demolitionQty: 1, demolitionPrice: 200000, ladderType: "사용 안 함", ladderQty: 0, skyType: "사용 안 함", skyQty: 0, laborQty: 0, laborPrice: 300000 },
    totals: { adjustment: 0, discount: 0, vatMode: "included", roundUnit: 10000 }
  };
}

function newItem() {
  return { id: uid(), location: "", product: BASE_PRODUCTS[0].id, width: "", height: "", structure: 0, handle: "크리센트", qty: 1 };
}

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? structuredClone(fallback); }
  catch { return structuredClone(fallback); }
}

function persistDraft() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem("jh-draft", JSON.stringify(state));
  $(".autosave").textContent = "자동 저장됨";
  scheduleFolderSave();
}

function scheduleSave() {
  $(".autosave").textContent = "저장 중…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persistDraft, 350);
}

function supportsFolderStorage() {
  return typeof window.showDirectoryPicker === "function" && "indexedDB" in window;
}

function openDirectoryDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DIRECTORY_DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(DIRECTORY_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function directoryDbGet() {
  const db = await openDirectoryDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DIRECTORY_STORE, "readonly");
    const request = transaction.objectStore(DIRECTORY_STORE).get("quote-directory");
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function directoryDbSet(handle) {
  const db = await openDirectoryDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DIRECTORY_STORE, "readwrite");
    const store = transaction.objectStore(DIRECTORY_STORE);
    const request = handle ? store.put(handle, "quote-directory") : store.delete("quote-directory");
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function checkDirectoryPermission(handle, request = false) {
  if (!handle) return false;
  const options = { mode: "readwrite" };
  if ((await handle.queryPermission(options)) === "granted") return true;
  if (request && (await handle.requestPermission(options)) === "granted") return true;
  return false;
}

function safeFilePart(value) {
  return String(value || "미지정")
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "_")
    .replace(/\s+/g, " ")
    .slice(0, 45) || "미지정";
}

function ensureStorageFile(quote) {
  if (!quote.storageFile) {
    const date = safeFilePart(quote.info?.quoteDate || today());
    const site = safeFilePart(quote.info?.siteName || quote.info?.quoteName || "견적");
    quote.storageFile = `재현견적_${date}_${site}_${quote.id.slice(-6)}.json`;
  }
  return quote.storageFile;
}

async function writeQuoteToFolder(quote, silent = false) {
  if (!quoteDirectory || folderPermission !== "granted") return false;
  const snapshot = structuredClone(quote);
  snapshot.app = "재현견적";
  snapshot.schemaVersion = 2;
  snapshot.snapshotTotal = quote.id === state.id ? calculate().final : number(snapshot.snapshotTotal);
  snapshot.updatedAt = new Date().toISOString();
  const fileName = ensureStorageFile(snapshot);
  quote.storageFile = fileName;
  const fileHandle = await quoteDirectory.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(JSON.stringify(snapshot, null, 2));
  await writable.close();
  if (!silent) toast(`내 컴퓨터의 “${quoteDirectory.name}” 폴더에 저장했습니다.`);
  return true;
}

function scheduleFolderSave() {
  clearTimeout(folderSaveTimer);
  if (!quoteDirectory || folderPermission !== "granted") return;
  folderSaveTimer = setTimeout(async () => {
    try {
      await writeQuoteToFolder(state, true);
      $(".autosave").textContent = "PC 폴더에 자동 저장됨";
    } catch (error) {
      console.warn("Folder autosave failed", error);
      $(".autosave").textContent = "브라우저에만 저장됨";
      setFolderStatus("warning", "PC 폴더 자동 저장을 확인해 주세요.", "저장 목록에서 폴더 권한을 다시 연결할 수 있습니다.");
    }
  }, 1200);
}

async function readQuotesFromFolder() {
  if (!quoteDirectory || folderPermission !== "granted") return [];
  const quotes = [];
  for await (const entry of quoteDirectory.values()) {
    if (entry.kind !== "file" || !entry.name.startsWith("재현견적_") || !entry.name.endsWith(".json")) continue;
    try {
      const file = await entry.getFile();
      const quote = JSON.parse(await file.text());
      if (!quote.id || !quote.info || !Array.isArray(quote.items)) continue;
      quote.storageFile = entry.name;
      quote._storage = "folder";
      quotes.push(quote);
    } catch (error) {
      console.warn(`Cannot read ${entry.name}`, error);
    }
  }
  folderQuotes = quotes.sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
  return folderQuotes;
}

function setFolderStatus(mode, title, text) {
  const status = $(".folder-status");
  status.classList.toggle("connected", mode === "connected");
  status.classList.toggle("warning", mode === "warning");
  $("#folderStatusTitle").textContent = title;
  $("#folderStatusText").textContent = text;
  $("#disconnectFolderBtn").hidden = mode === "none";
  $("#refreshFolderBtn").disabled = mode !== "connected";
}

async function connectQuoteFolder() {
  if (!supportsFolderStorage()) {
    toast("이 브라우저는 PC 폴더 연결을 지원하지 않습니다. Chrome 또는 Edge를 사용해 주세요.");
    return;
  }
  try {
    quoteDirectory = await window.showDirectoryPicker({ id: "jh-quote-folder", mode: "readwrite" });
    folderPermission = await checkDirectoryPermission(quoteDirectory, true) ? "granted" : "denied";
    if (folderPermission !== "granted") throw new Error("Folder permission denied");
    await directoryDbSet(quoteDirectory);
    setFolderStatus("connected", `“${quoteDirectory.name}” 폴더 연결됨`, "견적을 작성하면 이 폴더에 자동 저장됩니다.");
    await readQuotesFromFolder();
    renderSaved();
    await writeQuoteToFolder(state, true);
    toast("견적 저장 폴더를 연결했습니다.");
  } catch (error) {
    if (error?.name === "AbortError") return;
    setFolderStatus("warning", "폴더를 연결하지 못했습니다.", "폴더의 읽기·쓰기 권한을 허용한 뒤 다시 시도해 주세요.");
    toast("폴더 연결이 취소되었거나 권한이 허용되지 않았습니다.");
  }
}

async function restoreQuoteFolder() {
  if (!supportsFolderStorage()) {
    setFolderStatus("none", "PC 폴더 저장을 지원하지 않는 브라우저입니다.", "PC용 Chrome 또는 Edge에서는 폴더 자동 저장을 사용할 수 있습니다.");
    $("#connectFolderBtn").disabled = true;
    return;
  }
  try {
    quoteDirectory = await directoryDbGet();
    if (!quoteDirectory) {
      setFolderStatus("none", "저장 폴더가 연결되지 않았습니다.", "“저장 폴더 선택”을 눌러 고객 견적을 보관할 폴더를 지정하세요.");
      return;
    }
    folderPermission = await checkDirectoryPermission(quoteDirectory, false) ? "granted" : "prompt";
    if (folderPermission === "granted") {
      setFolderStatus("connected", `“${quoteDirectory.name}” 폴더 연결됨`, "견적을 작성하면 이 폴더에 자동 저장됩니다.");
      await readQuotesFromFolder();
      renderSaved();
    } else {
      setFolderStatus("warning", `“${quoteDirectory.name}” 폴더 권한 확인 필요`, "“폴더 권한 다시 허용”을 눌러 자동 저장을 계속하세요.");
      $("#connectFolderBtn").textContent = "폴더 권한 다시 허용";
    }
  } catch (error) {
    console.warn("Cannot restore folder", error);
    setFolderStatus("warning", "기존 폴더 연결을 복원하지 못했습니다.", "저장 폴더를 다시 선택해 주세요.");
  }
}

async function reconnectQuoteFolder() {
  if (quoteDirectory && folderPermission === "prompt") {
    try {
      folderPermission = await checkDirectoryPermission(quoteDirectory, true) ? "granted" : "denied";
      if (folderPermission === "granted") {
        $("#connectFolderBtn").textContent = "저장 폴더 변경";
        setFolderStatus("connected", `“${quoteDirectory.name}” 폴더 연결됨`, "견적을 작성하면 이 폴더에 자동 저장됩니다.");
        await readQuotesFromFolder();
        renderSaved();
        toast("폴더 권한을 다시 연결했습니다.");
        return;
      }
    } catch {}
  }
  await connectQuoteFolder();
}

async function disconnectQuoteFolder() {
  clearTimeout(folderSaveTimer);
  quoteDirectory = null;
  folderQuotes = [];
  folderPermission = "none";
  await directoryDbSet(null);
  $("#connectFolderBtn").textContent = "저장 폴더 선택";
  setFolderStatus("none", "저장 폴더 연결을 해제했습니다.", "견적은 브라우저에 계속 저장되며, 언제든 폴더를 다시 연결할 수 있습니다.");
  renderSaved();
  toast("PC 폴더 연결을 해제했습니다.");
}

function productById(id) { return products.find(product => product.id === id) || products[0]; }
function optionPrice(list, label) { return (list.find(([name]) => name === label) || ["", 0])[1]; }

function smallWindowFactor(area) {
  if (area < 3) return 1.7;
  if (area < 4) return 1.4;
  if (area < 5.5) return 1.3;
  if (area < 19) return 1.1;
  return 1;
}

function demolitionUnit(qty) {
  if (qty <= 0) return 0;
  if (qty === 1) return 200000;
  if (qty === 2) return 120000;
  if (qty === 3) return 90000;
  if (qty === 4) return 70000;
  if (qty === 5) return 60000;
  if (qty === 6) return 55000;
  if (qty <= 10) return 50000;
  return 40000;
}

function calculateItem(item) {
  const product = productById(item.product);
  const w = number(item.width), h = number(item.height), qty = Math.max(1, number(item.qty));
  if (!w || !h) return { total: 0, area: 0, raw: 0, manufacturing: 0, install: 0, factor: 1, qty };
  const bfLength = (w + h) * 2;
  const structureExtra = number(item.structure);
  const sfLength = product.sf ? (w * 2 + h * 4 + structureExtra * h) * product.layers : 0;
  const area = w * h / 90000;
  const glassArea = Math.floor(area * product.layers) * .76;
  const raw = bfLength / 1000 * product.bf + sfLength / 1000 * product.sf + glassArea * product.glass;
  const handle = item.handle === "오토락" ? product.layers * 50000 : 0;
  const manufacturing = raw * product.manufacture + handle;
  const factor = smallWindowFactor(area);
  const install = product.install * area;
  const total = (raw + manufacturing) * factor * product.installFactor + install;
  return { total: total * qty, area, raw, manufacturing, install, factor, qty, bfLength, sfLength, glassArea };
}

function calculate() {
  const itemResults = state.items.map(calculateItem);
  const windowTotal = itemResults.reduce((sum, result) => sum + result.total, 0);
  const fixedTotal = state.extras.reduce((sum, extra) => sum + number(extra.qty) * number(extra.price), 0);
  const costs = state.costs;
  const extraTotal =
    number(costs.demolitionQty) * number(costs.demolitionPrice) +
    optionPrice(LADDER, costs.ladderType) * number(costs.ladderQty) +
    optionPrice(SKY, costs.skyType) * number(costs.skyQty) +
    number(costs.laborQty) * number(costs.laborPrice) + fixedTotal;
  const adjusted = Math.max(0, windowTotal + extraTotal + number(state.totals.adjustment) - number(state.totals.discount));
  const vat = state.totals.vatMode === "included" ? adjusted * .1 : 0;
  const beforeRound = adjusted + vat;
  const unit = Math.max(1, number(state.totals.roundUnit));
  const final = Math.floor(beforeRound / unit) * unit;
  return { itemResults, windowTotal, extraTotal, supply: adjusted, vat, final };
}

function bindInfo() {
  Object.keys(state.info).forEach(key => {
    const input = $(`#${key}`);
    if (!input) return;
    input.value = state.info[key] ?? "";
    input.oninput = () => { state.info[key] = input.value; update(); };
  });
}

function renderItems() {
  const container = $("#items");
  container.innerHTML = "";
  state.items.forEach((item, index) => {
    const fragment = $("#itemTemplate").content.cloneNode(true);
    const card = $(".item-card", fragment);
    card.dataset.id = item.id;
    $(".item-number", card).textContent = String(index + 1).padStart(2, "0");
    const productSelect = $('[data-field="product"]', card);
    productSelect.innerHTML = products.map(product => `<option value="${product.id}">${escapeHtml(product.name)}</option>`).join("");
    $$("[data-field]", card).forEach(input => {
      const field = input.dataset.field;
      input.value = item[field] ?? "";
      input.oninput = () => {
        item[field] = ["width", "height", "structure", "qty"].includes(field) ? number(input.value) : input.value;
        updateItemCard(card, item, index);
        updateTotalsOnly();
      };
    });
    $(".remove-item", card).onclick = () => {
      if (state.items.length === 1) return toast("창호 항목은 최소 1개가 필요합니다.");
      state.items = state.items.filter(row => row.id !== item.id);
      renderItems(); update();
    };
    $(".detail-toggle", card).onclick = () => card.classList.toggle("detail-open");
    container.appendChild(fragment);
    updateItemCard($(`.item-card[data-id="${item.id}"]`), item, index);
  });
}

function updateItemCard(card, item, index) {
  const result = calculateItem(item);
  const product = productById(item.product);
  $(".item-label", card).textContent = item.location || product.name || `창호 ${index + 1}`;
  $(".item-total", card).textContent = won(result.total);
  $(".item-size", card).textContent = item.width && item.height ? `${number(item.width).toLocaleString()} × ${number(item.height).toLocaleString()} mm` : "치수를 입력하세요";
  $(".item-area", card).textContent = `${result.area.toFixed(2)} 자평 × ${result.qty}`;
  $(".calculation-detail", card).innerHTML = result.total ? `
    BF ${Math.round(result.bfLength).toLocaleString()}mm · SF ${Math.round(result.sfLength).toLocaleString()}mm · 유리 ${result.glassArea.toFixed(2)}자평<br>
    원자재 ${won(result.raw)} + 제조 ${won(result.manufacturing)} + 시공 ${won(result.install)} · 작은창 계수 ${result.factor} · 시공계수 ${product.installFactor}
  ` : "가로와 세로 치수를 입력하면 원자재비, 제조비, 시공비가 자동 계산됩니다.";
}

function renderExtras() {
  $("#ladderType").innerHTML = LADDER.map(([name, price]) => `<option value="${name}">${name}${price ? ` · ${won(price)}` : ""}</option>`).join("");
  $("#skyType").innerHTML = SKY.map(([name, price]) => `<option value="${name}">${name}${price ? ` · ${won(price)}` : ""}</option>`).join("");
  const fields = ["demolitionQty", "demolitionPrice", "ladderType", "ladderQty", "skyType", "skyQty", "laborQty", "laborPrice"];
  fields.forEach(field => {
    const input = $(`#${field}`);
    input.value = state.costs[field] ?? 0;
    input.oninput = () => {
      state.costs[field] = input.tagName === "SELECT" ? input.value : number(input.value);
      if (field === "demolitionQty") {
        state.costs.demolitionPrice = demolitionUnit(number(input.value));
        $("#demolitionPrice").value = state.costs.demolitionPrice;
      }
      updateTotalsOnly();
    };
  });
  $("#fixedExtras").innerHTML = state.extras.map((extra, index) => `
    <div class="fixed-extra">
      <strong>${escapeHtml(extra.name)}</strong>
      <label><span>수량</span><input type="number" min="0" step="1" data-extra="${index}" data-extra-field="qty" value="${number(extra.qty)}"></label>
      <label><span>단가</span><input type="number" min="0" step="10000" data-extra="${index}" data-extra-field="price" value="${number(extra.price)}"></label>
    </div>
  `).join("");
  $$("[data-extra]").forEach(input => {
    input.oninput = () => {
      state.extras[number(input.dataset.extra)][input.dataset.extraField] = number(input.value);
      updateTotalsOnly();
    };
  });
}

function bindTotals() {
  ["adjustment", "discount", "vatMode", "roundUnit"].forEach(field => {
    const input = $(`#${field}`);
    input.value = state.totals[field];
    input.oninput = () => {
      state.totals[field] = input.tagName === "SELECT" && field === "vatMode" ? input.value : number(input.value);
      updateTotalsOnly();
    };
  });
}

function updateTotalsOnly() {
  const result = calculate();
  const activeItems = state.items.filter(item => number(item.width) && number(item.height));
  $("#heroTotal").textContent = won(result.final);
  $("#windowTotal").textContent = won(result.windowTotal);
  $("#windowCount").textContent = `${activeItems.length}개 항목 · ${activeItems.reduce((sum, item) => sum + Math.max(1, number(item.qty)), 0)}틀`;
  $("#extraTotal").textContent = won(result.extraTotal);
  $("#supplyTotal").textContent = won(result.supply);
  $("#finalTotal").textContent = won(result.final);
  $("#breakWindow").textContent = won(result.windowTotal);
  $("#breakExtra").textContent = won(result.extraTotal);
  $("#breakAdjust").textContent = won(number(state.totals.adjustment) - number(state.totals.discount));
  $("#breakVat").textContent = won(result.vat);
  $("#breakFinal").textContent = won(result.final);
  const vatText = state.totals.vatMode === "included" ? "VAT 포함" : "VAT 별도";
  $("#vatSummary").textContent = vatText;
  $("#heroVatLabel").textContent = `${vatText} · ${number(state.totals.roundUnit) === 1 ? "절사 없음" : `${won(state.totals.roundUnit).replace("₩", "")}원 단위 절사`}`;
  renderDocument(result);
  scheduleSave();
}

function update() { updateTotalsOnly(); }

function extraRows() {
  const rows = [];
  const c = state.costs;
  if (number(c.demolitionQty)) rows.push(["철거비 (폐기물처리 포함)", c.demolitionQty, number(c.demolitionQty) * number(c.demolitionPrice)]);
  if (number(c.ladderQty)) rows.push([`양중비 · ${c.ladderType}`, c.ladderQty, optionPrice(LADDER, c.ladderType) * number(c.ladderQty)]);
  if (number(c.skyQty)) rows.push([`양중비 · ${c.skyType}`, c.skyQty, optionPrice(SKY, c.skyType) * number(c.skyQty)]);
  state.extras.forEach(extra => { if (number(extra.qty)) rows.push([extra.name, extra.qty, number(extra.qty) * number(extra.price)]); });
  if (number(c.laborQty)) rows.push(["시공 인건비", c.laborQty, number(c.laborQty) * number(c.laborPrice)]);
  return rows;
}

function renderDocument(result = calculate()) {
  const info = state.info;
  const itemRows = state.items.map((item, index) => {
    const calc = result.itemResults[index];
    if (!number(item.width) || !number(item.height)) return "";
    const product = productById(item.product);
    const structure = ({ 0: "2W", 2: "3W", 4: "4W" })[number(item.structure)] || "2W";
    return `<tr><td>${index + 1}</td><td class="left">${escapeHtml(product.name)}</td><td class="left">${escapeHtml(item.location)}</td><td>${number(item.width).toLocaleString()}×${number(item.height).toLocaleString()}</td><td>${structure}</td><td>${escapeHtml(item.handle)}</td><td>${number(item.qty)}</td><td class="money">${won(calc.total).replace("₩", "")}</td></tr>`;
  }).join("");
  const extras = extraRows().map(([name, qty, price]) => `<tr><td colspan="2" class="left">${escapeHtml(name)}</td><td>${qty}</td><td class="money">${won(price).replace("₩", "")}</td></tr>`).join("");
  $("#quoteDocument").innerHTML = `
    <h1 class="quote-title">견 적 서</h1>
    <div class="quote-meta">
      <div>
        <div class="quote-meta-box">
          <div class="quote-meta-row"><b>견적일자</b><span>${escapeHtml(info.quoteDate)}</span></div>
          <div class="quote-meta-row"><b>현장명</b><span>${escapeHtml(info.siteName)}</span></div>
          <div class="quote-meta-row"><b>고객명</b><span>${escapeHtml(info.customerName)}</span></div>
          <div class="quote-meta-row"><b>연락처</b><span>${escapeHtml(info.customerPhone)}</span></div>
          <div class="quote-meta-row"><b>현장주소</b><span>${escapeHtml(info.siteAddress)}</span></div>
        </div>
      </div>
      <div class="quote-meta-box">
        <div class="quote-meta-row"><b>등록번호</b><span>359-85-00189</span></div>
        <div class="quote-meta-row"><b>상호</b><span>㈜재현인텍스</span></div>
        <div class="quote-meta-row"><b>성명</b><span>가재민 · 서용필</span></div>
        <div class="quote-meta-row"><b>사업장주소</b><span>경기도 광주시 초월읍 경충대로963번길 50-7</span></div>
        <div class="quote-meta-row"><b>전화 / FAX</b><span>031-766-8161 / 031-766-1624</span></div>
      </div>
    </div>
    <p>아래와 같이 견적합니다. (견적 유효기간 1개월)</p>
    <div class="quote-total-words">합계금액 ${won(result.final)} (${state.totals.vatMode === "included" ? "VAT 포함" : "VAT 별도"})</div>
    <table class="doc-table">
      <colgroup><col style="width:6%"><col style="width:25%"><col style="width:16%"><col style="width:15%"><col style="width:8%"><col style="width:10%"><col style="width:6%"><col style="width:14%"></colgroup>
      <thead><tr><th>NO.</th><th>품명</th><th>위치</th><th>치수(mm)</th><th>구조</th><th>핸들</th><th>수량</th><th>금액</th></tr></thead>
      <tbody>${itemRows || `<tr><td colspan="8">입력된 창호 항목이 없습니다.</td></tr>`}</tbody>
    </table>
    ${extras ? `<table class="doc-table"><thead><tr><th colspan="2">기타 제비용</th><th>수량</th><th>금액</th></tr></thead><tbody>${extras}</tbody></table>` : ""}
    <table class="doc-summary">
      <tr><th>공급가액</th><td>${won(result.supply)}</td></tr>
      <tr><th>VAT</th><td>${won(result.vat)}</td></tr>
      <tr><th>최종 제안가</th><td>${won(result.final)}</td></tr>
    </table>
    ${info.memo ? `<div class="doc-notes"><b>현장 메모</b>\n${escapeHtml(info.memo)}</div>` : ""}
    <div class="doc-notes">${escapeHtml(NOTES)}</div>
    <div class="doc-sign">견적담당: ${escapeHtml(info.manager)}<br><strong>㈜재현인텍스 재현하늘창</strong></div>
  `;
}

function renderRates() {
  $("#rateTable").innerHTML = products.map((product, index) => `
    <tr>
      <td><strong>${escapeHtml(product.name)}</strong></td>
      ${["bf", "sf", "glass", "install"].map(field => `<td><input type="number" min="0" step="100" data-rate="${index}" data-rate-field="${field}" value="${product[field]}"></td>`).join("")}
      <td><input type="number" min="0" step=".01" data-rate="${index}" data-rate-field="manufacture" value="${product.manufacture}"></td>
      <td><input type="number" min="0" step=".1" data-rate="${index}" data-rate-field="installFactor" value="${product.installFactor}"></td>
    </tr>
  `).join("");
  $$("[data-rate]").forEach(input => {
    input.oninput = () => {
      products[number(input.dataset.rate)][input.dataset.rateField] = number(input.value);
      localStorage.setItem("jh-rates", JSON.stringify(products));
      renderItems(); update();
    };
  });
}

function savedQuotes() { return load("jh-saved", []); }
function combinedSavedQuotes() {
  const merged = new Map();
  const folderById = new Map(folderQuotes.map(quote => [quote.id, quote]));
  [...savedQuotes(), ...folderQuotes].forEach(quote => {
    const existing = merged.get(quote.id);
    if (!existing || String(quote.updatedAt || "") >= String(existing.updatedAt || "")) merged.set(quote.id, quote);
  });
  return [...merged.values()].map(quote => {
    const folderQuote = folderById.get(quote.id);
    return folderQuote
      ? { ...quote, storageFile: folderQuote.storageFile, _storage: "folder" }
      : { ...quote, _storage: "browser" };
  }).sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
}

function renderSaved() {
  const quotes = combinedSavedQuotes();
  $("#savedCount").textContent = `${quotes.length}개 견적`;
  $("#storageMode").textContent = quoteDirectory && folderPermission === "granted"
    ? `브라우저 + ${quoteDirectory.name} 폴더`
    : "브라우저 저장소";
  $("#savedQuotes").innerHTML = quotes.length ? quotes.map(quote => `
    <article class="saved-card">
      <div><h3>${escapeHtml(quote.info.quoteName || quote.info.siteName || "이름 없는 견적")}<span class="storage-badge">${quote._storage === "folder" ? "PC 폴더" : "브라우저"}</span></h3><p>${escapeHtml(quote.info.customerName || "고객 미입력")} · ${escapeHtml(quote.info.quoteDate)} · ${won(quote.snapshotTotal || 0)}</p></div>
      <div class="saved-card-actions"><button type="button" class="secondary" data-load="${quote.id}">열기</button><button type="button" class="text-button" data-delete="${quote.id}">삭제</button></div>
    </article>
  `).join("") : `<div class="empty-state">저장된 견적이 없습니다.<br>상단의 “저장”을 누르면 여기에 보관됩니다.</div>`;
  $$("[data-load]").forEach(button => button.onclick = () => {
    const quote = quotes.find(row => row.id === button.dataset.load);
    if (!quote) return;
    state = structuredClone(quote);
    hydrate();
    activateTab("editor");
    toast("저장된 견적을 열었습니다.");
  });
  $$("[data-delete]").forEach(button => button.onclick = async () => {
    const quote = quotes.find(row => row.id === button.dataset.delete);
    if (!quote || !confirm(`“${quote.info.quoteName || quote.info.siteName || "이름 없는 견적"}”을 저장 목록과 PC 폴더에서 삭제할까요?`)) return;
    const next = savedQuotes().filter(row => row.id !== button.dataset.delete);
    localStorage.setItem("jh-saved", JSON.stringify(next));
    if (quoteDirectory && folderPermission === "granted" && quote.storageFile) {
      try { await quoteDirectory.removeEntry(quote.storageFile); } catch (error) { console.warn("Folder delete failed", error); }
      folderQuotes = folderQuotes.filter(row => row.id !== button.dataset.delete);
    }
    renderSaved(); toast("견적을 삭제했습니다.");
  });
}

async function saveQuote() {
  const quotes = savedQuotes();
  const snapshot = structuredClone(state);
  snapshot.snapshotTotal = calculate().final;
  snapshot.updatedAt = new Date().toISOString();
  const index = quotes.findIndex(quote => quote.id === snapshot.id);
  if (index >= 0) quotes[index] = snapshot; else quotes.unshift(snapshot);
  localStorage.setItem("jh-saved", JSON.stringify(quotes.slice(0, 100)));
  persistDraft();
  if (quoteDirectory && folderPermission === "granted") {
    try {
      await writeQuoteToFolder(state, false);
      await readQuotesFromFolder();
    } catch (error) {
      console.warn("Folder save failed", error);
      toast("브라우저에는 저장했지만 PC 폴더 저장에 실패했습니다.");
    }
  } else {
    toast("브라우저에 견적을 저장했습니다.");
  }
  renderSaved();
}

function activateTab(name) {
  $$(".tab").forEach(button => button.classList.toggle("active", button.dataset.tab === name));
  $$(".tab-panel").forEach(panel => panel.classList.remove("active"));
  $(`#${name}Tab`).classList.add("active");
  if (name === "preview") renderDocument();
  if (name === "saved") renderSaved();
  window.scrollTo({ top: 250, behavior: "smooth" });
}

function hydrate() {
  if (!state.extras) state.extras = structuredClone(BASE_EXTRAS);
  if (!state.costs) state.costs = initialState().costs;
  if (!state.totals) state.totals = initialState().totals;
  bindInfo(); renderItems(); renderExtras(); bindTotals(); renderRates(); renderSaved(); updateTotalsOnly();
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message; el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function download(filename, content, type = "application/json") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function boot() {
  $$(".tab").forEach(button => button.onclick = () => activateTab(button.dataset.tab));
  $("#addItemBtn").onclick = $("#addItemWideBtn").onclick = () => { state.items.push(newItem()); renderItems(); update(); };
  $("#saveBtn").onclick = () => saveQuote();
  $("#connectFolderBtn").onclick = () => reconnectQuoteFolder();
  $("#refreshFolderBtn").onclick = async () => {
    if (!quoteDirectory || folderPermission !== "granted") return reconnectQuoteFolder();
    await readQuotesFromFolder();
    renderSaved();
    toast("PC 폴더의 견적 목록을 새로 읽었습니다.");
  };
  $("#disconnectFolderBtn").onclick = () => disconnectQuoteFolder();
  $("#printBtn").onclick = () => { activateTab("preview"); setTimeout(() => window.print(), 250); };
  $("#previewPrintBtn").onclick = () => window.print();
  $("#newQuoteBtn").onclick = () => {
    if (!confirm("현재 작성 중인 내용을 비우고 새 견적을 시작할까요?")) return;
    state = initialState(); hydrate(); toast("새 견적을 시작했습니다.");
  };
  $("#resetExtrasBtn").onclick = () => {
    state.extras = structuredClone(BASE_EXTRAS);
    state.costs = initialState().costs;
    renderExtras(); update(); toast("기타 비용을 기본값으로 복원했습니다.");
  };
  $("#resetRatesBtn").onclick = () => {
    products = structuredClone(BASE_PRODUCTS);
    localStorage.setItem("jh-rates", JSON.stringify(products));
    renderRates(); renderItems(); update(); toast("원본 단가를 복원했습니다.");
  };
  $("#exportBtn").onclick = () => download(`재현견적_${state.info.siteName || today()}.json`, JSON.stringify(state, null, 2));
  $("#importBtn").onclick = () => $("#importFile").click();
  $("#importFile").onchange = event => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try { state = JSON.parse(reader.result); hydrate(); activateTab("editor"); toast("견적 파일을 가져왔습니다."); }
      catch { toast("올바른 견적 파일이 아닙니다."); }
    };
    reader.readAsText(file);
    event.target.value = "";
  };
  hydrate();
  restoreQuoteFolder();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

document.addEventListener("DOMContentLoaded", boot);
