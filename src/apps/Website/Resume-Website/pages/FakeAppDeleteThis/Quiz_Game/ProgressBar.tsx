import { Box } from "@chakra-ui/react";
import { FC } from "react";

type ProgressBarProps = {
  current: number;
  total: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ current, total }) => {
  const percent = (100 / total) * current;
  return (
    <Box bg={"#efeff0"} h={"20px"} w={"100%"} mb={'5px'}>
      <Box bg={"#70c6e4"} h={"100%"} w={`${percent}%`}></Box>
    </Box>
  );
};

export default ProgressBar;
