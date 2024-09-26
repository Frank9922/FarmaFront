import React from "react";
import { useParams } from "react-router-dom";
import { FarmaLayout } from "../layout/FarmaLayout";
import { useGetFarmacoQuery } from "../../store/apis/checkApi";

const FarmacoPage = () => {
  const { FarmaName } = useParams();
  console.log(FarmaName);
  const { isFetching, data } = useGetFarmacoQuery(FarmaName);

  return (
    <FarmaLayout>
      <div>
        <h1>{FarmaName}</h1>
        {isFetching ? (
          <div className="spinner"></div>
        ) : (
          <div>
            {data && data.farmacos ? (
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Dosis</th>
                  </tr>
                </thead>
                <tbody>
                  {data.farmaco.map((farmaco) => (
                    <tr key={farmaco.id}>
                      <td>{farmaco.name}</td>
                      <td>{farmaco.accion_terapeutica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No hay datos disponibles</p>
            )}
          </div>
        )}
      </div>
    </FarmaLayout>
  );
};

export default FarmacoPage;
