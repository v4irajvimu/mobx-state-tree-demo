import { Grid } from "@mui/material";
import { green, indigo, red } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import StatCard from "./StatCard";

type Props = {};

const Stats = (props: Props) => {
  const { userStore } = useStore();
  return (
    <Grid container>
      <Grid item xs={3}>
        <StatCard
          background={indigo[200]}
          border={indigo[900]}
          title="Current Page"
          value={userStore.currentPage}
        />
      </Grid>
      <Grid item xs={3}>
        <StatCard
          background={indigo[200]}
          border={indigo[900]}
          title="Per Page"
          value={userStore.perPage}
        />
      </Grid>
      <Grid item xs={3}>
        <StatCard
          background={indigo[200]}
          border={indigo[900]}
          title="Total Pages"
          value={userStore.totalPages}
        />
      </Grid>
      <Grid item xs={3}>
        <StatCard
          background={indigo[200]}
          border={indigo[900]}
          title="Total"
          value={userStore.total}
        />
      </Grid>
      <Grid item xs={6}>
        <StatCard
          background={green[200]}
          border={green[900]}
          title="Active Users"
          value={userStore.numberOfActiveUsers()}
        />
      </Grid>
      <Grid item xs={6}>
        <StatCard
          background={red[200]}
          border={red[900]}
          title="Inactive Users"
          value={userStore.numberOfInactiveUsers()}
        />
      </Grid>
    </Grid>
  );
};

export default observer(Stats);
