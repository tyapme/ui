# 新規コンポーネント追加ワークフロー

## 全体の流れ

```
registry/bases/base/ui/<name>.tsx  ← ソース（ここが正）
        ↓ pnpm registry:build
styles/<style>/ui/<name>.tsx       ← 生成物（直接編集しない）
```

`registry:build` スクリプトは `syncDirectory` で生成物を同期する。
**ソースに存在しないファイルは生成物から削除される**。
`styles/` を直接編集しても次のビルドで消える。

---

## 手順

### 1. ソースファイルを作成

`registry/bases/base/ui/<name>.tsx` を作成する。

インポートパスは `@/registry/bases/base/ui/` を使う（`@/styles/` は使わない）。

```tsx
// ✅ 正しい
import { Button } from "@/registry/bases/base/ui/button"

// ❌ 間違い（生成物へのパス）
import { Button } from "@/styles/base-nova/ui/button"
```

ビルド時に `@/registry/bases/base/ui/` → `@/styles/<style>/ui/` に自動変換される。

### 2. `_registry.ts` に登録

`registry/bases/base/ui/_registry.ts` の `ui` 配列に追加する。

```ts
{
  name: "my-component",
  type: "registry:ui",
  dependencies: ["react-aria-components", "@internationalized/date"],  // npm deps
  registryDependencies: ["button", "popover"],  // 他の registry:ui コンポーネント
  files: [
    {
      path: "ui/my-component.tsx",
      type: "registry:ui",
    },
  ],
  meta: {
    links: {
      docs: "https://ui.shadcn.com/docs/components/base/my-component",
      api: "https://...",
    },
  },
},
```

**登録を忘れると Vercel ビルドで `Module not found` になる**（後述の失敗事例参照）。

### 3. ビルドして確認

```bash
pnpm registry:build
```

`styles/base-nova/ui/<name>.tsx` が生成されていれば OK。

### 4. examples を作成

`examples/base/<name>-demo.tsx` などを作成する。
インポートパスは `@/styles/base-nova/ui/` を使う（examples は生成物を参照する）。

### 5. ドキュメントを作成

`content/docs/components/base/<name>.mdx` を作成する。

---

## よくあるミスと対策

### ❌ `styles/` を直接編集してソースを作らなかった

- **症状**: ローカルは動くが Vercel ビルドで `Module not found`
- **原因**: `registry:build` の `syncDirectory` がソースにないファイルをターゲットから削除する
- **対策**: 必ず `registry/bases/base/ui/` にソースを置いて `_registry.ts` に登録する

### ❌ `_registry.ts` への登録を忘れた

- **症状**: 上と同じ。ソースがあっても登録がないとビルド対象にならない
- **対策**: ソースファイル作成と登録はセットで行う

---

## チェックリスト

- [ ] `registry/bases/base/ui/<name>.tsx` を作成した
- [ ] `registry/bases/base/ui/_registry.ts` に登録した（dependencies / registryDependencies / files）
- [ ] `pnpm registry:build` が成功し `styles/<style>/ui/<name>.tsx` が生成された
- [ ] examples を作成した
- [ ] ドキュメント（mdx）を作成した
