import React from 'react'


const CreateAcc = () => {
    return(
        <div className='container'>
            <h2 className='pt-3'>Create Account</h2>
       
            <form>
           
                <div className="mb-3">
                    <label for="exampleInputName" class="form-label">FirstName</label>
                    <input type="name" class="form-control" id="exampleInputName" /> 
                </div>
                <div className="mb-3">
                    <label for="exampleInputName" class="form-label">LastName</label>
                    <input type="name" class="form-control" id="exampleInputName" /> 
                </div>
            </form>
        </div>
    )
}

export default Login