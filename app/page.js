"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToWeek1 = () => {
    router.push("/week1");
  };
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-2 bg-blue-50">
      <div className="">
        <div>Hello There. Click on a page to visit it</div>
        <div className="flex flex-col">
          <Link href="/week1" className="border bg-green-400">
            Go to week 1
          </Link>
          <Link href="/week2" className="border bg-blue-400">
            Go to week 2
          </Link>
          <button onClick={goToWeek1}>An alternative route to week 1</button>
        </div>
      </div>
    </main>
  );
}
