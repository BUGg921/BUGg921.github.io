<template>
  <a
    href="https://github.com/BUGg921"
    target="_blank"
    rel="noreferrer"
    aria-label="访问 BUGg921 的 GitHub"
    class="github-card pointer-events-auto block h-full w-full overflow-hidden rounded-[10px]"
  >
    <div class="box h-full w-full">
      <span class="orb orb-left" aria-hidden="true" />
      <span class="orb orb-right" aria-hidden="true" />

      <div class="content">
        <div class="brand-row">
          <span class="logo-wrap" aria-hidden="true">
            <span class="i-carbon-logo-github logo" />
          </span>
          <span class="brand-name">GitHub</span>
        </div>

        <div class="profile-row">
          <span>@BUGg921</span>
          <span class="visit">
            查看主页
            <span class="i-carbon-arrow-up-right arrow" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.github-card {
  color: #fff;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
}

.box {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 24%, rgba(255, 255, 255, 0.32), transparent 24%),
    linear-gradient(125deg, #6d28d9 0%, #4f46e5 45%, #0284c7 72%, #06b6d4 100%);
}

.box::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
  content: '';
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0.55), transparent 78%);
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(20px, 4vw, 34px);
}

.brand-row,
.profile-row,
.visit {
  display: flex;
  align-items: center;
}

.brand-row {
  gap: clamp(12px, 2vw, 20px);
}

.logo-wrap {
  display: grid;
  width: clamp(42px, 5vw, 58px);
  height: clamp(42px, 5vw, 58px);
  flex: none;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.94);
  color: #111827;
  box-shadow: 0 10px 30px rgba(10, 17, 48, 0.25);
}

.logo {
  width: 58%;
  height: 58%;
}

.brand-name {
  color: #fff;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.95;
  text-shadow: 0 3px 14px rgba(15, 23, 42, 0.28);
}

.profile-row {
  justify-content: space-between;
  gap: 16px;
  color: rgba(255, 255, 255, 0.86);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(12px, 1.5vw, 16px);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.visit {
  gap: 6px;
  white-space: nowrap;
}

.arrow {
  width: 1.15em;
  height: 1.15em;
  transition: transform 180ms ease;
}

.github-card:hover .arrow {
  transform: translate(3px, -3px);
}

.orb {
  position: absolute;
  z-index: 0;
  border-radius: 999px;
  filter: blur(2px);
  pointer-events: none;
}

.orb-left {
  right: 22%;
  bottom: -72px;
  width: 170px;
  height: 170px;
  background: rgba(196, 181, 253, 0.2);
}

.orb-right {
  top: -80px;
  right: -36px;
  width: 190px;
  height: 190px;
  background: rgba(103, 232, 249, 0.25);
}

@media (max-width: 520px) {
  .content {
    padding: 18px;
  }

  .profile-row {
    font-size: 11px;
  }

  .visit {
    font-size: 0;
  }

  .arrow {
    width: 18px;
    height: 18px;
  }
}
</style>
