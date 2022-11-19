import dynamic from "next/dynamic";

const FormLogin = dynamic(() => import("./FormLogin"));

const FeatureLogin = () => {
  return (
    <div>
      <p>Feature Login</p>
      <FormLogin />
    </div>
  );
};

export default FeatureLogin;
