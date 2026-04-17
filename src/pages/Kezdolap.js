import React, { useContext } from "react";
import SzavakComtonent from "../components/SzavakComponent";
import SzavakContext from "../contexts/SzavakContexts";

export default function Kezdolap() {
  const { szavakLista } = useContext(SzavakContext);
  
  return (
    <div>
      <SzavakComtonent />
    </div>
  );
}