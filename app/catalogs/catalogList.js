async function getCatalogs() {
  // const res = await fetch("http://localhost:4000/data");
  const res = await fetch("http://localhost:3002/site/sc/getallatalogs");

  return res.json();
}

export default async function catalogList() {
  const { catalogData } = await getCatalogs();

  return (
    <>
      {catalogData.map((data) => (
        <div key={data.id} className="card">
          <h2>{data.name}</h2>
        </div>
      ))}
      {/* <p>{catalogData}</p> */}
    </>
  );
}
