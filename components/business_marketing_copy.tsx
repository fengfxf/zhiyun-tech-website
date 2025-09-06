// 标记为客户端组件
'use client';

import React, { useState, useEffect } from 'react';
import '../styles/business_marketing.css';
import { useLanguage } from '@/contexts/LanguageContext';
// Remove the next/router import
// import { useRouter } from 'next/router';

const BusinessMarketing: React.FC = () => {
  // Remove the useRouter call
  // const router = useRouter();
  
  // 在组件顶部添加结构化数据
  useEffect(() => {
    // 设置页面标题和元数据
    document.title = "企业数字化转型解决方案 - 智能体与低代码开发专家 | 栉云科技";
    
    // 添加元描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台、CRM/ERP/MES系统/小程序/APP开发，助力企业全链路智能升级。');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', '栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台、CRM/ERP/MES系统/小程序/APP开发，助力企业全链路智能升级。');
      document.head.appendChild(metaDescription);
    }
  
  // 添加JSON-LD结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "企业数字化转型解决方案",
    "description": "栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台、CRM/ERP/MES系统与小程序APP开发，助力企业全链路智能升级。",
    "brand": {
      "@type": "Brand",
      "name": "栉云科技"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100+",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "200000-2000000 RMB",
      "priceCurrency": "CNY",
      "availability": "https://schema.org/InStock"
    }
  };
  
  let script = document.querySelector('script[type="application/ld+json"]');
  if (script) {
    script.textContent = JSON.stringify(structuredData);
  } else {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
  }, []); // Remove router.pathname from dependencies

  return (
    <div className="products-container">
      {/* 顶部横幅 */}
      <section className="hero-section">
        <h1>企业数字化转型解决方案 - 智能体与低代码开发专家</h1>
        <div>公司定位：我们不仅是软件开发者，更是您企业的<strong>数字化战略合作伙伴</strong>。我们整合<strong>Agent（智能体）、AI助手、数据洞察（Insight）</strong>与<strong>核心业务系统（CRM/ERP/MES）</strong>，基于强大的<strong>低代码PAAS平台</strong>，为您快速构建定制化的<strong>小程序与APP</strong>，驱动业务全链路智能升级。</div>
      </section>

      {/* 产品矩阵部分 */}
      <section className="product-matrix">
        <h2>一、全能产品矩阵 - 满足您的全方位数字化需求</h2>
        
        <div className="matrix-category">
          <h3>1. 智能核心（AI Core）</h3>
          <ul>
            <li>
              <strong>AI智能助手与Agent：</strong>不再是简单的聊天机器人。我们是部署于您业务流中的"数字员工"，能自主处理任务、跨系统协调、提供预测性建议。例如：销售Agent自动追踪线索、生产Agent预警设备故障。
            </li>
            <li>
              <strong>数据洞察（Insight）：</strong>打通所有系统数据孤岛，通过机器学习模型，将历史数据转化为前瞻性的<strong>业务洞察</strong>（如：客户流失预测、市场需求趋势、生产效率瓶颈）。
            </li>
          </ul>
        </div>

        <div className="matrix-category">
          <h3>2. 业务基石（Business Foundation）</h3>
          <ul>
            <li>
              <strong>CRM（客户关系管理）：</strong>智能型CRM，集成AI助手，自动评分线索、推荐最佳跟进策略，提升转化率。
            </li>
            <li>
              <strong>ERP（企业资源计划）：</strong>现代化云ERP，强调流程自动化与实时数据，助力精准决策。
            </li>
            <li>
              <strong>MES（制造执行系统）：</strong>连接管理层与车间层，实现生产全流程透明化、精细化管理和质量追溯。
            </li>
          </ul>
        </div>

        <div className="matrix-category">
          <h3>3. 开发引擎（Development Engine）</h3>
          <ul>
            <li>
              <strong>低代码开发平台：</strong>允许您的业务人员通过拖拽方式构建简单应用，极大释放IT资源，加速创新试错。
            </li>
            <li>
              <strong>PAAS平台：</strong>提供强大的后端即服务（BaaS）、数据库、中间件和API管理，是所有定制化开发的<strong>技术基石</strong>，确保系统的稳定性、安全性与高可扩展性。
            </li>
          </ul>
        </div>

        <div className="matrix-category">
          <h3>4. 前端触达（Front-End Touch）</h3>
          <ul>
            <li>
              <strong>小程序 & APP开发：</strong>基于上述强大平台，我们能以更快的速度、更低的成本，开发出体验卓越的移动端应用，直达您的用户与员工。
            </li>
          </ul>
        </div>
      </section>

      {/* 对比表格部分 */}
      <section className="comparison-section">
        <h2>二、客户最关心的参数对比：我们 vs. 传统开发 vs. 标准SaaS</h2>
        <p className="section-intro">为了让您更清晰地评估我们的价值，我们提供以下权威对比分析：</p>
        
        <div className="comparison-table">
          <div className="comparison-header">
            <div className="comparison-cell">项目</div>
            <div className="comparison-cell">我们的定制化方案</div>
            <div className="comparison-cell">传统外包开发</div>
            <div className="comparison-cell">标准SaaS产品</div>
          </div>
          
          {comparisonData.map((row, index) => (
            <div className="comparison-row" key={index}>
              <div className="comparison-cell comparison-title">{row.title}</div>
              <div className="comparison-cell">
                <div dangerouslySetInnerHTML={{ __html: row.ourSolution }} />
                {row.ourRating && (
                  <div className="rating">
                    {"★".repeat(row.ourRating)}{"☆".repeat(5 - row.ourRating)}
                  </div>
                )}
              </div>
              <div className="comparison-cell">
                <div dangerouslySetInnerHTML={{ __html: row.traditional }} />
                {row.traditionalRating && (
                  <div className="rating">
                    {"★".repeat(row.traditionalRating)}{"☆".repeat(5 - row.traditionalRating)}
                  </div>
                )}
              </div>
              <div className="comparison-cell">
                <div dangerouslySetInnerHTML={{ __html: row.standardSaaS }} />
                {row.standardSaaSRating && (
                  <div className="rating">
                    {"★".repeat(row.standardSaaSRating)}{"☆".repeat(5 - row.standardSaaSRating)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="conclusion">
          <h3>权威结论：</h3>
          <p>选择<strong>标准SaaS</strong>适用于通用、简单的业务场景，追求快速上线和最低成本，但牺牲了定制性和数据控制权。</p>
          <p>选择<strong>传统外包</strong>适用于有巨额预算且需求极其复杂稳定的超大型项目，但面临周期长、风险高、后期运维难的挑战。</p>
          <p>选择<strong>我们的方案</strong>，您是在投资一个<strong>"活"的数字化生态系统</strong>。它兼具<strong>定制化的深度</strong>与<strong>平台化的效率</strong>，尤其适合追求<strong>长期数字化转型、希望用数据智能驱动业务增长</strong>的中大型企业。</p>
        </div>
      </section>

      {/* 开发与运维详情部分 */}
      <section className="development-section">
        <h2>三、开发与运维详情</h2>
        
        <div className="dev-detail">
          <h3>1. 开发流程与周期（典型项目）</h3>
          <ul>
            <li><strong>需求调研与方案设计（1-2个月）：</strong>与您的业务团队深度协作，明确痛点，输出权威的《业务蓝图与技术方案》。</li>
            <li><strong>敏捷开发与迭代（2-4个月）：</strong>基于低代码PAAS平台，以2周为一个冲刺周期，持续交付可用的功能模块，请您全程参与验证。</li>
            <li><strong>测试与上线（1个月）：</strong>进行UAT（用户验收测试）、压力测试及数据迁移，确保平稳上线。</li>
            <li><strong>总周期：</strong><strong>4-7个月</strong>，即可完成一个从CRM到小程序端的全面数字化转型项目。</li>
          </ul>
        </div>

        <div className="dev-detail">
          <h3>2. 开发费用构成</h3>
          <p>费用并非模糊报价，而是基于透明的模块化结构：</p>
          <ul>
            <li><strong>PAAS平台授权费：</strong>一次性或年费，是效率的基石。</li>
            <li><strong>业务模块开发费：</strong>（如：CRM模块、MES模块、AI助手功能），按人天计算。</li>
            <li><strong>第三方服务费：</strong>（如：短信、云服务器、特定AI接口）。</li>
            <li><strong>项目实施费：</strong>项目经理、架构师等高阶资源投入。</li>
          </ul>
          <p>我们提供<strong>固定总价合同</strong>或<strong>时间与材料合同</strong>，最大限度控制您的预算风险。</p>
        </div>

        <div className="dev-detail">
          <h3>3. 运维维护（成功上线后的保障）</h3>
          <ul>
            <li><strong>运维周期：</strong>通常以<strong>年</strong>为单位签订服务协议，提供7x24小时不同等级的技术支持。</li>
            <li><strong>运维费用：</strong>约为<strong>项目初开发成本的15%-20%/年</strong>。</li>
            <li><strong>服务内容包含：</strong>
              <ul>
                <li><strong>系统监控与保障：</strong>保证系统99.9%的可用性。</li>
                <li><strong>定期安全更新与漏洞修补：</strong>抵御外部威胁。</li>
                <li><strong>日常问题解答与故障排除：</strong>专属技术支持渠道。</li>
                <li><strong>小幅业务优化与升级：</strong>适应业务的微调。</li>
                <li><strong>技术运营报告：</strong>定期提供系统健康度和性能报告。</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* 为什么选择我们部分 */}
      <section className="why-us-section">
        <h2>四、为什么选择我们？权威性的基石</h2>
        
        <div className="reasons">
          <div className="reason">
            <h3>1. 方法论权威：</h3>
            <p>我们遵循国际先进的<strong>敏捷开发（Agile）</strong>与<strong>DevOps</strong>理念，确保项目高质量交付。</p>
          </div>

          <div className="reason">
            <h3>2. 技术栈权威：</h3>
            <p>我们采用业界主流且前沿的技术（如：Kubernetes, Docker, React, Spring Cloud, TensorFlow等），保证系统未来5-10年的技术生命力。</p>
          </div>

          <div className="reason">
            <h3>3. 案例权威：</h3>
            <p>我们已为[<strong>行业一</strong>]、[<strong>行业二</strong>]的众多领先企业成功交付了类似整合项目，并取得了[<strong>可量化的效益，如：效率提升30%，成本降低20%</strong>]——我们有详细的<strong>案例研究（Case Study）</strong>可供您参考。</p>
          </div>

          <div className="reason">
            <h3>4. 合作模式权威：</h3>
            <p>我们倡导<strong>"共建共营"</strong>模式，不仅是卖给您的软件，更是派驻专家团队，将我们的技术能力和您的业务知识深度融合，共同成长。</p>
          </div>
        </div>

        <div className="next-steps">
          <h3>下一步行动建议：</h3>
          <p>我们诚挚邀请您参与一场为期半天的<strong>【数字化转型工作坊】</strong>。我们将派架构师和业务顾问团队，与您一同梳理核心需求，并为您输出一份初步的、具有高度可行性的《技术方案与投资回报率（ROI）分析报告》——<strong>这一切都是免费的</strong>，旨在让您毫无压力地评估我们的价值。</p>
        </div>
      </section>

      <footer className="document-footer">
        <p>最后修订日期：2023年10月27日</p>
        <p className="disclaimer">注意：本文档中所有费用和周期均为基于中等复杂度项目的估算，最终价格需根据您的具体需求进行评估。所有技术名称和商标均归于其各自所有者。</p>
      </footer>
    </div>
  );
};

// 对比表格数据优化
const comparisonData = [
  {
    title: "核心优势",
    ourSolution: "<strong>量身定制、高度集成、数据驱动、AI赋能</strong>",
    traditional: "功能满足度高",
    standardSaaS: "<strong>开箱即用、成本最低</strong>"
  },
  {
    title: "开发周期",
    ourSolution: "<strong>中速 (2-6个月)</strong><br/>（得益于低代码PAAS平台，效率提升50%+）",
    traditional: "<strong>漫长 (6-18个月+)</strong><br/>（从零开始，风险不可控）",
    standardSaaS: "<strong>极速 (1-4周)</strong><br/>（仅需配置和培训）"
  },
  {
    title: "一次性开发费用",
    ourSolution: "<strong>中高 (20万 - 200万+ RMB)</strong><br/>（分阶段付费，价值与投入成正比）",
    traditional: "<strong>极高 (50万 - 500万+ RMB)</strong><br/>（人力成本高，需求变更代价大）",
    standardSaaS: "<strong>低 (几千 - 几十万/年)</strong><br/>（按年订阅，无初始开发费）"
  },
  {
    title: "运维费用（年）",
    ourSolution: "<strong>合同额的15%-20%</strong><br/>（含系统维护、安全升级、技术支持、小功能优化）",
    traditional: "<strong>不确定，高昂</strong><br/>（需自行组建团队或高价购买服务）",
    standardSaaS: "<strong>订阅费的10%-20%</strong><br/>（或已包含在订阅费中）"
  },
  {
    title: "灵活性/扩展性",
    ourSolution: "完全可定制，随业务发展灵活扩展",
    traditional: "修改成本高，扩展周期长",
    standardSaaS: "功能固定，难以满足个性化需求",
    ourRating: 5,
    traditionalRating: 2,
    standardSaaSRating: 2
  },
  {
    title: "数据所有权与安全",
    ourSolution: "数据完全归客户所有，提供企业级安全保障",
    traditional: "数据归客户所有，但需自行负责安全",
    standardSaaS: "数据存储在服务商服务器，存在隐私风险",
    ourRating: 5,
    traditionalRating: 5,
    standardSaaSRating: 1
  },
  {
    title: "与现有系统集成度",
    ourSolution: "",
    traditional: "",
    standardSaaS: "",
    ourRating: 5,
    traditionalRating: 3,
    standardSaaSRating: 2
  },
  {
    title: "AI与自动化能力",
    ourSolution: "",
    traditional: "",
    standardSaaS: "",
    ourRating: 5,
    traditionalRating: 1,
    standardSaaSRating: 2
  }
];

export default BusinessMarketing;