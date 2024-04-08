import { queryClient } from "@/libs/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import ThemeProvider from "../theme/ThemeProvider"

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    )
}