import axios from "axios";
import {createContext, useState, useEffect } from "react";

export const SzavakContexts = createContext();

export default function SzoProvider({children}){
    const [loading, setLoading] = useState(true);
    const [szavakLista, setSzavakLista] = useState([]);

    function getSzavak() {
    axios
      .get("http://127.0.0.1:8000/api/szavak")
      .then(function (response) {
        setSzavakLista(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }

    useEffect(() => {
        getSzavak();
    }, []);


    return(
        <SzavakContexts.Provider value={{ szavakLista, loading }}>
            {children}
        </SzavakContexts.Provider>
        
    );
}
