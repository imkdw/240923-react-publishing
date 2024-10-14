import styles from "./Description.module.css";
import DescImage from "../../assets/desc_image.jpg";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../modal";

const StyledModalButton = styled.button`
  width: 150px;
  height: 80px;
  border: none;
  border-radius: 10px;
  background-color: hotpink;
  font-size: 1.5rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
`;

export default function Description() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <section className={styles.desc}>
        <section className={styles.desc_left}>
          <h1 className={styles.desc_header}>
            여행준비의 모든것, <br /> TripMate와 함께!
          </h1>
          <StyledModalButton onClick={handleOpenModal}>Open Modal</StyledModalButton>
        </section>
        <section>
          <img src={DescImage} className={styles.desc_image}></img>
        </section>
      </section>
      {isOpen && <Modal handleCloseModal={handleCloseModal} />}
    </>
  );
}
