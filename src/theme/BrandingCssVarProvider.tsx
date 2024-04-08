import { CssBaseline } from '@mui/material';
import {
    Experimental_CssVarsProvider as CssVarsProvider
} from '@mui/material/styles';
import { mainTheme } from '.';

export default function BrandingCssVarsProvider(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <CssVarsProvider theme={mainTheme()} defaultMode="light" disableTransitionOnChange>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    );
}
