export const ActionTypesFeedbacks = {
    UPDATE_FEEDBACKS: 'Feedbacks/UPDATE_FEEDBACKS',
    VALIDATE_FEEDBACKS: 'Feedbacks/VALIDATE_FEEDBACKS'
  };
  
  export const initialFeedbacksState = {
        data: {
            name: '',
            soname: '',
            message: ''
        },
        formValidation: {
            name: {isValid: false, errorMessage: null},
            soname: {isValid: false, errorMessage: null},
            message: {isValid: false, errorMessage: null}
        }
};
  
  export default function reducer(
    state = initialFeedbacksState,
    action
  ) {
  
    switch (action.type) {

      case ActionTypesFeedbacks.VALIDATE_FEEDBACKS:
        
        return {
          ...state,
          ...action.payload
        };
  
      default:
        return state;
    }
  }
  
  // Action Creators
  export const UpdateFeedbacks = (payload) => ({
    type: ActionTypesFeedbacks.UPDATE_FEEDBACKS,
    payload
  });
  
  export const ValidateFeedbacks = (payload) => ({
    type: ActionTypesFeedbacks.VALIDATE_FEEDBACKS,
    payload
  });
  