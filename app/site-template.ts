export const siteTemplate = `
  <div class="site-shell">
    <a class="skip-link" href="#main">跳到主要内容</a>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="回到首页" @click="closeMenu">
        <span class="brand-mark">一</span>
        <span class="brand-copy">
          <strong>个人空间</strong>
          <small>PERSONAL LAB</small>
        </span>
      </a>

      <nav id="site-navigation" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="主导航">
        <a href="#work" @click="closeMenu">正在做</a>
        <a href="#tools" @click="closeMenu">工具</a>
        <a href="#notes" @click="closeMenu">文章</a>
        <a href="#about" @click="closeMenu">关于</a>
      </nav>

      <a class="header-cta" href="#contact">保持联系 <span aria-hidden="true">↗</span></a>

      <button
        class="menu-button"
        type="button"
        aria-label="打开或关闭导航"
        aria-controls="site-navigation"
        :aria-expanded="String(menuOpen)"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span>
      </button>
    </header>

    <main id="main">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> 独立开发 · 长期写作 · 持续学习</p>
          <h1 id="hero-title">把好奇心，<br /><em>做成能用的东西。</em></h1>
          <p class="hero-intro">
            这里是我的个人数字空间。我会把正在做的项目、顺手的小工具，
            以及值得反复阅读的思考，慢慢放到这里。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#work">看看我在做什么 <span aria-hidden="true">↓</span></a>
            <a class="text-link" href="#about">先认识一下我 <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div class="hero-object" aria-label="个人网站建设状态卡片">
          <div class="object-topline">
            <span>BUILD LOG / 001</span>
            <span class="live-indicator"><i></i> ONLINE</span>
          </div>
          <div class="orbit-field" aria-hidden="true">
            <span class="orbit orbit-one"></span>
            <span class="orbit orbit-two"></span>
            <span class="core">∞</span>
            <span class="satellite satellite-one"></span>
            <span class="satellite satellite-two"></span>
          </div>
          <div class="object-caption">
            <p>当前阶段</p>
            <strong>正在搭建一片<br />属于自己的互联网角落</strong>
          </div>
          <div class="object-meta">
            <span><b>03</b> 工具构想</span>
            <span><b>12</b> 写作主题</span>
            <span><b>OPEN</b> 持续更新</span>
          </div>
        </div>
      </section>

      <div class="ticker" aria-hidden="true">
        <div class="ticker-track">
          <span>BUILD IN PUBLIC</span><i>✦</i><span>MAKE IT USEFUL</span><i>✦</i><span>KEEP LEARNING</span><i>✦</i>
          <span>BUILD IN PUBLIC</span><i>✦</i><span>MAKE IT USEFUL</span><i>✦</i><span>KEEP LEARNING</span><i>✦</i>
        </div>
      </div>

      <section class="section work-section" id="work" aria-labelledby="work-title">
        <div class="section-heading">
          <p class="section-index">01 / NOW</p>
          <h2 id="work-title">我正在做的事</h2>
          <p>保持小步迭代，把想法推进到真正能被使用的那一步。</p>
        </div>

        <div class="work-grid">
          <article class="work-card work-card-featured">
            <div class="card-kicker"><span>FOCUS</span><b>进行中</b></div>
            <h3>这个个人网站</h3>
            <p>不只是一张名片，也是一块可以不断扩建的工作台。工具、博客和项目档案都会从这里长出来。</p>
            <div class="card-progress" aria-label="项目进度 35%"><span></span></div>
            <div class="card-footer"><span>Vue 3 · Sites</span><span>35%</span></div>
          </article>

          <article class="work-card">
            <div class="card-number">A</div>
            <div>
              <p class="card-label">EXPERIMENTS</p>
              <h3>把重复工作变成工具</h3>
              <p>从自己每天会遇到的麻烦出发，做简单、专注、没有学习成本的小产品。</p>
            </div>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>

          <article class="work-card">
            <div class="card-number">B</div>
            <div>
              <p class="card-label">WRITING</p>
              <h3>建立可复用的知识</h3>
              <p>写下过程、判断与踩过的坑，让一次学习变成下一次解决问题的起点。</p>
            </div>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section class="section tools-section" id="tools" aria-labelledby="tools-title">
        <div class="section-heading heading-row">
          <div>
            <p class="section-index">02 / TOOLS</p>
            <h2 id="tools-title">即将上线的小工具</h2>
          </div>
          <p>先把入口留在这里。每完成一个，它就会从“构想”变成可以直接使用的页面。</p>
        </div>

        <div class="tools-grid">
          <article class="tool-card tool-card-dark">
            <div class="tool-icon" aria-hidden="true">Aa</div>
            <div class="tool-status">构想中</div>
            <h3>文本整理箱</h3>
            <p>把零散文本快速清洗、转换、排版，减少重复的复制与修改。</p>
            <div class="tool-tags"><span>文本</span><span>效率</span></div>
          </article>

          <article class="tool-card tool-card-green">
            <div class="tool-icon" aria-hidden="true">⌁</div>
            <div class="tool-status">计划中</div>
            <h3>灵感计时器</h3>
            <p>用一段足够短的专注时间，让突然出现的想法真正开始发生。</p>
            <div class="tool-tags"><span>专注</span><span>本地优先</span></div>
          </article>

          <article class="tool-card tool-card-paper">
            <div class="tool-icon" aria-hidden="true">#</div>
            <div class="tool-status">收集中</div>
            <h3>开发速查册</h3>
            <p>收藏那些总会忘记、但查到以后只需要十秒就能解决的问题。</p>
            <div class="tool-tags"><span>开发</span><span>知识库</span></div>
          </article>
        </div>
      </section>

      <section class="section notes-section" id="notes" aria-labelledby="notes-title">
        <div class="section-heading heading-row">
          <div>
            <p class="section-index">03 / NOTES</p>
            <h2 id="notes-title">最近想写的文章</h2>
          </div>
          <span class="coming-badge">BLOG · 即将开放</span>
        </div>

        <div class="notes-list">
          <article class="note-row">
            <time datetime="2026">01</time>
            <div><p>数字花园</p><h3>为什么我要重新拥有一个个人网站</h3></div>
            <span>6 MIN READ</span><i aria-hidden="true">↗</i>
          </article>
          <article class="note-row">
            <time datetime="2026">02</time>
            <div><p>独立开发</p><h3>从“这个步骤好麻烦”开始做一个工具</h3></div>
            <span>8 MIN READ</span><i aria-hidden="true">↗</i>
          </article>
          <article class="note-row">
            <time datetime="2026">03</time>
            <div><p>学习系统</p><h3>让一次解决问题的过程可以被反复复用</h3></div>
            <span>5 MIN READ</span><i aria-hidden="true">↗</i>
          </article>
        </div>
      </section>

      <section class="section about-section" id="about" aria-labelledby="about-title">
        <div class="about-aside">
          <p class="section-index">04 / ABOUT</p>
          <div class="portrait-placeholder" aria-hidden="true">
            <span>YOUR<br />PHOTO</span>
          </div>
          <small>这里可以换成你的照片<br />或一句更私人的签名</small>
        </div>

        <div class="about-copy">
          <p class="about-lead">我相信，最好的学习方式之一，<br />是<strong>创造一些真实存在的东西。</strong></p>
          <div class="about-columns">
            <p>我对技术、产品和效率工具保持长期兴趣。比起收藏更多信息，我更想把看过的、试过的、失败过的经验，整理成能继续使用的作品。</p>
            <p>这个网站不会一次完成。它会跟着我的项目和思考一起生长：先有一个清晰的首页，再慢慢长出工具、文章、项目档案，以及更多意外的分支。</p>
          </div>
          <div class="principles">
            <span>01 <b>先做出来</b></span>
            <span>02 <b>保持简单</b></span>
            <span>03 <b>持续更新</b></span>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact" aria-labelledby="contact-title">
        <p class="section-index">05 / SAY HELLO</p>
        <h2 id="contact-title">如果你也在做<br /><em>有意思的事情，</em><br />很高兴认识你。</h2>
        <p>社交链接和邮箱可以在下一步换成你的真实信息。</p>
        <div class="contact-links" aria-label="待补充的联系方式">
          <span>GITHUB · 待连接</span>
          <span>EMAIL · 待连接</span>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="brand footer-brand">
        <span class="brand-mark">一</span>
        <span class="brand-copy"><strong>个人空间</strong><small>MADE WITH CURIOSITY</small></span>
      </div>
      <p>持续建设中 · 2026</p>
      <a href="#top">回到顶部 ↑</a>
    </footer>
  </div>
`;
