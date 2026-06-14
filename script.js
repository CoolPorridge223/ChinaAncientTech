const referenceSources = [
  {
    id: "ctext-mozi",
    label: "中国哲学书电子化计划：《墨子》",
    type: "原典",
    url: "https://ctext.org/mozi/zh",
    note: "用于墨经光学、力学、杠杆和几何解释相关条目。"
  },
  {
    id: "ctext-nine",
    label: "中国哲学书电子化计划：《九章算术》",
    type: "原典",
    url: "https://ctext.org/nine-chapters/zh",
    note: "用于方田、少广、商功、均输、盈不足、方程、勾股等算法条目。"
  },
  {
    id: "ctext-zhoubi",
    label: "中国哲学书电子化计划：《周髀算经》",
    type: "原典",
    url: "https://ctext.org/zhou-bi-suan-jing/zh",
    note: "用于测影、勾股、盖天宇宙模型和天文测算相关条目。"
  },
  {
    id: "ctext-sunzi",
    label: "中国哲学书电子化计划：《孙子算经》",
    type: "原典",
    url: "https://ctext.org/sunzi-suan-jing/zh",
    note: "用于筹算、同余问题和算经传统条目。"
  },
  {
    id: "ctext-houhan",
    label: "中国哲学书电子化计划：《后汉书》",
    type: "史书",
    url: "https://ctext.org/hou-han-shu/zh",
    note: "用于张衡、东汉天文仪器与地动仪相关条目。"
  },
  {
    id: "ctext-shuijing",
    label: "中国哲学书电子化计划：《水经注》",
    type: "地理水利",
    url: "https://ctext.org/shui-jing-zhu/zh",
    note: "用于水利、地理测量和工程环境相关条目。"
  },
  {
    id: "wiki-mengxi",
    label: "维基百科：《梦溪笔谈》",
    type: "通识校核",
    url: "https://zh.wikipedia.org/wiki/%E6%A2%A6%E6%BA%AA%E7%AC%94%E8%B0%88",
    note: "用于沈括相关天文、数学、磁学、活字印刷和工艺条目线索校核。"
  },
  {
    id: "wiki-tiangong",
    label: "维基百科：《天工开物》",
    type: "通识校核",
    url: "https://zh.wikipedia.org/wiki/%E5%A4%A9%E5%B7%A5%E5%BC%80%E7%89%A9",
    note: "用于明代农业、手工业、冶金、造纸、火器和工艺流程条目。"
  },
  {
    id: "wiki-shoushi",
    label: "维基百科：《授时历》",
    type: "通识校核",
    url: "https://zh.wikipedia.org/wiki/%E6%8E%88%E6%97%B6%E5%8E%86",
    note: "用于郭守敬、授时历、观测网络和历法参数条目。"
  },
  {
    id: "needham",
    label: "Joseph Needham, Science and Civilisation in China",
    type: "研究著作",
    url: "https://en.wikipedia.org/wiki/Science_and_Civilisation_in_China",
    note: "用于中国古代数学、天文、机械、水利和工程技术的综合背景。"
  },
  {
    id: "zhoubi-study",
    label: "Christopher Cullen, Astronomy and Mathematics in Ancient China",
    type: "研究著作",
    url: "https://en.wikipedia.org/wiki/Zhoubi_Suanjing",
    note: "用于《周髀算经》、测影、勾股和盖天模型的现代研究线索。"
  },
  {
    id: "liuhui-study",
    label: "刘徽相关研究与《九章算术注》传统",
    type: "研究著作",
    url: "https://en.wikipedia.org/wiki/Liu_Hui",
    note: "用于刘徽割圆术、出入相补、海岛算经和几何证明条目。"
  },
  {
    id: "zuchongzhi-study",
    label: "祖冲之相关研究",
    type: "研究著作",
    url: "https://en.wikipedia.org/wiki/Zu_Chongzhi",
    note: "用于圆周率、大明历、祖暅原理和南北朝历算条目。"
  },
  {
    id: "guo-study",
    label: "郭守敬相关研究",
    type: "研究著作",
    url: "https://en.wikipedia.org/wiki/Guo_Shoujing",
    note: "用于元代天文仪器、授时历、水利工程和观测站网络条目。"
  },
  {
    id: "qin-study",
    label: "秦九韶《数书九章》研究",
    type: "研究著作",
    url: "https://en.wikipedia.org/wiki/Mathematical_Treatise_in_Nine_Sections",
    note: "用于大衍求一术、正负开方术和南宋算法传统条目。"
  }
];

const sourceMap = new Map(referenceSources.map((source) => [source.id, source]));

const categoryDefaults = {
  "数学方法": {
    value: "把具体问题转化为可重复的算式、方程或证明程序，是中国古代数学算法传统的一部分。",
    algorithmPoint: "关键不只是得到答案，而是把同类问题抽象成可复用的术式。",
    steps: ["确认已知量与未知量", "把文字或图形关系转成数量关系", "按术式递推、消元或逼近", "把结果带回原问题检验"]
  },
  "天文历法": {
    value: "把观测数据转化为历法参数、星象记录和时间制度，服务农业、礼制与航行判断。",
    algorithmPoint: "天文历法本质上是长期采样、周期建模、误差修正和预测。",
    steps: ["设定固定观测点或仪器", "记录日月星辰位置与时间", "提取周期、角度或影长参数", "用新观测校正推算表"]
  },
  "算学工具": {
    value: "把抽象数字放进可操作的工具或表格中，降低复杂计算的门槛。",
    algorithmPoint: "工具把步骤固化成手势、位置或口诀，让计算可以训练和复制。",
    steps: ["用位置或符号表示数", "按规则移动、排列或查表", "保留中间结果", "通过复核或换算法确认答案"]
  },
  "物理仪器": {
    value: "通过结构、材料和动力转换，把自然现象变成可观察、可测量或可控制的输出。",
    algorithmPoint: "仪器相当于把物理规律写进机械结构，让输入经过转换后得到稳定结果。",
    steps: ["确定要观测或转换的现象", "设计受力、传动或显示结构", "校准尺度与方向", "用重复操作验证可靠性"]
  },
  "工程工艺": {
    value: "把材料、动力、流程和经验标准化，形成可复制的生产与工程技术。",
    algorithmPoint: "工艺流程就是现实世界里的算法：步骤、条件、工具和反馈共同决定结果。",
    steps: ["识别原料和目标成品", "安排处理顺序与工具", "控制火候、水力、比例或时间", "根据成品质量反馈调整"]
  }
};

