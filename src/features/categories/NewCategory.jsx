import FormRow, {
  FormError,
  FormGroup,
  StyledForm,
  StyledFormContImage,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSelect,
  Error,
  Form,
  Input,
  Label,
} from "../../ui/Form";
import Button from "../../ui/Button";

import { useForm } from "react-hook-form";
import { useCategories } from "./useCategories";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import { useCreateCategory } from "./useCreateCategory";
import HeadingAdmin from "../../ui/HeadingAdmin";

function NewCategory() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

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
        <Button className="add_button">Pridať novú kategóriu</Button>
      </Modal.Open>
      <Modal.Window name="new-category-form">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <HeadingAdmin>Nová kategória</HeadingAdmin>
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
