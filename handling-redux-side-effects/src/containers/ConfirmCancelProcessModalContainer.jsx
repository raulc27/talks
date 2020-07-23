import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

const selectors = createStructuredSelector({
  isOpen: processor.selectors.confirmCancelProcessModalIsOpen
});

const ConfirmCancelProcessModalContainer = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectors);

  const closeModal = React.useCallback(() => {
    dispatch(processor.actions.closeConfirmCancelProcessModal());
  }, [dispatch]);

  const cancelProcess = React.useCallback(() => {
    dispatch(processor.actions.cancelProcess());
  }, [dispatch]);

  return (
    <ConfirmModal
      title="Confirm cancel process"
      isOpen={isOpen}
      closeFn={closeModal}
      cancelFn={closeModal}
      confirmFn={cancelProcess}
    >
      Do you really want to cancel this process?
    </ConfirmModal>
  );
};

export default ConfirmCancelProcessModalContainer;