const achievementSeeds = [
  { id: "oracle-sky", year: -1300, yearLabel: "约前13世纪", era: "上古先秦", dynasty: "商代", title: "甲骨天象记录", people: "商代贞人", category: "天文历法", cold: false, tags: ["日食", "月食", "彗星", "连续观测"], summary: "殷墟甲骨中保存日食、月食、彗星和新星等记录，是早期可追踪天象档案。", principle: "把异常天象、日期和占验结果写成档案，使后人能比较天象是否具有周期性。", sourceIds: ["needham"] },
  { id: "gnomon", year: -1050, yearLabel: "约前11世纪", era: "上古先秦", dynasty: "西周至战国", title: "土圭测影与日影历法", people: "周代天官", category: "天文历法", cold: false, tags: ["圭表", "节气", "测影", "太阳高度"], summary: "用直立表杆测量正午影长，判断冬至、夏至和季节变化。", principle: "太阳高度改变会造成影长变化，长期记录同一地点影长，就能找出一年中的极值节点。", sourceIds: ["ctext-zhoubi", "zhoubi-study"] },
  { id: "mozi-optics", year: -350, yearLabel: "约前4世纪", era: "上古先秦", dynasty: "战国", title: "《墨经》小孔成像解释", people: "墨家学派", category: "物理仪器", cold: true, tags: ["小孔成像", "光直线传播", "几何路径"], summary: "《墨经》讨论影、光和小孔成像，是先秦物理思想中很有辨识度的一支。", principle: "光线近似直线传播，物体上部光线穿孔后落到下方，下部光线落到上方，形成倒像。", sourceIds: ["ctext-mozi"] },
  { id: "mozi-lever", year: -340, yearLabel: "约前4世纪", era: "上古先秦", dynasty: "战国", title: "《墨经》杠杆和平衡观念", people: "墨家学派", category: "物理仪器", cold: true, tags: ["杠杆", "力矩", "平衡", "机械"], summary: "墨家对力、权、重、平衡等现象有概念化讨论，可视为早期力学解释。", principle: "支点两侧重物的距离与重量共同决定平衡状态，改变距离就能放大或抵消作用效果。", sourceIds: ["ctext-mozi"] },
  { id: "kaogong-measure", year: -330, yearLabel: "战国时期", era: "上古先秦", dynasty: "战国", title: "《考工记》工尺度量体系", people: "百工与官营工匠", category: "工程工艺", cold: false, tags: ["规矩", "准绳", "尺度", "标准化"], summary: "《考工记》记录车、器、城郭等工艺规范，体现度量和比例控制。", principle: "工艺不只靠经验，还要把尺寸、材料和用途对应起来，形成可检查的制造标准。", sourceIds: ["needham"] },
  { id: "gan-shi-star", year: -320, yearLabel: "战国时期", era: "上古先秦", dynasty: "战国", title: "甘石星经与恒星记录传统", people: "甘德、石申", category: "天文历法", cold: false, tags: ["星表", "恒星", "观测", "天文档案"], summary: "甘德、石申相关星占和恒星记录成为后世星官体系的重要材料。", principle: "把恒星按区域和名称固定下来，便于长期比较星位、亮度和异常天象。", sourceIds: ["needham"] },
  { id: "counting-rods", year: -250, yearLabel: "约前3世纪", era: "上古先秦", dynasty: "战国至秦汉", title: "算筹与十进位值制", people: "古代算家", category: "算学工具", cold: false, tags: ["算筹", "位值制", "负数", "筹算"], summary: "用横竖算筹表示数字，以位置表示个位、十位、百位，是复杂运算的底层工具。", principle: "同一数字符号放在不同位置表示不同数量级，移动和重排算筹即可保存中间计算。", sourceIds: ["ctext-nine", "ctext-sunzi"] },
  { id: "multiplication-table", year: -230, yearLabel: "战国至秦汉", era: "上古先秦", dynasty: "战国至秦汉", title: "九九乘法表传统", people: "基层算吏与学童", category: "算学工具", cold: false, tags: ["九九表", "乘法", "口算", "教学"], summary: "九九乘法口诀把乘法结果压缩成可背诵表格，服务税粮、工程和商业计算。", principle: "表格把重复乘法预先记忆化，减少现场计算负担，也便于训练初学者。", sourceIds: ["needham"] },
  { id: "zhoubi-gougu", year: -100, yearLabel: "约前1世纪", era: "上古先秦", dynasty: "西汉", title: "《周髀算经》勾股测算", people: "佚名算家", category: "数学方法", cold: false, tags: ["勾股", "相似三角形", "测高", "测远"], summary: "《周髀算经》保存勾股关系和测高测远材料，把几何关系用于天文和地理测量。", principle: "通过直角三角形和相似比例，把不可直接测量的高度、距离转化为可计算长度。", sourceIds: ["ctext-zhoubi", "zhoubi-study"] },
  { id: "zhoubi-cosmometry", year: -80, yearLabel: "约前1世纪", era: "上古先秦", dynasty: "西汉", title: "《周髀算经》盖天测算模型", people: "佚名算家", category: "天文历法", cold: true, tags: ["盖天说", "日影", "宇宙模型", "比例"], summary: "书中用影长、距离和比例推测天地尺度，体现早期数学化宇宙模型。", principle: "把天体运动投射到地面影长变化上，再用比例关系进行尺度估计。", sourceIds: ["ctext-zhoubi", "zhoubi-study"] },
  { id: "clepsydra-early", year: -50, yearLabel: "秦汉以前至汉代", era: "上古先秦", dynasty: "战国至汉", title: "漏刻计时技术", people: "天官与工匠", category: "物理仪器", cold: false, tags: ["漏刻", "水钟", "计时", "刻度"], summary: "漏刻通过水流和刻度记录时间，是天文观测、宫廷报时和行政节律的基础工具。", principle: "利用水位随时间变化的可重复性，把连续时间转换为刻度读数。", sourceIds: ["needham"] },
  { id: "magnet-lodestone", year: -40, yearLabel: "战国至汉代", era: "上古先秦", dynasty: "战国至汉", title: "磁石指向现象的早期认识", people: "方术家与工匠", category: "物理仪器", cold: true, tags: ["磁石", "方向", "司南", "地磁"], summary: "古人注意到磁石与方向之间的特殊关系，为后世指南技术提供知识前提。", principle: "磁性材料受到地磁场影响，会表现出偏向特定方向的趋势。", sourceIds: ["needham"] },
  { id: "suan-shu-shu", year: -186, yearLabel: "前2世纪", era: "秦汉", dynasty: "西汉", title: "张家山汉简《算数书》", people: "汉代算吏", category: "数学方法", cold: true, tags: ["出土文献", "税粮", "分数", "比例"], summary: "《算数书》展示汉初实用算法，包括田亩、粟米、比例和分数处理。", principle: "把行政、粮食和面积问题分成固定题型，给出可操作的算例。", sourceIds: ["needham"] },
  { id: "taichu-calendar", year: -104, yearLabel: "前104年", era: "秦汉", dynasty: "西汉", title: "太初历改革", people: "落下闳、邓平等", category: "天文历法", cold: false, tags: ["太初历", "历法改革", "岁首", "朔望"], summary: "汉武帝时改用太初历，重整岁首、节气和朔望推算，是国家历法制度化的重要节点。", principle: "通过观测和参数选择，把政治时间、农业时间和天文周期重新对齐。", sourceIds: ["needham"] },
  { id: "nine-chapters", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "《九章算术》成书", people: "佚名算家整理", category: "数学方法", cold: false, tags: ["246题", "算法", "方程", "工程"], summary: "《九章算术》系统整理田亩、粟米、工程、税役、方程等246个问题。", principle: "它以问题类型组织算法，给出可重复执行的术，构成中国古代数学的核心传统。", sourceIds: ["ctext-nine", "needham"] },
  { id: "nine-area", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "《九章》方田面积算法", people: "佚名算家", category: "数学方法", cold: false, tags: ["面积", "田亩", "几何", "分数"], summary: "方田章处理矩形、三角形、梯形、圆田等面积，服务田亩丈量和税赋。", principle: "把不规则或复合田形拆成基本图形，再按面积公式合成结果。", sourceIds: ["ctext-nine"] },
  { id: "nine-fangcheng", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "《九章》方程术", people: "佚名算家", category: "数学方法", cold: false, tags: ["线性方程组", "消元", "矩阵雏形", "筹算"], summary: "方程章用算筹排列系数，通过消元求多未知量问题。", principle: "把各组条件排成表格，逐列消去未知量，最后回代求解。", sourceIds: ["ctext-nine"] },
  { id: "nine-negative", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "正负数运算规则", people: "《九章》算家", category: "数学方法", cold: false, tags: ["正负数", "红黑筹", "盈亏", "方程"], summary: "《九章》方程术处理正负数，常以不同颜色或摆法区分正负。", principle: "债、亏、减项等量可用负数表达，使方程运算保持统一。", sourceIds: ["ctext-nine"] },
  { id: "nine-shaoguang", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "《九章》少广开方术", people: "佚名算家", category: "数学方法", cold: false, tags: ["开方", "平方根", "立方根", "逐位逼近"], summary: "少广章处理开平方、开立方等问题，是建筑、仓窖和体积计算的重要算法。", principle: "用逐位试商和剩余修正，逼近平方根或立方根。", sourceIds: ["ctext-nine"] },
  { id: "nine-yingbuzu", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "盈不足术", people: "《九章》算家", category: "数学方法", cold: true, tags: ["双假设", "线性插值", "盈亏", "比例"], summary: "盈不足术用两次假设的过量和不足来反推正确值。", principle: "如果答案随假设近似线性变化，两个偏差点可以确定真正解的位置。", sourceIds: ["ctext-nine"] },
  { id: "nine-commercial", year: 50, yearLabel: "约1世纪", era: "秦汉", dynasty: "东汉", title: "《九章》均输与粟米换算", people: "汉代算吏", category: "数学方法", cold: true, tags: ["比例", "税粮", "运输", "折算"], summary: "《九章》用比例和折算处理粮食交换、运输负担和税役分配。", principle: "将不同单位、价值和运输距离统一到可比较的数量尺度。", sourceIds: ["ctext-nine"] },
  { id: "han-armillary", year: 100, yearLabel: "1至2世纪", era: "秦汉", dynasty: "东汉", title: "浑仪观测体系", people: "汉代天文学家", category: "物理仪器", cold: false, tags: ["浑仪", "赤道坐标", "星位", "天文仪器"], summary: "浑仪以环圈模拟天球坐标，用来测量星体位置和天体运行。", principle: "把天空坐标投影到实体环圈上，观察者可用刻度记录角度。", sourceIds: ["needham", "ctext-houhan"] },
  { id: "zhangheng-armillary", year: 117, yearLabel: "117年前后", era: "秦汉", dynasty: "东汉", title: "张衡水运浑象", people: "张衡", category: "物理仪器", cold: false, tags: ["水运", "浑象", "齿轮", "天球模型"], summary: "张衡改进水运浑象，以机械方式模拟天体运行。", principle: "用水流提供稳定动力，通过传动机构让天球模型按固定节律运转。", sourceIds: ["ctext-houhan", "needham"] },
  { id: "zhangheng-seismoscope", year: 132, yearLabel: "132年", era: "秦汉", dynasty: "东汉", title: "张衡候风地动仪", people: "张衡", category: "物理仪器", cold: false, tags: ["地动仪", "惯性", "方向识别", "机械触发"], summary: "张衡制造候风地动仪，用机械结构感知远方地震方向。", principle: "地面震动时，内部构件相对外壳发生位移，触发某一方向机关输出方位。", sourceIds: ["ctext-houhan", "needham"] },
  { id: "lingxian", year: 120, yearLabel: "2世纪前期", era: "秦汉", dynasty: "东汉", title: "张衡《灵宪》宇宙论", people: "张衡", category: "天文历法", cold: true, tags: ["浑天说", "星象", "宇宙论", "月食"], summary: "《灵宪》讨论天地结构、星辰和月食成因，体现东汉天文学理论化努力。", principle: "用浑天模型解释天体位置和可见现象，把观测与宇宙图景连接起来。", sourceIds: ["ctext-houhan", "needham"] },
  { id: "du-shi-bellows", year: 31, yearLabel: "1世纪", era: "秦汉", dynasty: "东汉", title: "杜诗水排鼓风", people: "杜诗", category: "工程工艺", cold: false, tags: ["水力", "冶铁", "鼓风", "机械动力"], summary: "杜诗用水力带动冶铁鼓风设备，提高炉温和冶炼效率。", principle: "把水流动能转成往复鼓风，持续向炉内供氧，使燃烧更强。", sourceIds: ["needham"] },
  { id: "paper-cai-lun", year: 105, yearLabel: "105年", era: "秦汉", dynasty: "东汉", title: "蔡伦改进造纸术", people: "蔡伦与工匠", category: "工程工艺", cold: false, tags: ["造纸", "纤维", "信息载体", "工艺"], summary: "东汉造纸技术改进，使轻便书写材料逐渐取代简牍和帛书。", principle: "将植物纤维打散、悬浮、抄造成薄层，再压榨干燥形成纸张。", sourceIds: ["needham"] },
  { id: "liuhui-commentary", year: 263, yearLabel: "263年", era: "魏晋南北朝", dynasty: "曹魏", title: "刘徽注《九章算术》", people: "刘徽", category: "数学方法", cold: false, tags: ["证明", "注释", "算法解释", "几何"], summary: "刘徽为《九章算术》作注，强调算法为什么成立，而不只是怎样计算。", principle: "通过割补、比较和推理解释术式，把计算规则提升为可论证的方法。", sourceIds: ["liuhui-study", "ctext-nine"] },
  { id: "liuhui-pi", year: 263, yearLabel: "263年", era: "魏晋南北朝", dynasty: "曹魏", title: "刘徽割圆术", people: "刘徽", category: "数学方法", cold: false, tags: ["圆周率", "迭代", "内接多边形", "逼近"], summary: "刘徽用割圆术从圆内接多边形逐步逼近圆面积和圆周率。", principle: "不断倍增多边形边数，多边形越接近圆，周长和面积越接近圆的真实值。", sourceIds: ["liuhui-study", "ctext-nine"] },
  { id: "liuhui-dissection", year: 263, yearLabel: "263年", era: "魏晋南北朝", dynasty: "曹魏", title: "刘徽出入相补证明法", people: "刘徽", category: "数学方法", cold: true, tags: ["割补", "面积证明", "几何", "逻辑"], summary: "刘徽常用几何割补说明面积公式，让读者看到算法背后的结构。", principle: "把图形切开、移动、重组，如果没有增减面积，就可证明两种表达等价。", sourceIds: ["liuhui-study"] },
  { id: "haidao", year: 263, yearLabel: "3世纪", era: "魏晋南北朝", dynasty: "曹魏", title: "刘徽《海岛算经》测望法", people: "刘徽", category: "数学方法", cold: false, tags: ["测高", "测远", "重差术", "相似三角形"], summary: "《海岛算经》用多次测望解决远山、海岛、城墙等不可达目标的高度和距离。", principle: "通过两次或多次观测形成相似三角形，消去不可测量的中间量。", sourceIds: ["liuhui-study"] },
  { id: "peixiu-map", year: 267, yearLabel: "3世纪后期", era: "魏晋南北朝", dynasty: "西晋", title: "裴秀制图六体", people: "裴秀", category: "工程工艺", cold: false, tags: ["地图", "比例尺", "方位", "里程"], summary: "裴秀提出制图六体，强调比例、方位、距离和地形关系。", principle: "地图要把实际地表转成可量测的平面符号，比例和方向必须稳定。", sourceIds: ["needham"] },
  { id: "majun-carriage", year: 255, yearLabel: "3世纪", era: "魏晋南北朝", dynasty: "曹魏", title: "马钧指南车", people: "马钧", category: "物理仪器", cold: true, tags: ["差动齿轮", "方向保持", "机械", "车辆"], summary: "马钧改造指南车，用机械传动保持车上木人指向。", principle: "车辆转弯时，轮差通过齿轮传动抵消车身方向变化，使指示器保持相对方向。", sourceIds: ["needham"] },
  { id: "chain-pump", year: 250, yearLabel: "魏晋时期", era: "魏晋南北朝", dynasty: "魏晋", title: "龙骨水车与链泵", people: "农工匠人", category: "工程工艺", cold: false, tags: ["灌溉", "链泵", "水车", "农业"], summary: "龙骨水车通过连续链板提水，成为农田灌溉的重要工具。", principle: "脚踏或水力带动链条循环，链板把低处水连续带到高处。", sourceIds: ["needham"] },
  { id: "zuchongzhi-pi", year: 465, yearLabel: "5世纪后期", era: "魏晋南北朝", dynasty: "南朝宋齐", title: "祖冲之圆周率与密率", people: "祖冲之", category: "数学方法", cold: false, tags: ["圆周率", "密率", "355/113", "高精度"], summary: "祖冲之将圆周率推算到3.1415926与3.1415927之间，并提出密率355/113。", principle: "在割圆算法基础上提高精度，再用分数近似表达，便于历法和工程计算。", sourceIds: ["zuchongzhi-study", "needham"] },
  { id: "daming-calendar", year: 462, yearLabel: "462年", era: "魏晋南北朝", dynasty: "南朝宋", title: "祖冲之《大明历》", people: "祖冲之", category: "天文历法", cold: false, tags: ["大明历", "岁差", "朔望", "历法"], summary: "《大明历》改进朔望月和回归年参数，并重视岁差等天文变化。", principle: "通过更精密参数减少历日与天象之间的误差。", sourceIds: ["zuchongzhi-study", "needham"] },
  { id: "zuheng-principle", year: 500, yearLabel: "约5至6世纪", era: "魏晋南北朝", dynasty: "南朝", title: "祖暅原理", people: "祖暅", category: "数学方法", cold: true, tags: ["体积", "截面积", "几何证明", "降维"], summary: "祖暅提出“幂势既同，则积不容异”，用截面积相等推出体积相等。", principle: "如果两个立体在同一高度的截面积总相同，则整体体积也相同。", sourceIds: ["zuchongzhi-study", "needham"] },
  { id: "zhui-shu", year: 500, yearLabel: "约5世纪", era: "魏晋南北朝", dynasty: "南朝", title: "《缀术》高阶算学传统", people: "祖冲之、祖暅", category: "数学方法", cold: true, tags: ["缀术", "高阶方程", "体积", "失传"], summary: "《缀术》已佚，但后世记载显示其中包含较高阶数学内容。", principle: "它反映南北朝数学已能处理精密数值和复杂几何问题。", sourceIds: ["zuchongzhi-study", "needham"] },
  { id: "ten-canons", year: 656, yearLabel: "656年", era: "隋唐", dynasty: "唐代", title: "《算经十书》入国子监", people: "李淳风等", category: "算学工具", cold: false, tags: ["算经十书", "教育", "官学", "算法教材"], summary: "唐代把多部算经整理为官方教材，数学教育进入制度化框架。", principle: "通过统一教材和考试，让算法知识在官僚体系中可教学、可评估。", sourceIds: ["needham"] },
  { id: "sunzi-remainder", year: 450, yearLabel: "约5世纪", era: "隋唐", dynasty: "魏晋至唐传承", title: "《孙子算经》物不知数", people: "佚名算家", category: "数学方法", cold: false, tags: ["同余", "中国剩余定理", "算经", "整数"], summary: "《孙子算经》中的“物不知数”问题保存了同余求数的经典形式。", principle: "用多个余数条件逐步缩小可能整数集合，直到找到同时满足条件的数。", sourceIds: ["ctext-sunzi", "qin-study"] },
  { id: "wucao-suanjing", year: 600, yearLabel: "隋唐时期", era: "隋唐", dynasty: "隋唐", title: "《五曹算经》行政算法", people: "佚名算家", category: "数学方法", cold: true, tags: ["行政", "税粮", "工程", "算经"], summary: "《五曹算经》面向田曹、兵曹、仓曹等行政场景，展示官府计算需求。", principle: "把行政部门的日常问题转成题型，让算吏可按例处理。", sourceIds: ["needham"] },
  { id: "xiahouyang", year: 620, yearLabel: "唐代", era: "隋唐", dynasty: "唐代", title: "《夏侯阳算经》", people: "夏侯阳题名传统", category: "数学方法", cold: true, tags: ["算经", "应用题", "商业", "工程"], summary: "《夏侯阳算经》保存唐代算学题型，涉及买卖、工程、分配等应用。", principle: "以问答体训练读者把现实叙述改写为可计算关系。", sourceIds: ["needham"] },
  { id: "jigu", year: 626, yearLabel: "7世纪初", era: "隋唐", dynasty: "唐代", title: "王孝通《缉古算经》", people: "王孝通", category: "数学方法", cold: true, tags: ["三次方程", "土木工程", "几何代数", "开方"], summary: "《缉古算经》处理土木工程和几何问题，出现较复杂的三次方程求解。", principle: "把堤坝、沟渠、仓窖等形体转化为方程，再用开方和试商求未知量。", sourceIds: ["needham"] },
  { id: "dunhuang-star", year: 700, yearLabel: "约7世纪", era: "隋唐", dynasty: "唐代", title: "敦煌星图", people: "唐代天文抄本作者", category: "天文历法", cold: false, tags: ["星图", "敦煌", "星官", "天文图像"], summary: "敦煌星图保存大量星官和恒星位置，是早期纸本星图的重要遗存。", principle: "把天球分区投影到纸面，便于识别星官和记录星位关系。", sourceIds: ["needham"] },
  { id: "yixing-meridian", year: 724, yearLabel: "724年前后", era: "隋唐", dynasty: "唐代", title: "一行子午线测量", people: "僧一行、南宫说", category: "天文历法", cold: false, tags: ["子午线", "测影", "大地测量", "大衍历"], summary: "唐玄宗时期组织多地测影和星象观测，为修订《大衍历》提供数据。", principle: "在不同地点比较同一时刻日影和星象差异，用地面距离估算纬度尺度。", sourceIds: ["needham"] },
  { id: "dayan-calendar", year: 729, yearLabel: "729年", era: "隋唐", dynasty: "唐代", title: "《大衍历》", people: "僧一行", category: "天文历法", cold: false, tags: ["历法", "日月运动", "插值", "节气"], summary: "《大衍历》综合实测和计算，改进日月运行、节气和交食推算。", principle: "历法把太阳、月亮的周期运动转化为参数表和推算规则。", sourceIds: ["needham"] },
  { id: "liang-water-armillary", year: 725, yearLabel: "8世纪前期", era: "隋唐", dynasty: "唐代", title: "梁令瓒水运浑仪", people: "梁令瓒、一行", category: "物理仪器", cold: true, tags: ["水运浑仪", "机械天文", "齿轮", "自动演示"], summary: "唐代水运浑仪把水力、齿轮和天象演示结合起来。", principle: "稳定水流带动机械部件，让天文模型按节律运转。", sourceIds: ["needham"] },
  { id: "tang-eclipse", year: 730, yearLabel: "唐代", era: "隋唐", dynasty: "唐代", title: "交食推算表改进", people: "唐代历官", category: "天文历法", cold: true, tags: ["日食", "月食", "交点", "预测"], summary: "唐代历法持续改进日月交食推算，提升对日食和月食的预测能力。", principle: "把月球轨道节点、朔望和太阳位置共同纳入表格推算。", sourceIds: ["needham"] },
  { id: "tang-printing", year: 868, yearLabel: "868年前后", era: "隋唐", dynasty: "唐代", title: "雕版印刷成熟", people: "唐代刻工", category: "工程工艺", cold: false, tags: ["雕版", "印刷", "复制", "信息技术"], summary: "唐代雕版印刷已能大量复制文字和图像，为知识传播提供技术基础。", principle: "把文字反刻在木版上，施墨压印，实现同版多次复制。", sourceIds: ["needham"] },
  { id: "gunpowder-formula", year: 850, yearLabel: "9世纪", era: "隋唐", dynasty: "唐代", title: "火药配方早期形成", people: "炼丹家与工匠", category: "工程工艺", cold: false, tags: ["火药", "硝石", "硫磺", "炼丹"], summary: "唐代炼丹实践中逐渐形成火药配方知识，为宋代火器技术奠基。", principle: "硝石供氧，硫磺和炭燃烧，三者比例决定燃速和爆燃效果。", sourceIds: ["needham"] },
  { id: "jiaxian-triangle", year: 1050, yearLabel: "11世纪", era: "宋元", dynasty: "北宋", title: "贾宪三角与增乘开方法", people: "贾宪", category: "数学方法", cold: false, tags: ["二项式系数", "开方", "递推", "三角表"], summary: "贾宪三角为高次开方和二项式系数计算提供递推表。", principle: "每个系数由上一层相邻系数相加得到，形成可逐层生成的计算结构。", sourceIds: ["needham"] },
  { id: "shen-magnetic", year: 1088, yearLabel: "1088年前后", era: "宋元", dynasty: "北宋", title: "沈括磁偏角记录", people: "沈括", category: "物理仪器", cold: true, tags: ["磁偏角", "指南针", "地磁", "测量误差"], summary: "沈括记录磁针并不完全指南，涉及磁偏角现象。", principle: "磁南北与地理南北不重合，稳定偏差可通过反复观察识别。", sourceIds: ["wiki-mengxi", "needham"] },
  { id: "shen-polaris", year: 1088, yearLabel: "1088年前后", era: "宋元", dynasty: "北宋", title: "沈括北极星位置观测", people: "沈括", category: "天文历法", cold: true, tags: ["北极星", "极点", "连续观测", "星图"], summary: "沈括通过连续观测讨论北极星与天极的偏离，是对仪器和星位关系的深入考察。", principle: "若某星围绕天极作小圆运动，它就不是严格的不动点。", sourceIds: ["wiki-mengxi", "needham"] },
  { id: "shen-arc", year: 1088, yearLabel: "1088年前后", era: "宋元", dynasty: "北宋", title: "沈括会圆术", people: "沈括", category: "数学方法", cold: true, tags: ["弓形", "弧长", "近似公式", "几何"], summary: "沈括研究已知弓形圆径和矢高求弧长的近似方法。", principle: "用可测的弦、矢和圆径构造近似关系，估算难以直接量得的弧长。", sourceIds: ["wiki-mengxi", "needham"] },
  { id: "shen-stack", year: 1088, yearLabel: "1088年前后", era: "宋元", dynasty: "北宋", title: "沈括隙积术", people: "沈括", category: "数学方法", cold: true, tags: ["垛积", "级数", "体积", "堆叠"], summary: "隙积术用于计算有空隙堆垛的数量和体积，涉及高阶等差级数。", principle: "把一层层数量变化写成递推或求和关系，得到整体堆垛规模。", sourceIds: ["wiki-mengxi", "needham"] },
  { id: "bicheng-type", year: 1045, yearLabel: "11世纪中期", era: "宋元", dynasty: "北宋", title: "毕昇活字印刷术", people: "毕昇", category: "工程工艺", cold: false, tags: ["活字", "印刷", "排版", "信息复制"], summary: "毕昇使用胶泥活字，按字粒排版后可重复印刷。", principle: "把整版文字拆成可复用的单字模块，重新组合即可印制不同文本。", sourceIds: ["wiki-mengxi", "needham"] },
  { id: "compass-navigation", year: 1119, yearLabel: "12世纪前期", era: "宋元", dynasty: "北宋", title: "指南针航海应用", people: "宋代航海者", category: "物理仪器", cold: false, tags: ["指南针", "航海", "地磁", "方向"], summary: "宋代文献显示指南针逐渐用于航海，改变远洋方向判断方式。", principle: "磁针在地磁场中趋向南北方向，能在阴雨或夜间提供方向参考。", sourceIds: ["needham", "wiki-mengxi"] },
  { id: "sushong-clock", year: 1092, yearLabel: "1092年", era: "宋元", dynasty: "北宋", title: "苏颂水运仪象台", people: "苏颂、韩公廉", category: "物理仪器", cold: true, tags: ["天文钟", "擒纵", "水力", "自动报时"], summary: "水运仪象台把浑仪、浑象、报时系统和水力机械结合，是大型天文仪器工程。", principle: "以水流为动力，利用齿轮、链传动和擒纵控制，让显示与报时按节律运行。", sourceIds: ["needham"] },
  { id: "sushong-star-map", year: 1092, yearLabel: "1092年前后", era: "宋元", dynasty: "北宋", title: "苏颂《新仪象法要》星图", people: "苏颂、韩公廉", category: "天文历法", cold: true, tags: ["星图", "浑象", "仪器说明", "天文图谱"], summary: "《新仪象法要》附有星图和仪器图样，记录天文仪器的构造与显示方式。", principle: "把星官位置、仪器部件和机械说明共同呈现，便于复制和校验。", sourceIds: ["needham"] },
  { id: "wujing-gunpowder", year: 1044, yearLabel: "1044年", era: "宋元", dynasty: "北宋", title: "《武经总要》火药武器配方", people: "曾公亮等编纂", category: "工程工艺", cold: false, tags: ["火药", "火器", "配方", "军事工程"], summary: "《武经总要》保存火药配方和火攻器具，是火药技术进入军事文本的标志。", principle: "不同硝、硫、炭比例与包裹结构决定燃烧速度、烟焰和爆破效果。", sourceIds: ["needham"] },
  { id: "pound-lock", year: 984, yearLabel: "984年前后", era: "宋元", dynasty: "北宋", title: "运河复闸和船闸技术", people: "乔维岳等", category: "工程工艺", cold: false, tags: ["船闸", "水位", "运河", "水利"], summary: "宋代运河复闸技术通过控制水位，让船只更稳定地通过落差河段。", principle: "在闸室中调节进出水，使船只随水位升降而通过高差。", sourceIds: ["needham", "ctext-shuijing"] },
  { id: "yanghui-triangle", year: 1261, yearLabel: "1261年前后", era: "宋元", dynasty: "南宋", title: "杨辉三角", people: "杨辉", category: "数学方法", cold: false, tags: ["二项式系数", "递推", "垛积", "开方"], summary: "杨辉著作保存贾宪三角形，并用于高次开方和系数计算。", principle: "三角形中每个数由上一行相邻两数相加得到，是典型递推结构。", sourceIds: ["needham"] },
  { id: "yanghui-magic", year: 1275, yearLabel: "13世纪后期", era: "宋元", dynasty: "南宋", title: "杨辉纵横图与幻方", people: "杨辉", category: "数学方法", cold: true, tags: ["幻方", "组合", "数阵", "娱乐数学"], summary: "杨辉记录多种纵横图，展示数阵排列和组合结构。", principle: "在网格中安排数字，使行列或对角线满足相同和数，体现约束求解思想。", sourceIds: ["needham"] },
  { id: "qin-crt", year: 1247, yearLabel: "1247年", era: "宋元", dynasty: "南宋", title: "秦九韶大衍求一术", people: "秦九韶", category: "数学方法", cold: true, tags: ["同余", "中国剩余定理", "数论", "算法"], summary: "《数书九章》给出大衍求一术，系统处理多个余数条件合并问题。", principle: "逐步构造同时满足多个同余条件的数，使看似分散的余数约束统一起来。", sourceIds: ["qin-study"] },
  { id: "qin-root", year: 1247, yearLabel: "1247年", era: "宋元", dynasty: "南宋", title: "秦九韶正负开方术", people: "秦九韶", category: "数学方法", cold: true, tags: ["高次方程", "数值求根", "试商", "迭代"], summary: "正负开方术用逐位试商和修正求高次方程正根。", principle: "把根逐位逼近，每确定一位就更新余式，直到得到足够精度。", sourceIds: ["qin-study"] },
  { id: "qin-rain", year: 1247, yearLabel: "13世纪", era: "宋元", dynasty: "南宋", title: "秦九韶天池盆测雨", people: "秦九韶", category: "物理仪器", cold: true, tags: ["雨量", "测量", "气象", "容积"], summary: "秦九韶记载天池盆等测雨工具，体现定量气象观测意识。", principle: "用标准容器收集降水，再把水深或体积换算为雨量。", sourceIds: ["qin-study", "needham"] },
  { id: "liye-tianyuan", year: 1248, yearLabel: "1248年", era: "宋元", dynasty: "金元之际", title: "李冶天元术", people: "李冶", category: "数学方法", cold: true, tags: ["未知数", "方程", "代数", "测圆海镜"], summary: "李冶用“天元一”表示未知量，建立方程解决几何问题。", principle: "先设未知数，再把图形条件转成多项式方程，最后求根。", sourceIds: ["needham"] },
  { id: "liye-ceyuan", year: 1248, yearLabel: "1248年", era: "宋元", dynasty: "金元之际", title: "《测圆海镜》圆城问题", people: "李冶", category: "数学方法", cold: true, tags: ["圆城", "几何代数", "方程", "测量"], summary: "《测圆海镜》围绕圆城测量问题展开，集中展示几何条件如何转成代数式。", principle: "多个几何距离关系可共同约束未知量，最终化为方程求解。", sourceIds: ["needham"] },
  { id: "song-spherical", year: 1100, yearLabel: "宋代", era: "宋元", dynasty: "宋代", title: "宋代球面三角与历算积累", people: "宋代历算家", category: "天文历法", cold: true, tags: ["球面", "三角", "历算", "坐标换算"], summary: "宋元天文计算中不断积累角度换算和球面位置处理经验。", principle: "天体位置需要在不同坐标系之间转换，角度关系成为历算关键。", sourceIds: ["needham"] },
  { id: "shoushi-calendar", year: 1281, yearLabel: "1281年", era: "宋元", dynasty: "元代", title: "郭守敬《授时历》", people: "郭守敬、王恂等", category: "天文历法", cold: false, tags: ["授时历", "回归年", "天文仪器", "历法改革"], summary: "《授时历》采用精密观测和新仪器，将一年长度定为365.2425日。", principle: "通过新仪器和多点观测校正回归年、朔望月和节气参数。", sourceIds: ["wiki-shoushi", "guo-study"] },
  { id: "guo-simplified-armilla", year: 1276, yearLabel: "13世纪后期", era: "宋元", dynasty: "元代", title: "郭守敬简仪", people: "郭守敬", category: "物理仪器", cold: false, tags: ["简仪", "赤道坐标", "角度", "观测"], summary: "简仪减少传统浑仪环圈干扰，提高天体位置测量效率。", principle: "把核心坐标环保留下来，简化结构，使观测视线更清楚。", sourceIds: ["guo-study", "wiki-shoushi"] },
  { id: "guo-gnomon", year: 1279, yearLabel: "13世纪后期", era: "宋元", dynasty: "元代", title: "郭守敬高表测影", people: "郭守敬", category: "天文历法", cold: false, tags: ["高表", "影长", "节气", "精密测量"], summary: "郭守敬改进圭表和高表，通过更长基准提高影长测量精度。", principle: "尺度越长，角度变化造成的影长差越明显，更便于分辨小误差。", sourceIds: ["guo-study", "wiki-shoushi"] },
  { id: "gaocheng-observatory", year: 1279, yearLabel: "13世纪后期", era: "宋元", dynasty: "元代", title: "登封观星台", people: "郭守敬团队", category: "物理仪器", cold: false, tags: ["观星台", "高表", "天文台", "测影"], summary: "登封观星台以大型建筑和测影装置结合，服务授时历观测。", principle: "把仪器尺度扩大为建筑尺度，提高稳定性和读数精度。", sourceIds: ["guo-study"] },
  { id: "yuan-observation-network", year: 1279, yearLabel: "1279年前后", era: "宋元", dynasty: "元代", title: "元代全国观测站网络", people: "郭守敬、王恂等", category: "天文历法", cold: true, tags: ["观测网络", "纬度", "数据", "历法"], summary: "授时历修订组织多地观测，形成大范围数据采集工程。", principle: "在不同纬度和地点同步采样，能分辨地方误差和普遍周期。", sourceIds: ["wiki-shoushi", "guo-study"] },
  { id: "guo-hydraulics", year: 1292, yearLabel: "13世纪后期", era: "宋元", dynasty: "元代", title: "郭守敬水利工程", people: "郭守敬", category: "工程工艺", cold: false, tags: ["水利", "运河", "测量", "都城供水"], summary: "郭守敬参与元大都水利和运河相关工程，体现测量与水工结合。", principle: "水利工程要同时处理地势、流量、渠道坡度和城市需求。", sourceIds: ["guo-study", "ctext-shuijing"] },
  { id: "siyuan", year: 1303, yearLabel: "1303年", era: "宋元", dynasty: "元代", title: "朱世杰《四元玉鉴》", people: "朱世杰", category: "数学方法", cold: true, tags: ["四元术", "多元方程", "消元", "代数"], summary: "《四元玉鉴》用天、地、人、物四个未知量表示多元高次方程。", principle: "先用多个未知量建立方程组，再通过消元逐步化简。", sourceIds: ["needham"] },
  { id: "zhu-series", year: 1303, yearLabel: "1303年", era: "宋元", dynasty: "元代", title: "朱世杰垛积与级数", people: "朱世杰", category: "数学方法", cold: true, tags: ["垛积", "级数", "求和", "递推"], summary: "朱世杰处理多类垛积求和问题，把堆叠数量转为级数关系。", principle: "层数变化可以抽象为数列，整体数量由求和公式得到。", sourceIds: ["needham"] },
  { id: "yuan-works", year: 1310, yearLabel: "元代", era: "宋元", dynasty: "元代", title: "元代回回司天台知识交流", people: "札马鲁丁等", category: "天文历法", cold: true, tags: ["中西交流", "伊斯兰天文", "仪器", "历表"], summary: "元代宫廷吸收伊斯兰天文仪器和历表知识，推动不同天文传统互动。", principle: "不同历法模型可通过同一天象进行比较，从而暴露参数差异。", sourceIds: ["needham"] },
  { id: "abacus-ming", year: 1500, yearLabel: "明代", era: "明清", dynasty: "明代", title: "算盘普及", people: "商人、账房与算师", category: "算学工具", cold: false, tags: ["算盘", "珠算", "商业", "位值"], summary: "明代以后算盘在商业、税务和日常计算中广泛普及。", principle: "算盘用梁和档固定十进位值，珠子的上下状态保存数字和中间结果。", sourceIds: ["needham"] },
  { id: "suanfa-tongzong", year: 1592, yearLabel: "1592年", era: "明清", dynasty: "明代", title: "程大位《算法统宗》", people: "程大位", category: "算学工具", cold: false, tags: ["珠算", "口诀", "商业计算", "算法普及"], summary: "《算法统宗》推动珠算算法普及，成为明清商业计算的重要读物。", principle: "算盘操作配合口诀，把加减乘除、开方和应用题流程化。", sourceIds: ["needham"] },
  { id: "abacus-root", year: 1592, yearLabel: "1592年", era: "明清", dynasty: "明代", title: "珠算开方算法", people: "程大位等算师", category: "算学工具", cold: true, tags: ["开方", "算盘", "口诀", "训练"], summary: "明清珠算书中保存开平方、开立方等较复杂算盘算法。", principle: "用算盘档位保存余数和试商，按口诀逐位逼近根。", sourceIds: ["needham"] },
  { id: "geometry-elements", year: 1607, yearLabel: "1607年", era: "明清", dynasty: "明代", title: "《几何原本》汉译", people: "徐光启、利玛窦", category: "数学方法", cold: false, tags: ["几何", "证明", "公理化", "中西会通"], summary: "徐光启与利玛窦合译欧几里得《几何原本》前六卷，引入新的证明体系和术语。", principle: "从定义、公设和公理出发层层推出命题，强调演绎证明。", sourceIds: ["needham"] },
  { id: "chongzhen-lishu", year: 1634, yearLabel: "1634年前后", era: "明清", dynasty: "明代", title: "《崇祯历书》", people: "徐光启、李天经、汤若望等", category: "天文历法", cold: false, tags: ["历法", "西法", "望远镜时代", "天文表"], summary: "《崇祯历书》汇集中西天文历算，推动明末历法改革。", principle: "用新的几何、三角和天文表改进日月五星位置推算。", sourceIds: ["needham"] },
  { id: "xuguangqi-survey", year: 1610, yearLabel: "17世纪初", era: "明清", dynasty: "明代", title: "徐光启测量与几何应用", people: "徐光启", category: "数学方法", cold: true, tags: ["测量", "几何", "实学", "比例"], summary: "徐光启重视几何在测量、水利和农政中的实用价值。", principle: "用比例、角度和图形证明为实际测量提供更稳固的方法。", sourceIds: ["needham"] },
  { id: "tiangong-paper", year: 1637, yearLabel: "1637年", era: "明清", dynasty: "明代", title: "《天工开物》造纸流程", people: "宋应星", category: "工程工艺", cold: false, tags: ["造纸", "竹料", "流程", "手工业"], summary: "《天工开物》记录斩竹、浸泡、蒸煮、抄纸、压榨、烘干等造纸流程。", principle: "把纤维处理、水中成形和干燥定型分成连续工序，保证纸张均匀。", sourceIds: ["wiki-tiangong", "needham"] },
  { id: "tiangong-metallurgy", year: 1637, yearLabel: "1637年", era: "明清", dynasty: "明代", title: "《天工开物》冶铸技术", people: "宋应星", category: "工程工艺", cold: false, tags: ["冶金", "铸造", "炉火", "金属"], summary: "书中记录采矿、冶炼、铸造和锻造流程，展示明代金属生产知识。", principle: "通过炉温、矿料、燃料和模具控制，把矿石转化为器物。", sourceIds: ["wiki-tiangong", "needham"] },
  { id: "tiangong-salt", year: 1637, yearLabel: "1637年", era: "明清", dynasty: "明代", title: "《天工开物》制盐技术", people: "宋应星", category: "工程工艺", cold: true, tags: ["制盐", "卤水", "蒸发", "生产"], summary: "《天工开物》记录海盐、井盐等多类制盐方式。", principle: "通过汲取卤水、过滤和蒸发结晶，把溶解盐分转化为固体盐。", sourceIds: ["wiki-tiangong", "needham"] },
  { id: "tiangong-gun", year: 1637, yearLabel: "1637年", era: "明清", dynasty: "明代", title: "《天工开物》火器工艺", people: "宋应星", category: "工程工艺", cold: true, tags: ["火器", "火药", "铸炮", "军事技术"], summary: "书中记录火药、火器和金属加工相关工艺，反映明代军事技术体系。", principle: "火器效果取决于药料、管体强度、密封和点火流程的配合。", sourceIds: ["wiki-tiangong", "needham"] },
  { id: "tiangong-loom", year: 1637, yearLabel: "1637年", era: "明清", dynasty: "明代", title: "《天工开物》纺织机械", people: "宋应星", category: "工程工艺", cold: true, tags: ["纺织", "织机", "传动", "流程"], summary: "《天工开物》记录蚕丝、棉麻和织造流程，呈现纺织机械与劳动组织。", principle: "纺织把纤维整理、成线、上机和交织按顺序连接成生产链。", sourceIds: ["wiki-tiangong"] },
  { id: "wangxichan", year: 1675, yearLabel: "17世纪后期", era: "明清", dynasty: "清初", title: "王锡阐《晓庵新法》", people: "王锡阐", category: "天文历法", cold: true, tags: ["民间天文学", "历算", "交食", "模型修正"], summary: "王锡阐吸收中西历算资源，独立研究日月食和行星运动。", principle: "比较不同历法模型和实测天象误差，修正参数并形成自己的推算方案。", sourceIds: ["needham"] },
  { id: "mei-wending", year: 1680, yearLabel: "17世纪后期", era: "明清", dynasty: "清代", title: "梅文鼎中西历算会通", people: "梅文鼎", category: "数学方法", cold: false, tags: ["历算", "中西会通", "三角", "考证"], summary: "梅文鼎系统研究传统数学与西方数学，推动清初数理考证。", principle: "通过比较概念、算法和证明，把不同知识传统接合起来。", sourceIds: ["needham"] },
  { id: "shuli-jingyun", year: 1723, yearLabel: "1723年", era: "明清", dynasty: "清代", title: "《数理精蕴》编成", people: "梅瑴成等奉敕编纂", category: "数学方法", cold: false, tags: ["官方教材", "几何", "三角", "测量"], summary: "《数理精蕴》汇编数学、几何、三角、测量等内容，是清代官方整理数理知识的重要成果。", principle: "把传统算法、西方几何和三角法纳入统一教材框架。", sourceIds: ["needham"] },
  { id: "lixiang-kaocheng", year: 1724, yearLabel: "18世纪前期", era: "明清", dynasty: "清代", title: "《历象考成》", people: "清代钦天监与传教士", category: "天文历法", cold: false, tags: ["历法", "天文表", "清代", "行星"], summary: "《历象考成》整理清代官方天文历法计算，吸收西方天文学表算。", principle: "用系统化表格和几何模型推算太阳、月亮和行星位置。", sourceIds: ["needham"] },
  { id: "kangxi-map", year: 1718, yearLabel: "1718年前后", era: "明清", dynasty: "清代", title: "《皇舆全览图》测绘", people: "清廷测绘团队", category: "工程工艺", cold: false, tags: ["地图", "经纬度", "测量", "全国测绘"], summary: "清代组织大规模测绘，编成《皇舆全览图》，提升全国地理坐标化表达。", principle: "通过天文测量、三角测量和路线勘测，把地面位置转为经纬度和地图。", sourceIds: ["needham"] },
  { id: "logarithms-qing", year: 1713, yearLabel: "18世纪初", era: "明清", dynasty: "清代", title: "对数表在清代历算中的使用", people: "清代历算家", category: "算学工具", cold: true, tags: ["对数", "表算", "乘除", "天文"], summary: "对数表传入后，被用于简化天文和三角计算中的复杂乘除。", principle: "把乘除转化为加减，降低大数计算和连续表算的劳动量。", sourceIds: ["needham"] },
  { id: "trig-qing", year: 1720, yearLabel: "18世纪前期", era: "明清", dynasty: "清代", title: "清代三角法教材化", people: "清代数学家", category: "数学方法", cold: true, tags: ["三角法", "测量", "天文", "教材"], summary: "三角法在清代官方和私家数学著作中逐渐教材化，用于测量和历算。", principle: "把角度与边长比例制成表格，复杂测量可转化为查表和比例运算。", sourceIds: ["needham"] },
  { id: "dai-zhen", year: 1770, yearLabel: "18世纪后期", era: "明清", dynasty: "清代", title: "戴震古算校勘与考证", people: "戴震", category: "数学方法", cold: true, tags: ["考证", "古算", "校勘", "清代学术"], summary: "戴震等清代学者通过校勘古算书，重新整理传统数理知识。", principle: "以版本、文字和算法互证，判断古书术文是否完整和合理。", sourceIds: ["needham"] },
  { id: "li-shanlan", year: 1859, yearLabel: "19世纪中期", era: "明清", dynasty: "清代晚期", title: "李善兰垛积与级数研究", people: "李善兰", category: "数学方法", cold: false, tags: ["级数", "垛积", "中西数学", "符号"], summary: "李善兰在传统垛积基础上吸收西方代数，发展级数和组合表达。", principle: "把堆垛求和和代数符号结合，扩展传统算法的表达能力。", sourceIds: ["needham"] },
  { id: "translation-modern-math", year: 1860, yearLabel: "19世纪中期", era: "明清", dynasty: "清代晚期", title: "近代数学术语翻译", people: "李善兰、伟烈亚力等", category: "数学方法", cold: false, tags: ["翻译", "代数", "微积分", "术语"], summary: "晚清译书创造和稳定大量现代数学术语，为近代科学教育铺路。", principle: "概念翻译要在古汉语资源和新知识结构之间建立对应关系。", sourceIds: ["needham"] },
  { id: "steamship-arsenal", year: 1866, yearLabel: "19世纪后期", era: "明清", dynasty: "清代晚期", title: "江南制造局工程译书", people: "徐寿、华蘅芳等", category: "工程工艺", cold: true, tags: ["工程", "译书", "机器", "近代转型"], summary: "江南制造局翻译和制造活动把机械、化学、工程知识引入中文技术体系。", principle: "通过译名、图纸和实验制造，把外来工程知识转为本土可操作流程。", sourceIds: ["needham"] }
];

