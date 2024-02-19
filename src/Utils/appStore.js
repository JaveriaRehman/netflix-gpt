import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredPaths: ["filters.startDate", "filters.endDate"],
  },
};

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),
});

export default appstore;
