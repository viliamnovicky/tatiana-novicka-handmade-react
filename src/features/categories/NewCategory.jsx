import {
  FormError,
  FormGroup,
  Error,
  Form,
  Input,
  Label,
} from "../../ui/Form";
import Button from "../../ui/Button";

import { useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import { useCreateCategory } from "./useCreateCategory";
import Heading from "../../ui/Heading";

function NewCategory() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  //const { categories, isLoading: isLoadingCategories } = useCategories();
  const { isCreating, createCategory } = useCreateCategory();

  function onSubmit(data) {
    createCategory(
      { ...data, coverImage: data.coverImage[0] },
      {
        onSuccess: () => {
          reset();
          // onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isCreating) return <Spinner />;

  return (
    <Modal>
      <Modal.Open opens="new-category-form">
        <Button variation="newCategory">Pridať novú kategóriu</Button>
      </Modal.Open>
      <Modal.Window name="new-category-form">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Heading font="hand">Nová kategória</Heading>
          <FormGroup>
            <Label>Názov kategórie
            <Error>{errors?.name?.message}</Error>
            </Label>
            
            <Input
              autoComplete="name"
              id="name"
              placeholder="Názov Kategórie"
              {...register("name", {
                required: "Toto pole je povinné",
              })}
            />
            </FormGroup>
            <FormGroup>
              <Label for="coverImage">
                Fotografia{" "}
                {errors?.coverImage?.message && <FormError>{errors.coverImage.message}</FormError>}
              </Label>
              <Input
                id="coverImage"
                type="file"
                accept="image/*"
                placeholder="Fotografia"
                {...register("coverImage", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormGroup>
            <FormGroup>
            <Button disabled={isCreating}>pridať</Button>
          </FormGroup>
        </Form>
      </Modal.Window>
    </Modal>
  );
}

export default NewCategory;
