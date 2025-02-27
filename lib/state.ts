import { proxy } from "valtio";

const classState = proxy({
    classId: "0",
    trimestre: "0"
});

export default classState