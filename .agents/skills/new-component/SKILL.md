---
name: new-component
description: ui.tyap.me に新しい UI コンポーネントを追加する手順。レジストリ登録・ファイル配置・デザイン仕上げ・アニメーション適用まで一連の作業をカバーする。「新しいコンポーネント作る」「コンポーネント追加」「register component」などで起動。
user-invocable: true
---

# 新しいコンポーネントの追加手順

このプロジェクト（ui.tyap.me）に新しい UI コンポーネントを追加するときの完全な手順。
**順番通りに実行すること。スキップ禁止。**

---

## Step 0 — 命名を決める

コンポーネント名を kebab-case で決める（例: `spin-button`, `tag-input`）。
以下 `NAME` をその名前で読み替える。

---

## Step 1 — コンポーネントファイルを作る

**2 つのファイルを作成する。両方必須。**

### 1-a. レジストリ版（実体）
```
registry/ui/NAME.tsx
```
- import パスは `@/registry/bases/base/lib/utils` と `@/registry/ui/他コンポーネント`
- `"use client"` が必要なら先頭に付ける

### 1-b. スタイル適用版（docs に表示される）
```
styles/base/ui/NAME.tsx
```
- import パスは `@/lib/utils` と `@/styles/base/ui/他コンポーネント`
- 基本的に 1-a と同じ内容で import パスだけ差し替える

### ルール — このファイル以外は絶対に触るな

> **`registry/ui/NAME.tsx` と `styles/base/ui/NAME.tsx` だけが編集対象。**
> `app/globals.css`、`styles/base/style-*.css`、`style-maia.css` などの CSS ファイルは触らない。
> レイアウト・アニメーション・スタイル・バリアント、何であっても **すべてコンポーネントファイル内に書く**。
> Tailwind クラスと CSS カスタムプロパティをコンポーネントに直書きする。CSS ファイルに追記しない。

---

## Step 2 — デザインを仕上げる（/impeccable layout）

コンポーネントの基本実装ができたら必ず実行：

```
/impeccable layout
```

- `.impeccable.md` のデザインコンテキストを読んで、プロジェクトの審美基準に合わせる
- spacing・typography・カラートークンの一貫性を確認
- 「AI っぽい平凡なデザイン」にならないようにする

---

## Step 3 — アニメーションを適用する（/transitions-dev）

インタラクションがあるコンポーネント（ボタン・トグル・ドロップダウン等）は必ず実行：

```
/transitions-dev
```

- アイコンスワップ → `t-icon-swap`（09-icon-swap）
- 開閉アニメーション → `t-menu-dropdown`（05）または `t-modal`（06）
- 状態変化テキスト → `t-text-swap`（04）
- 成功フィードバック → `t-success-check`（10）
- CSS カスタムプロパティで duration / easing をコンポーネントファイル内に書く
- `prefers-reduced-motion` ガードを忘れずに

---

## Step 4 — レジストリに登録する

**3 つのファイルを編集する。全部必須。**

### 4-a. `registry/ui/_registry.ts`（ソース定義）

アルファベット順の適切な位置に追加：

```ts
{
  name: "NAME",
  type: "registry:ui",
  dependencies: ["外部パッケージ（あれば）"],
  registryDependencies: ["依存するコンポーネント（例: button）"],
  files: [
    {
      path: "ui/NAME.tsx",
      type: "registry:ui",
    },
  ],
  meta: {
    links: {
      docs: "https://ui.tyap.me/docs/components/NAME",
    },
  },
},
```

### 4-b. `registry/__index__.tsx`（styles/base/ui/ 用インデックス）

アルファベット順の適切な位置に追加：

