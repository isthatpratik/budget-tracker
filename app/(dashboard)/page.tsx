import { Header } from "@/components/header";
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        Dashboard Layout
      </main>
    </>
  );
}
