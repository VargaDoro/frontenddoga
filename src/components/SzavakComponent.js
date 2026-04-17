import React, { useContext } from "react";
import { SzavakContexts } from "../contexts/SzavakContexts";
import SzoComponent from "./SzoComponent";

export default function SzavakComponent() {
  const { szavakLista, loading } = useContext(SzavakContexts);

  if (loading) return <div>Betöltés folyamatban...</div>;
  if (!szavakLista?.length) return <div>Nincsenek szavak.</div>;

  return (
    <div>
      <h2>Szavak</h2>
      <div className="row">
        {szavakLista.map((szo) => (
          <div key={szo.id} className="col-md-4 col-lg-3">
            <SzoComponent szo={szo} />
          </div>
        ))}
      </div>
    </div>
  );
}