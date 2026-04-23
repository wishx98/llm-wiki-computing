const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");

const ROOT = __dirname;
const pptx = new PptxGenJS();

const C = {
  red: "C00000",
  redDark: "8A0000",
  black: "111111",
  gray: "666666",
  grayLight: "D9D9D9",
  graySoft: "EFEFEF",
  offWhite: "F7F7F5",
  cream: "F4E7E7",
  white: "FFFFFF",
};

const FONT = "Microsoft YaHei";
const FONT_EN = "Arial";
const OUT_FILE = process.env.PPTX_OUT || "LLM-Wiki-3GPP-内部汇报.pptx";
const ASSET_DIR = path.join(ROOT, "ppt_assets");

const stats = {
  archivedRaw: countMarkdown("3gpp_sa2_174_computing/raw/09-archive"),
  sourcePages: countMarkdown("3gpp_sa2_174_computing/wiki/sources"),
  entityPages: countMarkdown("3gpp_sa2_174_computing/wiki/entities"),
  conceptPages: countMarkdown("3gpp_sa2_174_computing/wiki/concepts"),
  synthesisPages: countMarkdown("3gpp_sa2_174_computing/wiki/syntheses"),
  logEntries: countLogEntries("3gpp_sa2_174_computing/wiki/log.md"),
  queryEntries: countLogType("3gpp_sa2_174_computing/wiki/log.md", "query"),
  lintEntries: countLogType("3gpp_sa2_174_computing/wiki/log.md", "lint"),
};
const lintMetrics = extractLatestLintMetrics("3gpp_sa2_174_computing/wiki/log.md");

pptx.layout = "LAYOUT_16x9";
pptx.author = "OpenAI Codex";
pptx.company = "AI Core";
pptx.subject = "LLM-Wiki x 3GPP 内部汇报";
pptx.title = "LLM-Wiki：把分散资料编译成可持续演进的知识资产";
pptx.lang = "zh-CN";

function countMarkdown(relPath) {
  const dir = path.join(ROOT, relPath);
  return fs.readdirSync(dir).filter((name) => name.toLowerCase().endsWith(".md")).length;
}

function countLogEntries(relPath) {
  const text = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const matches = text.match(/^## \[/gm);
  return matches ? matches.length : 0;
}

function countLogType(relPath, type) {
  const text = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const re = new RegExp(`^## \\[[^\\]]+\\] ${type} \\|`, "gm");
  const matches = text.match(re);
  return matches ? matches.length : 0;
}

function extractLatestLintMetrics(relPath) {
  const text = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const sections = text.split(/^## \[/gm).filter(Boolean);
  const lintSection = sections.reverse().find((section) => section.startsWith("2026") && section.includes("] lint |"));
  if (!lintSection) {
    return { fixed: 0, added: 0, removed: 0 };
  }
  const fixed = /修复了\s+(\d+)\s+个索引问题/.exec(lintSection)?.[1] || "0";
  const added = /新增注册\*\*:\s+(\d+)\s+个/.exec(lintSection)?.[1] || "0";
  const removed = /移除无效注册\*\*:\s+(\d+)\s+个/.exec(lintSection)?.[1] || "0";
  return {
    fixed: Number(fixed),
    added: Number(added),
    removed: Number(removed),
  };
}

function asset(name) {
  return path.join(ASSET_DIR, name);
}

function shadow(opacity = 0.14) {
  return { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity };
}

function addText(slide, text, opts = {}) {
  slide.addText(text, {
    fontFace: FONT,
    color: C.black,
    margin: 0,
    ...opts,
  });
}

function addHeader(slide, no, label, title, subtitle = "") {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.55, y: 0.38, w: 1.22, h: 0.34,
    fill: { color: C.red },
    line: { color: C.red },
  });
  addText(slide, `${String(no).padStart(2, "0")}  ${label}`, {
    x: 0.68, y: 0.43, w: 1.0, h: 0.18,
    fontSize: 10, bold: true, color: C.white,
  });
  addText(slide, title, {
    x: 0.55, y: 0.92, w: 7.9, h: 0.5,
    fontSize: 25, bold: true,
  });
  if (subtitle) {
    addText(slide, subtitle, {
      x: 0.55, y: 1.42, w: 8.2, h: 0.34,
      fontSize: 11.5, color: C.gray,
    });
  }
}

function addDarkHeader(slide, title, subtitle = "") {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.58, y: 0.58, w: 1.35, h: 0.36,
    fill: { color: C.red },
    line: { color: C.red },
  });
  addText(slide, "INTERNAL REPORT", {
    x: 0.72, y: 0.64, w: 1.05, h: 0.18,
    fontSize: 9.5, bold: true, color: C.white,
  });
  addText(slide, title, {
    x: 0.58, y: 1.38, w: 5.5, h: 1.1,
    fontSize: 27, bold: true, color: C.white,
  });
  if (subtitle) {
    addText(slide, subtitle, {
      x: 0.58, y: 2.63, w: 4.9, h: 0.6,
      fontSize: 12.5, color: "E9E9E9",
    });
  }
}

