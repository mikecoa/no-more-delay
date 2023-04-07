import activityReducer from "./activity/activitySlice";
import authReducer from "./auth/authSlice";
import chatReducer from "./chat/chatSlice";
import modalReducer from "./modal/modalSlice";
import testReducer from "./test/testSlice";

const reducers = {
  activity: activityReducer,
  auth: authReducer,
  chat: chatReducer,
  modal: modalReducer,
  test: testReducer,
  // etc...
};

export default reducers;
