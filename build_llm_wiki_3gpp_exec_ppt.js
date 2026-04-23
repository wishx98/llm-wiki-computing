const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");

const ROOT = __dirname;
const ASSET_DIR = path.join(ROOT, "ppt_assets");
const OUT_FILE = process.env.PPTX_OUT || "LLM-Wiki-3GPP-内部汇报-v4.pptx";

const C = {
  red: "C00000",
  redDark: "8A0000",
  black: "151515",
  gray: "666666",
  gray2: "8A8A8A",
  line: "DDDDDD",
  soft: "F7F4F3",
  softRed: "F4E6E6",
  warm: "FCFAF9",
  white: "FFFFFF",
};

const FONT = "Microsoft YaHei";
const FONT_EN = "Aptos";
const SHOW_SUBTITLES = false;

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9";
pptx.author = "OpenAI Codex";
pptx.company = "AI Core";
pptx.subject = "LLM-Wiki x 3GPP 内部汇报";
pptx.title = "LLM-Wiki：把分散资料编译成可持续演进的知识资产";
pptx.lang = "zh-CN";

const DATA = loadData();

function loadData() {
  return {
    archivedRaw: countMarkdown("3gpp_sa2_174_computing/raw/09-archive"),
    sourcePages: countMarkdown("3gpp_sa2_174_computing/wiki/sources"),
    entityPages: countMarkdown("3gpp_sa2_174_computing/wiki/entities"),
    conceptPages: countMarkdown("3gpp_sa2_174_computing/wiki/concepts"),
    synthPages: countMarkdown("3gpp_sa2_174_computing/wiki/syntheses"),
    logEntries: countLogEntries("3gpp_sa2_174_computing/wiki/log.md"),
    ingestOps: countLogType("3gpp_sa2_174_computing/wiki/log.md", "ingest"),
    queryOps: countLogType("3gpp_sa2_174_computing/wiki/log.md", "query"),
    lintOps: countLogType("3gpp_sa2_174_computing/wiki/log.md", "lint"),
    synthNames: listMarkdownBasenames("3gpp_sa2_174_computing/wiki/syntheses"),
    lint: extractLatestLint("3gpp_sa2_174_computing/wiki/log.md"),
  };
}

function read(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), "utf8");
}

function countMarkdown(relPath) {
  const dir = path.join(ROOT, relPath);
  return fs
    .readdirSync(dir)
    .filter((name) => name.toLowerCase().endsWith(".md")).length;
}

function countLogEntries(relPath) {
  const text = read(relPath);
  return (text.match(/^## \[/gm) || []).length;
}

function countLogType(relPath, type) {
  const text = read(relPath);
  return (text.match(new RegExp(`^## \\[[^\\]]+\\] ${type} \\|`, "gm")) || []).length;
}

function listMarkdownBasenames(relPath) {
  return fs
    .readdirSync(path.join(ROOT, relPath))
    .filter((name) => name.toLowerCase().endsWith(".md"))
    .map((name) => path.basename(name, ".md"))
    .sort();
}

function extractLatestLint(relPath) {
  const text = read(relPath);
  const blocks = text.match(/^## \[[^\]]+\] lint \|[\s\S]*?(?=\n## \[|(?![\s\S]))/gm) || [];
  const latest = blocks[blocks.length - 1] || "";
  const fixedMatch = latest.match(/lint \|[^\d]*(\d+)/);
  const colonMatches = [...latest.matchAll(/:\s*(\d+)/g)].map((match) => Number(match[1]));
  return {
    fixed: Number(latest.match(/修复了?\s*(\d+)\s*个/)?.[1] || fixedMatch?.[1] || 0),
    added: Number(latest.match(/\*\*新增注册\*\*:\s*(\d+)/)?.[1] || colonMatches[0] || 0),
    removed: Number(latest.match(/\*\*移除无效注册\*\*:\s*(\d+)/)?.[1] || colonMatches[1] || 0),
  };
}

function asset(name) {
  return path.join(ASSET_DIR, name);
}

function shadow(opacity = 0.12) {
  return {
    type: "outer",
    color: "000000",
    blur: 3,
    offset: 2,
    angle: 135,
    opacity,
  };
}

function text(slide, value, options = {}) {
  slide.addText(value, {
    fontFace: FONT,
    color: C.black,
    margin: 0,
    ...options,
  });
}

function title(slide, page, section, headline, subtitle = "") {
  const labelW = section.length > 10 ? 1.95 : section.length > 6 ? 1.45 : 1.18;
  const labelFont = section.length > 10 ? 8.6 : 10;
  const headlineFont =
    headline.length > 60 ? 18.2 : headline.length > 50 ? 19.4 : headline.length > 40 ? 21 : 23;
  const headlineH =
    headline.length > 60 ? 1.06 : headline.length > 50 ? 0.96 : headline.length > 40 ? 0.84 : 0.7;
  const subtitleY = 0.96 + headlineH + 0.05;
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.55,
    y: 0.38,
    w: labelW,
    h: 0.36,
    fill: { color: C.red },
    line: { color: C.red },
  });
  text(slide, `${String(page).padStart(2, "0")}  ${section}`, {
    x: 0.68,
    y: 0.45,
    w: labelW - 0.22,
    h: 0.15,
    fontFace: FONT_EN,
    fontSize: labelFont,
    bold: true,
    color: C.white,
    fit: "shrink",
  });
  text(slide, headline, {
    x: 0.55,
    y: 0.92,
    w: 8.65,
    h: headlineH,
    fontSize: headlineFont,
    bold: true,
    fit: "shrink",
  });
  if (SHOW_SUBTITLES && subtitle) {
    text(slide, subtitle, {
      x: 0.55,
      y: subtitleY,
      w: 8.65,
      h: 0.34,
      fontSize: 11,
      color: C.gray,
      fit: "shrink",
    });
  }
}

function footer(slide, page) {
  text(slide, "AI Core | LLM-Wiki x 3GPP", {
    x: 0.55,
    y: 5.2,
    w: 2.6,
    h: 0.12,
    fontSize: 8.5,
    color: C.gray2,
  });
  text(slide, String(page).padStart(2, "0"), {
    x: 9.0,
    y: 5.13,
    w: 0.38,
    h: 0.16,
    fontFace: FONT_EN,
    fontSize: 11,
    bold: true,
    color: C.gray2,
    align: "right",
  });
}

function miniPanel(slide, { x, y, w, h, accent = C.red, fill = C.white, title, body }) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x,
    y,
    w,
    h,
    fill: { color: fill },
    line: { color: C.line, width: 1 },
    shadow: shadow(0.08),
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x,
    y,
    w,
    h: 0.14,
    fill: { color: accent },
    line: { color: accent },
  });
  text(slide, title, {
    x: x + 0.16,
    y: y + 0.24,
    w: w - 0.32,
    h: 0.18,
    fontSize: 10.8,
    bold: true,
    fit: "shrink",
  });
  text(slide, body, {
    x: x + 0.16,
    y: y + 0.46,
    w: w - 0.32,
    h: h - 0.56,
    fontSize: 9.2,
    color: C.gray,
    fit: "shrink",
  });
}

