# warmup-coach-miniapp-native

热身教练 · 原生微信小程序 零服务器、零维护的微信小程序版热身教练。 上线步骤（3 步） 1. 注册小程序账号 访问 https://mp.weixin.qq.com/ → 注册 → 选择「小程序」→ 完成认证 → 获取 **AppID** 2. 配置 AppID 打开 `project.config.json`，将 `YOUR_APPID_HERE` 替换为你的 AppID： "appid": "wx1234567890abcdef"

## 用途与 Target 判定

热身教练小程序原生

- 移动端：需要
- 智能硬件：可选（可搁置）

## 目标平台

| 平台 | 方式 | 产出 |
|------|------|------|
| 移动端 | 按原工程栈 | APK / IPA |
| 智能硬件 | 可选 | — |

## 命令

```bash
# 见 README；归档工程以只读/小修为主
```

## 状态

已归档。默认只做必要修复与知识库同步，不新开大范围需求。

## 助手约束

- Loop：先定可验证 Done 与停止条件；每切片过验证环；失败回灌；详见 docs/LOOP_ENGINEERING.md
- Harness：遵循根 AGENTS「Harness Engineering」；Guide=本文件，Sensor=测试/CI；同类失误二次须沉淀规则或测试（棘轮）。详见 docs/HARNESS_ENGINEERING.md
- 遵循仓库根 `/Users/skat/AGENTS.md` 与本文件的用途判定
- 可选 Target 可搁置；不适用形态不要硬加
- 改动聚焦；公共逻辑抽离复用
