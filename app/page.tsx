// This will fix the error.
// import "next/image";

export default async function Page() {
  // The issue seems to stem from this dynamic import.
  const dynamic = "_dynamic";
  const { default: Component } = await import(`./${dynamic}.tsx`);
  // This works:
  // const { default: Component } = await import(`./_dynamic.tsx`);
  return <Component />;
}
