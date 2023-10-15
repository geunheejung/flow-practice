import { useCallback, useState } from "react";
import RegisterPhone from "@components/RegisterPhone";

const SignupPage = () => {
  const [userInfo, setUserInfo] = useState({
    phone: "",
    residentNumber: "",
    address: "",
  });

  const handlePhoneSubmit = useCallback((phone: string) => {
    setUserInfo((prev) => ({ ...prev, phone }));
  }, []);

  return (
    <div className="signup">
      <RegisterPhone onSumbit={handlePhoneSubmit} />
    </div>
  );
};

export default SignupPage;
