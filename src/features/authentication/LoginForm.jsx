import styled from "styled-components";
import { useLogin } from "../authentication/useLogin";
import FormRow, {
  Form,
  FormError,
  FormGroup,
  Input,
  Label,
  StyledForm,
  StyledFormContImage,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSelect,
} from "../../ui/Form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../ui/Button";
import { login } from "../../services/apiAuth";
import Spinner from "../../ui/Spinner";

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;


function LoginForm() {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("test@test.test");
  const [password, setPassword] = useState("test");

  function handleSubmit(e) {
    e.preventDefault();
    if(!email || !password) return
    login({email, password}, {
      onSettled: () => {
        setEmail("")
        setPassword("")
      }
    })
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Heslo</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Button>{!isLoading ? "Prihlásiť sa" : <Spinner/>}</Button>
      </FormGroup>
    </Form>
  );
}

export default LoginForm;
