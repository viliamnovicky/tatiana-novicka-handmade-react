import styled from "styled-components";
import FormRow, {
  FormError,
  FormGroup,
  StyledForm,
  StyledFormContImage,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSelect,
} from "../../ui/Form";
import Button from "../../ui/Button";
import HeadingAdmin from "../../ui/HeadingAdmin";

import { useForm } from "react-hook-form";
import { useCategories } from "../categories/useCategories";
import { useCreateProduct } from "./useCreateProduct";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import { useEditProduct } from "./useEditProduct";

function NewProduct({ productToEdit = {} }) {
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { isCreating, createProduct } = useCreateProduct();
  const { isEditing, editProduct } = useEditProduct();

  function onSubmit(data) {
    const coverImage = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editProduct(
        { newCabinData: { ...data, coverImage }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createProduct(
        { ...data, coverImage: data.coverImage[0], discount: 0 },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
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
      <Modal.Open opens="new-product-form">
        <Button>Pridať nový produkt</Button>
      </Modal.Open>
      <Modal.Window name="new-product-form">
        {/* <HeadingAdmin>Nový produkt</HeadingAdmin> */}
        <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
          <FormGroup>
            <FormRow label="Názov produktu" error={errors?.name?.message}>
              <StyledFormInput
                autoComplete="new-password"
                id="name"
                placeholder="Názov Produktu"
                {...register("name", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormRow>
            <FormRow label="Cena" error={errors?.price?.message}>
              <StyledFormInput
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
              <StyledFormInput
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
              <StyledFormInput
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
              <StyledFormInput
                id="coverImage"
                type="file"
                accept="image/*"
                placeholder="Fotografia"
                {...register("coverImage", {
                  required: "Toto pole je povinné",
                })}
              />
            </StyledFormContImage>
            <Button disabled={isCreating}>pridať</Button>
          </FormGroup>
        </StyledForm>
      </Modal.Window>
    </Modal>
  );
}

export default NewProduct;
