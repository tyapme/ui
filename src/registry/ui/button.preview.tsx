import { Button } from "./button";

export default function ButtonPreview() {
  return (
    <div className="flex gap-4 p-8 flex-wrap">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
