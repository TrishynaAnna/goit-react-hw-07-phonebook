import { createAction } from "@reduxjs/toolkit";

const statusInOn = createAction("CHANGE_STATUS_ISON");
const statusExist = createAction("CHANGE_STATUS_EXIST");

export { statusInOn, statusExist };
