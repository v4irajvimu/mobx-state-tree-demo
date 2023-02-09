import { Avatar, Box, Switch, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

type Props = {};

const Users = (props: Props) => {
  const { userStore } = useStore();
  return (
    <Box display="flex" flexDirection="column">
      {userStore.users.length === 0 ? (
        <Box justifyContent="center" display="flex">
          No data
        </Box>
      ) : (
        userStore.users.map((user) => (
          <Box
            display="flex"
            flexDirection="row"
            key={user.id}
            mb={2}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              sx={{
                mx: 5,
                width: "25%",
                justifyContent: "flex-start",
                display: "flex",
              }}
            >
              <Avatar
                sx={{ mb: 1, width: 100, height: 100 }}
                alt={`${user.first_name} ${user.last_name}`}
                src={user.avatar}
              />
            </Box>

            <Typography
              sx={{ mx: 5, width: "25%" }}
              variant="body1"
            >{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography sx={{ mx: 5, width: "20%" }} variant="body2">
              {user.email}
            </Typography>
            <Box
              sx={{
                mx: 5,
                width: "25%",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Switch
                checked={!userStore.isBlockedUser(user.id)}
                onChange={() =>
                  userStore.isBlockedUser(user.id)
                    ? userStore.unblockUser(user.id)
                    : userStore.blockUser(user.id)
                }
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default observer(Users);