function addFooter(slide, page, dark = false) {
  const color = dark ? "D0D0D0" : "7A7A7A";
  addText(slide, "AI Core | LLM-Wiki x 3GPP", {
    x: 0.55, y: 5.22, w: 2.8, h: 0.18,
    fontSize: 8.5, color,
  });
  addText(slide, String(page).padStart(2, "0"), {
    x: 9.05, y: 5.15, w: 0.4, h: 0.24,
    fontFace: FONT_EN,
    fontSize: 11,
    bold: true,
    color,
    align: "right",
  });
}

function bulletRow(slide, x, y, w, text, color = C.red, fontSize = 12.5) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x, y: y + 0.05, w: 0.12, h: 0.12,
    fill: { color },
    line: { color },
  });
  addText(slide, text, {
    x: x + 0.22, y, w: w - 0.22, h: 0.34,
    fontSize,
  });
}

function statCard(slide, x, y, w, h, num, label, detail, dark = false) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: dark ? "1B1B1B" : C.white },
    line: { color: dark ? "6A6A6A" : C.grayLight, width: 1 },
    shadow: shadow(dark ? 0.18 : 0.1),
  });
  addText(slide, num, {
    x: x + 0.18, y: y + 0.16, w: w - 0.36, h: 0.5,
    fontFace: FONT_EN,
    fontSize: 25,
    bold: true,
    color: C.red,
  });
  addText(slide, label, {
    x: x + 0.18, y: y + 0.68, w: w - 0.36, h: 0.2,
    fontSize: 11.5,
    bold: true,
    color: dark ? C.white : C.black,
  });
  addText(slide, detail, {
    x: x + 0.18, y: y + 0.98, w: w - 0.36, h: h - 1.12,
    fontSize: 9.5,
    color: dark ? "D6D6D6" : C.gray,
  });
}

function tag(slide, x, y, text, dark = false) {
  const w = 0.28 + text.length * 0.09;
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h: 0.28,
    rectRadius: 0.06,
    fill: { color: dark ? "2A2A2A" : C.white },
    line: { color: dark ? "B05050" : C.red, width: 1 },
  });
  addText(slide, text, {
    x: x + 0.09, y: y + 0.06, w: w - 0.18, h: 0.12,
    fontSize: 8.5, bold: true, color: dark ? C.white : C.red,
    align: "center",
  });
  return w;
}

function addPillar(slide, x, y, w, h, title, detail) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: C.white },
    line: { color: C.grayLight, width: 1 },
    shadow: shadow(0.1),
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x, y, w, h: 0.16,
    fill: { color: C.red },
    line: { color: C.red },
  });
  addText(slide, title, {
    x: x + 0.18, y: y + 0.28, w: w - 0.36, h: 0.4,
    fontSize: 15.5, bold: true,
  });
  addText(slide, detail, {
    x: x + 0.18, y: y + 0.84, w: w - 0.36, h: h - 1.02,
    fontSize: 10.5, color: C.gray,
  });
}

function slideCover() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 1.55, h: 5.625,
    fill: { color: C.red },
    line: { color: C.red },
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 1.55, y: 0, w: 0.12, h: 5.625,
    fill: { color: C.black },
    line: { color: C.black },
  });
  slide.addImage({
    path: asset("hero-network.svg"),
    x: 5.75, y: 0.62, w: 3.45, h: 4.2,
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 1.98, y: 0.68, w: 1.25, h: 0.34,
    fill: { color: C.red },
    line: { color: C.red },
  });
  addText(slide, "INTERNAL REPORT", {
    x: 2.15, y: 0.75, w: 0.95, h: 0.16,
    fontFace: FONT_EN,
    fontSize: 9.5,
    bold: true,
    color: C.white,
  });
  addText(slide, "LLM-Wiki：把分散资料编译成\n可持续演进的知识资产", {
    x: 1.98, y: 1.35, w: 3.95, h: 0.96,
    fontSize: 26,
    bold: true,
    color: C.black,
  });
  addText(slide, "从 Karpathy 的 LLM Wiki 理论出发，过渡到开源实现，再用 3GPP SA2 Computing 案例说明为什么它好用。", {
    x: 1.98, y: 2.48, w: 3.78, h: 0.62,
    fontSize: 12.5,
    color: C.gray,
  });
  let x = 1.98;
  x += tag(slide, x, 3.38, "Knowledge Compilation") + 0.12;
  x += tag(slide, x, 3.38, "3GPP") + 0.12;
  tag(slide, x, 3.38, "Standards Research");
  addText(slide, "红色主色 #C00000 | 浅底版式 | 内部汇报", {
    x: 1.98, y: 4.24, w: 3.6, h: 0.2,
    fontSize: 11,
    color: C.gray,
  });
  addText(slide, "2026-04-21", {
    x: 1.98, y: 4.84, w: 1.2, h: 0.2,
    fontFace: FONT_EN,
    fontSize: 10.5,
    color: C.black,
    bold: true,
  });
  addFooter(slide, 1);
}

