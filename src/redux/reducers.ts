import activityReducer from "./activity/activitySlice";
import authReducer from "./auth/authSlice";
import chatReducer from "./chat/chatSlice";
import testReducer from "./test/testSlice";
import modalReducer from "./modal/modalSlice";

const reducers = {
  activity: activityReducer,
  auth: authReducer,
  chat: chatReducer,
  test: testReducer,
  modal :modalReducer
  // etc...
};

export default reducers;
