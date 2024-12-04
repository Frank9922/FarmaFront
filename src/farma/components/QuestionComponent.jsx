import React from 'react'

const QuestionComponent = () => {
  return (
    <>
        <div className='questionContent'>
            <h3>¿EL paciente esta restringuido de liquido?</h3>
            <div>
                <div>
    
                    <input type="radio" id='si' name="restring" value={true}/>
                    <label htmlFor="si"> SI</label>

                </div>
                <div>
                   
                    <input type="radio" id='no' name="restring" value={false}/>
                    <label htmlFor="no">NO</label>

                </div>
            </div>
        </div>
    </>
  )
}

export default QuestionComponent
