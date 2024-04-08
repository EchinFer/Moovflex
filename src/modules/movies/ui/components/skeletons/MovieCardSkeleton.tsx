import { Skeleton } from "@mui/material"

export const MovieCardSkeleton = () => {
    return (
        <Skeleton
            variant="rectangular"
            height={515}
            sx={{
                width: "100%",
                borderRadius: 1,
            }}
        />
    )
}
