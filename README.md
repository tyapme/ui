# TYAP.ME UI

TYAP.ME のプロダクト画面を一貫して組み立てるための UI ドキュメントとコンポーネントレジストリです。

## 方針

- 既存デザインシステムに沿って実装する。
- 公開 docs は TYAP.ME UI で使う導線だけに絞る。
- registry 実装と生成フローは残し、不要な説明ページや外部サービス導線だけを整理する。

## 開発

```bash
pnpm dev
```

## 検証

```bash
pnpm lint
pnpm typecheck
pnpm build
```
