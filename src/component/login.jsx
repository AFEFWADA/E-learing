import React, { useState } from 'react';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBBtn, 
  MDBInput, 
  MDBCheckbox, 

} from 'mdb-react-ui-kit';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <MDBRow className="w-100">
        <MDBCol md="6" lg="5" xl="4" className="mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="text-center">{isLogin ? 'Login' : 'Signup'}</h4>
              <hr />
              {/* Form */}
              <form>
                {!isLogin && (
                  <>
                    <MDBInput label="FirstName" id="form1" type="text" className="mb-3" required />
                    <MDBInput label="LastName" id="form2" type="text" className="mb-3" required />
                  </>
                )}
                <MDBInput label="Email address" id="form3" type="email" className="mb-3" required />
                <MDBInput label="Password" id="form4" type="password" className="mb-3" required />

                {/* Remember Me and Terms */}
                {!isLogin && (
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox label="I agree to the terms" id="terms" />
                  </div>
                )}

                {/* Submit Button */}
                <MDBBtn className="mb-4 w-100" color="dark">{isLogin ? 'Sign In' : 'Sign Up'}</MDBBtn>

                {/* Alternate Actions */}
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">{isLogin ? 'Forgot password?' : 'Already have an account? Login'}</a>
                  </p>
                  <MDBBtn tag="button" className="btn btn-link text-muted" color="none" onClick={toggleForm}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Auth;
