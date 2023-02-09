import axios from "axios";
import { cast, flow, types } from "mobx-state-tree";

export const User = types.model({
  id: types.number,
  email: types.string,
  first_name: types.string,
  last_name: types.string,
  avatar: types.string,
});

export const UserStore = types
  .model({
    users: types.array(User),
    blockedUsers: types.array(types.number),
    currentPage: types.number,
    perPage: types.number,
    total: types.number,
    totalPages: types.number,
  })
  .actions((self) => ({
    getUsers: flow(function* (pageNo: number = 1) {
      const response = yield axios.get(
        `https://reqres.in/api/users?page=${pageNo}`
      );

      if (response.status === 200 && response.data) {
        self.users = response.data.data ?? [];
        self.currentPage = pageNo;
        self.perPage = Number(response.data.per_page);
        self.total = Number(response.data.total);
        self.totalPages = Number(response.data.total_pages);
        self.blockedUsers = cast([]);
      }
    }),
    blockUser(id: number) {
      self.blockedUsers.push(id);
    },
    unblockUser: flow(function* (id: number) {
      self.blockedUsers = cast(self.blockedUsers.filter((item) => item !== id));
    }),
  }))
  .views((self) => ({
    isBlockedUser: (id: number) => self.blockedUsers.includes(id),
    numberOfActiveUsers: () =>
      self.users.filter(({ id }) => !self.blockedUsers.includes(id)).length,
    numberOfInactiveUsers: () => self.blockedUsers.length,
  }));
