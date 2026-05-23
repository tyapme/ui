export default function TypographyDemo() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        笑いへの課税：ジョーク税年代記
      </h1>
      <p className="text-xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        むかしむかし、遠い国に、一日中王座でくつろぐ非常に怠け者の王がいました。ある日、側近たちが問題を持ち込みました。王国のお金が底をつきそうなのです。
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        王の計画
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        王は長い時間をかけて考え抜いた末、ついに{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          妙案
        </a>
        を思いつきました。王国のジョークに課税するのです。
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &quot;結局のところ&quot;と彼は言った。&quot;誰もが面白いジョークを楽しむのだから、その特権に対して代価を払うのは公平というものだ。&quot;
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        ジョーク税
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        王の臣下たちは面白くありませんでした。不満を漏らして文句を言いましたが、王は頭として譲りませんでした。
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>第1段階のダジャレ：金貧5枚</li>
        <li>第2段階のジョーク：金貧10枚</li>
        <li>第3段階の一発ギャグ：金貧20枚</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        その結果、人々はジョークを言わなくなり、王国は暗淦たる雰囲気に包まれました。しかし、王の愚かさに負けまいとした者が一人いました。ジョークスターという名の宮廷道化師です。
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        ジョークスターの反乱
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        ジョークスターは夜中にこっそりと城に忍び込み、至る所にジョークを置いていき始めました。王の柘の下、スープの中、果ては王室のトイレにも。王は激怒しましたが、ジョークスターを止めることができませんでした。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        そしてある日、王国の人々はジョークスターが残したジョークがあまりにも面白くて、笑わずにいられないことに気づきました。一度笑い始めると、もう止まりませんでした。
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        民の反乱
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        笑いに元気づけられた王国の人々は、再びジョークやダジャレを言い始め、やがて王国全体がその笑いの輪に加わりました。
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                王の宝庫
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                民の幸福
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                空
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                湢れている
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                わずか
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                満足
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                満準
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                陶酔
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        臣下たちがいかに幸せになったかを目の当たりにした王は、自らの過ちに気づき、ジョーク税を廃止しました。ジョークスターは英雄として称えられ、王国はその後も末長く幸せに暮らしました。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        この物語の教訓は、笑いの力を決して侗るな、そして悪いアイデアには常に注意せよ、ということです。
      </p>
    </div>
  )
}
