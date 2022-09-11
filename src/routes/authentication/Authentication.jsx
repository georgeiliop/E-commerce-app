import "./authentication.scss";
import SignUpForm from "../../components/signUpForm/Signup";
import SignInForm from "../../components/signInForm/SignInForm";

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
