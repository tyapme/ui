# Design System — tyap/ui

## 概要

tyap/ui のデザインシステムはコンポーネントレジストリの品質を支える基盤。
すべてのUIはこのシステムのトークンとルールに従う。

## Color

OKLCH ベース。中性色は brand hue (155°) へ微量の chroma (0.005-0.008) を持たせる。

### Brand

| Token | Value | 用途 |
|-------|-------|------|
| `--color-brand` | oklch(62% 0.1 155) | 主要アクション、リンク |
| `--color-brand-light` | oklch(75% 0.08 155) | ダークモードのアクセント |
| `--color-brand-dark` | oklch(45% 0.08 155) | ホバー状態 |
| `--color-brand-subtle` | oklch(95% 0.02 155) | 背景ティント |

### Neutral

50〜950 の 11 段階。hue 155° / chroma 0.005-0.008。

### Semantic

| Token | 用途 |
|-------|------|
| `--color-success` | 成功状態 |
| `--color-warning` | 警告 |
| `--color-error` | エラー |
| `--color-info` | 情報 |

## Typography

### Font Stack

| 用途 | Font |
|------|------|
| Display (見出し) | Figtree |
| Body (本文) | Noto Sans JP + Figtree |
| Code | JetBrains Mono |

### Type Scale (ratio 1.25)

| Token | Size | 用途 |
|-------|------|------|
| `--text-xs` | 12px | キャプション、法的テキスト |
| `--text-sm` | 14px | メタデータ、補助 |
| `--text-base` | 16px | 本文 |
| `--text-lg` | 20px | 小見出し |
| `--text-xl` | 24px | セクション見出し |
| `--text-2xl` | 32px | ページ見出し |
| `--text-3xl` | 40px | ヒーロー |
| `--text-4xl` | 48px | 大ヒーロー |

### Heading 定義

- H1: `--text-3xl` / `--weight-bold` / `--leading-tight` / `--tracking-tight`
- H2: `--text-2xl` / `--weight-semibold` / `--leading-tight`
- H3: `--text-xl` / `--weight-semibold` / `--leading-snug`

## Spacing (4px grid)

| Token | Value | 用途 |
|-------|-------|------|
| `--space-1` | 4px | 最小間隔 |
| `--space-2` | 8px | インライン要素間 |
| `--space-3` | 12px | 密接な要素間 |
| `--space-4` | 16px | 標準間隔 |
| `--space-6` | 24px | セクション内 |
| `--space-8` | 32px | セクション間（小） |
| `--space-12` | 48px | セクション間（中） |
| `--space-16` | 64px | セクション間（大） |
| `--space-24` | 96px | ページセクション間 |

## Radius

| Token | Value | 用途 |
|-------|-------|------|
| `--radius-sm` | 4px | Badge, chip |
| `--radius-md` | 6px | Button, input |
| `--radius-lg` | 8px | Card |
| `--radius-xl` | 12px | Dialog, container |
| `--radius-full` | 9999px | Avatar, pill |

## Shadow

3段階: sm / md / lg。ダークモードでは opacity を上げる。

## Motion

| Token | Value | 用途 |
|-------|-------|------|
| `--duration-fast` | 100ms | ホバー、フォーカス |
| `--duration-normal` | 200ms | 標準トランジション |
| `--duration-slow` | 350ms | パネル開閉 |
| `--ease-default` | cubic-bezier(0.25, 0.1, 0.25, 1) | 汎用 |
| `--ease-out` | cubic-bezier(0.16, 1, 0.3, 1) | 出現アニメーション |

`prefers-reduced-motion: reduce` ですべての duration を 0ms に。

## Layout

| Token | Value | 用途 |
|-------|-------|------|
| `--layout-max-width` | 1200px | コンテンツ最大幅 |
| `--layout-content-width` | 720px | テキストコンテンツ幅 |
| `--layout-page-padding` | 24px (md: 48px) | ページ左右余白 |
| `--layout-section-gap` | 64px | セクション間余白 |

## Button Variants

| Variant | 用途 | ルール |
|---------|------|--------|
| default (primary) | 最重要アクション | 1セクション1つ |
| secondary | 補助アクション | — |
| destructive | 破壊的操作 | 確認UI必須 |
| outline | 低優先度 | — |
| ghost | 最低優先度 | — |
| link | テキストリンク風 | — |

## ファイル構成

```
src/styles/tokens.css    — トークン定義（CSS変数）
src/app/global.css       — グローバルスタイル + トークン読み込み
.impeccable.md           — デザインコンテキスト
docs/design-system.md    — このファイル（仕様書）
```
