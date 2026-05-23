# TYAP.ME UI cleanup plan

## 目的

shadcn 公式サイト由来の文言・導線・不要ページ露出を減らし、既存デザインを維持したまま `TYAP.ME UI` として見える状態にする。

## 変更範囲

- [x] サイト名・metadata・OG/Twitter のブランドを `TYAP.ME UI` に統一する。
- [x] トップページの見出し、説明、主要 CTA を TYAP.ME UI 向けに差し替える。
- [x] ヘッダーから不要な導線を外す。
  - `/blocks`
  - `/charts/*`
  - `/docs/directory`
  - `/create`
  - v0 / Vercel / shadcn create 系のボタン
- [x] モバイルメニューとコマンドメニューのトップレベル項目から不要カテゴリを外す。
- [x] フッターを TYAP.ME UI 向けの短い表記に書き換え、Vercel / shadcn 依存文言を消す。
- [x] docs のメタナビから registry / changelog / create / v0 など、TYAP.ME UI として不要な公開導線を外す。
- [x] registry docs の `Introduction`, `Getting Started`, `Registry Directory`, `Examples`, `Namespaces`, `Authentication`, `MCP Server`, `Open in v0`, `registry.json`, `registry-item.json` を削除または非公開導線化する。
- [x] README を現状の TYAP.ME UI 向けに更新する。

## 今回はやらないこと

- registry 実装・生成スクリプト・サンプル画像・registry データの物理削除。
  - `registry/`, `scripts/build-registry.mts`, `lib/registry.ts` などの実装は残す。
  - 削除対象は docs ページや公開ナビの露出に限る。
- 既存デザインの見た目変更。
- 新規 UI パターンの追加。

## 検証計画

- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] `pnpm validate:registries`
- [x] 必要に応じてローカル起動してトップページと docs ナビを確認する。
- [x] コード変更後に `$yki-review-gate` skill を実行する。

## レビュー

- `$yki-review-gate` 通常モードで確認。
  - General Reviewer 1: 97/100
  - General Reviewer 2: 97/100
  - General Reviewer 3: 96/100
- valid finding はなし。
- note_only: `lib/read-file.ts` の broad file pattern は `pnpm build` で警告として残るが、今回の不要ページ整理の変更範囲外。
