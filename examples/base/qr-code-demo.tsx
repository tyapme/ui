import { QRCode } from "@/styles/base/ui/qr-code"

export default function QRCodeDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <QRCode value="https://ui.tyap.me" size={200} />
    </div>
  )
}
