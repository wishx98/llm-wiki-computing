const pptxgen = require("pptxgenjs");

// ==========================================
// McKinsey-Style Palette: Red + Black + Grays
// ==========================================
const C_RED = "C00000";       // primary red
const C_DKRED = "8B0000";     // dark red accent
const C_BLACK = "000000";     // black
const C_DKGRAY = "333333";    // dark gray (body text)
const C_GRAY = "666666";      // medium gray
const C_LTGRAY = "E5E5E5";    // light gray (borders/dividers)
const C_BGGRAY = "F5F5F5";    // very light gray (subtle bg)
const C_WHITE = "FFFFFF";

function makeShadow() {
  return { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 };
}

function addFooter(slide, pageNum, source = "") {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 5.25, w: 9, h: 0,
    line: { color: C_LTGRAY, width: 0.5 }
  });
  slide.addText(source, {
    x: 0.5, y: 5.3, w: 7.5, h: 0.25,
    fontSize: 8, fontFace: "Arial", color: C_GRAY,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText(String(pageNum), {
    x: 8.5, y: 5.3, w: 1, h: 0.25,
    fontSize: 9, fontFace: "Arial", color: C_GRAY,
    align: "right", valign: "middle", margin: 0
  });
}

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI Core";
pres.title = "LLM-Wiki 知识库实践";
pres.subject = "从 Karpathy 理念到 3GPP 知识工程落地";

// ==========================================
// Slide 1: Title (McKinsey cover)
// ==========================================
let slide = pres.addSlide();
slide.background = { color: C_WHITE };

// Top red bar
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.15,
  fill: { color: C_RED }
});

// Large title
slide.addText("LLM-Wiki 知识库实践", {
  x: 0.5, y: 1.8, w: 9, h: 0.9,
  fontSize: 40, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "middle", margin: 0
});

// Red accent line under title
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 2.7, w: 2.0, h: 0.04,
  fill: { color: C_RED }
});

// Subtitle
slide.addText("从 Karpathy 理念到 3GPP 知识工程落地", {
  x: 0.5, y: 2.9, w: 9, h: 0.5,
  fontSize: 20, fontFace: "Arial", color: C_DKGRAY,
  align: "left", valign: "middle", margin: 0
});

// Date
slide.addText("内部汇报 | 2026年4月20日", {
  x: 0.5, y: 5.0, w: 9, h: 0.3,
  fontSize: 12, fontFace: "Arial", color: C_GRAY,
  align: "left", valign: "middle", margin: 0
});

// Bottom red bar
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 5.475, w: 10, h: 0.15,
  fill: { color: C_RED }
});

addFooter(slide, 1, "基于 Karpathy LLM-Wiki 理念与 3GPP SA2 #174 项目实践");

// ==========================================
// Slide 2: Executive Summary (McKinsey Action Title)
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

