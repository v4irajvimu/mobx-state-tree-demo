import { Box, Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

type Props = {};

const Actions = (props: Props) => {
  const { userStore } = useStore();
  const handleClick = () => {
    userStore.getUsers(
      userStore.currentPage < 2 ? userStore.currentPage + 1 : 1
    );
  };
  return (
    <Box p={2}>
      <Button onClick={handleClick} variant="contained" fullWidth>
        Fetch Data
      </Button>
    </Box>
  );
};

export default observer(Actions);
