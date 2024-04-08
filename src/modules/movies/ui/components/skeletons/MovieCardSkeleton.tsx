import { Skeleton } from "@mui/material"

export default function MovieCardSkeleton() {
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
