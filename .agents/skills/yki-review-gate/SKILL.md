---
name: yki-review-gate
description: コード変更後のレビューゲート。通常の AI コード変更後は 3 人の broad reviewer、push 時や明示的なコードレビュー依頼では 6 人の specialist reviewer を走らせ、全員 95 点超えになるまで修正と再レビューを繰り返す。
---

# YKI Review Gate

コード変更後のレビューで使う skill。
reviewer ごとに独立した観点を持ち、全員の点数が `95 点超え` になるまで修正と再レビューを止めない。

## レビューの 3 フェーズ

全てのレビューはこの順序で進む。フェーズを飛ばすことは禁止。

### Phase 1 — 指摘収集

各 reviewer が **指摘事項のみ** を出す。スコアは出さない。
指摘は `finding` の一覧として列挙する。
形式: `references/schema/review-finding.schema.json`

### Phase 2 — 監査（Audit）

Auditor が各 reviewer の全 finding を受け取り、1 件ずつ妥当性を判定する。
- `valid`: 本当に指摘すべき問題
- `invalid`: 誤検知・過剰反応・スコープ外
- `note_only`: 問題ではないが記録に値する

Auditor は合議ルール（全 finding を全員で見て多数決）で判定する。
形式: `references/schema/audit-result.schema.json`

### Phase 3 — スコア確定

各 reviewer は Auditor が `valid` と判定した finding のみを基に、自分のスコアを確定する。
`invalid` 判定の finding はスコア計算に含めない。
形式: `references/schema/review-result.schema.json`

---

## 使い方

1. まず事情を確認する。
   - 何を変えたのか。
   - review のきっかけが `通常の AI コード変更 / push 前 / push 時 / 明示的なコードレビュー依頼` のどれか。
   - 対象の場所が指定されているか。
   - 既知の懸念点や重点監査項目があるか。
2. レビューモードを確定する。
   - `通常モード`: ユーザーからコードレビューの指示がない通常の AI コード変更時。浅く広く見る reviewer を 3 人使う。
   - `拡張モード`: `push` 時、`push 前に見て`、`コードレビューして` など明示的な review 依頼時。reviewer は 6 人。
3. レビュー対象を確定する。
   - ユーザーが review 対象の場所を指定したら、その場所だけを見る。
   - 場所の指定には、ファイル、ディレクトリ、モジュール、パス、差分範囲を含める。
   - `push` に紐づく依頼なら、push 対象ファイルだけを見る。
   - `コードレビューして` のように scope 指定がなければ、全ファイルを見る。
4. **Phase 1**: モードに応じた全 reviewer が指摘事項のみを出す（スコアなし）。
   - 通常モード: General Reviewer 1-3（`references/reviewer-roles.md` 参照）
   - 拡張モード: Reviewer A-F（`references/reviewer-roles.md` 参照）
5. **Phase 2**: Auditor が全 finding の妥当性を合議で判定する。（`references/reviewers/auditor.md` 参照）
6. **Phase 3**: 各 reviewer が valid finding のみを基にスコアを確定する。
7. active reviewer の点数が全員 `95 点超え` になるまで、修正と再レビューを繰り返す。
8. 1 人でも `95 以下` なら、valid finding をまとめて修正する。
9. 修正後は Phase 1 から全フェーズを再実行する。
10. 全員が `96-100` に入るまで、修正と再レビューを繰り返す。

## レビュー対象の決め方

- 指定された場所あり: その場所だけを対象にする。
- push 時: push 対象ファイルだけを見る。
- scope 指定なしの `コードレビューして`: 全ファイルを対象にする。量が多くても勝手に scope を縮めない。

## 強制ルール

- Phase 1 が全 reviewer 完了する前に Phase 2 に進まない。
- Phase 2 の監査が完了する前に Phase 3 のスコア確定に進まない。
- active reviewer の初回レビューが終わる前に次の修正に入らない。
- 1 人でも `95 以下` ならコード変更を止める。
- 修正したら、Phase 1 から全フェーズを再実行する。
- 一部 reviewer だけ通ったから先に進む、を禁止する。
- AGENTS.md と repo 固有ルールに反する案は、点数が高くても不合格にする。
- 既存アーキテクチャと整合しない変更は、見た目が正しくても不合格にする。
- `invalid` 判定を受けた finding は修正対象に含めない。ただし `note_only` は任意で参照可。

## References

- `references/reviewer-roles.md` — reviewer の分担と一覧
- `references/scoring-rubric.md` — 採点基準
- `references/reviewers/general-reviewer-1.md`
- `references/reviewers/general-reviewer-2.md`
- `references/reviewers/general-reviewer-3.md`
- `references/reviewers/reviewer-a.md`
- `references/reviewers/reviewer-b.md`
- `references/reviewers/reviewer-c.md`
- `references/reviewers/reviewer-d.md`
- `references/reviewers/reviewer-e.md`
- `references/reviewers/reviewer-f.md`
- `references/reviewers/auditor.md`
- `references/schema/review-finding.schema.json`
- `references/schema/audit-result.schema.json`
- `references/schema/review-result.schema.json`
