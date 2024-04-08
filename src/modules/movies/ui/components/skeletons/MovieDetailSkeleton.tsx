import { Box, Divider, Skeleton, Stack } from '@mui/material'

export const MovieDetailSkeleton = () => {
    return (
        <>
            <Box>
                <Skeleton variant="rectangular"
                    width={300}
                    height={450}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 2,
                    p: 2
                }}
            >
                <Box>
                    <Skeleton variant="text" height={40} width={"50%"} />
                    <Stack direction={"row"} spacing={1}>
                        <Skeleton variant="rounded" width={56} height={32} />
                        <Skeleton variant="rounded" width={56} height={32} />
                        <Skeleton variant="rounded" width={56} height={32} />
                    </Stack>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Skeleton variant="text" height={30} width={"90%"} />
                    <Skeleton variant="text" height={30} width={"90%"} />
                    <Skeleton variant="text" height={30} width={"90%"} />
                    <Skeleton variant="text" height={30} width={"90%"} />
                </Box>
                <Divider />

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1
                    }}
                >
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                    <Skeleton variant="text" height={30} width={"45%"} />
                </Box>
            </Box>
        </>
    )
}