function slideCoreConclusion() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    1,
    "理论先行",
    "Karpathy 的核心判断是：比 RAG 更重要的，不是检索更准，而是知识能否持续积累",
    "LLM Wiki 的关键区别在于，它把原始资料前面增加了一层持久化 wiki，让知识以结构化页面的形式长期存在。"
  );
  const cards = [
    ["RAG", "每次提问重新检索", "模型每次都要重新拼接信息，跨文档综合难以沉淀。", C.black],
    ["Wiki", "知识先被编译", "资料先进入 wiki，再被后续 query 复用，知识不断累积。", C.red],
    ["Cross-link", "链接与冲突预处理", "交叉引用、冲突标注和主题汇总在摄入阶段就完成。", C.black],
    ["Compounding", "问答也能反写", "高价值 query 可以沉淀为 synthesis，使知识继续复利。", C.red],
  ];
  cards.forEach((card, i) => {
    const x = 0.72 + (i % 2) * 4.28;
    const y = 2.0 + Math.floor(i / 2) * 1.33;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x, y, w: 4.02, h: 1.08,
      fill: { color: C.white },
      line: { color: C.grayLight, width: 1 },
      shadow: shadow(0.08),
    });
    slide.addShape(pptx.shapes.RECTANGLE, {
      x, y, w: 0.56, h: 1.08,
      fill: { color: card[3] },
      line: { color: card[3] },
    });
    addText(slide, card[0], {
      x, y: y + 0.38, w: 0.56, h: 0.16,
      fontFace: FONT_EN, fontSize: 11.5, bold: true, color: C.white, align: "center",
    });
    addText(slide, card[1], {
      x: x + 0.76, y: y + 0.18, w: 2.55, h: 0.22,
      fontSize: 14, bold: true,
    });
    addText(slide, card[2], {
      x: x + 0.76, y: y + 0.5, w: 2.9, h: 0.34,
      fontSize: 10.5, color: C.gray,
    });
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 4.78, w: 8.66, h: 0.34,
    fill: { color: C.red },
    line: { color: C.red },
  });
  addText(slide, "理论上的一句话：知识库应该是会持续变厚的中间层，而不是每次提问都被重新构造的一次性答案。", {
    x: 1.0, y: 4.87, w: 8.05, h: 0.14,
    fontSize: 11.5, bold: true, color: C.white,
  });
  addFooter(slide, 2);
}

function slideFramework() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addHeader(
    slide,
    2,
    "理论结构",
    "Karpathy 的 LLM Wiki 理论，可以被拆成“三层结构 + 三类操作”",
    "这一步是为了说明它为什么有道理，下一步再看我们如何把它实现成一个可运行项目。"
  );

  const layers = [
    ["Raw Sources", "原始资料层，只读保存材料，是唯一事实来源。", C.black, C.white],
    ["Persistent Wiki", "持久化知识层，用页面、链接和总结替代临时检索片段。", C.red, C.white],
    ["Schema", "规则层，告诉 LLM 如何摄入、查询、维护和处理冲突。", C.graySoft, C.black],
  ];
  layers.forEach((layer, i) => {
    const y = 2.0 + i * 0.88;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.7, y, w: 4.15, h: 0.66,
      fill: { color: layer[2] },
      line: { color: layer[2] },
      shadow: shadow(0.08),
    });
    addText(slide, layer[0], {
      x: 0.92, y: y + 0.12, w: 1.15, h: 0.18,
      fontFace: FONT_EN,
      fontSize: 13,
      bold: true,
      color: layer[3],
    });
    addText(slide, layer[1], {
      x: 2.15, y: y + 0.09, w: 2.4, h: 0.28,
      fontSize: 10.5,
      color: layer[3],
    });
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 5.25, y: 1.95, w: 4.15, h: 2.95,
    fill: { color: C.offWhite },
    line: { color: C.grayLight },
  });
  const ops = [
    ["Ingest", "摄入新资料，并把信息编译进 wiki。", C.red],
    ["Query", "对已有 wiki 提问，而不是直接对 raw 提问。", C.black],
    ["Lint", "周期性体检，修复知识库随时间累积的问题。", C.red],
  ];
  ops.forEach((op, i) => {
    const y = 2.24 + i * 0.78;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 5.52, y, w: 0.62, h: 0.38,
      fill: { color: op[2] }, line: { color: op[2] },
    });
    addText(slide, String(i + 1), {
      x: 5.52, y: y + 0.11, w: 0.62, h: 0.1,
      fontFace: FONT_EN, fontSize: 12, bold: true, color: C.white, align: "center",
    });
    addText(slide, op[0], {
      x: 6.28, y: y + 0.01, w: 1.0, h: 0.16,
      fontFace: FONT_EN, fontSize: 12.5, bold: true,
    });
    addText(slide, op[1], {
      x: 7.0, y: y + 0.01, w: 2.02, h: 0.22,
      fontSize: 9.8, color: C.gray,
    });
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.7, y: 4.58, w: 8.7, h: 0.38,
    fill: { color: C.red }, line: { color: C.red },
  });
  addText(slide, "理论上的角色分工很清晰：人负责选题和判断，LLM 负责整理、链接、更新和维护。", {
    x: 0.92, y: 4.68, w: 8.2, h: 0.18,
    fontSize: 11.2, bold: true, color: C.white,
  });
  addFooter(slide, 3);
}

