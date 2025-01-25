import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  count: number;
  onChange: (event: unknown, value: number) => void;
}

export default function ActivityListPaginator({ count, onChange }: Props) {
  return (
    <Stack spacing={2} className="m-auto mb-[100px]">
      <Pagination
        variant="outlined"
        size="large"
        count={count}
        onChange={onChange}
        sx={{
          backgroundColor: "transparent",
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .MuiPaginationItem-outlined": {
            borderColor: "white",
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "green",
            color: "white",
          },
        }}
      />
    </Stack>
  );
}
