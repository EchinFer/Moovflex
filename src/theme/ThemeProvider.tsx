import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import BrandingCssVarsProvider from './BrandingCssVarProvider'
import { mainTheme } from '.'

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <MUIThemeProvider theme={mainTheme()}>
            <BrandingCssVarsProvider >
                {children}
            </BrandingCssVarsProvider>
        </MUIThemeProvider>
    )
}

export default ThemeProvider