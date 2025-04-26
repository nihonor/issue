import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const loading = () => {
  return (
    <div className="max-w-xl p-5">
      <Box className="max-w-2xl">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </Box>

      
    </div>
  );
};

export default loading;
