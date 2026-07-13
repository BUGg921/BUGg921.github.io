# BUGg921 Personal Site

BUGg921 的个人网站，用于发布工具、文章与项目记录。

## 本地开发

```bash
corepack enable
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
```

## 发布

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到：

<https://bugg921.github.io/>

## 来源与许可

本项目直接以 [6owen/arvin](https://github.com/6owen/arvin) 的 Vue 3 源码为基线进行个人化修改，克隆基线提交为 `6c61a2f`。

设计来自于 [Arvin](https://github.com/6owen/arvin)。原项目使用 MIT License，本仓库保留其许可文件。
