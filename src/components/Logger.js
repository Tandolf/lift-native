import { createLogger } from "redux-logger";

const Logger = createLogger({
    predicate: () => __DEV__
});

export default Logger;