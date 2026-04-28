import { RootState } from "@/app/Redux/store";

export const userSelector = (state: RootState) => state.user.userInfo;
