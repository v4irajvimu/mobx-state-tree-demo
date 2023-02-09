import { Box, Typography } from "@mui/material";

type Props = {
  background: string;
  border: string;
  title: string;
  value: number;
};

const StatCard = ({ background, border, title, value }: Props) => {
  return (
    <Box
      sx={{
        m: 1,
        p: 1,
        backgroundColor: background,
        borderColor: border,
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 2,
      }}
    >
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection="column"
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Box>
    </Box>
  );
};

export default StatCard;
