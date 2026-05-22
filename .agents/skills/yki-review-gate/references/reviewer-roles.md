# Reviewer Roles

## 共通前提

全 reviewer は最初に以下を確認する。

- 現在のユーザー指示
- `AGENTS.md`
- repo 固有ルール
- 対象ファイルの前後関係
- 既存アーキテクチャとの整合性

全 reviewer は、`問題なし` で流さず、必ず score と根拠を返す。

## reviewer モード

- 通常モード:
  - 通常の AI コード変更後レビューで使う。
  - General Reviewer 1-3 を使う。
- 拡張モード:
  - push 時、push 前レビュー、明示的なコードレビュー依頼で使う。
  - Reviewer A-F を使う。

## 全 reviewer が必ず重ねて見る監査項目

有効な reviewer は全員、以下を毎回監査対象に含める。

- AGENTS.md / 指示ファイル / repo ルール準拠
- 既存アーキテクチャとの整合
- バグ / 境界条件 / 回帰リスク
- セキュリティ
- UI 一貫性 / アクセシビリティ
- 保守性 / 将来の変更耐性 / 運用事故リスク

違いは `主担当` の深さだけで、監査対象から外してよい項目はない。

## reviewer 一覧

### 通常モード

- General Reviewer 1
  - 役割: ルール準拠 / アーキテクチャ / UI 一貫性を浅く広く見る
  - 詳細: `reviewers/general-reviewer-1.md`
- General Reviewer 2
  - 役割: バグ / 境界条件 / データフロー / テスト漏れを浅く広く見る
  - 詳細: `reviewers/general-reviewer-2.md`
- General Reviewer 3
  - 役割: セキュリティ / アクセシビリティ / 運用事故 / shared component 整合を浅く広く見る
  - 詳細: `reviewers/general-reviewer-3.md`

### 拡張モード

- Reviewer A
  - 役割: ルール準拠 / アーキテクチャ specialist
  - 詳細: `reviewers/reviewer-a.md`
- Reviewer B
  - 役割: バグ / 境界条件 specialist
  - 詳細: `reviewers/reviewer-b.md`
- Reviewer C
  - 役割: セキュリティ / 保守性 specialist
  - 詳細: `reviewers/reviewer-c.md`
- Reviewer D
  - 役割: データフロー / 契約 / パフォーマンス specialist
  - 詳細: `reviewers/reviewer-d.md`
- Reviewer E
  - 役割: テスト設計 / 観測性 / リリース安全性 specialist
  - 詳細: `reviewers/reviewer-e.md`
- Reviewer F
  - 役割: UI 一貫性 / アクセシビリティ / 認知負荷 specialist
  - 詳細: `reviewers/reviewer-f.md`

## モード別の reviewer 構成

### 通常モード

- General Reviewer 1
- General Reviewer 2
- General Reviewer 3

### 拡張モード

- Reviewer A
- Reviewer B
- Reviewer C
- Reviewer D
- Reviewer E
- Reviewer F

## Auditor

### 役割

全 reviewer の Phase 1 finding を監査し、各指摘の妥当性を合議で判定する。
通常モード・拡張モード共通で必ず 1 回走る。
詳細: `reviewers/auditor.md`

### 合議ルール

- Auditor は全 finding を 1 件ずつ精査する。
- 各 finding に `valid` / `invalid` / `note_only` を判定して理由を付ける。
- 判定結果は全 reviewer に共有される。

## 出力形式

### Phase 1（各 reviewer が出す指摘）

- `reviewer_id`
- `reviewer_name`
- `scope_summary`
- `findings`: finding の一覧（スコアなし）
  - `id`: finding の一意識別子（例: `gr1-001`）
  - `title`
  - `severity`: `low` / `medium` / `high` / `critical`
  - `detail`
  - `file` (任意)
  - `start_line` (任意)
  - `end_line` (任意)

### Phase 2（Auditor が出す監査結果）

- `auditor_id`
- `reviewed_findings`: 各 finding の判定
  - `finding_id`: Phase 1 の `id` に対応
  - `reviewer_id`
  - `verdict`: `valid` / `invalid` / `note_only`
  - `reason`

### Phase 3（各 reviewer がスコアを確定）

- `score: 0-100`
- `pass: true/false`
- `category_scores`
- `blocking_findings`: valid finding のみ
- `required_tests`
- `required_fixes`
- `residual_risks`
- `notes`
