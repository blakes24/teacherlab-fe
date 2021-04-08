import Modal from "react-modal";
import Button from "../common/button";
import Input from "../common/input";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { setObjectives } from "../../store/unit-slicer";

Modal.setAppElement("#__next");

export default function UnitFormStandards() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            zIndex: 100,
            // backgroundColor: "rgb(158 158 158 / 75%)",
            top: "60px",
          },
          content: {
            inset: "50px",
            background: "rgba(228, 228, 231)",
          },
        }}
      >
        <Input type="text" />
      </Modal>

      <div className="w-full">
        <div className="bg-white mb-4 p-6 h-60">No standards selected.</div>
        <div className="flex justify-end">
          <Button text="Add Standards" size="md" onClick={openModal} />
        </div>
      </div>
    </>
  );
}
