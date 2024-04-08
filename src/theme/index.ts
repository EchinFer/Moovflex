import {
    experimental_extendTheme as extendTheme
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { getDesignTokens, getThemedComponents } from './brandingTheme';

export const mainTheme = () => {
    const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
    const { palette: darkPalette } = getDesignTokens('dark');

    const theme = extendTheme({
        cssVarPrefix: 'muidocs',
        colorSchemes: {
            light: {
                palette: lightPalette,
            },
            dark: {
                palette: darkPalette,
            },
        },
        ...designTokens,
        typography: deepmerge(typography, {
            h1: {
                ':where([data-mui-color-scheme="dark"]) &': {
                    color: 'var(--muidocs-palette-common-white)',
                },
            },
            h2: {
                ':where([data-mui-color-scheme="dark"]) &': {
                    color: 'var(--muidocs-palette-grey-100)',
                },
            },
            h5: {
                ':where([data-mui-color-scheme="dark"]) &': {
                    color: 'var(--muidocs-palette-primary-300)',
                },
            },
        }),
        ...getThemedComponents(),
    });
    return theme;
}