function panel(slide, { x, y, w, h, accent = C.red, fill = C.white, title, body, bodyColor = C.gray }) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x,
    y,
    w,
    h,
    fill: { color: fill },
    line: { color: C.line, width: 1 },
    shadow: shadow(0.08),
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x,
    y,
    w,
    h: 0.12,
    fill: { color: accent },
    line: { color: accent },
  });
  text(slide, title, {
    x: x + 0.18,
    y: y + 0.22,
    w: w - 0.36,
    h: 0.3,
    fontSize: 12.2,
    bold: true,
    fit: "shrink",
  });
  text(slide, body, {
    x: x + 0.18,
    y: y + 0.6,
    w: w - 0.36,
    h: h - 0.78,
    fontSize: 10.1,
    color: bodyColor,
    fit: "shrink",
  });
}

function bullet(slide, x, y, w, value, color = C.red, fontSize = 10.7) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x,
    y: y + 0.05,
    w: 0.1,
    h: 0.1,
    fill: { color },
    line: { color },
  });
  text(slide, value, {
    x: x + 0.18,
    y,
    w: w - 0.18,
    h: 0.28,
    fontSize,
  });
}

function metric(slide, x, y, w, h, number, label) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x,
    y,
    w,
    h,
    fill: { color: C.white },
    line: { color: C.line, width: 1 },
    shadow: shadow(0.08),
  });
  text(slide, number, {
    x: x + 0.14,
    y: y + 0.12,
    w: w - 0.28,
    h: 0.34,
    fontFace: FONT_EN,
    fontSize: 22,
    bold: true,
    color: C.red,
    align: "center",
  });
  text(slide, label, {
    x: x + 0.12,
    y: y + 0.54,
    w: w - 0.24,
    h: 0.22,
    fontSize: 10.2,
    color: C.gray,
    align: "center",
  });
}

function tag(slide, x, y, value, color = C.red, fill = C.white) {
  const w = 0.32 + value.length * 0.083;
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x,
    y,
    w,
    h: 0.28,
    rectRadius: 0.05,
    fill: { color: fill },
    line: { color, width: 1 },
  });
  text(slide, value, {
    x: x + 0.08,
    y: y + 0.06,
    w: w - 0.16,
    h: 0.12,
    fontSize: 8.3,
    bold: true,
    color,
    align: "center",
  });
  return w;
}

function cover() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 1.28,
    h: 5.625,
    fill: { color: C.red },
    line: { color: C.red },
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 1.28,
    y: 0,
    w: 0.1,
    h: 5.625,
    fill: { color: C.black },
    line: { color: C.black },
  });

  slide.addImage({
    path: asset("hero-network.svg"),
    x: 5.95,
    y: 0.62,
    w: 3.05,
    h: 4.15,
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 1.78,
    y: 0.72,
    w: 1.28,
    h: 0.32,
    fill: { color: C.red },
    line: { color: C.red },
  });
  text(slide, "INTERNAL REPORT", {
    x: 1.96,
    y: 0.79,
    w: 0.95,
    h: 0.12,
    fontFace: FONT_EN,
    fontSize: 9.5,
    bold: true,
    color: C.white,
  });

  text(slide, "LLM-Wiki：把分散资料编译成\n可持续演进的知识资产", {
    x: 1.78,
    y: 1.34,
    w: 4.25,
    h: 0.95,
    fontSize: 27,
    bold: true,
  });
  text(slide, "以 Karpathy 的方法论为起点，结合开源实现与 3GPP SA2 Computing 实践，说明这套模式为什么成立、如何落地、以及为何在标准研究场景中表现突出。", {
    x: 1.78,
    y: 2.5,
    w: 4.35,
    h: 0.54,
    fontSize: 12,
    color: C.gray,
  });

  let x = 1.78;
  x += tag(slide, x, 3.38, "Karpathy Method") + 0.12;
  x += tag(slide, x, 3.38, "Knowledge Compilation") + 0.12;
  tag(slide, x, 3.38, "3GPP Case");

  text(slide, "主色：#C00000 | 浅底红黑版式 | 公司级内部汇报", {
    x: 1.78,
    y: 4.25,
    w: 3.6,
    h: 0.16,
    fontSize: 10.5,
    color: C.gray,
  });
  text(slide, "2026-04-21", {
    x: 1.78,
    y: 4.84,
    w: 1.1,
    h: 0.16,
    fontFace: FONT_EN,
    fontSize: 10.5,
    bold: true,
  });
  footer(slide, 1);
}

