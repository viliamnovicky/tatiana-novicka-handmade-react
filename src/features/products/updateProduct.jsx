import FormRow, {
  FormError,
  FormGroup,
  Form,
  StyledFormContImage,
  Input,
  StyledFormLabel,
  StyledFormSelect,
} from "../../ui/Form";

import { useForm } from "react-hook-form";
import { useCategories } from "../categories/useCategories";
import { useEditProduct } from "../products/useEditProduct";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function UpdateProduct({ productToEdit = {} }) {
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isEditing, editProduct } = useEditProduct();
  const { categories, isLoading: isLoadingCategories } = useCategories();

  function onSubmit(data) {
    const coverImage = typeof data.coverImage === "string" ? data.coverImage : data.coverImage[0];

    editProduct(
      { newProductData: { ...data, coverImage }, id: editId },
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

  if (isLoadingCategories) return <Spinner />;

  return (
    <Modal>
      <Modal.Open opens="update-product-form">
        <Button size="small">Upraviť</Button>
      </Modal.Open>
      <Modal.Window name="update-product-form">
        {/* <HeadingAdmin>Nový produkt</HeadingAdmin> */}
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormGroup>
            <FormRow label="Názov produktu" error={errors?.name?.message}>
              <Input
                autoComplete="new-password"
                id="name"
                placeholder="Názov Produktu"
                {...register("name", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormRow>
            <FormRow label="Cena" error={errors?.price?.message}>
              <Input
                autoComplete="new-password"
                id="price"
                placeholder="Cena"
                type="number"
                {...register("price", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormRow>
            <FormRow label="Dostupnosť" error={errors?.price?.message}>
              <Input
                autoComplete="new-password"
                id="availability"
                placeholder="Dostupnosť"
                {...register("availability", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormRow>
          </FormGroup>
          <FormGroup>
            <FormRow type="text" label="Popis produktu" error={errors?.price?.message}>
              <Input
                rows="10"
                cols="15"
                as="textarea"
                autoComplete="new-password"
                id="description"
                placeholder="Popis produktu"
                {...register("description", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormRow>
            <FormRow label="Kategória" error={errors?.price?.message} type="option">
              <StyledFormSelect
                id="category"
                placeholder="Kategória"
                {...register("category", {
                  required: "Toto pole je povinné",
                })}
              >
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </StyledFormSelect>
            </FormRow>

            <StyledFormContImage>
              <StyledFormLabel for="coverImage">
                Fotografia{" "}
                {errors?.coverImage?.message && <FormError>{errors.coverImage.message}</FormError>}
              </StyledFormLabel>
              <Input
                id="coverImage"
                type="file"
                accept="image/*"
                placeholder="Fotografia"
                {...register("coverImage")}
              />
            </StyledFormContImage>
            <Button disabled={isEditing}>upraviť</Button>
          </FormGroup>
        </Form>
      </Modal.Window>
    </Modal>
  );
}

export default UpdateProduct;
