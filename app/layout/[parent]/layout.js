export function generateStaticParams() {
  return [{ parent: "parent" }, { parent: "parent2" }];
}

export default function Layout({ children }) {
  return <>{children}</>;
}
