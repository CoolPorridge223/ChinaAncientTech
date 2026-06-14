const timelineData = [
  {
    id: "oracle-sky",
    year: -1300,
    yearLabel: "约前13世纪",
    era: "上古先秦",
    dynasty: "商代",
    title: "甲骨天象记录",
    people: "商代贞人",
    category: "天文历法",
    cold: false,
    tags: ["日食", "月食", "星象", "连续观测"],
    summary: "殷墟甲骨中有日食、月食、彗星和新星等记录，是中国早期天象档案的重要源头。",
    principle: "把异常天象记录为可追踪事件，形成以日期、征兆、占验为核心的早期观测档案。虽然带有占卜用途，但连续记录本身为后来历法校验提供了材料。",
    sources: "甲骨卜辞、殷墟出土天象记录研究。",
    value: "说明中国天文并非只靠传说，而是从可复查的观测记录开始积累。",
    algorithmPoint: "记录、比对、复验，是历法算法产生前的资料基础。",
    steps: ["确定干支日期", "记录天象类型和方位", "与后续天象反复比对", "服务历法修正和国家仪式安排"]
  },
  {
    id: "gnomon",
    year: -1050,
    yearLabel: "约前11世纪",
    era: "上古先秦",
    dynasty: "西周至战国",
    title: "土圭测影与日影历法",
    people: "周代天官",
    category: "天文历法",
    cold: false,
    tags: ["圭表", "节气", "太阳高度", "测影"],
    summary: "用直立表杆测量日影长短，判断冬至、夏至和节令变化。",
    principle: "太阳高度改变会导致正午影长变化。长期测量同一地点的影长，就能找到一年中影子最长和最短的节点。",
    sources: "《周礼》《周髀算经》相关测影传统。",
    value: "把农业时令、都城规划和天文观测连接起来，是历法制度化的工具基础。",
    algorithmPoint: "用固定仪器采样，再从极值判断季节节点，具有明确的测量模型。",
    steps: ["固定表杆高度", "每天测正午影长", "寻找一年影长极值", "用极值推定节令和回归年"]
  },
  {
    id: "mozi-optics",
    year: -350,
    yearLabel: "约前4世纪",
    era: "上古先秦",
    dynasty: "战国",
    title: "《墨经》光学与力学条目",
    people: "墨家学派",
    category: "物理仪器",
    cold: true,
    tags: ["小孔成像", "光直线传播", "杠杆", "几何解释"],
    summary: "《墨经》讨论影、光、小孔成像、力和杠杆等问题，是先秦物理思想中很容易被忽视的一支。",
    principle: "小孔成像可由光线近似直线传播解释：物体上部的光线穿过小孔后落到下方，物体下部的光线穿过小孔后落到上方，因此像会倒置。",
    sources: "《墨子·经说下》及墨家光学研究。",
    value: "它把视觉现象拆成几何路径，不只是经验描述，已经具有模型化解释。",
    algorithmPoint: "把自然现象转写成几何关系，是物理建模的早期形态。",
    steps: ["设定光线从物体各点出发", "令光线穿过同一个小孔", "比较上下光线落点", "推出倒像现象"]
  },
  {
    id: "counting-rods",
    year: -250,
    yearLabel: "约前3世纪",
    era: "上古先秦",
    dynasty: "战国至秦汉",
    title: "算筹与十进位值制",
    people: "古代算家",
    category: "算学工具",
    cold: false,
    tags: ["算筹", "位值制", "负数", "筹算"],
    summary: "以横竖算筹表示数字，用位置表示个位、十位、百位等，是中国传统计算的底层工具。",
    principle: "同一组数字符号在不同位置表示不同数量级，空位可由空格表达。正负数也能借助不同颜色或摆法区分。",
    sources: "出土算筹、《九章算术》《孙子算经》所反映的筹算传统。",
    value: "位值制让复杂乘除、开方、方程消元成为可操作流程。",
    algorithmPoint: "算筹不是简单计数器，而是支持列式、迭代、消元的计算媒介。",
    steps: ["用算筹表示0到9", "按位摆放数量级", "移动或重排算筹完成运算", "用颜色或方向标记正负"]
  },
  {
    id: "zhoubi",
    year: -100,
    yearLabel: "约前1世纪",
    era: "秦汉",
    dynasty: "西汉",
    title: "《周髀算经》勾股与盖天测算",
    people: "佚名算家",
    category: "数学方法",
    cold: false,
    tags: ["勾股定理", "天文测量", "相似三角形"],
    summary: "《周髀算经》保存了勾股关系、测高测远和天文推算的材料。",
    principle: "通过直角三角形边长关系和相似比例，把不可直接测量的高度、距离转化为可计算的长度。",
    sources: "《周髀算经》。",
    value: "把几何关系用于天文和地理测量，体现数学服务观测的能力。",
    algorithmPoint: "核心不是背公式，而是把未知量放进比例关系中求解。",
    steps: ["建立直角三角形", "测得可及边长", "用勾股或相似比例列式", "反推高度或距离"]
  },
  {
    id: "nine-chapters",
    year: 50,
    yearLabel: "约1世纪",
    era: "秦汉",
    dynasty: "东汉",
    title: "《九章算术》成书",
    people: "佚名算家整理",
    category: "数学方法",
    cold: false,
    tags: ["方程术", "分数", "面积体积", "负数"],
    summary: "《九章算术》系统整理田亩、粟米、工程、税役、方程等246个问题。",
    principle: "它以问题类型组织算法，给出可重复执行的术。方程章使用类似矩阵消元的筹算方法，并处理正负数。",
    sources: "《九章算术》。",
    value: "奠定中国古代数学的算法传统，后世刘徽、李淳风等注释不断发展。",
    algorithmPoint: "按题型给出通用计算步骤，是非常典型的算法书写方式。",
    steps: ["抽象出同类问题", "把条件转为数量关系", "按固定术式计算", "用答案回代检验"]
  },
  {
    id: "zhangheng",
    year: 132,
    yearLabel: "132年",
    era: "秦汉",
    dynasty: "东汉",
    title: "张衡候风地动仪",
    people: "张衡",
    category: "物理仪器",
    cold: false,
    tags: ["地动仪", "机械触发", "方向识别"],
    summary: "张衡制造候风地动仪，用机械结构感知远方地震方向，成为古代仪器史上的代表性发明。",
    principle: "仪器内部可能利用惯性触发机构：地面震动时，内部构件相对外壳发生位移，触发某一方向的机关。",
    sources: "《后汉书·张衡传》及现代复原研究。",
    value: "体现古代对地震方向识别和机械信号转换的探索。",
    algorithmPoint: "把连续震动转化成离散方向输出，具有传感器和判别逻辑的雏形。",
    steps: ["接收地面震动", "内部惯性部件产生相对运动", "触发对应方向机构", "输出地震方位信号"]
  },
  {
    id: "liuhui",
    year: 263,
    yearLabel: "263年",
    era: "魏晋南北朝",
    dynasty: "曹魏",
    title: "刘徽注《九章》与割圆术",
    people: "刘徽",
    category: "数学方法",
    cold: false,
    tags: ["割圆术", "极限思想", "出入相补", "圆周率"],
    summary: "刘徽为《九章算术》作注，用割圆术逼近圆面积和圆周率，并强调证明思路。",
    principle: "从圆内接正多边形开始，不断倍增边数。多边形越接近圆，周长和面积越接近圆的真实值。",
    sources: "刘徽《九章算术注》。",
    value: "将计算、证明和逼近思想结合，推进了中国数学的理论化表达。",
    algorithmPoint: "这是迭代逼近算法：重复细分，误差逐步缩小。",
    steps: ["构造圆内接正多边形", "计算边长和面积", "倍增边数", "用新结果逼近圆周率"]
  },
  {
    id: "zuchongzhi-pi",
    year: 465,
    yearLabel: "5世纪后期",
    era: "魏晋南北朝",
    dynasty: "南朝宋齐",
    title: "祖冲之圆周率与密率",
    people: "祖冲之",
    category: "数学方法",
    cold: false,
    tags: ["圆周率", "密率", "355/113", "大明历"],
    summary: "祖冲之将圆周率推算到3.1415926与3.1415927之间，并提出密率355/113。",
    principle: "在前人割圆算法基础上进一步提高精度，用分数近似表达圆周率，便于工程和历法计算使用。",
    sources: "《隋书·律历志》关于祖冲之数学与历法的记载。",
    value: "密率在世界数学史上长期保持高精度，显示精密计算能力。",
    algorithmPoint: "高精度近似不是偶然猜测，而是算法迭代和数值表达的结果。",
    steps: ["继承割圆逼近", "提高多边形边数", "估算圆周率上下界", "选取便于计算的分数近似"]
  },
  {
    id: "zuheng",
    year: 500,
    yearLabel: "约5至6世纪",
    era: "魏晋南北朝",
    dynasty: "南朝",
    title: "祖暅原理",
    people: "祖暅",
    category: "数学方法",
    cold: true,
    tags: ["体积", "截面积", " Cavalieri原理", "几何证明"],
    summary: "祖暅提出“幂势既同，则积不容异”，用截面积相等推出体积相等。",
    principle: "如果两个立体在同一高度的截面积总是相同，那么它们总体积也相同。这可用于证明球体积等问题。",
    sources: "《缀术》佚文传统及后世数学史研究。",
    value: "它与后来欧洲Cavalieri原理有相似思想，是冷门但极具理论价值的几何成果。",
    algorithmPoint: "把立体问题转化为一层层截面积的比较，是降维建模。",
    steps: ["把立体按高度切成薄层", "比较同高度截面积", "确认每层面积相等", "推出整体体积相等"]
  },
  {
    id: "jigu",
    year: 626,
    yearLabel: "7世纪初",
    era: "隋唐",
    dynasty: "唐代",
    title: "王孝通《缉古算经》",
    people: "王孝通",
    category: "数学方法",
    cold: true,
    tags: ["三次方程", "工程计算", "几何代数"],
    summary: "《缉古算经》处理土木工程和几何问题，出现较复杂的三次方程求解。",
    principle: "把堤坝、沟渠、仓窖等实际形体转化为方程，再通过开方和试商逼近求出未知量。",
    sources: "王孝通《缉古算经》。",
    value: "说明古代工程计算已能处理高次未知量，不只是简单加减乘除。",
    algorithmPoint: "用方程表示工程约束，是把现实问题形式化。",
    steps: ["抽象工程形体", "设未知边长或深度", "列出体积关系", "用开方试商求解"]
  },
  {
    id: "yixing",
    year: 724,
    yearLabel: "724年前后",
    era: "隋唐",
    dynasty: "唐代",
    title: "一行子午线测量",
    people: "僧一行、南宫说",
    category: "天文历法",
    cold: false,
    tags: ["子午线", "地理纬度", "大地测量", "大衍历"],
    summary: "唐玄宗时期组织多地测影和星象观测，为修订《大衍历》提供数据。",
    principle: "在不同地点测量同一时刻日影和星象差异，比较纬度变化与地面距离，用观测数据估计地表尺度。",
    sources: "《旧唐书·天文志》《新唐书·历志》。",
    value: "把全国性观测网络用于历法改造，显示国家级科学工程能力。",
    algorithmPoint: "多点采样、差值比较、统一校正，是大型测量算法的雏形。",
    steps: ["选择南北向观测点", "同步测影和观星", "记录纬度差异", "把差异换算为历法参数"]
  },
  {
    id: "dayanli",
    year: 729,
    yearLabel: "729年",
    era: "隋唐",
    dynasty: "唐代",
    title: "《大衍历》",
    people: "僧一行",
    category: "天文历法",
    cold: false,
    tags: ["历法", "日月运动", "插值", "节气"],
    summary: "《大衍历》综合实测和计算，改进日月运行、节气和交食推算。",
    principle: "历法把太阳、月亮的周期运动转化成一套参数表和推算规则，用观测误差不断修正。",
    sources: "唐代历志与《大衍历》研究。",
    value: "代表唐代历法从经验表向计算体系的发展。",
    algorithmPoint: "历法本质上是周期模型、参数校正和预测算法。",
    steps: ["采集天象数据", "建立周期参数", "推算未来节气和朔望", "用实测误差修正模型"]
  },
  {
    id: "mengxi",
    year: 1088,
    yearLabel: "1088年前后",
    era: "宋元",
    dynasty: "北宋",
    title: "沈括《梦溪笔谈》磁偏角记录",
    people: "沈括",
    category: "物理仪器",
    cold: true,
    tags: ["磁偏角", "指南针", "地磁", "实验观察"],
    summary: "沈括记录磁针“常微偏东，不全南也”，涉及磁偏角现象。",
    principle: "磁针指向的磁南北与地理南北并不完全重合。通过反复观察针向，可发现稳定偏差。",
    sources: "沈括《梦溪笔谈》。",
    value: "这不是航海经验的简单记录，而是对仪器误差和自然场方向差异的识别。",
    algorithmPoint: "发现系统性偏差后修正仪器读数，是科学测量中的关键步骤。",
    steps: ["用磁针确定方向", "与日影或地理方位比较", "记录稳定偏差", "在导航和测量中修正"]
  },
  {
    id: "susong",
    year: 1092,
    yearLabel: "1092年",
    era: "宋元",
    dynasty: "北宋",
    title: "苏颂水运仪象台",
    people: "苏颂、韩公廉",
    category: "物理仪器",
    cold: true,
    tags: ["水运仪象台", "擒纵机构", "天文钟", "机械工程"],
    summary: "水运仪象台把浑仪、浑象、报时系统和水力机械结合，是大型天文仪器工程。",
    principle: "以水流提供稳定动力，利用齿轮、链传动和擒纵式控制，让天象演示与报时按节奏运行。",
    sources: "苏颂《新仪象法要》。",
    value: "它说明古代中国能够把天文学、机械控制和公共报时整合成复杂系统。",
    algorithmPoint: "稳定动力、离散步进、周期显示，已经接近机械自动化控制逻辑。",
    steps: ["水流驱动轮系", "擒纵控制节拍", "齿轮传动到浑象和报时机构", "按天文周期显示星象"]
  },
  {
    id: "qinjiushao",
    year: 1247,
    yearLabel: "1247年",
    era: "宋元",
    dynasty: "南宋",
    title: "秦九韶《数书九章》",
    people: "秦九韶",
    category: "数学方法",
    cold: true,
    tags: ["大衍求一术", "中国剩余定理", "正负开方术", "高次方程"],
    summary: "《数书九章》包含大衍求一术、正负开方术等方法，处理同余、测量、水利和赋税问题。",
    principle: "大衍求一术解决多个余数条件的合并问题；正负开方术用类似逐位逼近的方式求高次方程正根。",
    sources: "秦九韶《数书九章》。",
    value: "它把复杂行政、工程和天文问题转化为可执行算法，是中国算法传统的高峰之一。",
    algorithmPoint: "这类方法可直接与现代同余方程和数值求根相对应。",
    steps: ["把问题写成多个余数条件或方程", "逐步消去不合条件的数", "用试商和修正逼近根", "把计算结果还原到实际问题"]
  },
  {
    id: "liye",
    year: 1248,
    yearLabel: "1248年",
    era: "宋元",
    dynasty: "金元之际",
    title: "李冶《测圆海镜》与天元术",
    people: "李冶",
    category: "数学方法",
    cold: true,
    tags: ["天元术", "符号代数", "方程", "测圆海镜"],
    summary: "李冶用天元术设未知数，建立方程解决几何问题，推动符号代数发展。",
    principle: "把未知量称为“天元一”，再把几何条件翻译成多项式方程，最后通过开方术求解。",
    sources: "李冶《测圆海镜》。",
    value: "天元术打破“只有文字题”的印象，显示中国古代已有抽象未知量思想。",
    algorithmPoint: "设未知数、列方程、解方程，是明确的代数流程。",
    steps: ["设未知量为天元一", "把图形关系转为式子", "整理为多项式方程", "用开方术求根"]
  },
  {
    id: "yanghui",
    year: 1261,
    yearLabel: "1261年前后",
    era: "宋元",
    dynasty: "南宋",
    title: "杨辉三角与垛积术",
    people: "杨辉",
    category: "数学方法",
    cold: false,
    tags: ["杨辉三角", "二项式系数", "垛积术", "组合"],
    summary: "杨辉著作保存贾宪三角形，并发展垛积术，服务高次开方和级数求和。",
    principle: "三角形中每个数由上一行相邻两数相加得到，可生成二项式展开系数。",
    sources: "杨辉《详解九章算法》《日用算法》。",
    value: "把递推结构用于计算，显示古代数学对模式和结构的掌握。",
    algorithmPoint: "递推表是一种可机械生成的算法数据结构。",
    steps: ["第一行置1", "每行两端置1", "中间数由上一行相邻两数相加", "用于展开和开方计算"]
  },
  {
    id: "shoushi",
    year: 1281,
    yearLabel: "1281年",
    era: "宋元",
    dynasty: "元代",
    title: "郭守敬《授时历》",
    people: "郭守敬、王恂等",
    category: "天文历法",
    cold: false,
    tags: ["授时历", "回归年", "天文仪器", "历法改革"],
    summary: "《授时历》采用精密观测和新仪器，将一年长度定为365.2425日，精度很高。",
    principle: "通过简仪、仰仪等仪器获取太阳位置数据，用实测校正回归年、朔望月和节气参数。",
    sources: "《元史·历志》及郭守敬相关研究。",
    value: "体现宋元天文在仪器、观测网络和数值模型上的综合水平。",
    algorithmPoint: "它是观测数据、参数估计和预测规则共同构成的历法系统。",
    steps: ["改造观测仪器", "长期记录太阳和月亮位置", "估计关键周期参数", "生成可执行历法表"]
  },
  {
    id: "siyuan",
    year: 1303,
    yearLabel: "1303年",
    era: "宋元",
    dynasty: "元代",
    title: "朱世杰《四元玉鉴》",
    people: "朱世杰",
    category: "数学方法",
    cold: true,
    tags: ["四元术", "多元高次方程", "消元", "代数"],
    summary: "《四元玉鉴》用天、地、人、物四个未知量表示多元方程，是宋元代数的重要高峰。",
    principle: "先用多个未知量建立方程组，再通过消元将问题逐步化简，最终求出各未知量。",
    sources: "朱世杰《四元玉鉴》。",
    value: "它证明古代中国并非没有抽象代数，且能处理多元高次问题。",
    algorithmPoint: "多元设元和消元，是现代代数计算中仍然核心的思路。",
    steps: ["设置四个未知量", "依据条件列出方程组", "逐步消去未知量", "回代求出各量"]
  },
  {
    id: "suanfatongzong",
    year: 1592,
    yearLabel: "1592年",
    era: "明清",
    dynasty: "明代",
    title: "程大位《算法统宗》",
    people: "程大位",
    category: "算学工具",
    cold: false,
    tags: ["珠算", "商业计算", "口诀", "算法普及"],
    summary: "《算法统宗》推动珠算算法普及，成为明清商业和民间计算的重要读物。",
    principle: "算盘把位值制固化在档位上，通过口诀把加减乘除、开方等操作流程化。",
    sources: "程大位《算法统宗》。",
    value: "让复杂计算从少数算家手中进入商业、账房和日常生活。",
    algorithmPoint: "口诀本质是压缩后的操作程序，方便学习和复现。",
    steps: ["按位拨珠表示数字", "依口诀执行运算", "逐位进退位", "用珠面状态保存中间结果"]
  },
  {
    id: "jiyuanben",
    year: 1607,
    yearLabel: "1607年",
    era: "明清",
    dynasty: "明代",
    title: "《几何原本》汉译",
    people: "徐光启、利玛窦",
    category: "数学方法",
    cold: false,
    tags: ["几何证明", "中西会通", "公理化"],
    summary: "徐光启与利玛窦合译欧几里得《几何原本》前六卷，引入新的证明体系和术语。",
    principle: "从定义、公设和公理出发，层层推出命题，强调逻辑证明而非只给计算方法。",
    sources: "徐光启、利玛窦译《几何原本》。",
    value: "推动明末数学从算法传统与演绎证明体系相互对话。",
    algorithmPoint: "它提醒我们：古代科技史也包含知识体系之间的转换和重构。",
    steps: ["翻译基本概念", "建立定义和公设", "逐条证明命题", "影响后续数学术语和教学"]
  },
  {
    id: "tiangong",
    year: 1637,
    yearLabel: "1637年",
    era: "明清",
    dynasty: "明代",
    title: "宋应星《天工开物》中的机械工艺",
    people: "宋应星",
    category: "物理仪器",
    cold: true,
    tags: ["机械", "工艺流程", "杠杆", "水力"],
    summary: "《天工开物》记录农业、冶炼、纺织、造纸等技术流程，包含大量机械和物理原理。",
    principle: "书中常把动力来源、传动方式、材料处理和流程顺序画成可复现的工艺链。",
    sources: "宋应星《天工开物》。",
    value: "它不是理论数学书，却展示了工程知识如何被流程化、图像化、标准化。",
    algorithmPoint: "工艺流程就是操作算法：顺序、条件、工具和反馈缺一不可。",
    steps: ["识别原料和动力", "安排加工顺序", "用机械放大或转换力", "通过成品质量反馈调整"]
  },
  {
    id: "wangxichan",
    year: 1675,
    yearLabel: "17世纪后期",
    era: "明清",
    dynasty: "清初",
    title: "王锡阐《晓庵新法》",
    people: "王锡阐",
    category: "天文历法",
    cold: true,
    tags: ["民间天文学", "历算", "日月食", "模型修正"],
    summary: "王锡阐在明清之际吸收中西历算资源，独立研究日月食和行星运动。",
    principle: "通过比较不同历法模型和实际天象误差，修正推算参数，形成自己的历算方案。",
    sources: "王锡阐《晓庵新法》及清初历算研究。",
    value: "说明历算创新不只发生在官方机构，也有民间学者的模型比较和修正。",
    algorithmPoint: "多模型比较、误差校正、参数更新，是科学计算的核心方法。",
    steps: ["收集不同历法结果", "与实测天象比较", "找出误差来源", "调整参数并重新推算"]
  },
  {
    id: "shulijingyun",
    year: 1723,
    yearLabel: "1723年",
    era: "明清",
    dynasty: "清代",
    title: "《数理精蕴》编成",
    people: "梅瑴成等奉敕编纂",
    category: "数学方法",
    cold: false,
    tags: ["清代数学", "官方教材", "中西数学", "三角法"],
    summary: "《数理精蕴》汇编数学、几何、三角、测量等内容，是清代官方整理数理知识的重要成果。",
    principle: "把传统算法、西方几何和三角法纳入统一教材框架，便于制度化传播。",
    sources: "《数理精蕴》。",
    value: "显示明清以后中国数理知识在传统和新知之间继续整合。",
    algorithmPoint: "知识整理本身也是建模：分类、定义、例题和方法被组织成可教学系统。",
    steps: ["汇集多类数理知识", "统一术语和例题", "按难度分卷编排", "用于学习、测量和历算"]
  }
];