function slideWhy3gpp() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    5,
    "案例选择",
    "最后用 3GPP 做案例，是为了验证这套方法不仅“有道理”，而且“真的好用”",
    "3GPP 既复杂，又是团队熟悉的语境，因此非常适合拿来做方法验证。"
  );

  const reasons = [
    "团队里有不少标准专家，对 3GPP 的术语、流程和争议点本身就比较熟悉。",
    "3GPP 文稿天然具有多厂商、多版本、多变体、多轮收敛的复杂性。",
    "它更像持续研究问题，而不是单篇文稿理解问题，适合用 wiki 管理。",
    "因为大家熟悉 3GPP，所以更容易判断这套知识库是否真的整理清楚了。",
  ];
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.7, y: 1.92, w: 4.45, h: 2.9,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.1),
  });
  reasons.forEach((text, i) => {
    const y = 2.18 + i * 0.6;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.92, y, w: 0.34, h: 0.28,
      fill: { color: i === 0 ? C.red : C.black },
      line: { color: i === 0 ? C.red : C.black },
    });
    addText(slide, String(i + 1), {
      x: 0.92, y: y + 0.07, w: 0.34, h: 0.12,
      fontFace: FONT_EN, fontSize: 10.5, bold: true, color: C.white, align: "center",
    });
    addText(slide, text, {
      x: 1.44, y: y - 0.01, w: 3.35, h: 0.34,
      fontSize: 11.5,
    });
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 5.45, y: 1.92, w: 3.95, h: 2.9,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.12),
  });
  addText(slide, "当前项目规模", {
    x: 5.72, y: 2.12, w: 1.55, h: 0.18,
    fontSize: 12.5, bold: true, color: C.black,
  });
  const metricRows = [
    [stats.archivedRaw, "份归档原始文稿"],
    [stats.sourcePages, "个来源摘要页"],
    [stats.entityPages, "个实体页"],
    [stats.conceptPages, "个概念页"],
  ];
  metricRows.forEach((row, i) => {
    const y = 2.52 + i * 0.52;
    addText(slide, String(row[0]), {
      x: 5.72, y, w: 0.92, h: 0.28,
      fontFace: FONT_EN, fontSize: 25, bold: true, color: C.red,
    });
    addText(slide, row[1], {
      x: 6.72, y: y + 0.07, w: 1.95, h: 0.16,
      fontSize: 11.5, color: C.black,
    });
  });
  addText(slide, "截至 2026-04-21，项目已经覆盖来源页、概念页、实体页以及 synthesis 查询沉淀。", {
    x: 5.72, y: 4.38, w: 3.15, h: 0.28,
    fontSize: 10.5, color: C.gray,
  });
  addFooter(slide, 6);
}

function slideProjectMechanics() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addHeader(
    slide,
    3,
    "开源实现",
    "从 Karpathy 的 idea file 到可执行项目，中间关键是把理论翻译成规则、技能和文件契约",
    "这一步不是重新发明产品，而是把 llm-wiki.md 里的抽象思想落实成当前仓库里的几个关键文件。"
  );

  slide.addImage({
    path: asset("compile-pipeline.svg"),
    x: 0.65, y: 1.95, w: 5.35, h: 2.75,
  });

  const ruleCards = [
    ["llm-wiki.md", "Karpathy 的 idea file，负责讲清楚“persistent wiki”这套理论本身。", C.black],
    ["ANTIGRAVITY.md", "把理论翻译成 schema：raw 只读、wiki 可写、冲突不能静默覆盖。", C.red],
    [".claude/skills", "把 ingest / query / lint 三类动作落实成可重复执行的工作流。", C.black],
    ["index.md / log.md", "一个是知识目录，一个是时间线；构成项目运行时的最小治理骨架。", C.red],
  ];
  ruleCards.forEach((card, i) => {
    const y = 1.96 + i * 0.68;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 6.25, y, w: 3.1, h: 0.54,
      fill: { color: C.offWhite },
      line: { color: C.grayLight, width: 1 },
    });
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 6.25, y, w: 0.12, h: 0.54,
      fill: { color: card[2] }, line: { color: card[2] },
    });
    addText(slide, card[0], {
      x: 6.5, y: y + 0.08, w: 0.9, h: 0.16,
      fontSize: 11.5, bold: true,
    });
    addText(slide, card[1], {
      x: 7.34, y: y + 0.08, w: 1.7, h: 0.28,
      fontSize: 10, color: C.gray,
    });
  });
  addFooter(slide, 4);
}

function slideStats() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    9,
    "规模与产出",
    "当前知识库已经同时覆盖“材料沉淀”和“操作沉淀”两种资产",
    "下面的数字全部来自当前仓库实测。"
  );
  statCard(slide, 0.72, 1.98, 2.7, 1.1, String(stats.archivedRaw), "原始文稿", "已进入 09-archive 的标准材料。");
  statCard(slide, 3.58, 1.98, 2.7, 1.1, String(stats.sourcePages), "来源摘要页", "每篇关键材料一页摘要，作为最小编译单元。");
  statCard(slide, 6.44, 1.98, 2.7, 1.1, String(stats.entityPages), "实体页", "厂商、网元、功能实体等稳定对象。");
  statCard(slide, 0.72, 3.26, 2.7, 1.1, String(stats.conceptPages), "概念页", "方法、架构、机制、指标等跨文稿抽象。");
  statCard(slide, 3.58, 3.26, 2.7, 1.1, String(stats.synthesisPages), "Synthesis 页", "由 query 沉淀出的比较、综述和深度解析。");
  statCard(slide, 6.44, 3.26, 2.7, 1.1, String(stats.logEntries), "操作日志", "当前 log.md 已记录 ingest、query、lint 共 " + stats.logEntries + " 次操作。");
  addFooter(slide, 10);
}

