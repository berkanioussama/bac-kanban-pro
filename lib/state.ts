import { proxy } from "valtio";

const classState = proxy({
    classId: "i",
    trimestre: "0"
});

export default classState