const eraOrder = ["上古先秦", "秦汉", "魏晋南北朝", "隋唐", "宋元", "明清"];
const categoryColors = {
  "数学方法": "#0f7b68",
  "天文历法": "#2857a4",
  "算学工具": "#b98524",
  "物理仪器": "#c34832"
};

const coldFacts = [
  {
    title: "透光镜",
    era: "汉代",
    summary: "青铜镜背面的纹饰会在反射光斑中隐约显出，像把铸造、研磨和光学效果藏在一面镜子里。"
  },
  {
    title: "指南车",
    era: "三国至南北朝记载较多",
    summary: "车辆转弯时，木人仍指向固定方向，体现了齿轮传动和方向补偿的机械想象。"
  },
  {
    title: "记里鼓车",
    era: "汉晋以后",
    summary: "车轮每行一定距离就触发鼓声，等于把路程换成可计数的机械信号。"
  },
  {
    title: "莲花漏",
    era: "北宋",
    summary: "燕肃改进水钟，让滴水计时更稳定，是被大型天文钟光芒盖住的计时技术。"
  },
  {
    title: "被中香炉",
    era: "汉代",
    summary: "香炉内部用类似万向支架的结构保持炉体平衡，翻动被褥时也不易洒出。"
  }
];

const timelineEl = document.querySelector("#timeline");
const searchInput = document.querySelector("#searchInput");
const resultArea = document.querySelector("#resultArea");
const insightStrip = document.querySelector(".insight-strip");
const eraJump = document.querySelector("#eraJump");
const resetFilters = document.querySelector("#resetFilters");
const featuredCold = document.querySelector("#featuredCold");
const refreshCold = document.querySelector("#refreshCold");
const modal = document.querySelector("#detailModal");
const modalBody = document.querySelector("#modalBody");
const closeModal = document.querySelector("#closeModal");