function theoryProblem() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    2,
    "THEORY",
    "Karpathy 的批评直指一个根问题：知识在回答中短暂出现，却没有沉淀为组织记忆",
    "问题不在于模型能不能回答，而在于组织是否拥有一层持续积累、持续校正、持续复用的知识中间层。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72,
    y: 2.04,
    w: 3.08,
    h: 2.54,
    fill: { color: C.softRed },
    line: { color: "E9D0D0", width: 1 },
  });
  text(slide, "多数“读文档再回答”的 LLM 系统，本质仍停留在 query-time rediscovery。", {
    x: 0.98,
    y: 2.28,
    w: 2.42,
    h: 1.42,
    fontSize: 17.2,
    bold: true,
    color: C.red,
    fit: "shrink",
  });
  text(slide, "资料被读取过，但没有被整理成可以复用、可以校正、可以累积的中间知识层。", {
    x: 0.98,
    y: 4.0,
    w: 2.44,
    h: 0.34,
    fontSize: 10.6,
    color: C.gray,
    fit: "shrink",
  });

  panel(slide, {
    x: 4.06,
    y: 2.04,
    w: 2.5,
    h: 1.1,
    title: "每次提问都要重新找答案",
    body: "系统重复检索、拼接与组织，跨文档综合成本在每次查询时重新支付。",
  });
  panel(slide, {
    x: 6.72,
    y: 2.04,
    w: 2.5,
    h: 1.1,
    accent: C.black,
    title: "分歧与版本变化难以留存",
    body: "冲突常在回答时被临时平滑，难以形成可追踪、可讨论的知识演进记录。",
  });
  panel(slide, {
    x: 4.06,
    y: 3.42,
    w: 2.5,
    h: 1.1,
    accent: C.black,
    title: "高价值分析留在对话里",
    body: "一次好的分析如果不回写知识库，就不会成为下一次研究的起点。",
  });
  panel(slide, {
    x: 6.72,
    y: 3.42,
    w: 2.5,
    h: 1.1,
    title: "长期研究被迫反复起步",
    body: "问题越复杂、周期越长，纯检索范式越容易在关键处重复劳动。",
  });

  text(slide, "这不是在否定 RAG，而是在指出：当目标是长期研究时，仅靠 query-time 组合无法形成可持续复利。", {
    x: 0.72,
    y: 4.8,
    w: 8.5,
    h: 0.18,
    fontSize: 10.8,
    bold: true,
    color: C.red,
    fit: "shrink",
  });
  footer(slide, 2);
}

