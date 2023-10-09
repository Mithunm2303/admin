import Link from "next/link";

async function getCatalogs() {
  // const res = await fetch("http://localhost:4000/data");
  const res = await fetch("http://localhost:3002/site/sc/getallatalogs", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function catalogList() {
  const catalogData = await getCatalogs();
  const data = await catalogData.data;

  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="card">
          <Link href={`/catalogs/categories/${data.id}`}>
            <h2>{data.name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
