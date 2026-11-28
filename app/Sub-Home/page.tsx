import Link from "next/link";
export default function renderSomething() {
  return (
    <div>
      <h1>You're currently in Sub-Home. Where would you to like to go?</h1>
      <Link href="/">Home</Link>
      <Link href="../About">About</Link>
    </div>
  );
}
