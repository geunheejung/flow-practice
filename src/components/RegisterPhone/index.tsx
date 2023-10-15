import { ChangeEvent, useCallback, useState } from "react";
import { Input, Text } from "@components/index";
import validate from "@utils/validate";

interface Props {
  onSumbit(phone: string): void;
}

const RegisterPhone = ({ onSumbit }: Props) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;
      setPhone(value);
    },
    [phone]
  );

  const _validate = () => {
    const error = validate.phone(phone);

    if (error) {
      setError(error);
      return false;
    }

    setError('');
    return true;
  }

  const handleSubmit = useCallback(() => {
    const isValid = _validate();

    if (isValid) return;

    // fetchCodeNumber();
    
    onSumbit(phone);
  }, [phone, validate]);


  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input
        id="phone"
        name="phone"
        type="tel"
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <label htmlFor="phone">
        <Text>휴대폰 번호</Text>
      </label>
      <div className="error">
        <Text type="error">{error}</Text>
      </div>
    </form>
  );
};

export default RegisterPhone;
