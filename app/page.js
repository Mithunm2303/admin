import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        modi incidunt ut exercitationem sapiente, repellat ducimus ex minus
        provident inventore. Natus, iste. Quisquam ratione quod provident in
        alias corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perferendis nam vitae neque debitis quod hic ullam, quas
        praesentium? Voluptatem earum obcaecati praesentium maxime corporis
        tempore dolore incidunt reprehenderit quia dolor.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/catalogs">
          <button className="btn-primary">View Catalogs</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti, assumenda distinctio
          adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis
          eveniet, aspernatur enim quas.
        </p>
      </div>
    </main>
  );
}
