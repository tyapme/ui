import { QRCode } from "@/styles/base/ui/qr-code"

export function QrCode1() {
  return (
    <div className="mx-auto size-40">
      <QRCode data="https://example.com" />
    </div>
  )
}
