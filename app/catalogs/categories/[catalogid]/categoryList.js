async function getCategories() {
  const res = await fetch(
    "http://localhost:3002/site/sc/catalogs/site-catalog/categories"
  );

  return res.json();
}

export default async function CategoryList() {
  const categoryData = await getCategories();

  return (
    <>
      {categoryData.map((cat) => (
        <div key={cat.id} className="card">
          <h2>{cat.name}</h2>
          {cat.categories.map((item) => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
      ))}
      {categoryData.length === 0 && (
        <p className="text-centre">NO Available Categories</p>
      )}
    </>
  );
}
