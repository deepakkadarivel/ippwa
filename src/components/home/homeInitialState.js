import seamlessImmutable from 'seamless-immutable';
import constants from "../../shared/constants";

const homeInitialState = seamlessImmutable({
  toast: {
    variant: constants.TOAST.VARIANTS.SUCCESS,
    message: '',
    isOpen: false,
  },
});

export default homeInitialState;
