import type { BunRequest } from "bunrest/src/server/request";
import type { BunResponse } from "bunrest/src/server/response";

export default (req: BunRequest, res: BunResponse) => {
    res.status(200).status(200).json({message: "OK"});
};