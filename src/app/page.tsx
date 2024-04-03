import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="outline">Button</Button>
            <Button variant="destructive">Button 2</Button>
    </main>
  );
}
