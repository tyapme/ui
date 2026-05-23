import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select"

export default function NativeSelectGroups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">部門を選択</NativeSelectOption>
      <NativeSelectOptGroup label="エンジニアリング">
        <NativeSelectOption value="frontend">フロントエンド</NativeSelectOption>
        <NativeSelectOption value="backend">バックエンド</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="営業">
        <NativeSelectOption value="sales-rep">営業担当</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          アカウントマネージャー
        </NativeSelectOption>
        <NativeSelectOption value="sales-director">
          営業部長
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="オペレーションズ">
        <NativeSelectOption value="support">
          カスタマーサポート
        </NativeSelectOption>
        <NativeSelectOption value="product-manager">
          プロダクトマネージャー
        </NativeSelectOption>
        <NativeSelectOption value="ops-manager">
          オペレーションズマネージャー
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