let activeFilter = "全部";
let coldIndex = 0;

function normalize(text) {
  return String(text).trim().toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function matchesSearch(item, query) {
  if (!query) return true;
  const haystack = [
    item.title,
    item.people,
    item.category,
    item.dynasty,
    item.era,
    item.summary,
    item.principle,
    item.tags.join(" ")
  ].join(" ");
  return normalize(haystack).includes(query);
}

function getFilteredData() {
  const query = normalize(searchInput.value);
  return timelineData.filter((item) => {
    const categoryMatch =
      activeFilter === "全部" ||
      item.category === activeFilter ||
      (activeFilter === "冷门成果" && item.cold);
    return categoryMatch && matchesSearch(item, query);
  });
}

function groupByEra(items) {
  return eraOrder
    .map((era) => ({
      era,
      items: items.filter((item) => item.era === era)
    }))
    .filter((group) => group.items.length > 0);
}

function renderTimeline() {
  const filtered = getFilteredData();

  if (filtered.length === 0) {
    timelineEl.innerHTML = `<div class="empty-state">没有找到匹配条目。可以换一个关键词，或重置筛选。</div>`;
    return;
  }

  const sections = groupByEra(filtered)
    .map((group) => {
      const cards = group.items
        .map((item, index) => {
          const accent = categoryColors[item.category] || "#0f7b68";
          const tags = item.tags
            .slice(0, 4)
            .map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`)
            .join("");
          const cold = item.cold ? `<span class="pill cold">冷门成果</span>` : "";

          return `
            <article class="event-card" id="event-${item.id}" style="--accent: ${accent}; animation-delay: ${Math.min(index * 0.04, 0.28)}s">
              <div class="event-date">
                <strong>${escapeHtml(item.yearLabel)}</strong>
                <span>${escapeHtml(item.dynasty)}</span>
              </div>
              <div class="event-body">
                <h4>${escapeHtml(item.title)}</h4>
                <div class="meta-row">
                  <span class="pill">${escapeHtml(item.category)}</span>
                  <span class="pill">${escapeHtml(item.people)}</span>
                  ${cold}
                  ${tags}
                </div>
                <p>${escapeHtml(item.summary)}</p>
                <button type="button" data-open="${escapeHtml(item.id)}">原理讲解</button>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="era-section" id="era-${group.era}">
          <div class="era-heading">
            <h3>${escapeHtml(group.era)}</h3>
            <span></span>
          </div>
          ${cards}
        </section>
      `;
    })
    .join("");

  timelineEl.innerHTML = sections;
}

function renderColdFeature() {
  const item = coldFacts[coldIndex % coldFacts.length];
  featuredCold.innerHTML = `
    <div class="cold-kicker">
      <span>${escapeHtml(item.era)}</span>
      <span>冷门成就</span>
    </div>
    <strong>${escapeHtml(item.title)}</strong>
    <p>${escapeHtml(item.summary)}</p>
  `;
  coldIndex += 1;
}

function updateSearchMode() {
  const hasQuery = searchInput.value.trim().length > 0;
  insightStrip.hidden = hasQuery;
  renderTimeline();

  if (hasQuery) {
    requestAnimationFrame(() => {
      resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function openDetail(id) {
  const item = timelineData.find((entry) => entry.id === id);
  if (!item) return;
  const accent = categoryColors[item.category] || "#0f7b68";
  const steps = item.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  const tags = item.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");

  modalBody.innerHTML = `
    <div class="modal-content" style="--accent: ${accent}">
      <div class="modal-header">
        <p class="eyebrow">${escapeHtml(item.yearLabel)} · ${escapeHtml(item.dynasty)}</p>
        <h2 id="modalTitle">${escapeHtml(item.title)}</h2>
        <div class="meta-row">
          <span class="pill">${escapeHtml(item.category)}</span>
          <span class="pill">${escapeHtml(item.people)}</span>
          ${item.cold ? `<span class="pill cold">冷门成果</span>` : ""}
          ${tags}
        </div>
      </div>
      <div class="modal-grid">
        <section class="modal-block">
          <h3>技术原理</h3>
          <p>${escapeHtml(item.principle)}</p>
        </section>
        <section class="modal-block">
          <h3>历史价值</h3>
          <p>${escapeHtml(item.value)}</p>
        </section>
        <section class="modal-block full">
          <h3>原理拆解</h3>
          <ol>${steps}</ol>
        </section>
        <section class="modal-block">
          <h3>核心史料</h3>
          <p>${escapeHtml(item.sources)}</p>
        </section>
        <section class="modal-block">
          <h3>破误区视角</h3>
          <p>${escapeHtml(item.algorithmPoint)}</p>
        </section>
      </div>
    </div>
  `;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

document.querySelector(".chip-group").addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  document.querySelectorAll(".chip").forEach((button) => button.classList.remove("active"));
  chip.classList.add("active");
  renderTimeline();
});

searchInput.addEventListener("input", updateSearchMode);

eraJump.addEventListener("change", () => {
  if (!eraJump.value) return;
  const target = document.getElementById(eraJump.value);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

refreshCold.addEventListener("click", renderColdFeature);

resetFilters.addEventListener("click", () => {
  activeFilter = "全部";
  searchInput.value = "";
  eraJump.value = "";
  insightStrip.hidden = false;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === "全部");
  });
  renderTimeline();
});

timelineEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (button) openDetail(button.dataset.open);
});

closeModal.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderTimeline();
renderColdFeature();
