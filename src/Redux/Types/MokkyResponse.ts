import {IPagination} from "./IPagination.ts";
import {IPizza} from "./IPizza.ts";

export type MokkyResponse = {
    meta: IPagination,
    items: IPizza[]
};