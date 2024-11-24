import { useState } from "react";
import { Form, FormGroup, Input, Label } from "../../ui/Form";
import { useSignUp } from "./useSignUp";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

function ChangePasswordForm() {
  const { newPassword, setNewPassword } = useState("");
  const { oldPassword, setOldPassword } = useState("");
  const { passwordConfirm, setPasswordConfirm } = useState("");

  const { signup, isLoading } = useSignUp();
  return (
    <Form position="center_sidebar">
      <FormGroup>
        <Label>Staré heslo</Label>
        <Input
          id="old-password"
          type="password"
          autoComplete="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          disabled={isLoading}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Nové heslo</Label>
        <Input
          type="password"
          id="new-password"
          autoComplete="current-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={isLoading}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Potvrdiť nové heslo</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          disabled={isLoading}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Button>{!isLoading ? "Zmeniť heslo" : <Spinner />}</Button>
      </FormGroup>
    </Form>
  );
}

export default ChangePasswordForm;
