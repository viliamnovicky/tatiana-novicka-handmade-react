import styled from "styled-components";
import FormRow, {
  FormError,
  FormGroup,
  StyledForm,
  StyledFormContImage,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSelect,
} from "../ui/Form";
import Button from "../ui/Button";
import HeadingAdmin from "../ui/HeadingAdmin";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createProduct, getProducts } from "../services/apiProducts";
import toast from "react-hot-toast";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  width: 100%;
`;

function NewProduct() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("Nový produkt vytvorený");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data, coverImage: data.coverImage[0], discount: 0 });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Container>
      <HeadingAdmin>Nový produkt</HeadingAdmin>
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
              <option value={1}>čiapky</option>
              <option value={2}>kabelky</option>
              <option value={3}>vankúše</option>
              <option value={4}>šaty</option>
              <option value={5}>obliečky</option>
              <option value={6}>svetre</option>
              <option value={7}>obrusy</option>
              <option value={8}>taštičky</option>
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
    </Container>
  );
}

export default NewProduct;