function slideIngestExample() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    6,
    "3GPP Ingest 示例",
    "在 3GPP 场景里，ingest 的价值是把单篇标准文稿扩散成多层知识更新",
    "以 S2-2603513 牵头人总结报告为例，系统不是只写一页摘要，而是连锁更新整个知识网络。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 2.05, w: 2.2, h: 2.08,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.1),
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 2.05, w: 2.2, h: 0.16,
    fill: { color: C.black }, line: { color: C.black },
  });
  addText(slide, "输入文稿", {
    x: 0.95, y: 2.28, w: 1.0, h: 0.2, fontSize: 12, bold: true,
  });
  addText(slide, "S2-2603513\n6G KI#22 Penholder Summary", {
    x: 0.95, y: 2.68, w: 1.65, h: 0.8,
    fontFace: FONT_EN, fontSize: 15, bold: true, color: C.red,
  });
  addText(slide, "作用：把 40+ 份方案压缩成统一讨论框架。", {
    x: 0.95, y: 3.5, w: 1.6, h: 0.28, fontSize: 10.5, color: C.gray,
  });

  slide.addShape(pptx.shapes.LINE, {
    x: 3.12, y: 3.08, w: 0.72, h: 0,
    line: { color: C.red, width: 3, endArrowType: "triangle" },
  });

  const outputs = [
    ["来源摘要页", "摘要页：s2-2603513", C.red, 4.02, 2.02],
    ["概念总览页", "6G-Computing-Architecture", C.black, 6.55, 2.02],
    ["实体页更新", "OPPO / Intel / MediaTek", C.red, 4.02, 3.22],
    ["冲突追踪", "Computing-Site 位置争议", C.black, 6.55, 3.22],
  ];
  outputs.forEach((item) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: item[3], y: item[4], w: 2.18, h: 0.92,
      fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.08),
    });
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: item[3], y: item[4], w: 0.12, h: 0.92,
      fill: { color: item[2] }, line: { color: item[2] },
    });
    addText(slide, item[0], {
      x: item[3] + 0.22, y: item[4] + 0.12, w: 1.5, h: 0.16,
      fontSize: 11.5, bold: true,
    });
    addText(slide, item[1], {
      x: item[3] + 0.22, y: item[4] + 0.38, w: 1.76, h: 0.3,
      fontSize: 10, color: C.gray,
    });
  });
  addFooter(slide, 7);
}

function slideQueryExample() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addHeader(
    slide,
    7,
    "3GPP Query 示例",
    "在 3GPP 场景里，query 的价值是不重复翻文稿，而是把问答直接沉淀成 synthesis",
    "2026-04-20 到 2026-04-21，项目已经用 query 生成了 5 个 synthesis 页面。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 1.95, w: 4.18, h: 2.9,
    fill: { color: C.offWhite }, line: { color: C.grayLight }, shadow: shadow(0.08),
  });
  addText(slide, "Query 工作流", {
    x: 0.98, y: 2.16, w: 1.2, h: 0.18, fontSize: 13, bold: true,
  });
  const steps = [
    "先读取 wiki/index.md，定位相关的 Sources / Entities / Concepts / Syntheses。",
    "再深度阅读目标页面，而不是凭模型记忆直接回答。",
    "当回答有分析和总结价值时，将结果保存到 wiki/syntheses/。",
    "最后在 wiki/log.md 中追加 query 记录。"
  ];
  steps.forEach((step, i) => {
    bulletRow(slide, 0.98, 2.55 + i * 0.48, 3.42, step, i % 2 === 0 ? C.red : C.black, 10.8);
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 5.15, y: 1.95, w: 4.18, h: 2.9,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.08),
  });
  addText(slide, "本项目已沉淀的 query 产物", {
    x: 5.42, y: 2.16, w: 1.8, h: 0.18, fontSize: 13, bold: true,
  });
  const outputs = [
    "SHE-Overview",
    "CCF-CMF-Comparison",
    "CCF-CSPF-Comparison",
    "Computing-Layer-Link-Overview",
    "CAH-Deep-Dive",
  ];
  outputs.forEach((name, i) => {
    const y = 2.48 + i * 0.42;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 5.42, y, w: 3.3, h: 0.28,
      fill: { color: i % 2 === 0 ? C.offWhite : C.cream },
      line: { color: i % 2 === 0 ? C.grayLight : "E4C5C5" },
    });
    addText(slide, name, {
      x: 5.62, y: y + 0.08, w: 2.85, h: 0.1,
      fontFace: FONT_EN, fontSize: 10.5, bold: true, color: i % 2 === 0 ? C.black : C.red,
    });
  });
  addText(slide, "这说明 query 已经从“检索回答”升级成“知识沉淀入口”。", {
    x: 5.42, y: 4.46, w: 3.2, h: 0.18,
    fontSize: 11.2, bold: true, color: C.red,
  });
  addFooter(slide, 8);
}

