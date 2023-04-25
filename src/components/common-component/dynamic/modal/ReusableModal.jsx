import React, {useState} from "react";
import {Modal, Button} from "antd";

const ReusableModal = (props) => {
  const {
    className,
    icon,
    okButtonProps,
    closeButtonProps,
    footer,
    title,
    buttonText,
    closable,
    // setIsModalOpen,
    isModalOpen,
    showModal
  } = props;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  
  return (
    <>
      <Button
        onClick={showModal}
        style={{
          background: "#EAB2BB",
          borderRadius: 7,
          color: "white",
          borderColor: "#EAB2BB",
        }}
      >
        {buttonText}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
        footer={footer}
        closable={closable}
        className={!className ? "modal_field" : className}
        icon={icon}
        okButtonProps={okButtonProps}
        closeButtonProps={closeButtonProps}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default ReusableModal;
