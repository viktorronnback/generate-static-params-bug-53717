import Link from "next/link";

export function generateStaticParams({ params }) {
  console.log("Not using layout:", params);
  return [{ slug: "child" }, { slug: "child2" }];
}

export default function Page({ params }) {
  return (
    <>
      <h1>No layout (child page) - not working</h1>
      <p>
        This route uses <i>generateStaticParams</i> in <i>page.js</i> in the
        parent folder
      </p>
      <p>
        If you check the console, params are undefined from generateStaticParams
      </p>
      <p>Params are still loaded correctly here inside the page</p>
      <p>{JSON.stringify(params)}</p>
      <Link href="/layout/parent/child">generateStaticParams in page.js</Link>
      <br />
      <Link href="/">Home</Link>
    </>
  );
}
