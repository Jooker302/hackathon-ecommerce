import { cookies } from "next/headers";


export function getUserIdFromCookie() {
const user_id = cookies().get("user_id")?.value as string;
return user_id || null;
}