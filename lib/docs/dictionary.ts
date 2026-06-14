export type DocsDict = {
  installDeps: string
  copyPaste: string
  updateImports: string
  cliTab: string
  manualTab: string
}

const dictionaries: Record<string, DocsDict> = {
  en: {
    installDeps: "Install the following dependencies:",
    copyPaste: "Copy and paste the following code into your project.",
    updateImports: "Update the import paths to match your project setup.",
    cliTab: "Command",
    manualTab: "Manual",
  },
  ja: {
    installDeps: "以下の依存パッケージをインストールします：",
    copyPaste: "以下のコードをプロジェクトにコピー＆ペーストします。",
    updateImports: "インポートパスをプロジェクトに合わせて更新します。",
    cliTab: "コマンド",
    manualTab: "マニュアル",
  },
}

export function getDictionary(lang: string): DocsDict {
  return dictionaries[lang] ?? dictionaries["en"]
}
