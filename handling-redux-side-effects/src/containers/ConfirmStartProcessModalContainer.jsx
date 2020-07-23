import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

const selectors = createStructuredSelector({
  isOpen: processor.selectors.confirmStartProcessModalIsOpen
});

const ConfirmStartProcessModalContainer = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectors);

  const closeModal = React.useCallback(() => {
    dispatch(processor.actions.closeConfirmStartProcessModal());
  }, [dispatch]);

  const startProcess = React.useCallback(() => {
    dispatch(processor.actions.startProcess());
  }, [dispatch]);

  return (
    <ConfirmModal
      title="Confirm start process"
      isOpen={isOpen}
      closeFn={closeModal}
      cancelFn={closeModal}
      confirmFn={startProcess}
    >
      Do you really want to start a process?
    </ConfirmModal>
  );
};

export default ConfirmStartProcessModalContainer;