function slideLintExample() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    8,
    "3GPP Lint 示例",
    "在 3GPP 场景里，lint 的价值是让知识库维护从“靠感觉”变成“有规则的健康检查”",
    "项目已经引入专门的 lint skill，对索引一致性、双链健康度和知识冲突做巡检。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 1.96, w: 4.12, h: 2.88,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.08),
  });
  addText(slide, "Lint 检查什么", {
    x: 0.98, y: 2.16, w: 1.2, h: 0.18, fontSize: 13, bold: true,
  });
  const checks = [
    "index.md 是否与实际页面同步。",
    "双链是否存在死链、孤儿页和缺失注册。",
    "是否存在带“知识冲突”区块的未解决认知技术债。",
    "修复后把结果追加回 wiki/log.md。"
  ];
  checks.forEach((item, i) => {
    bulletRow(slide, 0.98, 2.54 + i * 0.48, 3.35, item, i % 2 === 0 ? C.red : C.black, 10.8);
  });

  statCard(slide, 5.2, 2.04, 1.18, 1.0, String(lintMetrics.fixed), "修复项", "最新一次 lint 修复的索引问题数。");
  statCard(slide, 6.62, 2.04, 1.18, 1.0, String(lintMetrics.added), "新增注册", "补回 index 中缺失的页面。");
  statCard(slide, 8.04, 2.04, 1.18, 1.0, String(lintMetrics.removed), "移除无效", "从 index 中移除已不存在的页面。");

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 5.18, y: 3.34, w: 4.12, h: 1.5,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.08),
  });
  addText(slide, "2026-04-21 的实际结果", {
    x: 5.44, y: 3.56, w: 1.4, h: 0.18, fontSize: 13, bold: true,
  });
  bulletRow(slide, 5.44, 3.92, 3.34, "补回 5 个未同步页面注册，例如 SHE-C、Logical-Computing-Site。", C.red, 10.5);
  bulletRow(slide, 5.44, 4.3, 3.34, "移除 12 个缺失页面的无效注册，例如 6G-PCF、Nokia、NTT-DOCOMO。", C.black, 10.5);
  addFooter(slide, 9);
}

function slideGitAdvantage() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addHeader(
    slide,
    4,
    "Git 管理",
    "Git 不是附加功能，而是这套开源实现真正可协作、可审计、可回滚的关键基础设施",
    "因为知识库本身就是 markdown 文件集合，所以它天然适合复用软件工程里的版本管理方式。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 1.98, w: 4.18, h: 2.84,
    fill: { color: C.offWhite }, line: { color: C.grayLight }, shadow: shadow(0.08),
  });
  addText(slide, "Git 带来的四个直接收益", {
    x: 0.98, y: 2.16, w: 1.8, h: 0.18, fontSize: 13, bold: true,
  });
  const gitPoints = [
    "版本历史：任何页面如何演进，都能追溯到文件级 diff。",
    "多人协作：专家、研究员和 LLM 都可以围绕同一 repo 迭代。",
    "Review 机制：知识改动可以像代码一样被检查和讨论。",
    "回滚能力：错误整理或错误合并时，可以恢复到稳定版本。"
  ];
  gitPoints.forEach((point, i) => {
    bulletRow(slide, 0.98, 2.56 + i * 0.48, 3.36, point, i % 2 === 0 ? C.red : C.black, 10.8);
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 5.18, y: 1.98, w: 4.15, h: 2.84,
    fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.08),
  });
  addText(slide, "log.md 和 Git 的分工", {
    x: 5.44, y: 2.16, w: 1.5, h: 0.18, fontSize: 13, bold: true,
  });
  addText(slide, "log.md", {
    x: 5.44, y: 2.58, w: 0.72, h: 0.16, fontFace: FONT_EN, fontSize: 12.5, bold: true, color: C.red,
  });
  addText(slide, "记录“语义层”操作，例如 ingest、query、lint 的目的和输出。", {
    x: 6.28, y: 2.56, w: 2.65, h: 0.22, fontSize: 10.5, color: C.gray,
  });
  addText(slide, "Git", {
    x: 5.44, y: 3.16, w: 0.5, h: 0.16, fontFace: FONT_EN, fontSize: 12.5, bold: true, color: C.black,
  });
  addText(slide, "记录“文件层”变化，例如哪些页面被修改、差异是什么、谁改的。", {
    x: 6.28, y: 3.14, w: 2.65, h: 0.22, fontSize: 10.5, color: C.gray,
  });
  addText(slide, "两者组合，形成从“为什么改”到“改了什么”的完整追溯链。", {
    x: 5.44, y: 4.18, w: 3.45, h: 0.18, fontSize: 11.5, bold: true, color: C.red,
  });
  addFooter(slide, 5);
}

function slidePageTypes() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addHeader(
    slide,
    7,
    "页面类型",
    "来源页、实体页、概念页各自承担不同职责，组合起来才形成知识网络",
    "下面用当前项目中的真实页面类型，说明同一主题如何从单篇材料扩展成结构化知识。"
  );

  const cards = [
    {
      x: 0.7, title: "来源摘要页", color: C.red,
      name: "示例：s2-2603513 摘要页",
      lines: [
        "对应一篇原始文稿。",
        "保留核心摘要与文稿立场。",
        "是后续概念和实体抽取的入口。"
      ]
    },
    {
      x: 3.43, title: "实体页", color: C.black,
      name: "示例：6G-NEF / CCCE / 6G-SMF",
      lines: [
        "把稳定对象沉淀下来。",
        "不同文稿里反复出现的网元不会被重复解释。",
        "便于跨方案比较同一对象的角色变化。"
      ]
    },
    {
      x: 6.16, title: "概念页", color: C.red,
      name: "示例：6G-Computing-Architecture",
      lines: [
        "把多个文稿共同指向的抽象概念沉淀下来。",
        "是跨文稿综合与长期复用的关键。",
        "也是后续 query 最重要的入口。"
      ]
    },
  ];

  cards.forEach((card) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: card.x, y: 1.98, w: 2.48, h: 2.78,
      fill: { color: C.offWhite }, line: { color: C.grayLight }, shadow: shadow(0.1),
    });
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: card.x, y: 1.98, w: 2.48, h: 0.18,
      fill: { color: card.color }, line: { color: card.color },
    });
    addText(slide, card.title, {
      x: card.x + 0.18, y: 2.28, w: 1.2, h: 0.18, fontSize: 13, bold: true,
    });
    addText(slide, card.name, {
      x: card.x + 0.18, y: 2.62, w: 1.98, h: 0.46,
      fontFace: FONT_EN, fontSize: 11.5, bold: true, color: card.color,
    });
    card.lines.forEach((line, i) => {
      bulletRow(slide, card.x + 0.18, 3.22 + i * 0.42, 2.0, line, card.color, 10.5);
    });
  });
  addFooter(slide, 8);
}

