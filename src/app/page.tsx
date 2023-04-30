import { ArticlesCard } from "@/components/ArticlesCard";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 flex w-full justify-between bg-white/90 px-8 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <span className="text-4xl font-black text-[#ee4055]"> L </span>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Articles</Link>
            <Link href="/">About</Link>
            <Link href="/">Job</Link>
          </div>
        </div>
        <button className="rounded-md bg-[#090909] px-2 py-2 text-white">
          Newsletter
        </button>
      </header>
      <main className="mx-auto flex max-w-5xl flex-col px-8 pt-40  xl:px-0">
        <ArticlesCard />
        <div className="mt-10 grid gap-8 lg:mt-24 lg:grid-cols-3 ">
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
        <div className="mt-10 grid gap-8 lg:mt-24 lg:grid-cols-2">
          <ArticlesCard />
          <ArticlesCard />
        </div>
      </main>
    </>
  );
}
