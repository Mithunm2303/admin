import CategoryList from "./categoryList";
export default function Categories() {
  return (
    <main>
      <nav>
        <div>
          <h2>Categories</h2>
          <p>
            <small>Available categories</small>
          </p>
        </div>
      </nav>
      <CategoryList />
    </main>
  );
}
