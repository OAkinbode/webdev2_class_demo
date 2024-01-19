import Link from "next/link";
import { FaApple } from "react-icons/fa";
import Buttons from "@/components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="text-4xl text-red-700 border-4 border-green-800 p-2 rounded-xl">
        The chicken crossed the road and got to the other side....
      </div>
      <div className="text-4xl text-orange-600">
        <Link href="/apples">
          <FaApple />
        </Link>
        <Link href="">
          <Buttons color="text-blue-600" size="text-4xl" />
        </Link>
      </div>
    </main>
  );
}
