import { Box, Grid } from "@mui/material";
import Actions from "./components/Actions";
import Charts from "./components/Charts";
import Stats from "./components/Stats";
import Users from "./components/Users";

function App() {
  return (
    <Box px={20}>
      <Grid container>
        <Grid item xs={3}>
          <Box sx={{ m: 2 }}>
            <Actions />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ m: 2 }}>
            <Stats />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ m: 2 }}>
            <Users />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ m: 2 }}>
            <Charts />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
