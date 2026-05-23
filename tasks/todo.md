# docs install display and divider alignment fix plan

## 目的

コンポーネント docs のインストール表記が `Command / Manual` や `pnpm npm yarn bun` を本文として崩して表示している問題と、テーマ切り替え・コピー系ボタングループの区切り線位置を正す。

## 変更範囲

- [x] 既存 docs / UI / テスト方針を確認する。
- [x] Context7 で `@base-ui/react` のインストール表記と composition 方針を確認する。
- [ ] MDX の npm command code block 判定順を修正する。
- [ ] ヘッダーのテーマ切り替え前の縦区切り線をボタンサイズに合わせる。
- [ ] コピー用ボタングループの縦区切り線をレスポンシブ幅に依存しない配置に直す。
- [ ] 関連ドキュメントまたは既存 docs copy の更新要否を確認し、必要範囲を更新する。
- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm build`
- [ ] `$yki-review-gate` 通常モードでレビューする。

## 分割案

1. MDX レンダラーの条件分岐だけを変更して install command 表示を復旧する。
2. 既存 Separator / ButtonGroup のパターンに合わせ、区切り線をフロー内に戻す。
3. build とレビューゲートで回帰がないことを確認する。

## 計画確認

ユーザーから「ここバグってる表記」「テーマ切り替えとグルの左側の区切り線が正しい位置にない」と直接修正指示あり。AGENTS の計画記録を満たしたうえで、最小範囲で実装に進む。

---

# localhost:4000 error fix plan

## 目的

`http://localhost:4000` にアクセスしたときに出ている console / hydration / runtime error を解消し、開発環境でエラーなく主要ページを表示できる状態に戻す。

## 変更範囲

- [x] localhost:4000 の browser console error を再現する。
- [x] Next.js / Base UI の関連仕様と既存 UI コンポーネントの composition API を確認する。
- [ ] `asChild` による Base UI / Radix 系 trigger と Button の不整合を修正する。
- [ ] `/` と `/docs` で console error が消えることを確認する。
- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm build`
- [ ] `$yki-review-gate` 通常モードでレビューする。

## 分割案

1. `Button` のリンク合成を `asChild` から既存の `render` API に戻す。
2. `DialogTrigger` など Base UI wrapper の trigger 合成を `render` API に統一する。
3. browser console と production build で再発がないことを確認する。

## 計画確認

ユーザーから「アクセスするといろんなエラー出る / 全部治して / localhost4000」と直接修正指示あり。既存 AGENTS の計画記録を満たしたうえで、実装に進む。

---

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
