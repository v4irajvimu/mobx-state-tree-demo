import { Instance, types } from "mobx-state-tree";
import { UserStore } from "./User";

const RootStore = types.model({
  userStore: UserStore,
});

export default RootStore;

export type RootStoreType = Instance<typeof RootStore>;
