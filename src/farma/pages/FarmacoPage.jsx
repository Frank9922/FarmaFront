import { useParams } from "react-router-dom";
import { FarmaLayout } from "../layout/FarmaLayout";
import { useGetFarmacoQuery } from "../../store/apis/checkApi";

const FarmacoPage = () => {
  const { FarmaName } = useParams();
  const { isFetching, data } = useGetFarmacoQuery(FarmaName);

  return (
    <FarmaLayout>


      <>
        <h1>{FarmaName}</h1>
        {isFetching ? (
          <div className="spinner"></div>
        ) : (
          <div>
            {data && data.farmaco ? (
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Dosis</th>
                    <th>Concentracion Max</th>
                  </tr>
                </thead>
                <tbody>
                    <tr key={data.farmaco.id}>
                      <td>{data.farmaco.name}</td>
                      <td>{data.farmaco.accion_teraupetica}</td>
                      <td>{data.farmaco.concentracion_max}</td>
                      
                    </tr>
                </tbody>
              </table>
            ) : (
              <p>No hay datos disponibles</p>
            )}
          </div>
        )}
      </>

    </FarmaLayout>
  );
};

export default FarmacoPage;
