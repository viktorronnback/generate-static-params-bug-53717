import Link from "next/link";

export function generateStaticParams({ params }) {
  console.log("Using layout:", params);
  return [{ slug: "child" }, { slug: "child2" }];
}

export default function Page({ params }) {
  return (
    <>
      <h1>Using layout (child page) - working</h1>
      <p>
        This route uses <i>generateStaticParams</i> in <i>page.js</i> in the
        parent folder
      </p>
      <p>
        Check the console to see that params are loaded correctly in
        generateStaticParams
      </p>
      <p>{JSON.stringify(params)}</p>
      <Link href="/no-layout/parent/child">
        generateStaticParams in layout.js
      </Link>
      <br />
      <Link href="/">Home</Link>
    </>
  );
}