```tsx
"NAME": {
  name: "NAME",
  title: "undefined",
  description: "",
  type: "registry:ui",
  registryDependencies: ["依存するコンポーネント"],
  files: [
    {
      path: "styles/base/ui/NAME.tsx",
      type: "registry:ui",
      target: "",
    },
  ],
  component: React.lazy(async () => {
    const mod = await import("@/styles/base/ui/NAME")
    const exportName =
      Object.keys(mod).find(
        (key) =>
          typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "NAME"
    return { default: mod.default || mod[exportName] }
  }),
  categories: undefined,
  meta: {
    links: {
      docs: "https://ui.tyap.me/docs/components/NAME",
    },
  },
},
```

### 4-c. `registry/bases/__index__.tsx`（registry/ui/ 用インデックス）

アルファベット順の適切な位置に追加（4-b とほぼ同じ、パスが `registry/ui/NAME.tsx` になる）：

```tsx
"NAME": {
  name: "NAME",
  title: "undefined",
  description: "",
  type: "registry:ui",
  registryDependencies: ["依存するコンポーネント"],
  files: [
    {
      path: "registry/ui/NAME.tsx",
      type: "registry:ui",
      target: "",
    },
  ],
  component: React.lazy(async () => {
    const mod = await import("@/registry/ui/NAME")
    const exportName =
      Object.keys(mod).find(
        (key) =>
          typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "NAME"
    return { default: mod.default || mod[exportName] }
  }),
  categories: undefined,
  meta: {
    links: {
      docs: "https://ui.tyap.me/docs/components/NAME",
    },
  },
},
```

> **注意**: `registry:build` スクリプトは現在モジュール解決エラーで動かない。
> `__index__.tsx` は **手動で直接編集する**。

---

## Step 5 — Example ファイルを作る

```
examples/base/NAME-demo.tsx       ← メインデモ（ComponentPreview に表示）
examples/base/NAME-sizes.tsx      ← バリアント例（あれば）
examples/base/NAME-outline.tsx    ← バリアント例（あれば）
```

- import は `@/components/ui/NAME`（docs 用のエイリアス）
- `export function NAMEDemo()` の形で export

---

## Step 6 — MDX ドキュメントを作る

```
content/docs/components/NAME.mdx
```

テンプレート：

```mdx
---
title: Component Name
description: 一行の説明。
base: base
component: true
---

<ComponentPreview styleName="base-nova" name="NAME-demo" />

## Installation

<CodeTabs>
<TabsList>
  <TabsTrigger value="cli">Command</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

\`\`\`bash
npx shadcn@latest add NAME
\`\`\`

</TabsContent>
<TabsContent value="manual">

<Steps className="mb-0 pt-2">

<Step>Install the following dependencies:</Step>

\`\`\`bash
npm install 外部パッケージ
\`\`\`

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource
  name="NAME"
  title="components/ui/NAME.tsx"
  styleName="base-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>
</CodeTabs>

## Usage

\`\`\`tsx
import { ComponentName } from "@/components/ui/NAME"
\`\`\`

\`\`\`tsx
<ComponentName />
\`\`\`

## API Reference

### ComponentName

| Prop | Type | Default |
| ---- | ---- | ------- |
| ...  | ...  | ...     |
```

---

## Step 7 — 動作確認

dev サーバーが起動中なら、docs ページをブラウザで開いて以下を確認：

- [ ] `ComponentPreview` にコンポーネントが表示される
- [ ] Manual タブの `ComponentSource` にコードが表示される（Step 4 が正しく完了しているか）
- [ ] アニメーションが動く
- [ ] ダークモードで壊れていない

---

## よくあるミス

| 症状 | 原因 | 対処 |
| --- | --- | --- |
| Manual タブにコードが表示されない | `registry/bases/__index__.tsx` への登録漏れ | Step 4-c を実行 |
| ComponentPreview が空白 | `examples/base/NAME-demo.tsx` が存在しないか export 名が違う | ファイルと export を確認 |
| import エラー | `styles/base/ui/` 版のパスが `registry/ui/` のまま | 1-b のパスを修正 |
| ビルドエラー | `__index__.tsx` の `React.lazy` の中で import パスが間違っている | `@/styles/base/ui/NAME` または `@/registry/ui/NAME` を確認 |
