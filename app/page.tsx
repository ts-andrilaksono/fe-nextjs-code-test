import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm ring-1 ring-zinc-100">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Frontend Engineer Assignment
        </h1>
        <p className="mt-3 text-zinc-600">
          You have <span className="font-medium text-zinc-900">30 minutes</span>.
          Open the page below, find what is wrong, and make it better.
        </p>
        <Link
          href="/test"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Open the test page →
        </Link>
      </div>
    </main>
  );
}