const timelineData = achievementSeeds.map((item) => {
  const defaults = categoryDefaults[item.category] || categoryDefaults["数学方法"];
  return {
    ...item,
    cold: Boolean(item.cold),
    tags: item.tags || [],
    sourceIds: item.sourceIds || ["needham"],
    sources: (item.sourceIds || ["needham"])
      .map((id) => sourceMap.get(id)?.label)
      .filter(Boolean)
      .join("；"),
    value: item.value || defaults.value,
    algorithmPoint: item.algorithmPoint || defaults.algorithmPoint,
    steps: item.steps || defaults.steps
  };
});

const eraOrder = ["上古先秦", "秦汉", "魏晋南北朝", "隋唐", "宋元", "明清"];
const categoryColors = {
  "数学方法": "#0f7b68",
  "天文历法": "#2857a4",
  "算学工具": "#b98524",
  "物理仪器": "#c34832",
  "工程工艺": "#6e4fa1"
};

const coldFacts = timelineData
  .filter((item) => item.cold)
  .map((item) => ({
    title: item.title,
    era: item.era,
    summary: item.summary
  }));

let activeFilter = "全部";
let coldIndex = 0;

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
const referenceList = document.querySelector("#referenceList");
const totalCount = document.querySelector("#totalCount");

if (totalCount) totalCount.textContent = String(timelineData.length);

function normalize(text) {
  return String(text || "").trim().toLowerCase();
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
  const sourceNames = item.sourceIds
    .map((id) => sourceMap.get(id)?.label || "")
    .join(" ");
  const haystack = [
    item.title,
    item.people,
    item.category,
    item.dynasty,
    item.era,
    item.summary,
    item.principle,
    item.tags.join(" "),
    sourceNames
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
            <span>${group.items.length}项</span>
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

function renderSourceLinks(item) {
  const links = item.sourceIds
    .map((id) => sourceMap.get(id))
    .filter(Boolean)
    .map((source) => `
      <li>
        <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a>
        <span>${escapeHtml(source.type)}</span>
      </li>
    `)
    .join("");

  return `<ul class="source-list">${links}</ul>`;
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
          <h3>引用来源</h3>
          ${renderSourceLinks(item)}
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

function renderReferences() {
  if (!referenceList) return;
  referenceList.innerHTML = referenceSources
    .map((source) => `
      <article class="reference-card">
        <div>
          <strong>${escapeHtml(source.label)}</strong>
          <span>${escapeHtml(source.type)}</span>
        </div>
        <p>${escapeHtml(source.note)}</p>
        <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.url)}</a>
      </article>
    `)
    .join("");
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
renderReferences();
