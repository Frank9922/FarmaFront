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
              <div className="farmaInfo">
                <div className="fila">
                  <div className="propiedad"><h3>Nombre Comercial:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.nombre_comercial}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Accion Terapeutica:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.accion_teraupetica}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Via Administracion:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.via_administracion}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Dosis:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.dosis}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Efectos:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.efectos}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Efectos:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.efectos}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Concentracion Maxima:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.concentracion_max}</p>
                  </div>
                </div>
                <div className="fila">
                  <div className="propiedad"><h3>Concentracion Recomendada:</h3></div>
                  <div className="descripcion">
                    <p>{data.farmaco.concentracion_recomendada}</p>
                  </div>
                </div>
                  
              </div>
                
             
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