function slideDeepDive() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    8,
    "3GPP 深入示例",
    "牵头人报告的真正价值，是把大量分散方案收敛成统一总览入口",
    "这正是 LLM-Wiki 最适合发挥作用的地方：把“多篇材料”编译成“一个长期可复用的总览页”。"
  );

  const groups = [
    ["01", "基础要求与定义", "统一 6G 计算服务相关术语、范围和边界。"],
    ["02", "通算协同架构", "把 Variant A-I 等方案纳入一个框架下理解。"],
    ["03", "授权机制", "比较 policy-based、subscription-based 等不同路径。"],
    ["04", "能力开放", "梳理计算指标、时延、站点信息等对 AF 的开放方式。"],
    ["05", "监控与管理", "定义 CMF、CCCE、EASDF、SHE-Controller 等监控角色。"],
  ];
  groups.forEach((group, i) => {
    const y = 1.98 + i * 0.56;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.72, y, w: 5.05, h: 0.42,
      fill: { color: C.white }, line: { color: C.grayLight }, shadow: shadow(0.05),
    });
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.72, y, w: 0.48, h: 0.42,
      fill: { color: i % 2 === 0 ? C.red : C.black }, line: { color: i % 2 === 0 ? C.red : C.black },
    });
    addText(slide, group[0], {
      x: 0.72, y: y + 0.12, w: 0.48, h: 0.12,
      fontFace: FONT_EN, fontSize: 10.5, bold: true, color: C.white, align: "center",
    });
    addText(slide, group[1], {
      x: 1.36, y: y + 0.08, w: 1.6, h: 0.14, fontSize: 11.5, bold: true,
    });
    addText(slide, group[2], {
      x: 3.0, y: y + 0.07, w: 2.45, h: 0.16, fontSize: 9.8, color: C.gray,
    });
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 6.05, y: 1.98, w: 3.28, h: 2.8,
    fill: { color: C.black }, line: { color: C.black }, shadow: shadow(0.16),
  });
  addText(slide, "Penholder 报告带来的三个产出", {
    x: 6.3, y: 2.18, w: 2.55, h: 0.22, fontSize: 13, bold: true, color: C.white,
  });
  bulletRow(slide, 6.3, 2.6, 2.6, "把 40+ 份材料压缩成 5 个主组。", C.red, 11);
  bulletRow(slide, 6.3, 3.0, 2.6, "把讨论焦点从单篇方案推进到整体架构。", C.red, 11);
  bulletRow(slide, 6.3, 3.4, 2.6, "把尚未收敛的问题显式保留为后续追踪对象。", C.red, 11);
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 6.3, y: 4.08, w: 1.0, h: 0.38,
    fill: { color: C.red }, line: { color: C.red },
  });
  addText(slide, "29", {
    x: 6.3, y: 4.18, w: 1.0, h: 0.16,
    fontFace: FONT_EN, fontSize: 19, bold: true, color: C.white, align: "center",
  });
  addText(slide, "项仍待收敛的 Editor's Notes", {
    x: 7.48, y: 4.16, w: 1.45, h: 0.18, fontSize: 11.5, color: C.white,
  });
  addFooter(slide, 9);
}

