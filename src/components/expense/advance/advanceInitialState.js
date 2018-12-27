import seamlessImmutable from 'seamless-immutable';

const advanceInitialState = seamlessImmutable({
  entityId: '',
  viewId: 0,
  workflowId: 0,
  currencyId: 0,
  needByDate: new Date(),
  comments: '',
  advance: {},
  isFetchingEntityDetails: false,
  viewList: [],
  workflowList: [],
});

export default advanceInitialState;
