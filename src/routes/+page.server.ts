import type { PageServerLoad } from "./$types";
import { getFirelord } from "firelordjs";

type OutputType = {};

// @ts-ignore
export const load: PageServerLoad<OutputType> = async (event) => {
    return {};
}