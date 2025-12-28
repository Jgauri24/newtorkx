import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLoginComp() {

  const handleSuccess = (credentialResponse) => {
    console.log("Google Login Success", credentialResponse);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
}
