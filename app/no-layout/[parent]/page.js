export function generateStaticParams() {
  return [{ parent: "parent" }, { parent: "parent2" }];
}

export default function Page({ params }) {
  return (
    <>
      <h1>No layout (parent)</h1>
    </>
  );
}