function theoryCompile() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };
  title(
    slide,
    3,
    "THEORY",
    "Karpathy 的核心类比不是“百科”，而是“编译”：先把原始资料编译成可运行的知识中间层",
    "这也是他把原始资料视作 source code、把 wiki 视作 binary 的原因。"
  );

  panel(slide, {
    x: 0.72,
    y: 1.98,
    w: 4.15,
    h: 1.18,
    accent: C.black,
    fill: C.white,
    title: "软件工程中的编译",
    body: "Source code 不会在每次运行时被重新解释；它会先被编译成可高效复用的执行产物。",
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.96, y: 2.55, w: 1.14, h: 0.32,
    fill: { color: C.soft }, line: { color: C.line },
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 2.54, y: 2.55, w: 1.14, h: 0.32,
    fill: { color: C.red }, line: { color: C.red },
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 4.12, y: 2.55, w: 0.72, h: 0.32,
    fill: { color: C.black }, line: { color: C.black },
  });
  text(slide, "Source Code", {
    x: 0.96, y: 2.64, w: 1.14, h: 0.1, fontFace: FONT_EN, fontSize: 10.5, bold: true, align: "center",
  });
  text(slide, "Compile Once", {
    x: 2.54, y: 2.64, w: 1.14, h: 0.1, fontFace: FONT_EN, fontSize: 10.5, bold: true, color: C.white, align: "center",
  });
  text(slide, "Binary", {
    x: 4.12, y: 2.64, w: 0.72, h: 0.1, fontFace: FONT_EN, fontSize: 10.5, bold: true, color: C.white, align: "center",
  });

  panel(slide, {
    x: 0.72,
    y: 3.46,
    w: 4.15,
    h: 1.18,
    title: "LLM Wiki 中的知识编译",
    body: "Raw sources 不直接作为每次回答的主要工作面，而是先被 LLM 编译为持续维护的 wiki。",
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.96, y: 4.03, w: 1.14, h: 0.32,
    fill: { color: C.soft }, line: { color: C.line },
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 2.36, y: 4.03, w: 1.42, h: 0.32,
    fill: { color: C.red }, line: { color: C.red },
  });
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 4.04, y: 4.03, w: 0.8, h: 0.32,
    fill: { color: C.black }, line: { color: C.black },
  });
  text(slide, "Raw Sources", {
    x: 0.96, y: 4.12, w: 1.14, h: 0.1, fontFace: FONT_EN, fontSize: 10.2, bold: true, align: "center",
  });
  text(slide, "LLM Compiles", {
    x: 2.36, y: 4.12, w: 1.42, h: 0.1, fontFace: FONT_EN, fontSize: 10.2, bold: true, color: C.white, align: "center",
  });
  text(slide, "Wiki", {
    x: 4.04, y: 4.12, w: 0.8, h: 0.1, fontFace: FONT_EN, fontSize: 10.2, bold: true, color: C.white, align: "center",
  });

  panel(slide, {
    x: 5.18,
    y: 1.98,
    w: 4.05,
    h: 0.8,
    title: "结果一：把查询成本前移到 ingest 阶段",
    body: "综合、链接、冲突标注在平时完成；查询时读取的是已经被整理过的知识对象。",
  });
  panel(slide, {
    x: 5.18,
    y: 2.98,
    w: 4.05,
    h: 0.8,
    accent: C.black,
    title: "结果二：wiki 成为 persistent, compounding artifact",
    body: "它不是一次性回答，而是会持续增厚、持续修正、持续复用的知识制品。",
  });
  panel(slide, {
    x: 5.18,
    y: 3.98,
    w: 4.05,
    h: 0.8,
    title: "结果三：好的 query 会继续反写回 wiki",
    body: "问答不再是知识生产的终点，而是知识库继续变厚、继续变好的入口。",
  });

  footer(slide, 3);
}

function theoryModel() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    4,
    "THEORY",
    "这套方法真正成立，不只因为模型能读文档，而是因为它同时给出结构、分工与治理机制",
    "Karpathy 真正解决的不是“阅读”本身，而是知识库长期维护中最昂贵、最乏味的 bookkeeping。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 2.02, w: 4.0, h: 2.74,
    fill: { color: C.soft }, line: { color: C.line }, shadow: shadow(0.08),
  });
  text(slide, "三层结构", {
    x: 0.96, y: 2.18, w: 0.8, h: 0.12, fontSize: 12.8, bold: true,
  });

  const layers = [
    ["Raw Sources", "原始资料层，保持只读，是唯一事实来源。", C.black, C.white],
    ["Persistent Wiki", "知识层，存放来源摘要、概念页、实体页与综合页。", C.red, C.white],
    ["Schema", "规则层，定义页面格式、更新流程与冲突处理原则。", C.softRed, C.black],
  ];
  layers.forEach((item, i) => {
    const y = 2.42 + i * 0.58;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.96, y, w: 3.5, h: 0.38,
      fill: { color: item[2] }, line: { color: item[2] },
    });
    text(slide, item[0], {
      x: 1.1, y: y + 0.06, w: 1.08, h: 0.1,
      fontFace: FONT_EN, fontSize: 10.4, bold: true, color: item[3],
    });
    text(slide, item[1], {
      x: 2.2, y: y + 0.06, w: 2.06, h: 0.14,
      fontSize: 9.0, color: item[3], fit: "shrink",
    });
  });

  text(slide, "三类操作", {
    x: 0.96, y: 3.88, w: 0.8, h: 0.12, fontSize: 12.8, bold: true,
  });
  ["Ingest", "Query", "Lint"].forEach((op, i) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.96 + i * 1.18, y: 4.16, w: 0.92, h: 0.3,
      fill: { color: i === 1 ? C.black : C.red },
      line: { color: i === 1 ? C.black : C.red },
    });
    text(slide, op, {
      x: 0.96 + i * 1.18, y: 4.24, w: 0.92, h: 0.1,
      fontFace: FONT_EN, fontSize: 10.5, bold: true, color: C.white, align: "center",
    });
  });

  panel(slide, {
    x: 5.02,
    y: 2.02,
    w: 1.98,
    h: 2.74,
    accent: C.red,
    title: "Human",
    body: "选择研究主题\n筛选与补充资料\n判断重点与边界\n决定如何处理分歧\n提出高价值问题",
    bodyColor: C.black,
  });
  panel(slide, {
    x: 7.18,
    y: 2.02,
    w: 2.04,
    h: 2.74,
    accent: C.black,
    title: "LLM",
    body: "总结与抽取\n维护 cross-links\n增量更新页面\n记录变更与日志\n持续执行 bookkeeping",
    bodyColor: C.black,
  });

  text(slide, "结论：LLM Wiki 的价值，不是把“想法”自动化，而是把知识库维护工程化。", {
    x: 5.02, y: 4.8, w: 4.2, h: 0.18, fontSize: 10.8, bold: true, color: C.red, fit: "shrink",
  });
  footer(slide, 4);
}

