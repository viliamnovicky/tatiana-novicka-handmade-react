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

function UpdateProduct({ productToEdit = {} }) {
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  // const { isEditing, editProduct } = useEditProduct();
  // const { categories, isLoading: isLoadingCategories } = useCategories();

  // function onSubmit(data) {
  //   const coverImage = typeof data.coverImage === "string" ? data.coverImage : data.coverImage[0];

  //   editProduct(
  //     { newProductData: { ...data, coverImage }, id: editId },
  //     {
  //       onSuccess: (data) => {
  //         reset();
  //         // onCloseModal?.();
  //       },
  //     }
  //   );
  // }

  // function onError(errors) {
  //   console.log(errors);
  // }

  // if (isLoadingCategories) return <Spinner />;

  return (
    <Modal>
      <Modal.Open opens="new-category-form">
        <Button size="medium">Upraviť</Button>
      </Modal.Open>
      <Modal.Window name="new-category-form">
        <Form>
        <HeadingAdmin>Upraviť kategóriu</HeadingAdmin>
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
            <Button >pridať</Button>
          </FormGroup>
        </Form>
      </Modal.Window>
    </Modal>
  );
}

export default UpdateProduct;
