import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york-v4/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "支払済",
    totalAmount: "$250.00",
    paymentMethod: "クレジットカード",
  },
  {
    invoice: "INV002",
    paymentStatus: "保留中",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "未払い",
    totalAmount: "$350.00",
    paymentMethod: "銀行振込",
  },
  {
    invoice: "INV004",
    paymentStatus: "支払済",
    totalAmount: "$450.00",
    paymentMethod: "クレジットカード",
  },
  {
    invoice: "INV005",
    paymentStatus: "支払済",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "保留中",
    totalAmount: "$200.00",
    paymentMethod: "銀行振込",
  },
  {
    invoice: "INV007",
    paymentStatus: "未払い",
    totalAmount: "$300.00",
    paymentMethod: "クレジットカード",
  },
]

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>最近の請求書一覧です。</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">請求書番号</TableHead>
          <TableHead>ステータス</TableHead>
          <TableHead>支払方法</TableHead>
          <TableHead className="text-right">金額</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>合計</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
