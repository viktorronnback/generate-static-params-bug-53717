import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/no-layout/parent/child">
        generateStaticParams layout.js (not working correctly)
      </Link>
      <br />
      <Link href="/layout/parent/child">
        generateStaticParams page.js (working correctly)
      </Link>
    </>
  );
}
