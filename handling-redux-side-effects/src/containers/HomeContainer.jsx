import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import View from "../components/View";
import Button from "../components/Button";
import Label from "../components/Label";
import { processor } from "../redux";
import TasksContainer from "./TasksContainer";
import ConfirmStartProcessModalContainer from "./ConfirmStartProcessModalContainer";
import ConfirmCancelProcessModalContainer from "./ConfirmCancelProcessModalContainer";
import ConfirmFinishProcessModalContainer from "./ConfirmFinishProcessModalContainer";

const selectors = createStructuredSelector({
  totalValue: processor.selectors.getTotalValue,
  isProcessing: processor.selectors.isProcessing
});

const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { totalValue, isProcessing } = useSelector(selectors);
  const startProcess = React.useCallback(() => {
    dispatch(processor.actions.announceStartProcess());
  }, [dispatch]);

  const cancelProcess = React.useCallback(() => {
    dispatch(processor.actions.announceCancelProcess());
  }, [dispatch]);

  return (
    <View
      title="Sequential Tasks"
      subtitle="Using Redux-Saga to handle sequential tasks"
    >
      <ActionsRow>
        <Label palette="primary">Total Value: {totalValue}</Label>
        <div>
          {isProcessing ? (
            <Button palette="alert" onClick={cancelProcess}>
              Cancel process
            </Button>
          ) : (
            <Button palette="success" onClick={startProcess}>
              Start process
            </Button>
          )}
        </div>
      </ActionsRow>
      <TasksContainer />
      <ConfirmStartProcessModalContainer />
      <ConfirmCancelProcessModalContainer />
      <ConfirmFinishProcessModalContainer />
    </View>
  );
};

export default HomeContainer;
