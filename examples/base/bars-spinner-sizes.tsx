import { BarsSpinner } from "@/styles/base/ui/bars-spinner"

export default function BarsSpinnerSizes() {
  return (
    <div className="flex items-center justify-center gap-8 p-8">
      <BarsSpinner size={16} />
      <BarsSpinner size={24} />
      <BarsSpinner size={32} className="text-primary" />
      <BarsSpinner size={40} color="#7c3aed" />
    </div>
  )
}