// Action Title
slide.addText("LLM-Wiki 通过将碎片化信息编译为持续维护的结构化知识网络，解决了传统 RAG 无法积累知识的根本缺陷", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// 3-column summary
const summaries = [
  { head: "问题", body: "传统 RAG 每次查询都从零开始检索拼接，知识无法积累，问答即消失，维护成本随规模指数增长。" },
  { head: "方案", body: "LLM 持续编译维护一个 markdown 知识库：摄入时即完成交叉引用与矛盾标注，查询时直接复用预制结构。" },
  { head: "成果", body: "在 3GPP SA2 #174 6G 算力课题中，3 天内完成 40+ 来源、80+ 概念、30+ 实体的全量知识网络构建。" }
];

summaries.forEach((s, i) => {
  const x = 0.5 + i * 3.15;
  slide.addText(s.head, {
    x, y: 1.45, w: 2.9, h: 0.35,
    fontSize: 14, fontFace: "Arial", color: C_RED, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.85, w: 2.9, h: 0.015,
    fill: { color: C_LTGRAY }
  });
  slide.addText(s.body, {
    x, y: 2.0, w: 2.9, h: 2.5,
    fontSize: 12, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
});

// Supporting bullets
slide.addText("核心支撑", {
  x: 0.5, y: 4.0, w: 9, h: 0.3,
  fontSize: 12, fontFace: "Arial", color: C_RED, bold: true,
  align: "left", valign: "middle", margin: 0
});

const bullets = [
  { text: "三层架构", sub: "Raw Sources（只读事实层）→ Wiki（LLM 编译输出层）→ Schema（ANTIGRAVITY.md 配置层）" },
  { text: "三大操作", sub: "Ingest（摄入编译）/ Query（查询综合）/ Lint（健康检查）" },
  { text: "双向链接", sub: "每页强制关联连接，Obsidian Graph View 可视化知识聚类与孤岛" }
];

bullets.forEach((b, i) => {
  const y = 4.35 + i * 0.45;
  slide.addText(b.text, {
    x: 0.5, y, w: 1.5, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addText(b.sub, {
    x: 2.1, y, w: 7.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
});

addFooter(slide, 2, "参考：Karpathy LLM-Wiki 理念 (https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)");

// ==========================================
// Slide 3: Three-Layer Architecture
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("LLM-Wiki 采用 Raw→Wiki→Schema 三层架构，将事实来源、知识编译与行为规范严格分离", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// Layer blocks
const archLayers = [
  { title: "Schema 配置层", subtitle: "ANTIGRAVITY.md", desc: "定义语言协议、读写权限、页面格式、工作流指令。是 LLM 成为 disciplined wiki maintainer 的配置文件。", y: 1.45, bg: C_BGGRAY },
  { title: "Wiki 编译层", subtitle: "Markdown 知识网络", desc: "LLM 生成的结构化知识：概念、实体、来源摘要、综合报告。Obsidian 是 IDE，LLM 是程序员。", y: 2.85, bg: C_WHITE },
  { title: "Raw 事实层", subtitle: "原始素材（只读）", desc: "网页剪藏、论文、会议记录。LLM 只读，是事实的唯一真相来源。ingest 后自动归档至 09-archive。", y: 4.25, bg: C_BGGRAY }
];

archLayers.forEach((layer) => {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: layer.y, w: 9, h: 1.2,
    fill: { color: layer.bg },
    line: { color: C_LTGRAY, width: 1 }
  });
  // Red left accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: layer.y, w: 0.06, h: 1.2,
    fill: { color: C_RED }
  });
  slide.addText(layer.title, {
    x: 0.7, y: layer.y + 0.12, w: 2.5, h: 0.3,
    fontSize: 14, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText(layer.subtitle, {
    x: 3.3, y: layer.y + 0.12, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial", color: C_GRAY, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText(layer.desc, {
    x: 0.7, y: layer.y + 0.5, w: 8.6, h: 0.6,
    fontSize: 12, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
});

// Arrows between layers
slide.addShape(pres.shapes.LINE, {
  x: 4.8, y: 2.65, w: 0, h: 0.2,
  line: { color: C_GRAY, width: 1.5, beginArrowType: "triangle" }
});
slide.addShape(pres.shapes.LINE, {
  x: 4.8, y: 4.05, w: 0, h: 0.2,
  line: { color: C_GRAY, width: 1.5, beginArrowType: "triangle" }
});

addFooter(slide, 3);

// ==========================================
// Slide 4: Ingest-Query-Lint Operations
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("Ingest、Query、Lint 三大操作形成闭环，覆盖知识从输入到输出再到维护的完整生命周期", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

const ops = [
  {
    title: "Ingest 摄入编译",
    steps: ["读取 raw 文件", "提取核心观点", "写入来源摘要", "更新概念/实体页", "更新 index + log", "归档源文件"],
    note: "单份源文件可触发 10-15 个 wiki 页面同时更新"
  },
  {
    title: "Query 查询综合",
    steps: ["读取 index 定位页面", "深度阅读相关内容", "综合回答（带 [[wikilink]] 引用）", "有价值分析写回 wiki"],
    note: "对比、综述、新发现作为新页面沉淀，实现知识复利"
  },
  {
    title: "Lint 健康检查",
    steps: ["扫描死链与孤儿页面", "发现概念冲突", "标注缺失页面", "建议新问题与来源"],
    note: "主动维持 wiki 一致性，而非被动等待查询时发现问题"
  }
];

ops.forEach((op, i) => {
  const x = 0.5 + i * 3.15;
  const y = 1.45;

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 2.95, h: 0.5,
    fill: { color: C_RED }
  });
  slide.addText(op.title, {
    x, y: y + 0.08, w: 2.95, h: 0.35,
    fontSize: 13, fontFace: "Arial", color: C_WHITE, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Steps
  op.steps.forEach((step, j) => {
    const sy = y + 0.6 + j * 0.55;
    slide.addText(String(j + 1) + ".", {
      x: x + 0.1, y: sy, w: 0.35, h: 0.45,
      fontSize: 11, fontFace: "Arial", color: C_RED, bold: true,
      align: "left", valign: "top", margin: 0
    });
    slide.addText(step, {
      x: x + 0.4, y: sy, w: 2.4, h: 0.45,
      fontSize: 11, fontFace: "Arial", color: C_DKGRAY,
      align: "left", valign: "top", margin: 0
    });
  });

  // Note box
  const ny = y + 0.6 + op.steps.length * 0.55 + 0.15;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.05, y: ny, w: 2.85, h: 0.8,
    fill: { color: C_BGGRAY },
    line: { color: C_LTGRAY, width: 1 }
  });
  slide.addText(op.note, {
    x: x + 0.15, y: ny + 0.08, w: 2.65, h: 0.65,
    fontSize: 10, fontFace: "Arial", color: C_GRAY, italic: true,
    align: "left", valign: "top", margin: 0
  });
});

addFooter(slide, 4);

// ==========================================
// Slide 5: Case Study - 3GPP Context
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("3GPP SA2 #174 6G 算力架构课题具备高复杂度与多厂商分歧特征，是验证 LLM-Wiki 方法的理想场景", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// Left: key facts
slide.addText("课题特征", {
  x: 0.5, y: 1.45, w: 4, h: 0.3,
  fontSize: 13, fontFace: "Arial", color: C_RED, bold: true,
  align: "left", valign: "middle", margin: 0
});

const caseFacts = [
  "研究对象：6G KI#22 (Computing Support) 全部技术文稿",
  "文稿规模：40+ 份技术文稿，来自 20+ 厂商",
  "技术跨度：架构要求、通算协同、授权机制、能力开放、监控管理 5 大组别",
  "方案变体：Variant A~I 共 9 种通算协同架构变体",
  "核心挑战：术语不统一、厂商立场分歧、版本持续演进"
];

caseFacts.forEach((f, i) => {
  const y = 1.85 + i * 0.42;
  slide.addText("—", {
    x: 0.5, y, w: 0.3, h: 0.35,
    fontSize: 11, fontFace: "Arial", color: C_RED, bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addText(f, {
    x: 0.75, y, w: 3.7, h: 0.35,
    fontSize: 11, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
});

// Right: vendor grid
slide.addText("主要参与厂商", {
  x: 5.0, y: 1.45, w: 4.5, h: 0.3,
  fontSize: 13, fontFace: "Arial", color: C_RED, bold: true,
  align: "left", valign: "middle", margin: 0
});

const vendors = [
  ["Nokia", "Samsung", "Apple", "OPPO"],
  ["Intel", "MediaTek", "CATT (大唐)", "LGE"],
  ["LGUplus", "ETRI", "NTT DOCOMO", "Xiaomi"],
  ["Lenovo", "NEC", "Ericsson", "Rakuten"]
];

vendors.forEach((row, ri) => {
  row.forEach((v, ci) => {
    const x = 5.0 + ci * 1.15;
    const y = 1.85 + ri * 0.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 1.05, h: 0.45,
      fill: { color: C_BGGRAY },
      line: { color: C_LTGRAY, width: 1 }
    });
    slide.addText(v, {
      x, y: y + 0.05, w: 1.05, h: 0.35,
      fontSize: 9, fontFace: "Arial", color: C_DKGRAY,
      align: "center", valign: "middle", margin: 0
    });
  });
});

// Bottom insight
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.5, w: 9, h: 0.7,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.5, w: 0.06, h: 0.7,
  fill: { color: C_RED }
});
slide.addText("关键洞察：传统 RAG 难以处理多厂商立场冲突与版本演进，而 LLM-Wiki 通过「知识冲突」区块将分歧显性化并持续追踪。", {
  x: 0.7, y: 4.55, w: 8.6, h: 0.6,
  fontSize: 12, fontFace: "Arial", color: C_DKGRAY, bold: true,
  align: "left", valign: "middle", margin: 0
});

addFooter(slide, 5, "数据来源：3GPP SA2 #174 会议文稿 (S2-2601857 ~ S2-2603513)");

// ==========================================
// Slide 6: Directory Structure
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("项目采用 raw/wiki/assets/schema 四级目录结构，严格区分只读事实层与 LLM 编译输出层", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// Code block
const treeText = `3gpp_sa2_174_computing/
├── raw/                          ← 原始文稿（只读事实层）
│   ├── 01-articles/              ← 网页剪藏、技术文章
│   ├── 02-papers/                ← 论文、深度研报
│   ├── 03-transcripts/           ← 会议记录、转录文本
│   └── 09-archive/               ← ingest 后自动归档
│
├── wiki/                         ← LLM 编译输出层
│   ├── index.md                  ← 全局内容字典（按分类索引）
│   ├── log.md                    ← 操作流水线（时间线日志）
│   ├── concepts/                 ← 80+ 概念页（架构、指标、机制）
│   ├── entities/                 ← 30+ 实体页（厂商、网元、功能）
│   ├── sources/                  ← 40+ 来源摘要（一对一提炼）
│   └── syntheses/                ← 综合研究报告
│
├── assets/                       ← 图片、PDF、附件
└── ANTIGRAVITY.md                ← Schema 配置文件（语言、权限、格式）`;

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.45, w: 5.8, h: 3.7,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addText(treeText, {
  x: 0.7, y: 1.55, w: 5.4, h: 3.5,
  fontSize: 10, fontFace: "Consolas", color: C_DKGRAY,
  align: "left", valign: "top", margin: 0
});

// Right: key principles
slide.addText("设计原则", {
  x: 6.6, y: 1.45, w: 2.9, h: 0.3,
  fontSize: 13, fontFace: "Arial", color: C_RED, bold: true,
  align: "left", valign: "middle", margin: 0
});

const principles = [
  { title: "raw/ 不可变", desc: "保证事实来源的唯一真相。LLM 绝不修改 raw 目录下任何文件。" },
  { title: "wiki/ 完全由 LLM 维护", desc: "人类只读，LLM 负责写入、更新、链接与一致性检查。" },
  { title: "index + log 双索引", desc: "内容索引（按分类）+ 时间线日志（按操作），支撑检索与审计。" },
  { title: "09-archive 自动归档", desc: "ingest 成功后源文件自动移入归档区，避免重复处理。" }
];

principles.forEach((p, i) => {
  const y = 1.85 + i * 0.82;
  slide.addText(p.title, {
    x: 6.6, y, w: 2.9, h: 0.25,
    fontSize: 11, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText(p.desc, {
    x: 6.6, y: y + 0.25, w: 2.9, h: 0.5,
    fontSize: 10, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
  if (i < principles.length - 1) {
    slide.addShape(pres.shapes.LINE, {
      x: 6.6, y: y + 0.75, w: 2.9, h: 0,
      line: { color: C_LTGRAY, width: 0.5 }
    });
  }
});

addFooter(slide, 6);

// ==========================================
// Slide 7: Ingest Workflow Detail
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("Ingest 工作流将单份源文件拆解为 7 步闭环，单次操作可触发 10-15 个 wiki 页面联动更新", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// Process flow
const flowSteps = [
  { num: "1", title: "读取 raw", desc: "解析 S2-2603513 牵头人报告" },
  { num: "2", title: "提取摘要", desc: "写入 sources/摘要-s2-2603513" },
  { num: "3", title: "更新实体", desc: "新增 OPPO, Intel 等实体页" },
  { num: "4", title: "更新概念", desc: "更新 6G-Computing-Architecture 全景页" },
  { num: "5", title: "标注冲突", desc: "记录站点位置 CN vs SHE/DN 争议" },
  { num: "6", title: "更新索引", desc: "index.md + log.md 同步更新" },
  { num: "7", title: "归档", desc: "源文件移至 09-archive" }
];

flowSteps.forEach((step, i) => {
  const x = 0.5 + i * 1.32;
  const y = 1.45;

  // Box
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 1.15, h: 1.0,
    fill: { color: C_WHITE },
    line: { color: C_LTGRAY, width: 1 }
  });
  // Red top accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 1.15, h: 0.06,
    fill: { color: C_RED }
  });
  // Number
  slide.addText(step.num, {
    x, y: y + 0.15, w: 1.15, h: 0.3,
    fontSize: 18, fontFace: "Arial", color: C_RED, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  // Title
  slide.addText(step.title, {
    x, y: y + 0.48, w: 1.15, h: 0.2,
    fontSize: 10, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  // Desc
  slide.addText(step.desc, {
    x, y: y + 0.7, w: 1.15, h: 0.3,
    fontSize: 8, fontFace: "Arial", color: C_GRAY,
    align: "center", valign: "top", margin: 0
  });

  // Arrow
  if (i < flowSteps.length - 1) {
    slide.addShape(pres.shapes.LINE, {
      x: x + 1.15, y: y + 0.5, w: 0.17, h: 0,
      line: { color: C_GRAY, width: 1.5, endArrowType: "triangle" }
    });
  }
});

// Impact table
slide.addText("单次 Ingest 的真实影响（以 S2-2603513 Penholder 报告为例）", {
  x: 0.5, y: 2.7, w: 9, h: 0.3,
  fontSize: 13, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "middle", margin: 0
});

const impactData = [
  ["页面类型", "数量", "具体内容"],
  ["来源摘要", "1 页", "S2-2603513 牵头人报告核心观点提炼"],
  ["实体页", "3 页", "OPPO, Intel（牵头厂商）；牵头人角色定义"],
  ["概念页更新", "1 页", "6G-Computing-Architecture（5 大方案组 + 29 项遗留分歧）"],
  ["冲突记录", "1 处", "Computing-Site 位置争议（CN vs SHE/DN）"],
  ["索引更新", "4 条", "index.md 新增/更新条目"],
  ["日志记录", "1 条", "log.md 追加操作记录"]
];

slide.addTable(impactData, {
  x: 0.5, y: 3.1, w: 9, h: 2.0,
  fontFace: "Arial",
  fontSize: 10,
  color: C_DKGRAY,
  border: { pt: 0.5, color: C_LTGRAY },
  colW: [1.5, 1.0, 6.5],
  fill: { color: C_WHITE }
});

// Style header row
impactData[0].forEach((_, ci) => {
  // Note: pptxgenjs table styling is limited; we use the default and accept it
});

addFooter(slide, 7, "示例来源：S2-2603513 Solution for 6G KI#22 pen holder paper");

// ==========================================
// Slide 8: Knowledge Network
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("index.md 与双向链接构成知识网络的基础设施，使 Obsidian Graph View 能够可视化知识聚类与孤岛", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// Two-column code
const indexCode = `## Sources
- [[摘要-s2-2603513]] — 牵头人报告
- [[摘要-s2-2601968]] — 联想 NAS 方案
- [[摘要-s2-2602102]] — 大唐分布式计算

## Entities
- [[CCF]] — 算力控制功能
- [[CCCE]] — 跨域协调网元
- [[CMF]] — 算力管理功能

## Concepts
- [[CCC]] — 算力等级
- [[CCCP]] — 算力等级剖面
- [[6G-Computing-Architecture]]
- [[Computing-Site]]`;

const linkCode = `## 综述
6G 算力架构在 3GPP SA2 #174
通过牵头人报告整合...

## 方案分类
- Variant A/C/D/E/F/H
  （核心网控制型）
- Variant B
  （SHE Controller 协作型）
- Variant G
  （AF 主导型）

## 关联连接
- [[摘要-s2-2603513]] — 来源
- [[6G-Computing-Service]] — 业务
- [[Computing-Site]] — 物理载体
- [[CCCE]] — 核心网元`;

// Left: index.md
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.45, w: 4.2, h: 3.6,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.45, w: 4.2, h: 0.35,
  fill: { color: C_RED }
});
slide.addText("index.md — 全局内容字典", {
  x: 0.5, y: 1.45, w: 4.2, h: 0.35,
  fontSize: 12, fontFace: "Arial", color: C_WHITE, bold: true,
  align: "center", valign: "middle", margin: 0
});
slide.addText(indexCode, {
  x: 0.7, y: 1.9, w: 3.8, h: 3.0,
  fontSize: 10, fontFace: "Consolas", color: C_DKGRAY,
  align: "left", valign: "top", margin: 0
});

// Right: concept page
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.45, w: 4.2, h: 3.6,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.45, w: 4.2, h: 0.35,
  fill: { color: C_DKGRAY }
});
slide.addText("概念页 — 双向链接示例", {
  x: 5.3, y: 1.45, w: 4.2, h: 0.35,
  fontSize: 12, fontFace: "Arial", color: C_WHITE, bold: true,
  align: "center", valign: "middle", margin: 0
});
slide.addText(linkCode, {
  x: 5.5, y: 1.9, w: 3.8, h: 3.0,
  fontSize: 10, fontFace: "Consolas", color: C_DKGRAY,
  align: "left", valign: "top", margin: 0
});

// Bottom insight
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.35, w: 9, h: 0.65,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.35, w: 0.06, h: 0.65,
  fill: { color: C_RED }
});
slide.addText("Schema 强制要求：每页必须包含「关联连接」区块。无入链页面被标记为孤儿页，由 Lint 定期修复。", {
  x: 0.7, y: 4.4, w: 8.6, h: 0.55,
  fontSize: 11, fontFace: "Arial", color: C_DKGRAY, bold: true,
  align: "left", valign: "middle", margin: 0
});

addFooter(slide, 8);

// ==========================================
// Slide 9: Conflict Tracking
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("当新摄入知识与旧知识冲突时，Schema 禁止静默覆盖，必须新建「知识冲突」区块保留双方说法", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// Left: log timeline
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.45, w: 4.2, h: 3.6,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.45, w: 4.2, h: 0.35,
  fill: { color: C_DKGRAY }
});
slide.addText("log.md — 操作时间线", {
  x: 0.5, y: 1.45, w: 4.2, h: 0.35,
  fontSize: 12, fontFace: "Arial", color: C_WHITE, bold: true,
  align: "center", valign: "middle", margin: 0
});

const logCode = `## [2026-04-19] ingest
摄入 18 份 6G 计算架构文档
- 变更: 大规模更新
- 冲突: 无

## [2026-04-20] ingest
摄入大唐分布式计算方案
- 变更: 新增 CATT, 6G-UDR
- 冲突: 无

## [2026-04-20] ingest
算力中心化方案整合
- 变更: 新增 OPPO, Intel
- 冲突: 站点位置争议
  (CN vs SHE/DN)`;

slide.addText(logCode, {
  x: 0.7, y: 1.9, w: 3.8, h: 3.0,
  fontSize: 10, fontFace: "Consolas", color: C_DKGRAY,
  align: "left", valign: "top", margin: 0
});

// Right: conflict block
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.45, w: 4.2, h: 3.6,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.45, w: 4.2, h: 0.35,
  fill: { color: C_RED }
});
slide.addText("知识冲突区块 — 概念页内嵌", {
  x: 5.3, y: 1.45, w: 4.2, h: 0.35,
  fontSize: 12, fontFace: "Arial", color: C_WHITE, bold: true,
  align: "center", valign: "middle", margin: 0
});

const conflictCode = `## 知识冲突

### 算力站点位置争议
- SA1 / Nokia / 多数厂商:
  算力站点应部署在核心网
  内部 (CN) 或运营商托管
  环境 (SHE) 中。

- 部分厂商 / 边缘方案:
  算力站点可位于外部数据
  网络 (DN)，通过 NEF 感知。

现状: 29 项 EN 之一，
待 SA2 后续会议收敛。`;

slide.addText(conflictCode, {
  x: 5.5, y: 1.9, w: 3.8, h: 3.0,
  fontSize: 10, fontFace: "Consolas", color: C_DKGRAY,
  align: "left", valign: "top", margin: 0
});

// Bottom insight
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.35, w: 9, h: 0.65,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.35, w: 0.06, h: 0.65,
  fill: { color: C_RED }
});
slide.addText("关键规则：冲突不是 bug，而是 feature。将分歧显性化并持续追踪，避免后续查询时反复发现同一矛盾。", {
  x: 0.7, y: 4.4, w: 8.6, h: 0.55,
  fontSize: 11, fontFace: "Arial", color: C_DKGRAY, bold: true,
  align: "left", valign: "middle", margin: 0
});

addFooter(slide, 9, "冲突来源：S2-2603513 Penholder 报告及多厂商立场文稿");

// ==========================================
// Slide 10: Results Dashboard
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("3GPP SA2 #174 知识库在 3 天内完成全量构建，形成可检索、可审计、可复用的结构化知识资产", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

// 2x3 stat grid
const stats = [
  { num: "40+", label: "来源摘要", desc: "覆盖全部 KI#22 技术文稿" },
  { num: "80+", label: "概念页面", desc: "从架构到指标的全景覆盖" },
  { num: "30+", label: "实体页面", desc: "厂商、网元、功能实体" },
  { num: "5", label: "方案组别", desc: "基础定义到监控管理" },
  { num: "29", label: "遗留分歧", desc: "已标注并追踪的 EN" },
  { num: "4", label: "操作日志", desc: "3 天内完成全量构建" }
];

stats.forEach((s, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 0.5 + col * 3.15;
  const y = 1.45 + row * 1.7;

  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 2.95, h: 1.5,
    fill: { color: C_WHITE },
    line: { color: C_LTGRAY, width: 1 }
  });
  // Red top accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 2.95, h: 0.06,
    fill: { color: C_RED }
  });

  slide.addText(s.num, {
    x, y: y + 0.2, w: 2.95, h: 0.6,
    fontSize: 42, fontFace: "Arial", color: C_RED, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText(s.label, {
    x, y: y + 0.82, w: 2.95, h: 0.25,
    fontSize: 14, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText(s.desc, {
    x, y: y + 1.08, w: 2.95, h: 0.35,
    fontSize: 10, fontFace: "Arial", color: C_GRAY,
    align: "center", valign: "middle", margin: 0
  });
});

addFooter(slide, 10, "数据统计截至 2026-04-20");

// ==========================================
// Slide 11: Why It Works
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

slide.addText("LLM-Wiki 的核心价值在于将知识维护的边际成本降至接近零，使人类专注于策展与提问", {
  x: 0.5, y: 0.35, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.02,
  fill: { color: C_RED }
});

const values = [
  {
    title: "知识复利",
    desc: "每次 ingest 和 query 都在增强 wiki，而非消耗后即弃。新来源与旧知识自动关联，查询时直接复用预制结构。",
    metric: "10-15 页/次"
  },
  {
    title: "矛盾显性化",
    desc: "厂商分歧、术语冲突被主动记录于「知识冲突」区块。后续查询无需重新发现同一矛盾。",
    metric: "29 处 EN"
  },
  {
    title: "审计可追溯",
    desc: "log.md 提供完整的操作时间线。任何更新都可追溯到原始文稿、操作日期与变更范围。",
    metric: "100% 可追溯"
  },
  {
    title: "人机分工明确",
    desc: "人类做策展（选择来源、提出方向、判断价值），LLM 做维护（交叉引用、更新、一致性检查）。",
    metric: "零维护成本"
  }
];

values.forEach((v, i) => {
  const x = 0.5 + (i % 2) * 4.8;
  const y = 1.45 + Math.floor(i / 2) * 1.9;

  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 4.5, h: 1.7,
    fill: { color: C_WHITE },
    line: { color: C_LTGRAY, width: 1 }
  });
  // Red left accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.06, h: 1.7,
    fill: { color: C_RED }
  });

  slide.addText(v.title, {
    x: x + 0.2, y: y + 0.12, w: 3.0, h: 0.3,
    fontSize: 16, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText(v.metric, {
    x: x + 3.3, y: y + 0.12, w: 1.0, h: 0.3,
    fontSize: 11, fontFace: "Arial", color: C_RED, bold: true,
    align: "right", valign: "middle", margin: 0
  });
  slide.addText(v.desc, {
    x: x + 0.2, y: y + 0.5, w: 4.1, h: 1.1,
    fontSize: 11, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
});

addFooter(slide, 11);

// ==========================================
// Slide 12: Next Steps
// ==========================================
slide = pres.addSlide();
slide.background = { color: C_WHITE };

// Top red bar
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.15,
  fill: { color: C_RED }
});

slide.addText("下一步：将 LLM-Wiki 方法推广至更多研究课题，并引入本地搜索引擎应对规模增长", {
  x: 0.5, y: 0.5, w: 9, h: 0.9,
  fontSize: 20, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "left", valign: "top", margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.35, w: 9, h: 0.02,
  fill: { color: C_RED }
});

const nextSteps = [
  { title: "横向推广", desc: "将 LLM-Wiki 方法应用于其他 3GPP 课题（如 SA1 需求、RAN 架构）及垂直行业研究。" },
  { title: "搜索增强", desc: "引入 qmd 本地搜索引擎（BM25 + 向量搜索），在 wiki 规模超过数百页时替代纯 index 检索。" },
  { title: "协作机制", desc: "探索多人协作模式：人类审阅 LLM 更新、版本分支、合并冲突解决。" },
  { title: "自动化", desc: "将 Ingest / Query / Lint 封装为 Obsidian 插件或 CLI 工具，降低使用门槛。" }
];

nextSteps.forEach((ns, i) => {
  const y = 1.6 + i * 0.85;
  slide.addText(String(i + 1), {
    x: 0.5, y, w: 0.4, h: 0.35,
    fontSize: 14, fontFace: "Arial", color: C_RED, bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addText(ns.title, {
    x: 1.0, y, w: 2.0, h: 0.35,
    fontSize: 14, fontFace: "Arial", color: C_BLACK, bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addText(ns.desc, {
    x: 3.1, y, w: 6.4, h: 0.35,
    fontSize: 12, fontFace: "Arial", color: C_DKGRAY,
    align: "left", valign: "top", margin: 0
  });
  if (i < nextSteps.length - 1) {
    slide.addShape(pres.shapes.LINE, {
      x: 1.0, y: y + 0.45, w: 8.5, h: 0,
      line: { color: C_LTGRAY, width: 0.5 }
    });
  }
});

// Bottom thank you
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.5, w: 9, h: 0.7,
  fill: { color: C_BGGRAY },
  line: { color: C_LTGRAY, width: 1 }
});
slide.addText("谢谢 | 欢迎讨论", {
  x: 0.5, y: 4.5, w: 9, h: 0.7,
  fontSize: 18, fontFace: "Arial", color: C_BLACK, bold: true,
  align: "center", valign: "middle", margin: 0
});

// Bottom red bar
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 5.475, w: 10, h: 0.15,
  fill: { color: C_RED }
});

addFooter(slide, 12);

// ==========================================
// Write file
// ==========================================
pres.writeFile({ fileName: "LLM-Wiki-内部汇报.pptx" })
  .then(() => console.log("PPT generated: LLM-Wiki-内部汇报.pptx"))
  .catch(err => console.error(err));
