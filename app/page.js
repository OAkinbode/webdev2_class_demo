import Link from "next/link";
import { FaApple } from "react-icons/fa";
import Buttons from "@/components/buttons";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center p-2 gap-4 flex flex-row">
      <div className="text-4xl text-red-700 border-4 border-green-800 p-2 rounded-xl flex-1 bg-green-100 h-screen">
        <p>The chicken crossed the road and got to the other side....</p>
        <div className="m-6">
          <img
            className="rounded-lg"
            src="/chicken.jpeg"
            alt="chicken crossing"
          ></img>
        </div>
      </div>
      <div className="text-4xl text-orange-600 flex-1 bg-yellow-100 h-screen border-4 border-yellow-700 rounded-xl">
        <Link href="/apples">
          <FaApple />
        </Link>
        <Link href="">
          <Buttons color="text-blue-600" size="text-4xl" />
        </Link>
        This is a sample text
      </div>
    </main>
  );
}
