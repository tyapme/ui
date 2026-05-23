import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>商品情報</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            最先端の技術とスタイリッシュなデザインを融合した主力製品です。
            プレミアム素材で作られており、卓越したパフォーマンスと信頼性を提供します。
          </p>
          <p>
            高度な処理性能と、初心者から上級者まで直感的に使えるインターフェースを備えています。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>配送について</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            信頼できる配送パートナーを通じて全世界に発送しています。
            通常配送は3〜5営業日、速達配送は1〜2営業日でお届けします。
          </p>
          <p>
            すべての注文は丁寧に梱包し、完全保険付きでお届けします。
            専用の追跡ポータルでリアルタイムに配送状況を確認できます。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>返品ポリシー</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            30日間の充実した返品保証を設けています。
            万が一ご満足いただけない場合は、元の状態で返品してください。
          </p>
          <p>
            手続きは簡単で、返送料無料・返金は商品受取後48時間以内に処理されます。
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
