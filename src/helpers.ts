import { UUID } from "./Types";

export function isUuid(id: string): id is UUID {
    return /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(id);
}