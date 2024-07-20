import {IPagination} from "./IPagination.ts";
import {IPizza} from "./IPizzas.ts";

export type MokkyResponse = {
    meta: IPagination,
    items: IPizza[]
};