function implementationOverview() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };
  title(
    slide,
    5,
    "IMPLEMENTATION",
    "当前项目已经把这套方法落成可执行仓库：schema、skills、markdown 与治理文件全部落位",
    "抽象的方法论不再停留在说明层，而是已经收敛成一个可运行、可维护、可复用的知识工程骨架。"
  );

  slide.addImage({
    path: asset("compile-pipeline.svg"),
    x: 0.72,
    y: 2.12,
    w: 4.46,
    h: 2.9,
  });

  panel(slide, {
    x: 5.46,
    y: 2.18,
    w: 3.76,
    h: 0.68,
    title: "`llm-wiki.md`",
    body: "这是 Karpathy 的 idea file，负责定义方法论原点，而不是提供某个固定产品。",
  });
  panel(slide, {
    x: 5.46,
    y: 3.06,
    w: 3.76,
    h: 0.68,
    accent: C.black,
    title: "`ANTIGRAVITY.md`",
    body: "它把理论写成 schema：raw 只读、wiki 可写、冲突必须显式处理、index/log 必须同步维护。",
  });
  panel(slide, {
    x: 5.46,
    y: 3.94,
    w: 3.76,
    h: 0.68,
    title: "`.claude/skills/*`",
    body: "它把 ingest / query / lint 三类动作固化为可重复执行的工作流，而非临时对话习惯。",
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72,
    y: 4.82,
    w: 8.5,
    h: 0.24,
    fill: { color: C.black },
    line: { color: C.black },
  });
  text(slide, "真正的知识对象是 markdown 页面；真正的治理骨架是 index.md、log.md 与 Git；真正的执行界面是 skill 化 workflow。", {
    x: 0.98,
    y: 4.87,
    w: 7.94,
    h: 0.12,
    fontSize: 10.1,
    bold: true,
    color: C.white,
    fit: "shrink",
  });
  footer(slide, 5);
}

function ingestImplementation() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    6,
    "IMPLEMENTATION",
    "Ingest 的本质不是“导入文件”，而是把新资料从可读取状态，转成可复用、可链接、可演进的知识对象",
    "因此 ingest 不是单页摘要，而是一次面向整个知识网络的增量编译。"
  );

  panel(slide, {
    x: 0.72,
    y: 1.98,
    w: 4.5,
    h: 2.84,
    title: "Ingest 工作流",
    body: "",
  });
  const steps = [
    "扫描 raw inbox，明确忽略 `raw/09-archive/`。",
    "读取来源材料，提炼核心主旨、实体与概念。",
    "在 `wiki/sources/` 写来源摘要页。",
    "增量更新 `wiki/entities/` 与 `wiki/concepts/`。",
    "同步维护 `wiki/index.md`、`wiki/log.md`，然后归档原文。",
  ];
  steps.forEach((step, i) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.98,
      y: 2.4 + i * 0.42,
      w: 0.28,
      h: 0.24,
      fill: { color: i % 2 === 0 ? C.red : C.black },
      line: { color: i % 2 === 0 ? C.red : C.black },
    });
    text(slide, String(i + 1), {
      x: 0.98, y: 2.47 + i * 0.42, w: 0.28, h: 0.08,
      fontFace: FONT_EN, fontSize: 9.8, bold: true, color: C.white, align: "center",
    });
    text(slide, step, {
      x: 1.42, y: 2.39 + i * 0.42, w: 3.46, h: 0.16, fontSize: 10.5,
    });
  });

  panel(slide, {
    x: 5.52,
    y: 1.98,
    w: 3.7,
    h: 1.2,
    accent: C.black,
    title: "实现亮点",
    body: "`.claude/skills/ingest/SKILL.md` 已经把 inbox/archive 机制、页面模板、索引维护和归档动作明确下来。",
  });
  panel(slide, {
    x: 5.52,
    y: 3.38,
    w: 3.7,
    h: 1.44,
    title: "硬约束",
    body: "1. raw 是事实层，不允许修改。\n2. 发现新旧知识冲突时，不能静默覆盖。\n3. 每次 ingest 都必须同步维护 index 和 log。\n4. 每个页面都必须留出“关联连接”区块，避免知识孤岛。",
    bodyColor: C.black,
  });
  footer(slide, 6);
}

function queryImplementation() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };
  title(
    slide,
    7,
    "IMPLEMENTATION",
    "Query 的关键不是“回答得像不像”，而是“是否先读知识库、再组织答案，并把高价值输出继续沉淀回去”",
    "这让 query 从临时问答动作，升级为知识库持续增厚的机制之一。"
  );

  panel(slide, {
    x: 0.72,
    y: 1.98,
    w: 4.1,
    h: 2.84,
    title: "Query 工作流",
    body: "",
  });
  const querySteps = [
    "第一步永远先读 `wiki/index.md`，定位相关页面。",
    "再深读 Sources / Entities / Concepts / Syntheses。",
    "回答时显式引用 wiki 页面，而不是凭模型记忆即兴作答。",
    "如果答案有分析价值，则写入 `wiki/syntheses/`。",
    "无论是否沉淀 synthesis，都要补写 `wiki/log.md`。",
  ];
  querySteps.forEach((step, i) => {
    bullet(slide, 0.98, 2.38 + i * 0.42, 3.42, step, i % 2 === 0 ? C.red : C.black, 10.5);
  });

  panel(slide, {
    x: 5.14,
    y: 1.98,
    w: 4.08,
    h: 1.16,
    accent: C.black,
    title: "实现亮点",
    body: "`.claude/skills/query/SKILL.md` 已经把“先读 index，再读目标页，再决定是否沉淀 synthesis”的路径固定下来。",
  });
  panel(slide, {
    x: 5.14,
    y: 3.38,
    w: 4.08,
    h: 1.44,
    title: "为什么这很重要",
    body: "如果 query 仍然直接回到 raw sources，知识就不会真正复利。只有把高价值答案回填为 synthesis，知识库才会越问越厚、越问越有组织。硬约束是：禁止凭模型记忆作答，必须先对已有 wiki 负责。",
  });
  footer(slide, 7);
}

