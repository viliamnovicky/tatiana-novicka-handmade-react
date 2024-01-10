import styled from "styled-components";
import Map from "../ui/Map";

const AddressContainer = styled.div`
  width: 35vw;
  height: 50rem;
  position: relative;
  background: rgba(165, 243, 252, 0.3);
  color: var(--color-primary-800);
  border-radius: 2rem;
  padding: 2rem;
  margin-top: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
`;

function Contact() {
  return (
    <>
      <Map />
      <AddressContainer>
        <p>Tatiana Novická</p>
        <p>090 33 Turany nad Ondavou</p>
        <p>Slovensko</p>
        <br/>
        <p>tatiananovicka@gmail.com</p>
        <p>0918 596 387</p>
        <br/>
        <p>fb</p>
        <p>ig</p>
        <p>sashe</p>
      </AddressContainer>
    </>
  );
}

export default Contact;
