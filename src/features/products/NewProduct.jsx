import FormRow, {
  FormError,
  FormGroup,
  Form,
  StyledFormContImage,
  Input,
  StyledFormLabel,
  StyledFormSelect,
} from "../../ui/Form";
import Button from "../../ui/Button";

import { useForm } from "react-hook-form";
import { useCategories } from "../categories/useCategories";
import { useCreateProduct } from "./useCreateProduct";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { createSlug } from "../../utils/helpers";

function NewProduct() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { isCreating, createProduct } = useCreateProduct();
  const [categoryName, setCategoryName] = useState("")


  function onSubmit(data) {

      createProduct(
        { ...data, coverImage: data.coverImage[0], discount: 0, categoryName, slug: createSlug(data.name) },
        {
          onSuccess: (data) => {
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
      <Modal.Open opens="new-product-form">
        <Button variation="newProduct">Pridať nový produkt</Button>
      </Modal.Open>
      <Modal.Window name="new-product-form">
        {/* <HeadingAdmin>Nový produkt</HeadingAdmin> */}
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormGroup>
            <FormRow label="Názov produktu" error={errors?.name?.message}>
              <Input
                id="name"
                placeholder="Názov Produktu"
                {...register("name", {
                  required: "Toto pole je povinné",
                })}
              />
            </FormRow>
            <FormRow label="Cena" error={errors?.price?.message}>
              <Input
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
                  onChange: (e) => setCategoryName(e.target.options[e.target.selectedIndex].text),
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
                {...register("coverImage", {
                  required: "Toto pole je povinné",
                })}
              />
            </StyledFormContImage>
            <Button disabled={isCreating}>pridať</Button>
          </FormGroup>
        </Form>
      </Modal.Window>
    </Modal>
  );
}

export default NewProduct;