function lintImplementation() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    8,
    "IMPLEMENTATION",
    "Lint 把知识库维护从“凭经验找问题”，升级为“可周期执行、可汇总、可审计”的治理动作",
    "这是 LLM Wiki 区别于普通笔记系统的关键一环，因为知识会增长，治理能力也必须同步增长。"
  );

  panel(slide, {
    x: 0.72,
    y: 2.04,
    w: 4.26,
    h: 2.84,
    title: "Lint 聚焦四类问题",
    body: "",
  });
  const lintCards = [
    ["索引一致性", "页面存在但未注册，或 index 里登记了无效页面。", C.red],
    ["双链健康度", "识别死链、孤儿页与结构性断裂。", C.black],
    ["冲突积压", "扫描仍带有“知识冲突”区块、尚未收敛的问题。", C.red],
    ["治理纪律", "先扫描、先汇报，再在确认后修复。", C.black],
  ];
  lintCards.forEach((item, i) => {
    miniPanel(slide, {
      x: 0.96 + (i % 2) * 1.94,
      y: 2.66 + Math.floor(i / 2) * 1.02,
      w: 1.72,
      h: 0.84,
      accent: item[2],
      title: item[0],
      body: item[1],
    });
  });

  panel(slide, {
    x: 5.22,
    y: 2.04,
    w: 4.0,
    h: 1.16,
    accent: C.black,
    title: "实现亮点",
    body: "`.claude/skills/lint/SKILL.md` 已经把知识库治理类比为静态分析：先扫描，再汇报，再经确认后修复。",
  });
  panel(slide, {
    x: 5.22,
    y: 3.54,
    w: 4.0,
    h: 1.34,
    title: "治理意义",
    body: "如果没有 lint，wiki 很容易在增长中失去可信度；如果有了 lint，知识库就具备了像代码库一样的健康检查机制。",
  });
  footer(slide, 8);
}

function gitImplementation() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };
  title(
    slide,
    9,
    "IMPLEMENTATION",
    "Git 不是附加功能，而是让知识库具备工程级可审计性、可协作性和可回滚能力的基础设施",
    "Karpathy 把 wiki 看作 codebase，这句话真正落到工程上，靠的就是 markdown + Git。"
  );

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 1.98, w: 3.2, h: 2.84,
    fill: { color: C.softRed }, line: { color: "E9D0D0" },
  });
  text(slide, "The wiki is just a git repo of markdown files.", {
    x: 1.0, y: 2.24, w: 2.62, h: 0.68,
    fontFace: FONT_EN, fontSize: 21, bold: true, color: C.red,
  });
  text(slide, "这意味着版本历史、分支、review、rollback 和协作，不需要另造一套知识系统基础设施。", {
    x: 1.0, y: 3.42, w: 2.46, h: 0.42, fontSize: 11.2, color: C.gray,
  });

  panel(slide, {
    x: 4.24,
    y: 1.98,
    w: 2.34,
    h: 1.2,
    title: "版本可追溯",
    body: "任何页面如何演进、哪次 ingest 或 lint 改了什么，都可以在 diff 中被精确追踪。",
  });
  panel(slide, {
    x: 6.88,
    y: 1.98,
    w: 2.34,
    h: 1.2,
    accent: C.black,
    title: "协作可治理",
    body: "专家、研究员与 LLM 都可以围绕同一仓库工作，知识修改可以像代码一样被 review。",
  });
  panel(slide, {
    x: 4.24,
    y: 3.54,
    w: 2.34,
    h: 1.2,
    accent: C.black,
    title: "风险可回滚",
    body: "一旦发现误摘要、误合并或错误归纳，知识库可以像代码库一样回退到稳定状态。",
  });
  panel(slide, {
    x: 6.88,
    y: 3.54,
    w: 2.34,
    h: 1.2,
    title: "`log.md` 与 Git 分工清晰",
    body: "`log.md` 记录语义层动作；Git 记录文件层差异，两者共同完成知识审计链。",
  });
  footer(slide, 9);
}

