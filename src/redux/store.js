exports.__esModule = true;
exports.setupStore = exports.reducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var authSlice_1 = require("./features/auth/authSlice");
exports.reducer = (0, toolkit_1.combineReducers)({
  auth: authSlice_1["default"],
});
function setupStore(preloadedState) {
  return (0, toolkit_1.configureStore)({
    reducer: exports.reducer,
    preloadedState: preloadedState,
  });
}
exports.setupStore = setupStore;
