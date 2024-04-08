import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const MovieCaptionSkeleton = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, mt: 1 }}>
            <Skeleton variant="text" width="100%" height={38} />
            <Skeleton variant="text" width="33%" />
            <Box sx={{ width: "100%", p: 1, pt: 0 }}>
                <Skeleton variant="text" width={"100%"} height={22} />
                <Skeleton variant="text" width={"100%"} height={22} />
                <Skeleton variant="text" width={"100%"} height={22} />
                <Skeleton variant="text" width={"100%"} height={22} />
                <Skeleton variant="text" width={"100%"} height={22} />
                <Skeleton variant="text" width={"100%"} height={22} />
            </Box>
        </Box>
    )
}
