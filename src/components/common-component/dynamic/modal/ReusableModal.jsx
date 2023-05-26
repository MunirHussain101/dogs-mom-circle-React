import React from "react";
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
    isModalOpen,
    showModal,
    onOk,
    onCancel,
  } = props;

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
        footer={footer}
        closable={closable}
        className={!className ? "modal_field" : className}
        icon={icon}
        okButtonProps={okButtonProps}
        closeButtonProps={closeButtonProps}
        onOk={onOk}
        onCancel={onCancel}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default ReusableModal;
