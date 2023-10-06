import CatalogList from "./catalogList";
export default function Catalogs() {
  return (
    <main>
      <nav>
        <div>
          <h2>Catalogs</h2>
          <p>
            <small>Available catalogs</small>
          </p>
        </div>
      </nav>
      <CatalogList />
    </main>
  );
}
