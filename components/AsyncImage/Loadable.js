/**
 *
 * Asynchronously loads the component for AsyncImage
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
