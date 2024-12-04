import React from 'react'

const QuestionComponent = () => {
  return (
    <>
        <div className='questionContent'>
            <h3>¿EL paciente esta restringuido de liquido?</h3>
            <div>
                <div>
                  
                    <input type="checkbox" name="restring" value="si" />SI
                  
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" name="restring" value="no"/>
                        NO
                    </label>
                </div>

            </div>
        </div>
    </>
  )
}

export default QuestionComponent