function why3gpp() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    10,
    "CASE",
    "3GPP 不是随手挑的例子，而是对 LLM Wiki 的一场高压测试：复杂、持续演进，而且团队本身熟悉其语境",
    "这正是验证这套方法是否真正有用、是否能经得起专家审视的理想场景。"
  );

  panel(slide, {
    x: 0.72,
    y: 1.98,
    w: 4.38,
    h: 2.84,
    title: "为什么选择 3GPP",
    body: "",
  });
  const reasons = [
    "文稿天然具有多厂商、多版本、多观点、多轮收敛的复杂性。",
    "它不是单篇阅读问题，而是典型的长期研究与持续跟踪问题。",
    "团队内部有较多标准专家，对 3GPP 的术语、流程和争议点本身就比较熟悉。",
    "正因为大家熟悉 3GPP，所以更容易判断知识库是否真的整理清楚、是否经得起推敲。",
  ];
  reasons.forEach((value, i) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.98,
      y: 2.56 + i * 0.48,
      w: 0.28,
      h: 0.24,
      fill: { color: i === 1 || i === 3 ? C.black : C.red },
      line: { color: i === 1 || i === 3 ? C.black : C.red },
    });
    text(slide, String(i + 1), {
      x: 0.98, y: 2.63 + i * 0.48, w: 0.28, h: 0.08,
      fontFace: FONT_EN, fontSize: 9.8, bold: true, color: C.white, align: "center",
    });
    text(slide, value, {
      x: 1.42, y: 2.55 + i * 0.48, w: 3.28, h: 0.18, fontSize: 10.5,
    });
  });

  text(slide, "当前项目规模", {
    x: 5.44, y: 2.06, w: 1.2, h: 0.12, fontSize: 12.8, bold: true,
  });
  metric(slide, 5.34, 2.34, 1.14, 0.92, String(DATA.archivedRaw), "归档原文");
  metric(slide, 6.62, 2.34, 1.14, 0.92, String(DATA.sourcePages), "来源页");
  metric(slide, 7.9, 2.34, 1.14, 0.92, String(DATA.entityPages), "实体页");
  metric(slide, 5.34, 3.54, 1.14, 0.92, String(DATA.conceptPages), "概念页");
  metric(slide, 6.62, 3.54, 1.14, 0.92, String(DATA.synthPages), "Synthesis");
  metric(slide, 7.9, 3.54, 1.14, 0.92, String(DATA.logEntries), "Log 条目");
  footer(slide, 10);
}

function caseIngest() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };
  title(
    slide,
    11,
    "CASE",
    "3GPP 的 ingest 证明：一份标准文稿进入系统后，不是留下一个摘要，而是触发多个知识节点的联动更新",
    "这正是“知识编译”与“文件归档”的根本差异。"
  );

  panel(slide, {
    x: 0.72,
    y: 2.08,
    w: 2.2,
    h: 2.5,
    accent: C.black,
    title: "输入文稿",
    body: "S2-2603513\nPenholder Summary\n\n牵头人总结报告，不仅汇总多方方案，还沉淀技术组别与未收敛议题。",
    bodyColor: C.black,
  });

  const outputs = [
    ["来源摘要页", "写入 `摘要-s2-2603513-penholder-summary`，保留文稿本身的结构与主旨。", C.red],
    ["总览概念页", "更新 `6G-Computing-Architecture`，把分散方案收敛到统一视图之下。", C.black],
    ["实体页联动", "补充 `OPPO`、`Intel`、`MediaTek` 等参与方页面，形成跨文稿入口。", C.red],
    ["争议显式登记", "在 `Computing-Site` 中保留“CN vs SHE/DN”分歧，而不是静默覆盖。", C.black],
  ];
  outputs.forEach((item, i) => {
    panel(slide, {
      x: 3.3 + (i % 2) * 2.98,
      y: 2.08 + Math.floor(i / 2) * 1.3,
      w: 2.68,
      h: 1.02,
      accent: item[2],
      title: item[0],
      body: item[1],
    });
  });

  slide.addShape(pptx.shapes.LINE, {
    x: 2.92, y: 2.74, w: 0.36, h: 0,
    line: { color: C.red, width: 1.6, beginArrowType: "none", endArrowType: "triangle" },
  });
  slide.addShape(pptx.shapes.LINE, {
    x: 2.92, y: 2.74, w: 0.36, h: 1.3,
    line: { color: C.red, width: 1.6, beginArrowType: "none", endArrowType: "triangle" },
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.72, y: 4.8, w: 8.54, h: 0.24,
    fill: { color: C.red }, line: { color: C.red },
  });
  text(slide, "结论：在 LLM Wiki 里，单篇文稿的价值不以“生成一页摘要”结束，而以“为整个知识网络注入新结构”为开始。", {
    x: 0.96, y: 4.86, w: 8.02, h: 0.1, fontSize: 10.1, bold: true, color: C.white, fit: "shrink",
  });
  footer(slide, 11);
}

