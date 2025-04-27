
// Sample data for AI tools and applications
export interface Tool {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  description: string;
  imageUrl: string;
  detailContent: string;
  url?: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories?: Category[];
}

export const categories: Category[] = [
  {
    id: 'ai-tools',
    name: 'AI工具集',
    subCategories: [
      {
        id: 'text-generation',
        name: '文本生成',
        subCategories: [
          { id: 'copywriting', name: '文案写作' },
          { id: 'content-summarization', name: '内容摘要' },
        ]
      },
      {
        id: 'image-generation',
        name: '图像生成',
        subCategories: [
          { id: 'art', name: '艺术创作' },
          { id: 'photo-realistic', name: '照片级真实图像' },
        ]
      },
      { id: 'voice', name: '语音工具' },
      { id: 'video', name: '视频工具' },
    ]
  },
  {
    id: 'ai-applications',
    name: 'AI应用集',
    subCategories: [
      { id: 'productivity', name: '生产力工具' },
      { id: 'education', name: '教育应用' },
      { id: 'entertainment', name: '娱乐应用' },
    ]
  },
  {
    id: 'free-image-gen',
    name: '免费AI生图',
  },
];

export const tools: Tool[] = [
  {
    id: '1',
    name: 'TextMaster AI',
    category: 'ai-tools',
    subCategory: 'text-generation',
    description: '强大的AI文本生成器，可用于创建文章、博客和社交媒体内容',
    imageUrl: '/placeholder.svg',
    detailContent: `
      <h2>TextMaster AI - 专业级AI文本生成工具</h2>
      
      <p>TextMaster AI是一款领先的人工智能写作助手，专为内容创作者、营销人员和企业设计。它利用最先进的语言模型，帮助用户快速生成高质量、原创的文本内容。</p>
      
      <h3>主要功能</h3>
      <ul>
        <li>长文章生成：可创建最多5000字的结构化长文章</li>
        <li>多语言支持：支持超过40种语言的内容创建</li>
        <li>SEO优化：自动优化文本以提高搜索引擎排名</li>
        <li>风格调整：可调整为正式、休闲、幽默等不同写作风格</li>
        <li>内容改写：改写和优化现有内容</li>
      </ul>
      
      <p>无论是需要撰写营销文案、产品描述、博客文章，还是社交媒体内容，TextMaster AI都能帮助您节省时间并提供专业质量的文本输出。</p>
      
      <h3>如何使用</h3>
      <p>只需输入您的主题或关键词，选择所需的输出类型和长度，然后让TextMaster AI为您生成内容。您可以根据需要进一步编辑和调整生成的文本。</p>
      
      <h3>定价方案</h3>
      <p>提供免费基础版和多种付费方案，满足不同用户需求。专业版月费仅99元，可无限生成内容。</p>
    `,
  },
  {
    id: '2',
    name: 'ImageCraft AI',
    category: 'ai-tools',
    subCategory: 'image-generation',
    description: '革命性的AI图像生成工具，轻松创建专业级图片',
    imageUrl: '/placeholder.svg',
    detailContent: `
      <h2>ImageCraft AI - 下一代AI图像生成平台</h2>
      
      <p>ImageCraft AI是一款功能强大的AI图像生成工具，使用最先进的扩散模型技术，让用户能够通过简单的文本描述创建令人惊叹的视觉内容。</p>
      
      <h3>核心特点</h3>
      <ul>
        <li>高清输出：可生成最高4K分辨率的图像</li>
        <li>多样化风格：支持照片写实、动漫、油画、水彩等多种艺术风格</li>
        <li>精确控制：细致的提示工程和参数调整选项</li>
        <li>批量生成：同时生成多个变体供选择</li>
        <li>编辑功能：内置图像修改和优化工具</li>
      </ul>
      
      <p>从社交媒体内容到广告设计，从插图创作到概念艺术，ImageCraft AI都能满足各种创意需求，为您节省设计时间和成本。</p>
      
      <h3>使用场景</h3>
      <p>营销人员可用于创建社交媒体图片、广告素材；设计师可用于概念设计和灵感获取；电商卖家可用于产品展示图生成；普通用户可用于个人创意表达。</p>
      
      <h3>价格</h3>
      <p>基础版免费使用，高级功能需订阅专业版，月费起价129元。</p>
    `,
  },
  {
    id: '3',
    name: 'VoiceGenius',
    category: 'ai-tools',
    subCategory: 'voice',
    description: '专业AI语音合成和转换工具，支持多种语言和声音风格',
    imageUrl: '/placeholder.svg',
    detailContent: `
      <h2>VoiceGenius - 专业AI语音解决方案</h2>
      
      <p>VoiceGenius是一款综合性AI语音工具，提供高质量的文本转语音、语音克隆和语音编辑功能。无论是创建有声书内容、视频配音还是虚拟助手语音，VoiceGenius都能满足您的需求。</p>
      
      <h3>功能亮点</h3>
      <ul>
        <li>自然流畅的语音合成，接近人类真实语音效果</li>
        <li>支持100多种语言和方言，包括各种中文口音</li>
        <li>200+预设声音模板，覆盖不同年龄、性别和风格</li>
        <li>语音克隆技术，只需3分钟音频样本即可复制您的声音</li>
        <li>情感调节和语调控制，实现丰富的表达效果</li>
      </ul>
      
      <p>VoiceGenius采用最新的深度学习技术，不断优化语音质量和自然度，为用户提供最逼真的AI语音体验。</p>
      
      <h3>应用场景</h3>
      <p>内容创作者可用于制作播客和有声内容；营销团队可用于广告和宣传片配音；教育机构可用于课程音频生成；开发者可通过API集成到自己的应用中。</p>
      
      <h3>套餐选择</h3>
      <p>提供按字计费和月度订阅两种付费模式，大容量用户可咨询定制企业方案。</p>
    `,
  },
  {
    id: '4',
    name: 'LearningBuddy AI',
    category: 'ai-applications',
    subCategory: 'education',
    description: '个性化AI学习助手，帮助学生提高学习效率和成绩',
    imageUrl: '/placeholder.svg',
    detailContent: `
      <h2>LearningBuddy AI - 您的智能学习伙伴</h2>
      
      <p>LearningBuddy AI是一款专为学生设计的智能学习助手应用，结合人工智能技术为用户提供个性化学习体验。无论是小学生、中学生还是大学生，都能从这款应用中获益。</p>
      
      <h3>核心功能</h3>
      <ul>
        <li>智能题目解析：拍照上传题目，获得详细步骤解答</li>
        <li>个性化学习计划：根据学习进度和弱点制定学习路径</li>
        <li>互动式学习内容：通过问答和测验加深理解</li>
        <li>多学科覆盖：数学、物理、化学、语言等全面支持</li>
        <li>学习数据分析：追踪学习进度和成绩变化</li>
      </ul>
      
      <p>LearningBuddy AI采用适应性学习算法，能够理解每个学生的学习风格和需求，提供最适合的学习内容和方法。</p>
      
      <h3>适用人群</h3>
      <p>小学到大学各阶段学生；备考各类考试的考生；需要自学新知识的成年人；希望提高教学效果的教师。</p>
      
      <h3>会员权益</h3>
      <p>基础功能免费使用，高级功能需订阅会员。学生特惠价每月39元，家庭共享套餐每月99元可供5人使用。</p>
    `,
  },
  {
    id: '5',
    name: 'DreamCanvas',
    category: 'free-image-gen',
    description: '完全免费的AI艺术创作平台，无需技术背景即可创作精美图像',
    imageUrl: '/placeholder.svg',
    detailContent: `
      <h2>DreamCanvas - 免费AI艺术创作平台</h2>
      
      <p>DreamCanvas是一款对所有用户完全免费的AI图像生成工具，致力于让每个人都能轻松体验AI艺术创作的乐趣。无需复杂的技术知识，只需输入文本描述，即可创建令人惊叹的视觉艺术作品。</p>
      
      <h3>平台特色</h3>
      <ul>
        <li>完全免费：核心功能对所有用户永久免费</li>
        <li>简洁界面：用户友好的设计，无需学习曲线</li>
        <li>多种艺术风格：包括油画、水彩、像素艺术等20多种风格选项</li>
        <li>社区分享：展示作品并获取灵感</li>
        <li>无水印导出：下载的图像没有任何水印</li>
      </ul>
      
      <p>DreamCanvas采用优化的AI模型，即使在有限的计算资源下也能提供良好的图像质量，保证所有用户都能获得满意的创作体验。</p>
      
      <h3>创作流程</h3>
      <p>1. 输入文字描述您想创建的图像<br>
         2. 选择喜欢的艺术风格<br>
         3. 等待几秒钟生成结果<br>
         4. 下载或分享您的作品</p>
      
      <h3>使用限制</h3>
      <p>免费用户每天可生成20张标准分辨率图像。支持平台发展的用户可获得额外的每日配额和更高分辨率选项。</p>
    `,
  },
  {
    id: '6',
    name: 'VideoForge AI',
    category: 'ai-tools',
    subCategory: 'video',
    description: 'AI驱动的视频创作工具，从脚本到成片全流程支持',
    imageUrl: '/placeholder.svg',
    detailContent: `
      <h2>VideoForge AI - 革命性视频创作平台</h2>
      
      <p>VideoForge AI是一款综合性AI视频制作工具，将文字转化为引人入胜的视频内容。无论您是社交媒体创作者、营销专业人士还是教育工作者，都能利用这一工具大幅提升视频创作效率。</p>
      
      <h3>强大功能</h3>
      <ul>
        <li>文本到视频：输入脚本，自动生成完整视频</li>
        <li>AI配音：内置多语言、多声音风格的配音系统</li>
        <li>智能剪辑：AI理解内容，优化剪辑和转场效果</li>
        <li>丰富模板：数百个专业设计的视频模板</li>
        <li>素材生成：自动创建相关的视觉元素和图表</li>
      </ul>
      
      <p>VideoForge AI通过深度学习算法理解您的内容核心，自动选择合适的视觉元素、配乐和剪辑风格，创建专业水准的视频作品。</p>
      
      <h3>典型用例</h3>
      <p>短视频创作、产品演示、教育内容、新闻简报、营销广告、企业培训等各类视频内容。特别适合需要定期生产大量视频内容的个人和组织。</p>
      
      <h3>价格策略</h3>
      <p>提供基础版(月费89元)、专业版(月费199元)和企业版(定制价格)不同层级服务。新用户可享7天免费试用。</p>
    `,
  }
];

export const getToolsByCategory = (categoryId: string, subCategoryId?: string): Tool[] => {
  if (subCategoryId) {
    return tools.filter(tool => 
      tool.category === categoryId && tool.subCategory === subCategoryId
    );
  }
  
  return tools.filter(tool => tool.category === categoryId);
};

export const getTool = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getFriendlyLinks = [
  { name: "AI研究中心", url: "#" },
  { name: "数字创意平台", url: "#" },
  { name: "开发者社区", url: "#" },
  { name: "科技资讯网", url: "#" },
  { name: "创新工场", url: "#" },
];