function slideConflict() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addHeader(
    slide,
    9,
    "冲突管理",
    "LLM-Wiki 的关键能力，不是消灭分歧，而是把分歧结构化管理起来",
    "在标准研究场景里，这一点比“生成一个顺滑答案”更重要。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 1.98, w: 2.78, h: 2.1,
    fill: { color: C.offWhite }, line: { color: C.grayLight }, shadow: shadow(0.1),
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 1.98, w: 2.78, h: 0.18,
    fill: { color: C.red }, line: { color: C.red },
  });
  addText(slide, "观点 A", {
    x: 0.95, y: 2.28, w: 0.8, h: 0.18, fontSize: 12.5, bold: true,
  });
  addText(slide, "算力站点应位于 SHE 或 DN\n强调其非核心网属性", {
    x: 0.95, y: 2.72, w: 2.1, h: 0.7, fontSize: 15, bold: true, color: C.red,
  });
  addText(slide, "强调与既有云原生和边缘计算生态兼容。", {
    x: 0.95, y: 3.58, w: 2.1, h: 0.2, fontSize: 10.5, color: C.gray,
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 3.74, y: 1.98, w: 2.78, h: 2.1,
    fill: { color: C.offWhite }, line: { color: C.grayLight }, shadow: shadow(0.1),
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 3.74, y: 1.98, w: 2.78, h: 0.18,
    fill: { color: C.black }, line: { color: C.black },
  });
  addText(slide, "观点 B", {
    x: 3.97, y: 2.28, w: 0.8, h: 0.18, fontSize: 12.5, bold: true,
  });
  addText(slide, "算力站点可位于 6G CN 或 DN\n允许与 UPF 深度融合", {
    x: 3.97, y: 2.72, w: 2.1, h: 0.7, fontSize: 15, bold: true, color: C.black,
  });
  addText(slide, "强调低时延、网络统一控制和能力整合。", {
    x: 3.97, y: 3.58, w: 2.1, h: 0.2, fontSize: 10.5, color: C.gray,
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 6.75, y: 1.98, w: 2.58, h: 2.1,
    fill: { color: C.black }, line: { color: C.black }, shadow: shadow(0.14),
  });
  addText(slide, "系统的处理方式", {
    x: 7.0, y: 2.24, w: 1.3, h: 0.18, fontSize: 12.5, bold: true, color: C.white,
  });
  bulletRow(slide, 7.0, 2.66, 1.95, "不静默覆盖", C.red, 10.5);
  bulletRow(slide, 7.0, 3.0, 1.95, "不合并成模糊表述", C.red, 10.5);
  bulletRow(slide, 7.0, 3.34, 1.95, "在概念页与日志中显式保留分歧", C.red, 10.5);

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 4.34, w: 8.61, h: 0.5,
    fill: { color: C.red }, line: { color: C.red },
  });
  addText(slide, "标准研究最怕的是“看起来已经统一”；真正有价值的是把尚未统一的地方持续追踪下去。", {
    x: 0.95, y: 4.47, w: 8.0, h: 0.2, fontSize: 11.5, bold: true, color: C.white,
  });
  addFooter(slide, 10);
}

function slideTeamValue() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  addHeader(
    slide,
    10,
    "为什么好用",
    "3GPP 案例证明，这套方法的真正价值在于降低重复研究成本，并提高知识共享效率",
    "它适合标准研究，不是因为标准材料特殊，而是因为这类场景最需要持续维护、持续沉淀和持续追踪。"
  );

  addPillar(slide, 0.72, 2.0, 2.42, 2.65, "专家复用", "标准专家不需要反复解释相同概念，可以把精力放在判断、争议和方向选择上。");
  addPillar(slide, 3.3, 2.0, 2.42, 2.65, "新人进入", "新成员可以先从来源页、实体页、概念页进入，不必直接面对几十份标准文稿。");
  addPillar(slide, 5.88, 2.0, 2.42, 2.65, "持续跟踪", "新文稿进入后，系统只需要增量更新，不需要从零再做一次知识梳理。");

  slide.addImage({
    path: asset("knowledge-graph.svg"),
    x: 8.02, y: 1.95, w: 1.2, h: 2.85,
  });
  addFooter(slide, 11);
}

function slideClose() {
  const slide = pptx.addSlide();
  slide.background = { color: C.offWhite };
  slide.addImage({
    path: asset("hero-network.svg"),
    x: 6.18, y: 0.62, w: 3.0, h: 4.2,
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.58, y: 0.62, w: 1.1, h: 0.34,
    fill: { color: C.red }, line: { color: C.red },
  });
  addText(slide, "CLOSING", {
    x: 0.78, y: 0.68, w: 0.72, h: 0.16,
    fontFace: FONT_EN, fontSize: 9.5, bold: true, color: C.white,
  });
  addText(slide, "结论：LLM-Wiki 更适合标准研究，\n因为它管理的是演进中的知识，而不是一次性答案", {
    x: 0.58, y: 1.34, w: 5.2, h: 1.0,
    fontSize: 24, bold: true, color: C.black,
  });
  addText(slide, "最终结论", {
    x: 0.58, y: 2.72, w: 1.2, h: 0.22, fontSize: 13, bold: true, color: C.black,
  });

  const next = [
    "Karpathy 的理论成立：知识应该先被编译成 persistent wiki，而不是每次重新检索。",
    "开源实现是清楚的：schema、skills、markdown 和 git 共同构成最小可运行骨架。",
    "3GPP 案例证明它好用：ingest、query、lint 都已经在真实知识库里跑通。",
  ];
  next.forEach((item, i) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.58, y: 3.06 + i * 0.56, w: 4.7, h: 0.38,
      fill: { color: i % 2 === 0 ? C.red : C.white },
      line: { color: i % 2 === 0 ? C.red : C.grayLight },
    });
    addText(slide, item, {
      x: 0.82, y: 3.17 + i * 0.56, w: 4.15, h: 0.16,
      fontSize: 11.2, color: i % 2 === 0 ? C.white : C.black,
    });
  });
  addFooter(slide, 12);
}

function buildDeck() {
  slideCover();
  slideCoreConclusion();
  slideFramework();
  slideProjectMechanics();
  slideGitAdvantage();
  slideWhy3gpp();
  slideIngestExample();
  slideQueryExample();
  slideLintExample();
  slideStats();
  slideTeamValue();
  slideClose();
}

async function main() {
  buildDeck();
  await pptx.writeFile({ fileName: path.join(ROOT, OUT_FILE) });
  console.log(`PPT generated: ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