function caseQuery() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    12,
    "CASE",
    "3GPP 的 query 证明：问答结果没有消失在对话历史里，而是继续被沉淀为可复用的 synthesis 页面",
    "这让知识库不是“被查一次”，而是“每查一次都更好用”。"
  );

  panel(slide, {
    x: 0.72,
    y: 1.98,
    w: 4.02,
    h: 2.84,
    title: "Query 在本项目中的实际路径",
    body: "",
  });
  const caseQueryBullets = [
    "先读 `wiki/index.md`，再进入相关 Sources / Entities / Concepts。",
    "围绕具体问题组织已有知识，而不是回到 raw 中逐篇翻文稿。",
    "当回答本身具有长期复用价值时，直接沉淀进 `wiki/syntheses/`。",
    "因此 query 不再只是“消费知识”，而是在继续“生产知识”。",
  ];
  caseQueryBullets.forEach((item, i) => {
    bullet(slide, 0.98, 2.42 + i * 0.48, 3.28, item, i % 2 === 0 ? C.red : C.black, 10.6);
  });

  panel(slide, {
    x: 5.06,
    y: 1.98,
    w: 4.16,
    h: 2.84,
    accent: C.black,
    title: "已沉淀的 3GPP synthesis 页面",
    body: "",
  });
  DATA.synthNames.forEach((name, i) => {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 5.34,
      y: 2.38 + i * 0.42,
      w: 3.52,
      h: 0.28,
      fill: { color: i % 2 === 0 ? C.soft : C.softRed },
      line: { color: i % 2 === 0 ? C.line : "E3CACA", width: 1 },
    });
    text(slide, name, {
      x: 5.54,
      y: 2.46 + i * 0.42,
      w: 3.1,
      h: 0.1,
      fontFace: FONT_EN,
      fontSize: 10.4,
      bold: true,
      color: i % 2 === 0 ? C.black : C.red,
    });
  });
  text(slide, "典型结果包括 `Computing-Layer-Link-Overview` 和 `CAH-Deep-Dive` 这类跨页面综合分析；它们已经不再是临时回答，而是新的知识入口。", {
    x: 5.34, y: 4.48, w: 3.32, h: 0.3, fontSize: 10.4, color: C.gray,
  });
  footer(slide, 12);
}

function caseLint() {
  const slide = pptx.addSlide();
  slide.background = { color: C.warm };
  title(
    slide,
    13,
    "CASE",
    "3GPP 的 lint 证明：知识库治理不是概念，而是已经在真实项目里执行过、产生过可量化修复结果",
    "这意味着它不仅能增长，也能被持续校准。"
  );

  metric(slide, 0.82, 2.04, 1.2, 1.04, String(DATA.lint.fixed), "修复索引问题");
  metric(slide, 2.22, 2.04, 1.2, 1.04, String(DATA.lint.added), "补回注册");
  metric(slide, 3.62, 2.04, 1.2, 1.04, String(DATA.lint.removed), "移除无效项");

  panel(slide, {
    x: 0.82,
    y: 3.42,
    w: 4.02,
    h: 1.38,
    title: "2026-04-21 的实际修复",
    body: "补回了 `SHE-C`、`Communication-Computing-Coordination`、`Computing-Resource-Profile`、`Logical-Computing-Site` 等缺失注册。",
  });
  panel(slide, {
    x: 5.08,
    y: 1.98,
    w: 4.14,
    h: 1.18,
    accent: C.black,
    title: "同时清理陈旧索引",
    body: "移除了 `6G-PCF`、`Nokia`、`NTT-DOCOMO` 等已不存在页面的无效注册，避免索引持续失真。",
  });
  panel(slide, {
    x: 5.08,
    y: 3.42,
    w: 4.14,
    h: 1.38,
    title: "治理层面的意义",
    body: "这说明知识库不是只会“越堆越多”；在 lint 机制下，它还具备周期性校准、清理和恢复结构健康度的能力。",
  });
  footer(slide, 13);
}

function conclusion() {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  title(
    slide,
    14,
    "CLOSING",
    "结论：LLM Wiki 更适合承载高复杂度、强综合、持续演进的标准研究，因为它管理的是知识本身，而不只是单次回答",
    "这套方法的价值，已经在理论、实现和 3GPP 实践三个层面同时得到验证。"
  );

  panel(slide, {
    x: 0.72,
    y: 1.98,
    w: 5.18,
    h: 0.94,
    title: "理论上",
    body: "Karpathy 解决的不是“如何让回答更像答案”，而是“如何让知识不再只在回答里短暂出现”。",
  });
  panel(slide, {
    x: 0.72,
    y: 3.06,
    w: 5.18,
    h: 0.94,
    accent: C.black,
    title: "工程上",
    body: "当前项目已经把方法论落实为 schema、skills、markdown 页面、index/log 和 Git 共同构成的知识工程系统。",
  });
  panel(slide, {
    x: 0.72,
    y: 4.14,
    w: 5.18,
    h: 0.94,
    title: "实践上",
    body: "3GPP 案例已经证明 ingest、query、lint 三种动作都能在真实标准研究中稳定运行，并产生复利。",
  });

  text(slide, "管理层判断", {
    x: 6.12, y: 2.14, w: 2.2, h: 0.12, fontSize: 12.8, bold: true,
  });
  bullet(slide, 6.12, 2.54, 2.9, "RAG 仍适合大规模事实检索；但当目标转向长期综合研究，LLM Wiki 更匹配。", C.red, 10.2);
  bullet(slide, 6.12, 3.22, 2.9, "它把专家时间从重复整理中释放出来，重新投入判断、分歧和方向选择。", C.black, 10.2);
  bullet(slide, 6.12, 3.9, 2.9, "它更像知识基础设施，而不是一个回答问题的小工具。", C.red, 10.2);
  footer(slide, 14);
}

function buildDeck() {
  cover();
  theoryProblem();
  theoryCompile();
  theoryModel();
  implementationOverview();
  ingestImplementation();
  queryImplementation();
  lintImplementation();
  gitImplementation();
  why3gpp();
  caseIngest();
  caseQuery();
  caseLint();
  conclusion();
}

async function main() {
  buildDeck();
  await pptx.writeFile({ fileName: path.join(ROOT, OUT_FILE) });
  console.log(`PPT generated: ${OUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
