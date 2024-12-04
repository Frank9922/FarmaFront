import React from 'react'

const IndicationComponent = () => {
  return (
    <>
        <div className="indicationContainer">
            <h3>Ingrese indicación</h3>
            
            <div>
                <div className="inputCont">
                    <input type="number" name="indication" id="indication" />
                    <label htmlFor="indication">unidad</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default IndicationComponent
