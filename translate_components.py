import os, re

dirs = ["content/docs/components/base", "content/docs/components/radix"]

# Comprehensive translation map (outside code blocks)
# Format: (english, japanese) - exact string match
translations = [
    # === Accordion ===
    ("A basic accordion that shows one item at a time. The first item is open by default.", "一度に1つのアイテムを表示するシンプルなアコーディオン。最初のアイテムがデフォルトで開いています。"),
    ("Use the `multiple` prop to allow multiple items to be open at the same time.", "`multiple` プロパティで複数のアイテムを同時に開けるようにします。"),
    ("Use the `disabled` prop on `AccordionItem` to disable individual items.", "`AccordionItem` の `disabled` プロパティで個別アイテムを無効化します。"),
    ("Add `border` to the `Accordion` and `border-b last:border-b-0` to the `AccordionItem` to add borders to the items.", "`Accordion` に `border`、`AccordionItem` に `border-b last:border-b-0` を追加してボーダーを表示します。"),
    ("Wrap the `Accordion` in a `Card` component.", "`Accordion` を `Card` コンポーネントで包みます。"),
    ("See the [Base UI](https://base-ui.com/react/components/accordion#api-reference) documentation for more information.", "詳細は [Base UI](https://base-ui.com/react/components/accordion#api-reference) のドキュメントを参照してください。"),

    # === Alert Dialog ===
    ("A basic alert dialog with a title, description, and cancel and continue buttons.", "タイトル・説明・キャンセル・続行ボタンを持つシンプルな Alert Dialog。"),
    ("Use the `size=\"sm\"` prop to make the alert dialog smaller.", "`size=\"sm\"` プロパティで Alert Dialog を小さくします。"),
    ("Use the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.", "`AlertDialogMedia` コンポーネントでアイコンや画像などのメディア要素を追加します。"),
    ("Use the `size=\"sm\"` prop to make the alert dialog smaller and the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.", "`size=\"sm\"` でダイアログを小さくし、`AlertDialogMedia` でメディア要素を追加します。"),
    ("Use the `AlertDialogAction` component to add a destructive action button to the alert dialog.", "`AlertDialogAction` コンポーネントで破壊的アクションボタンを追加します。"),
    ("Use the `size` prop on the `AlertDialogContent` component to control the size of the alert dialog. It accepts the following values:", "`AlertDialogContent` の `size` プロパティでダイアログのサイズを制御します。指定可能な値:"),
    ("For more information about the other components and their props, see the [Base UI documentation](https://base-ui.com/react/components/alert-dialog#api-reference).", "その他のコンポーネントとプロパティの詳細は [Base UI ドキュメント](https://base-ui.com/react/components/alert-dialog#api-reference) を参照してください。"),

    # === Alert ===
    ("A basic alert with an icon, title and description.", "アイコン・タイトル・説明を持つシンプルなアラート。"),
    ("Use `variant=\"destructive\"` to create a destructive alert.", "`variant=\"destructive\"` で破壊的アラートを作成します。"),
    ("Use `AlertAction` to add a button or other action element to the alert.", "`AlertAction` でボタンなどのアクション要素を追加します。"),
    ("You can customize the alert colors by adding custom classes such as `bg-amber-50 dark:bg-amber-950` to the `Alert` component.", "`Alert` コンポーネントに `bg-amber-50 dark:bg-amber-950` などのカスタムクラスを追加してカラーをカスタマイズできます。"),
    ("The `Alert` component displays a callout for user attention.", "`Alert` コンポーネントはユーザーの注意を引くコールアウトを表示します。"),
    ("The `AlertTitle` component displays the title of the alert.", "`AlertTitle` コンポーネントはアラートのタイトルを表示します。"),
    ("The `AlertDescription` component displays the description or content of the alert.", "`AlertDescription` コンポーネントはアラートの説明またはコンテンツを表示します。"),
    ("The `AlertAction` component displays an action element (like a button) positioned absolutely in the top-right corner of the alert.", "`AlertAction` コンポーネントはアラートの右上にアクション要素（ボタンなど）を絶対配置で表示します。"),

    # === Aspect Ratio ===
    ("A square aspect ratio component using the `ratio={1 / 1}` prop. This is useful for displaying images and media content in a square format.", "`ratio={1 / 1}` を使った正方形のアスペクト比コンポーネント。画像やメディアを正方形で表示するのに便利です。"),
    ("A portrait aspect ratio component using the `ratio={9 / 16}` prop. This is useful for displaying images and media content in a portrait format.", "`ratio={9 / 16}` を使った縦長のアスペクト比コンポーネント。画像やメディアを縦長で表示するのに便利です。"),
    ("The `AspectRatio` component displays content within a desired ratio.", "`AspectRatio` コンポーネントは指定したアスペクト比でコンテンツを表示します。"),

    # === Avatar ===
    ("A basic avatar component with an image and a fallback.", "画像とフォールバック付きのシンプルなアバターコンポーネント。"),
    ("Use the `AvatarBadge` component to add a badge to the avatar. The badge is positioned at the bottom right of the avatar by default.", "`AvatarBadge` コンポーネントでアバターにバッジを追加します。バッジはデフォルトでアバターの右下に配置されます。"),
    ("You can also use an icon inside `AvatarBadge`.", "`AvatarBadge` の中にアイコンを使用することもできます。"),
    ("Use the `AvatarGroup` component to add a group of avatars.", "`AvatarGroup` コンポーネントでアバターのグループを表示します。"),
    ("You can also use an icon inside `AvatarGroupCount`.", "`AvatarGroupCount` の中にアイコンを使用することもできます。"),
    ("Add a dropdown to the avatar using `DropdownMenu`.", "`DropdownMenu` を使ってアバターにドロップダウンを追加します。"),

    # === Badge ===
    ("Use the `variant` prop to change the variant of the badge.", "`variant` プロパティでバッジのバリアントを変更します。"),
    ("You can render an icon inside the badge. Use `data-icon=\"inline-start\"` to render the icon on the left side and `data-icon=\"inline-end\"` for the right side.", "バッジの中にアイコンをレンダリングできます。`data-icon=\"inline-start\"` で左側、`data-icon=\"inline-end\"` で右側に配置します。"),
    ("You can render a spinner inside the badge. Remember to add the `data-icon=\"inline-start\"` or `data-icon=\"inline-end\"` attribute to the spinner for the correct spacing.", "バッジの中にスピナーをレンダリングできます。スピナーに `data-icon=\"inline-start\"` または `data-icon=\"inline-end\"` 属性を付けて正しい間隔を確保してください。"),
    ("Use the `render` prop to render a link as a badge.", "`render` プロパティを使ってバッジをリンクとしてレンダリングします。"),
    ("You can customize the colors of a badge by adding custom classes such as `bg-green-50 dark:bg-green-950` to the `Badge` component.", "`Badge` コンポーネントに `bg-green-50 dark:bg-green-950` などのカスタムクラスを追加してカラーをカスタマイズできます。"),

    # === Breadcrumb ===
    ("A basic breadcrumb with a home link and a components link.", "ホームリンクとコンポーネントリンクを持つシンプルなブレッドクラム。"),
    ("Use a custom component as `children` for `BreadcrumbSeparator` to change the separator.", "`BreadcrumbSeparator` の `children` にカスタムコンポーネントを使ってセパレーターを変更します。"),
    ("You can compose `BreadcrumbItem` with a `DropdownMenu` to create a dropdown.", "`BreadcrumbItem` と `DropdownMenu` を組み合わせてドロップダウンを作成できます。"),
    ("We provide a `BreadcrumbEllipsis` component to show a collapsed state when the breadcrumb is too long.", "パンくずリストが長すぎる場合に折りたたんだ状態を表示する `BreadcrumbEllipsis` コンポーネントを提供しています。"),
    ("To use a custom link component from your routing library, you can use the `render` prop on `BreadcrumbLink`.", "ルーティングライブラリのカスタムリンクコンポーネントを使うには、`BreadcrumbLink` の `render` プロパティを使用します。"),

    # === Button Group ===
    ("Set the `orientation` prop to change the button group layout.", "`orientation` プロパティでボタングループのレイアウトを変更します。"),
    ("Control the size of buttons using the `size` prop on individual buttons.", "個別ボタンの `size` プロパティでボタンのサイズを制御します。"),
    ("Add a separator between buttons by adding a `ButtonGroupSeparator` component.", "`ButtonGroupSeparator` コンポーネントを追加してボタン間にセパレーターを追加します。"),
    ("Use a `Select` component inside the button group.", "ボタングループ内に `Select` コンポーネントを使用します。"),
    ("Add a `Popover` component to the button group.", "ボタングループに `Popover` コンポーネントを追加します。"),
    ("Add a `DropdownMenu` component to the button group.", "ボタングループに `DropdownMenu` コンポーネントを追加します。"),
    ("Add an input inside the button group.", "ボタングループ内に入力欄を追加します。"),
    ("A split button group with a primary action button and a dropdown menu.", "プライマリアクションボタンとドロップダウンメニューを持つスプリットボタングループ。"),
    ("Nested button groups.", "ネストされたボタングループ。"),
    ("A button group that uses an `InputGroup` component.", "`InputGroup` コンポーネントを使ったボタングループ。"),

    # === Button ===
    ("Tailwind v4 [switched](https://tailwindcss.com/docs/upgrade-guide#buttons-use-the-default-cursor) from `cursor: pointer` to `cursor: default` for the button component.", "Tailwind v4 では、ボタンコンポーネントの `cursor: pointer` から `cursor: default` への[変更](https://tailwindcss.com/docs/upgrade-guide#buttons-use-the-default-cursor)が行われました。"),
    ("If you want to keep the `cursor: pointer` behavior, add the following code to your CSS file:", "`cursor: pointer` の挙動を維持したい場合は、CSS ファイルに以下のコードを追加してください:"),
    ("You can also enable this during project setup with `npx shadcn@latest init --pointer`.", "`npx shadcn@latest init --pointer` でプロジェクト設定時にも有効化できます。"),
    ("Use the `size` prop to change the size of the button.", "`size` プロパティでボタンのサイズを変更します。"),
    ("Remember to add the `data-icon=\"inline-start\"` or `data-icon=\"inline-end\"` attribute to the icon for the correct spacing.", "アイコンに `data-icon=\"inline-start\"` または `data-icon=\"inline-end\"` 属性を付けて正しい間隔を確保してください。"),
    ("Use the `render` prop to render the button as a link.", "`render` プロパティでボタンをリンクとしてレンダリングします。"),
    ("Use the `rounded` prop to change the border radius of the button.", "`rounded` プロパティでボタンの角丸を変更します。"),
    ("Add a spinner to the button to indicate a loading state.", "ボタンにスピナーを追加してローディング状態を示します。"),

    # === Calendar ===
    ("The `Calendar` component uses the `Button` component. Make sure you have it installed.", "`Calendar` コンポーネントは `Button` コンポーネントを使用します。事前にインストールしてください。"),
    ("A basic calendar component.", "シンプルなカレンダーコンポーネント。"),
    ("Use `mode=\"range\"` to enable date range selection.", "`mode=\"range\"` で日付範囲選択を有効にします。"),
    ("Use `mode=\"multiple\"` to enable multiple date selection.", "`mode=\"multiple\"` で複数日付選択を有効にします。"),
    ("Use `captionLayout=\"dropdown\"` to add year and month dropdowns to the calendar.", "`captionLayout=\"dropdown\"` でカレンダーに年・月のドロップダウンを追加します。"),
    ("Use `showWeekNumber` to show week numbers in the calendar.", "`showWeekNumber` でカレンダーに週番号を表示します。"),
    ("Use `timeZone` to set the time zone of the calendar.", "`timeZone` でカレンダーのタイムゾーンを設定します。"),

    # === Card ===
    ("Use the `size=\"sm\"` prop to set the size of the card to small. The small size variant uses smaller spacing.", "`size=\"sm\"` プロパティでカードのサイズを小さくします。小サイズは間隔が小さくなります。"),
    ("Use the `CardImage` component to add an image to the card.", "`CardImage` コンポーネントでカードに画像を追加します。"),
    ("A compact card with smaller spacing for lists or dense layouts.", "リストや密なレイアウト向けの、間隔が小さいコンパクトなカード。"),

    # === Carousel ===
    ("A basic carousel with items.", "アイテム付きのシンプルなカルーセル。"),
    ("Set the `size` option to control the size of the carousel.", "`size` オプションでカルーセルのサイズを制御します。"),
    ("Set the `spacing` option to control the spacing between carousel items.", "`spacing` オプションでカルーセルアイテム間の間隔を制御します。"),
    ("Set the `orientation` prop to `\"vertical\"` for a vertical carousel.", "`orientation` プロパティを `\"vertical\"` にして縦型カルーセルを作成します。"),
    ("Use the `setApi` prop to get an instance of the carousel API.", "`setApi` プロパティでカルーセル API のインスタンスを取得します。"),
    ("Install the Embla Carousel Autoplay plugin to add autoplay support.", "Embla Carousel Autoplay プラグインをインストールして自動再生サポートを追加します。"),
    ("Use the `slidesToScroll` option to control how many slides to scroll at once.", "`slidesToScroll` オプションで一度にスクロールするスライド数を制御します。"),

    # === Chart ===
    ("Beautiful charts. Built using Recharts. Copy and paste into your apps.", "美しいチャート。Recharts を使用。アプリにコピー&ペーストして使えます。"),
    ("Charts are built using [Recharts](https://recharts.org/).", "チャートは [Recharts](https://recharts.org/) を使って構築されています。"),
    ("We use `ChartContainer` to render all charts. The `ChartContainer` component handles the `ResponsiveContainer`, theming, and accessibility.", "すべてのチャートのレンダリングに `ChartContainer` を使用します。`ChartContainer` は `ResponsiveContainer`、テーマ設定、アクセシビリティを処理します。"),

    # === Checkbox ===
    ("A basic checkbox.", "シンプルなチェックボックス。"),
    ("A checkbox with a label and description.", "ラベルと説明付きのチェックボックス。"),
    ("Use the `disabled` prop to disable the checkbox.", "`disabled` プロパティでチェックボックスを無効化します。"),
    ("Use the `data-invalid` attribute on the `Field` component and `aria-invalid` attribute on the `Checkbox` to create an invalid state.", "`Field` の `data-invalid` と `Checkbox` の `aria-invalid` で無効状態を作成します。"),
    ("A group of checkboxes.", "チェックボックスのグループ。"),
    ("A table with checkboxes in the first column.", "最初の列にチェックボックスを持つテーブル。"),

    # === Collapsible ===
    ("A basic collapsible component.", "シンプルなコラプシブルコンポーネント。"),
    ("A collapsible with a settings list.", "設定リスト付きのコラプシブル。"),
    ("A collapsible component used for a file tree.", "ファイルツリーとして使用するコラプシブルコンポーネント。"),

    # === Combobox ===
    ("A basic combobox with a list of suggestions.", "候補一覧付きのシンプルなコンボボックス。"),
    ("Use the `multiple` prop to allow selecting multiple values.", "`multiple` プロパティで複数の値を選択できるようにします。"),
    ("Combobox with disabled items.", "無効なアイテムを含むコンボボックス。"),
    ("Combobox with grouped items.", "グループ化されたアイテムのコンボボックス。"),
    ("A combobox with a clear button.", "クリアボタン付きのコンボボックス。"),
    ("Use the `invalid` prop to mark the combobox as invalid.", "`invalid` プロパティでコンボボックスを無効状態にマークします。"),
    ("A combobox inside an `InputGroup` component.", "`InputGroup` コンポーネント内のコンボボックス。"),
    ("A combobox inside a popup.", "ポップアップ内のコンボボックス。"),
    ("Combobox with auto-highlight of first item.", "最初のアイテムを自動ハイライトするコンボボックス。"),
    ("A custom combobox with additional items.", "追加アイテム付きのカスタムコンボボックス。"),

    # === Command ===
    ("A basic command menu.", "シンプルなコマンドメニュー。"),
    ("Groups items in the command menu.", "コマンドメニューのアイテムをグループ化します。"),
    ("A command menu with keyboard shortcuts.", "キーボードショートカット付きのコマンドメニュー。"),
    ("A command menu that is scrollable.", "スクロール可能なコマンドメニュー。"),
    ("A dialog command menu that can be opened and closed.", "開閉できるダイアログ形式のコマンドメニュー。"),

    # === Context Menu ===
    ("A basic context menu.", "シンプルなコンテキストメニュー。"),
    ("A context menu with groups and separators.", "グループとセパレーター付きのコンテキストメニュー。"),
    ("A context menu with icons.", "アイコン付きのコンテキストメニュー。"),
    ("A context menu with keyboard shortcuts.", "キーボードショートカット付きのコンテキストメニュー。"),
    ("A context menu with checkboxes.", "チェックボックス付きのコンテキストメニュー。"),
    ("A context menu with radio items.", "ラジオアイテム付きのコンテキストメニュー。"),
    ("A context menu with a destructive action.", "破壊的アクション付きのコンテキストメニュー。"),
    ("A context menu with a submenu.", "サブメニュー付きのコンテキストメニュー。"),
    ("A context menu with side positions.", "配置位置指定付きのコンテキストメニュー。"),

    # === Data Table ===
    ("A complex example using TanStack Table with sorting, filtering, and pagination.", "TanStack Table を使ったソート・フィルタリング・ページネーション付きの複合例。"),

    # === Date Picker ===
    ("A basic date picker.", "シンプルな日付ピッカー。"),
    ("A date picker with a range.", "範囲選択付きの日付ピッカー。"),
    ("A date picker with an input.", "入力欄付きの日付ピッカー。"),
    ("A date picker with a time picker.", "時刻ピッカー付きの日付ピッカー。"),
    ("A date picker with natural language input.", "自然言語入力対応の日付ピッカー。"),
    ("A date picker for date of birth.", "生年月日用の日付ピッカー。"),
    ("A date picker with year and month dropdowns.", "年・月ドロップダウン付きの日付ピッカー。"),

    # === Dialog ===
    ("A basic dialog.", "シンプルなダイアログ。"),
    ("A dialog without a close button.", "閉じるボタンなしのダイアログ。"),
    ("A dialog with a close button at the top right.", "右上に閉じるボタンがあるダイアログ。"),
    ("A dialog with a scrollable content area.", "スクロール可能なコンテンツ領域を持つダイアログ。"),
    ("A dialog with a sticky footer.", "スティッキーフッター付きのダイアログ。"),

    # === Direction ===
    ("A basic example with LTR direction (default).", "LTR 方向（デフォルト）のシンプルな例。"),
    ("A basic example with RTL direction.", "RTL 方向のシンプルな例。"),

    # === Drawer ===
    ("A basic drawer.", "シンプルなドロワー。"),
    ("Use the `direction` prop to change the side the drawer opens from.", "`direction` プロパティでドロワーが開く方向を変更します。"),
    ("A drawer with a scrollable content area.", "スクロール可能なコンテンツ領域を持つドロワー。"),
    ("A drawer that turns into a dialog when the viewport is wide enough.", "ビューポートが十分に広い場合にダイアログに変わるドロワー。"),

    # === Dropdown Menu ===
    ("A basic dropdown menu.", "シンプルなドロップダウンメニュー。"),
    ("A dropdown menu with groups and separators.", "グループとセパレーター付きのドロップダウンメニュー。"),
    ("A dropdown menu with icons.", "アイコン付きのドロップダウンメニュー。"),
    ("A dropdown menu with keyboard shortcuts.", "キーボードショートカット付きのドロップダウンメニュー。"),
    ("A dropdown menu with checkboxes.", "チェックボックス付きのドロップダウンメニュー。"),
    ("A dropdown menu with radio items.", "ラジオアイテム付きのドロップダウンメニュー。"),
    ("A dropdown menu with a submenu.", "サブメニュー付きのドロップダウンメニュー。"),
    ("A dropdown menu with a destructive action.", "破壊的アクション付きのドロップダウンメニュー。"),
    ("A dropdown menu with an avatar.", "アバター付きのドロップダウンメニュー。"),
    ("A complex dropdown menu.", "複合ドロップダウンメニュー。"),
    ("A dropdown menu with checkboxes and icons.", "チェックボックスとアイコン付きのドロップダウンメニュー。"),
    ("A dropdown menu with radio items and icons.", "ラジオアイテムとアイコン付きのドロップダウンメニュー。"),

    # === Empty ===
    ("A basic empty state.", "シンプルな空の状態。"),
    ("An empty state with a card.", "カード付きの空の状態。"),
    ("An empty state with a background.", "背景付きの空の状態。"),
    ("An empty state with an avatar.", "アバター付きの空の状態。"),
    ("An empty state inside a card.", "カード内の空の状態。"),
    ("An empty state with an `InputGroup`.", "`InputGroup` 付きの空の状態。"),
    ("An empty state with an outline.", "アウトライン付きの空の状態。"),
    ("An empty state with an avatar group.", "アバターグループ付きの空の状態。"),

    # === Field ===
    ("A basic field with a label and input.", "ラベルと入力欄を持つシンプルなフィールド。"),
    ("A field with a label and textarea.", "ラベルとテキストエリアを持つフィールド。"),
    ("A field with a label and select.", "ラベルとセレクトを持つフィールド。"),
    ("A field with a label and checkbox.", "ラベルとチェックボックスを持つフィールド。"),
    ("A field with a label and radio group.", "ラベルとラジオグループを持つフィールド。"),
    ("A field with a label and switch.", "ラベルとスイッチを持つフィールド。"),
    ("A field with a label and slider.", "ラベルとスライダーを持つフィールド。"),
    ("A choice card pattern for fields.", "フィールド用のチョイスカードパターン。"),
    ("A fieldset with a legend.", "凡例付きのフィールドセット。"),
    ("A group of fields in a form.", "フォーム内のフィールドグループ。"),
    ("A responsive field layout.", "レスポンシブ対応のフィールドレイアウト。"),

    # === Hover Card ===
    ("A basic hover card.", "シンプルなホバーカード。"),
    ("A hover card with different positions.", "異なる表示位置のホバーカード。"),

    # === Input Group ===
    ("A basic input group.", "シンプルなインプットグループ。"),
    ("Add an addon to the start of the input.", "入力欄の先頭にアドオンを追加します。"),
    ("Add an addon to the end of the input.", "入力欄の末尾にアドオンを追加します。"),
    ("Add an icon to the start of the input.", "入力欄の先頭にアイコンを追加します。"),
    ("Add text to the start of the input.", "入力欄の先頭にテキストを追加します。"),
    ("Add text to the end of the input.", "入力欄の末尾にテキストを追加します。"),
    ("Add a button to the start of the input.", "入力欄の先頭にボタンを追加します。"),
    ("Add a button to the end of the input.", "入力欄の末尾にボタンを追加します。"),
    ("Add a label to the input group.", "インプットグループにラベルを追加します。"),
    ("Add a KBD to the input group.", "インプットグループに KBD を追加します。"),
    ("Add a tooltip to the input group.", "インプットグループにツールチップを追加します。"),
    ("Add a dropdown to the input group.", "インプットグループにドロップダウンを追加します。"),
    ("Add a spinner to the input group.", "インプットグループにスピナーを追加します。"),
    ("An input group inside a card.", "カード内のインプットグループ。"),
    ("A textarea inside an input group.", "インプットグループ内のテキストエリア。"),
    ("Textarea examples inside an input group.", "インプットグループ内のテキストエリア例。"),
    ("Add inline content at the start of the input.", "入力欄の先頭にインラインコンテンツを追加します。"),
    ("Add inline content at the end of the input.", "入力欄の末尾にインラインコンテンツを追加します。"),
    ("Add content to the block start of the input.", "入力欄のブロック先頭にコンテンツを追加します。"),
    ("Add content to the block end of the input.", "入力欄のブロック末尾にコンテンツを追加します。"),
    ("Add a custom addon to the input.", "入力欄にカスタムアドオンを追加します。"),
    ("Input group with addon buttons.", "アドオンボタン付きのインプットグループ。"),
    ("Input group with addons on both sides.", "両側にアドオン付きのインプットグループ。"),
    ("Input group with KBD addons.", "KBD アドオン付きのインプットグループ。"),
    ("Input group with tooltip addon.", "ツールチップアドオン付きのインプットグループ。"),
    ("Input group with button group.", "ボタングループ付きのインプットグループ。"),
    ("Input group with a button group addon.", "ボタングループアドオン付きのインプットグループ。"),

    # === Input OTP ===
    ("A basic OTP input.", "シンプルな OTP 入力欄。"),
    ("OTP input with a separator.", "セパレーター付きの OTP 入力欄。"),
    ("OTP input with 4 digits.", "4桁の OTP 入力欄。"),
    ("OTP input with alphanumeric characters.", "英数字対応の OTP 入力欄。"),
    ("OTP input with a custom pattern.", "カスタムパターンの OTP 入力欄。"),
    ("A controlled OTP input.", "制御された OTP 入力欄。"),
    ("A disabled OTP input.", "無効化された OTP 入力欄。"),
    ("An invalid OTP input.", "無効状態の OTP 入力欄。"),
    ("An OTP input used in a form.", "フォームで使用する OTP 入力欄。"),

    # === Input ===
    ("A basic input.", "シンプルな入力欄。"),
    ("An inline input.", "インライン入力欄。"),
    ("A grid input.", "グリッド入力欄。"),
    ("An input with a badge.", "バッジ付きの入力欄。"),
    ("An input with a field.", "フィールド付きの入力欄。"),
    ("An input with a field group.", "フィールドグループ付きの入力欄。"),
    ("An input with an input group.", "インプットグループ付きの入力欄。"),
    ("An input with a button.", "ボタン付きの入力欄。"),
    ("A required input.", "必須の入力欄。"),
    ("A disabled input.", "無効化された入力欄。"),
    ("An invalid input.", "無効状態の入力欄。"),
    ("A file input.", "ファイル入力欄。"),
    ("An input used in a form.", "フォームで使用する入力欄。"),

    # === Item ===
    ("A basic item.", "シンプルなアイテム。"),
    ("An item with an icon.", "アイコン付きのアイテム。"),
    ("An item with an image.", "画像付きのアイテム。"),
    ("An item with an avatar.", "アバター付きのアイテム。"),
    ("An item with a link.", "リンク付きのアイテム。"),
    ("An item with a header.", "ヘッダー付きのアイテム。"),
    ("An item with a dropdown.", "ドロップダウン付きのアイテム。"),
    ("Use the `size` prop to change the size of the item.", "`size` プロパティでアイテムのサイズを変更します。"),
    ("Use the `variant` prop to change the variant of the item.", "`variant` プロパティでアイテムのバリアントを変更します。"),
    ("A group of items.", "アイテムのグループ。"),

    # === KBD ===
    ("A basic keyboard shortcut.", "シンプルなキーボードショートカット。"),
    ("A group of keyboard shortcuts.", "キーボードショートカットのグループ。"),
    ("A keyboard shortcut as a button.", "ボタンとしてのキーボードショートカット。"),
    ("A keyboard shortcut inside an input group.", "インプットグループ内のキーボードショートカット。"),
    ("A keyboard shortcut inside a tooltip.", "ツールチップ内のキーボードショートカット。"),

    # === Label ===
    ("A basic label.", "シンプルなラベル。"),

    # === Menubar ===
    ("A basic menubar.", "シンプルなメニューバー。"),
    ("A menubar with checkboxes.", "チェックボックス付きのメニューバー。"),
    ("A menubar with radio items.", "ラジオアイテム付きのメニューバー。"),
    ("A menubar with icons.", "アイコン付きのメニューバー。"),
    ("A menubar with a submenu.", "サブメニュー付きのメニューバー。"),

    # === Native Select ===
    ("A basic native select.", "シンプルなネイティブセレクト。"),
    ("A native select with option groups.", "オプショングループ付きのネイティブセレクト。"),
    ("A disabled native select.", "無効化されたネイティブセレクト。"),
    ("An invalid native select.", "無効状態のネイティブセレクト。"),

    # === Navigation Menu ===
    ("A basic navigation menu.", "シンプルなナビゲーションメニュー。"),

    # === Pagination ===
    ("A basic pagination.", "シンプルなページネーション。"),
    ("A simple pagination with previous and next links.", "前へ・次へリンクのみのシンプルなページネーション。"),
    ("A pagination with icons only.", "アイコンのみのページネーション。"),

    # === Popover ===
    ("A basic popover.", "シンプルなポップオーバー。"),
    ("A popover with different alignment positions.", "異なる配置位置のポップオーバー。"),
    ("A popover with a form.", "フォーム付きのポップオーバー。"),

    # === Progress ===
    ("A basic progress bar.", "シンプルなプログレスバー。"),
    ("A progress bar with a label.", "ラベル付きのプログレスバー。"),
    ("A controlled progress bar.", "制御されたプログレスバー。"),

    # === Radio Group ===
    ("A basic radio group.", "シンプルなラジオグループ。"),
    ("A radio group with descriptions.", "説明付きのラジオグループ。"),
    ("A radio group with disabled items.", "無効なアイテムを含むラジオグループ。"),
    ("A radio group used in a fieldset.", "フィールドセット内のラジオグループ。"),
    ("An invalid radio group.", "無効状態のラジオグループ。"),
    ("A radio group with a choice card pattern.", "チョイスカードパターンのラジオグループ。"),

    # === Resizable ===
    ("A basic resizable layout.", "シンプルなリサイズ可能レイアウト。"),
    ("A resizable layout with a handle.", "ハンドル付きのリサイズ可能レイアウト。"),
    ("A vertical resizable layout.", "縦方向のリサイズ可能レイアウト。"),

    # === Scroll Area ===
    ("A basic scroll area.", "シンプルなスクロールエリア。"),
    ("Use `ScrollBar` with `orientation=\"horizontal\"` for horizontal scrolling.", "`ScrollBar` に `orientation=\"horizontal\"` を指定して水平スクロールを有効にします。"),

    # === Select ===
    ("A basic select.", "シンプルなセレクト。"),
    ("Use `SelectGroup`, `SelectLabel`, and `SelectSeparator` to organize items.", "`SelectGroup`、`SelectLabel`、`SelectSeparator` を使ってアイテムを整理します。"),
    ("A select with many items that scrolls.", "スクロール可能な多数のアイテムを持つセレクト。"),
    ("Add the `data-invalid` attribute to the `Field` component and the `aria-invalid` attribute to the `Select` trigger to create an invalid state.", "`Field` の `data-invalid` と `Select` トリガーの `aria-invalid` で無効状態を作成します。"),
    ("A disabled select.", "無効化されたセレクト。"),
    ("Use the `position` prop on `SelectContent` to control alignment. When `position=\"item-aligned\"` (default), the dropdown aligns to the selected item.", "`SelectContent` の `position` プロパティで配置を制御します。`position=\"item-aligned\"`（デフォルト）では選択アイテムに合わせて整列します。"),

    # === Separator ===
    ("A basic separator.", "シンプルなセパレーター。"),
    ("Use `orientation=\"vertical\"` for a vertical separator.", "`orientation=\"vertical\"` で縦方向のセパレーターを作成します。"),
    ("Vertical separators between menu items with descriptions.", "説明付きメニューアイテム間の縦方向セパレーター。"),
    ("Horizontal separators between list items.", "リストアイテム間の横方向セパレーター。"),

    # === Sheet ===
    ("A basic sheet.", "シンプルなシート。"),
    ("Use the `side` prop on `SheetContent` to set the edge of the screen where the sheet appears. Values are `top`, `right`, `bottom`, or `left`.", "`SheetContent` の `side` プロパティでシートが表示される画面端を設定します。`top`、`right`、`bottom`、`left` が指定できます。"),
    ("Use `showCloseButton={false}` on `SheetContent` to hide the close button.", "`SheetContent` の `showCloseButton={false}` で閉じるボタンを非表示にします。"),

    # === Sidebar ===
    ("If you have a single sidebar in your application, you can use the `SIDEBAR_WIDTH` and `SIDEBAR_WIDTH_MOBILE` CSS variables to set the width of the sidebar.", "アプリケーションに1つのサイドバーがある場合、`SIDEBAR_WIDTH` と `SIDEBAR_WIDTH_MOBILE` CSS 変数でサイドバーの幅を設定できます。"),
    ("To trigger the sidebar, you use the `cmd+b` keyboard shortcut on Mac and `ctrl+b` on Windows.", "サイドバーを開くには、Mac では `cmd+b`、Windows では `ctrl+b` キーボードショートカットを使います。"),
    ("If you're upgrading from a previous version of the `Sidebar` component, you'll need to apply the following changes.", "`Sidebar` コンポーネントの以前のバージョンからアップグレードする場合、以下の変更を適用してください。"),

    # === Skeleton ===
    ("A basic skeleton.", "シンプルなスケルトン。"),
    ("A skeleton for a card.", "カード用のスケルトン。"),
    ("A skeleton for a table.", "テーブル用のスケルトン。"),
    ("A skeleton for an avatar.", "アバター用のスケルトン。"),
    ("A skeleton for a form.", "フォーム用のスケルトン。"),
    ("A skeleton for a text block.", "テキストブロック用のスケルトン。"),

    # === Slider ===
    ("A basic slider.", "シンプルなスライダー。"),
    ("Use an array with two values for a range slider.", "2つの値の配列を使って範囲スライダーを作成します。"),
    ("Use an array with multiple values for multiple thumbs.", "複数の値の配列を使って複数のつまみを作成します。"),
    ("Use `orientation=\"vertical\"` for a vertical slider.", "`orientation=\"vertical\"` で縦方向のスライダーを作成します。"),
    ("Use the `disabled` prop to disable the slider.", "`disabled` プロパティでスライダーを無効化します。"),
    ("A controlled slider.", "制御されたスライダー。"),

    # === Sonner ===
    ("A basic toast.", "シンプルなトースト。"),
    ("Use the `position` prop to change the position of the toast.", "`position` プロパティでトーストの表示位置を変更します。"),
    ("A toast with a description.", "説明付きのトースト。"),
    ("Use different toast types for different situations.", "状況に応じて異なるトーストタイプを使い分けます。"),

    # === Spinner ===
    ("A basic spinner.", "シンプルなスピナー。"),
    ("Use the `size-*` utility class to change the size of the spinner.", "`size-*` ユーティリティクラスでスピナーのサイズを変更します。"),
    ("Add a spinner to a button to indicate a loading state. Place the `Spinner` inside the `Button` component.", "ボタンにスピナーを追加してローディング状態を示します。`Button` コンポーネントの中に `Spinner` を配置します。"),
    ("Add a spinner to a badge to indicate a loading state. Place the `Spinner` inside the `Badge` component.", "バッジにスピナーを追加してローディング状態を示します。`Badge` コンポーネントの中に `Spinner` を配置します。"),
    ("An empty spinner without a container.", "コンテナなしの空のスピナー。"),
    ("An input group with a spinner.", "スピナー付きのインプットグループ。"),
    ("A custom spinner.", "カスタムスピナー。"),

    # === Switch ===
    ("A basic switch.", "シンプルなスイッチ。"),
    ("A switch with a description.", "説明付きのスイッチ。"),
    ("Card-style selection where `FieldLabel` wraps the entire `Field` for a clickable card pattern.", "`FieldLabel` が `Field` 全体を包むカードスタイルの選択パターン。"),
    ("Add the `disabled` prop to the `Switch` component to disable the switch. Add the `data-disabled` prop to the `FieldLabel` to style the disabled state.", "`Switch` の `disabled` プロパティでスイッチを無効化します。`FieldLabel` の `data-disabled` プロパティで無効状態のスタイルを適用します。"),
    ("Add the `aria-invalid` prop to the `Switch` component to indicate an invalid state. Add the `data-invalid` prop to the `FieldLabel` to style the invalid state.", "`Switch` の `aria-invalid` プロパティで無効状態を示します。`FieldLabel` の `data-invalid` プロパティで無効状態のスタイルを適用します。"),
    ("Use the `size` prop to change the size of the switch.", "`size` プロパティでスイッチのサイズを変更します。"),

    # === Table ===
    ("A basic table.", "シンプルなテーブル。"),
    ("Use the `TableFooter` component to add a footer to the table.", "`TableFooter` コンポーネントでテーブルにフッターを追加します。"),
    ("A table showing actions for each row using a `DropdownMenu`.", "`DropdownMenu` を使って各行にアクションを表示するテーブル。"),

    # === Tabs ===
    ("A basic tabs.", "シンプルなタブ。"),
    ("Use the `variant=\"line\"` prop on `TabsList` for a line style.", "`TabsList` の `variant=\"line\"` プロパティでラインスタイルにします。"),
    ("Use `orientation=\"vertical\"` for vertical tabs.", "`orientation=\"vertical\"` で縦方向のタブを作成します。"),
    ("Tabs with icons.", "アイコン付きのタブ。"),
    ("Tabs with disabled items.", "無効なアイテムを含むタブ。"),

    # === Textarea ===
    ("A basic textarea.", "シンプルなテキストエリア。"),
    ('Use `Field`, `FieldLabel`, and `FieldDescription` to create a textarea with a label and description.', '`Field`、`FieldLabel`、`FieldDescription` を使ってラベルと説明付きのテキストエリアを作成します。'),
    ("Use the `disabled` prop to disable the textarea. To style the disabled state, add the `data-disabled` prop to the `FieldLabel`.", "`disabled` プロパティでテキストエリアを無効化します。`FieldLabel` の `data-disabled` プロパティで無効状態のスタイルを適用します。"),
    ("Use the `aria-invalid` prop to mark the textarea as invalid. To style the invalid state, add the `data-invalid` prop to the `FieldLabel`.", "`aria-invalid` プロパティでテキストエリアを無効状態にマークします。`FieldLabel` の `data-invalid` プロパティで無効状態のスタイルを適用します。"),
    ("Pair with `Button` to create a textarea with a submit button.", "`Button` と組み合わせて送信ボタン付きのテキストエリアを作成します。"),

    # === Toggle ===
    ("A basic toggle.", "シンプルなトグル。"),
    ("Use `variant=\"outline\"` for an outline style.", "`variant=\"outline\"` でアウトラインスタイルにします。"),
    ("Use the `size` prop to change the size of the toggle.", "`size` プロパティでトグルのサイズを変更します。"),
    ("Use the `disabled` prop to disable the toggle.", "`disabled` プロパティでトグルを無効化します。"),
    ("A text toggle.", "テキストトグル。"),

    # === Toggle Group ===
    ("A basic toggle group.", "シンプルなトグルグループ。"),
    ("Use `variant=\"outline\"` for an outline style.", "`variant=\"outline\"` でアウトラインスタイルにします。"),
    ("Use the `size` prop to change the size of the toggle group.", "`size` プロパティでトグルグループのサイズを変更します。"),
    ("Use `spacing` to add spacing between toggle group items.", "`spacing` でトグルグループアイテム間に間隔を追加します。"),
    ("Use `orientation=\"vertical\"` for vertical toggle groups.", "`orientation=\"vertical\"` で縦方向のトグルグループを作成します。"),
    ("A custom toggle group example.", "カスタムトグルグループの例。"),
    ("A disabled toggle group.", "無効化されたトグルグループ。"),
    ("A font weight selector built with a toggle group.", "トグルグループで作ったフォントウェイトセレクター。"),

    # === Tooltip ===
    ("A basic tooltip.", "シンプルなツールチップ。"),
    ("Use the `side` prop to change the position of the tooltip.", "`side` プロパティでツールチップの表示位置を変更します。"),
    ("Show a tooltip on a disabled button by wrapping it with a span.", "無効化されたボタンをスパンで囲んでツールチップを表示します。"),
    ("A tooltip triggered by a keyboard shortcut.", "キーボードショートカットでトリガーされるツールチップ。"),

    # === Typography ===
    ("This is a typographic example showing the heading 1 (H1) style.", "見出し1（H1）スタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the heading 2 (H2) style.", "見出し2（H2）スタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the heading 3 (H3) style.", "見出し3（H3）スタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the heading 4 (H4) style.", "見出し4（H4）スタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the paragraph style.", "段落スタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the blockquote style.", "ブロッククォートスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the inline code style.", "インラインコードスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the lead style.", "リードスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the large style.", "ラージスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the small style.", "スモールスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the muted style.", "ミュートスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the list style.", "リストスタイルのタイポグラフィ例。"),
    ("This is a typographic example showing the table style.", "テーブルスタイルのタイポグラフィ例。"),

    # === Calendar (more) ===
    ("A calendar with booked dates.", "予約済み日付付きのカレンダー。"),
    ("A calendar with time selection.", "時刻選択付きのカレンダー。"),
    ("A calendar with a Hijri calendar.", "ヒジュラ暦カレンダー。"),
    ("A calendar with custom days.", "カスタム日付付きのカレンダー。"),
    ("A calendar with presets.", "プリセット付きのカレンダー。"),
    ("A calendar with week numbers.", "週番号付きのカレンダー。"),

    # === Collapsible (more) ===
    ("Use `open` and `onOpenChange` to control the open state.", "`open` と `onOpenChange` で開閉状態を制御します。"),

    # === Common patterns (generic) ===
    ("See the [Base UI](https://base-ui.com/react/components/", "詳細は [Base UI](https://base-ui.com/react/components/"),
    (") documentation for more information.", ") のドキュメントを参照してください。"),
]

def translate_outside_code(content, translations):
    """Apply translations only outside code blocks."""
    result = []
    in_code = False
    
    for line in content.split("\n"):
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code = not in_code
            result.append(line)
            continue
        
        if in_code:
            result.append(line)
            continue
        
        # Apply translations to this line
        for eng, jpn in translations:
            if eng in line:
                line = line.replace(eng, jpn)
        
        result.append(line)
    
    return "\n".join(result)

count = 0
for d in dirs:
    for fname in os.listdir(d):
        if not fname.endswith(".mdx"):
            continue
        path = os.path.join(d, fname)
        with open(path, "r") as f:
            content = f.read()
        original = content
        content = translate_outside_code(content, translations)
        if content != original:
            with open(path, "w") as f:
                f.write(content)
            count += 1

print(f"Updated {count} files")
