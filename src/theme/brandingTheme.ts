import { CSSObject } from '@mui/system';
import type { } from '@mui/material/themeCssVarsAugmentation';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import { createTheme, ThemeOptions, Theme, alpha } from '@mui/material/styles';

interface ApplyDarkStyles {
    (scheme: CSSObject): CSSObject;
}

const defaultTheme = createTheme();

export const green = {
    50: '#ffdcbe',
    100: '#ffb9a3',
    200: '#e89581',
    300: '#c7725c',
    400: '#ae5641',
    main: '#691515',
    500: '#963b27',
    600: '#893122',
    700: '#78251a',
    800: '#691515',
    900: '#58010c',
};
export const greenDark = {
    50: '#ffdcbe',
    100: '#ffb9a3',
    200: '#e89581',
    300: '#c7725c',
    400: '#ae5641',
    main: '#691515',
    500: '#963b27',
    600: '#893122',
    700: '#78251a',
    800: '#691515',
    900: '#58010c',
};
export const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C5D0E0', // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
    400: '#AEBACB', // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
    500: '#99A7BB', // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
    600: '#6F7F95', // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
    700: '#576375', // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
    800: '#303740', // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
    900: '#1C2025',
};
export const error = {
    50: '#FFF0F1',
    100: '#FFDBDE',
    200: '#FFBDC2',
    300: '#FF99A2',
    400: '#FF7A86',
    500: '#FF505F',
    main: '#EB0014', // contrast 4.63:1
    600: '#EB0014',
    700: '#C70011',
    800: '#94000D',
    900: '#570007',
};
export const success = {
    50: '#E9FBF0',
    100: '#C6F6D9',
    200: '#9AEFBC',
    300: '#6AE79C',
    400: '#3EE07F',
    500: '#21CC66',
    600: '#1DB45A',
    700: '#1AA251',
    800: '#178D46',
    900: '#0F5C2E',
};
export const warning = {
    50: '#FFF9EB',
    100: '#FFF3C1',
    200: '#FFECA1',
    300: '#FFDC48', // vs blueDark900: WCAG 10.4 AAA, APCA 72 Ok for text
    400: '#F4C000', // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
    500: '#DEA500', // vs blueDark900: WCAG 8 AAA normal, APCA 58 Only large text
    main: '#DEA500',
    600: '#D18E00', // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
    700: '#AB6800', // vs white bg: WCAG 4.4 AA large, APCA 71 Ok for text
    800: '#8C5800', // vs white bg: WCAG 5.9 AAA large, APCA 80 Best for text
    900: '#5A3600', // vs white bg: WCAG 10.7 AAA, APCA 95 Best for text
};
// context on the Advanced Perceptual Contrast Algorithm (APCA) used above here: https://github.com/w3c/wcag/issues/695

const systemFont = [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
];

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
    const themeColor = {
        light: green[600],
        dark: greenDark[900],
    };
    return themeColor[mode];
};

export const getDesignTokens = (mode: 'light' | 'dark') =>
    ({
        palette: {
            primary: {
                ...green,
                ...(mode === 'dark' && {
                    main: green[400],
                }),
            },
            secondary: {
                ...grey,
                ...(mode === 'light' && {
                    main: greenDark[100],
                    contrastText: greenDark[600],
                }),
                ...(mode === 'dark' && {
                    main: greenDark[700],
                    contrastText: greenDark[600],
                }),
            },
            divider: mode === 'dark' ? alpha(greenDark[500], 0.2) : grey[100],
            primaryDark: greenDark,
            mode,
            background: {
                default: "#691515",
                paper: "#1A1A1A",
                ...(mode === "dark" && {
                    default: greenDark[900],
                    paper: greenDark[800],
                }),
            },
            common: {
                black: '#0B0D0E',
            },
            text: {
                ...(mode === 'light' && {
                    primary: grey[900],
                    secondary: grey[800],
                    tertiary: grey[700],
                }),
                ...(mode === 'dark' && {
                    primary: '#fff',
                    secondary: grey[400],
                    tertiary: grey[500],
                }),
            },
            grey: {
                ...grey,
                ...(mode === 'light' && {
                    main: grey[100],
                    contrastText: grey[600],
                }),
                ...(mode === 'dark' && {
                    main: grey[700],
                    contrastText: grey[600],
                }),
            },
            error,
            success: {
                ...success,
                ...(mode === 'dark' && {
                    main: '#1DB45A', // contrast 6.17:1 (blueDark.800)
                }),
                ...(mode === 'light' && {
                    main: '#1AA251', // contrast 3.31:1
                }),
            },
            warning,
            gradients: {
                lightGrayRadio:
                    'radial-gradient(50% 50% at 50% 50%, #F0F7FF 0%, rgba(240, 247, 255, 0.05) 100%)',
                stylizedRadio:
                    mode === 'dark'
                        ? 'linear-gradient(rgba(0 0 0 / 0.1), rgba(0 0 0 / 0.1)), linear-gradient(254.86deg, rgba(0, 58, 117, 0.18) 0%, rgba(11, 13, 14, 0.3) 49.98%, rgba(0, 76, 153, 0.21) 100.95%)'
                        : 'linear-gradient(rgba(255 255 255 / 0.3), rgba(255 255 255 / 0.3)), linear-gradient(254.86deg, rgba(194, 224, 255, 0.12) 0%, rgba(194, 224, 255, 0.12) 0%, rgba(255, 255, 255, 0.3) 49.98%, rgba(240, 247, 255, 0.3) 100.95%)',
                linearSubtle:
                    mode === 'light'
                        ? `linear-gradient(to top right, ${alpha(green[50], 0.3)} 40%, ${alpha(
                            grey[50],
                            0.2,
                        )} 100%)`
                        : `linear-gradient(to top right, ${alpha(green[900], 0.1)} 40%, ${alpha(
                            greenDark[800],
                            0.2,
                        )} 100%)`,
            },
        },
        shape: {
            borderRadius: 40,
        },
        spacing: 8,
        typography: {
            fontFamily: ['"IBM Plex Sans"', ...systemFont].join(','),
            fontFamilyCode: [
                'Menlo', // macOS
                'Consolas', // Windows
                '"Droid Sans Mono"', // Linux
                'monospace', // fallback
            ].join(','),
            fontFamilyTagline: ['"General Sans"', ...systemFont].join(','),
            fontFamilySystem: systemFont.join(','),
            fontWeightSemiBold: 600,
            fontWeightExtraBold: 800,
            h1: {
                fontFamily: ['"General Sans"', ...systemFont].join(','),
                fontSize: 'clamp(2.5rem, 1.125rem + 3.5vw, 3.5em)',
                fontWeight: 600,
                lineHeight: 78 / 70,
                letterSpacing: -0.2,
                ...(mode === 'light' && {
                    color: greenDark[900],
                }),
            },
            h2: {
                fontFamily: ['"General Sans"', ...systemFont].join(','),
                fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
                fontWeight: 600,
                lineHeight: 44 / 36,
                letterSpacing: -0.2,
                color: mode === 'dark' ? grey[100] : greenDark[700],
            },
            h3: {
                fontFamily: ['"General Sans"', ...systemFont].join(','),
                fontSize: defaultTheme.typography.pxToRem(36),
                lineHeight: 44 / 36,
                letterSpacing: 0.2,
            },
            h4: {
                fontFamily: ['"General Sans"', ...systemFont].join(','),
                fontSize: defaultTheme.typography.pxToRem(30),
                lineHeight: 42 / 28,
                letterSpacing: 0.2,
            },
            h5: {
                fontSize: defaultTheme.typography.pxToRem(24),
                lineHeight: 36 / 24,
                letterSpacing: 0.1,
                color: mode === 'dark' ? green[300] : green.main,
            },
            h6: {
                fontSize: defaultTheme.typography.pxToRem(20),
                lineHeight: 30 / 20,
            },
            button: {
                textTransform: 'initial',
                fontWeight: 700,
                letterSpacing: 0,
            },
            subtitle1: {
                fontSize: defaultTheme.typography.pxToRem(18),
                lineHeight: 24 / 18,
                letterSpacing: 0,
                fontWeight: 500,
            },
            body1: {
                fontSize: defaultTheme.typography.pxToRem(16), // 16px
                lineHeight: 24 / 16,
                letterSpacing: 0,
            },
            body2: {
                fontSize: defaultTheme.typography.pxToRem(14), // 14px
                lineHeight: 21 / 14,
                letterSpacing: 0,
            },
            caption: {
                display: 'inline-block',
                fontSize: defaultTheme.typography.pxToRem(12), // 12px
                lineHeight: 18 / 12,
                letterSpacing: 0,
                fontWeight: 700,
            },
            allVariants: {
                scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)',
            },
            blogTitle: {
                fontSize: defaultTheme.typography.pxToRem(36),
                lineHeight: 44 / 36,
                letterSpacing: -0.2,
            },
            topBlogMeta: {
                fontSize: defaultTheme.typography.pxToRem(14),
                lineHeight: 24 / 14,
                letterSpacing: 0,
            },
            blogContent: {
                fontSize: defaultTheme.typography.pxToRem(16),
                lineHeight: "32px",
                letterSpacing: "-0.003em",
            },
            blogContent2: {
                fontSize: defaultTheme.typography.pxToRem(16),
                lineHeight: 24 / 16,
                letterSpacing: 0,
            },
        },
        applyDarkStyles(css: Parameters<ApplyDarkStyles>[0]) {
            return (this as Theme).applyStyles('dark', css);
        },
    }) as ThemeOptions;

export function getThemedComponents(): ThemeOptions {
    return {
        components: {
            MuiAlert: {
                styleOverrides: {
                    root: {
                        padding: '12px 16px',
                    },
                    standardWarning: ({ theme }) => [
                        {
                            backgroundColor: alpha(theme.palette.warning[50], 0.5),
                            color: (theme.vars || theme).palette.grey[900],
                            border: '1px solid',
                            borderColor: alpha(theme.palette.warning[600], 0.3),
                            '& .MuiAlert-icon': {
                                color: (theme.vars || theme).palette.warning[700],
                            },
                        },
                        theme.applyDarkStyles({
                            backgroundColor: alpha(theme.palette.warning[700], 0.2),
                            color: (theme.vars || theme).palette.warning[50],
                            '& .MuiAlert-icon': {
                                color: (theme.vars || theme).palette.warning[200],
                            },
                        }),
                    ],
                    icon: {
                        paddingTop: 12,
                        paddingBottom: 0,
                    },
                },
            },
            MuiButtonBase: {
                defaultProps: {
                    disableTouchRipple: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: ({ theme }) => ({
                        transition: 'all 100ms ease-in',
                        '&:focus-visible': {
                            outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
                            outlineOffset: '2px',
                        },
                    }),
                },
            },
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
                styleOverrides: {
                    root: ({ theme, ownerState }) => ({
                        transition: 'all 120ms ease-in',
                        ...(ownerState.size === 'large' && {
                            ...theme.typography.body1,
                            lineHeight: 21 / 16,
                            padding: theme.spacing('8px', '10px', '10px', '12px'),
                            fontWeight: theme.typography.fontWeightSemiBold,
                            borderRadius: 10,
                            '& > span': { transition: '0.2s', marginLeft: 4 },
                            '&:hover > span': { transform: 'translateX(2px)' },
                        }),
                        ...(ownerState.size === 'medium' && {
                            fontSize: defaultTheme.typography.pxToRem(15),
                            padding: theme.spacing('8px', '12px', '8px', '14px'),
                            fontWeight: theme.typography.fontWeightSemiBold,
                            borderRadius: 8,
                            '& > span': { transition: '0.2s', marginLeft: 4 },
                            '&:hover > span': { transform: 'translateX(2px)' },
                        }),
                        ...(ownerState.size === 'small' && {
                            padding: theme.spacing('6px', 1),
                            fontFamily: theme.typography.fontFamily,
                            fontSize: defaultTheme.typography.pxToRem(13),
                            fontWeight: theme.typography.fontWeightSemiBold,
                            borderRadius: 8,
                            '& .MuiButton-startIcon': {
                                transition: '0.15s',
                                marginRight: 4,
                                marginLeft: -1,
                            },
                            '& .MuiButton-endIcon': {
                                transition: '0.15s',
                                marginLeft: 4,
                            },
                            '&:hover': {
                                '& .MuiButton-startIcon': { transform: 'translateX(-2px)' },
                                '& .MuiButton-endIcon': { transform: 'translateX(2px)' },
                            },
                        }),
                        ...(ownerState.variant === 'outlined' &&
                            ownerState.color === 'secondary' && {
                            color: (theme.vars || theme).palette.text.primary,
                            backgroundColor: alpha(theme.palette.primaryDark[50], 0.3),
                            borderColor: (theme.vars || theme).palette.primaryDark[100],
                            boxShadow: `${alpha(theme.palette.grey[50], 0.5)} 0 2px 0.5px inset, ${alpha(
                                theme.palette.grey[100],
                                0.5,
                            )} 0 -2px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                            '&:hover': {
                                backgroundColor: (theme.vars || theme).palette.primaryDark[50],
                            },
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.primaryDark[100],
                                borderColor: alpha(theme.palette.primaryDark[600], 0.5),
                                backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                                boxShadow: `${alpha(theme.palette.primaryDark[600], 0.1)} 0 2px 0 inset, ${alpha(theme.palette.primaryDark[900], 0.5)} 0 -2px 1px inset, ${theme.palette.common.black} 0 1px 2px 0`,
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                                },
                            }),
                        }),
                        ...(ownerState.variant === 'outlined' &&
                            ownerState.color === 'primary' && {
                            color: (theme.vars || theme).palette.primary[600],
                            backgroundColor: alpha(theme.palette.primary[50], 0.3),
                            borderColor: (theme.vars || theme).palette.primary[100],
                            boxShadow: `${theme.palette.primary[50]} 0 2px 0.5px inset, ${alpha(
                                theme.palette.primary[100],
                                0.2,
                            )} 0 -3px 0 inset, ${alpha(theme.palette.primary[100], 0.3)} 0 1px 2px 0`,
                            '&:hover': {
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                                borderColor: (theme.vars || theme).palette.primary[300],
                            },
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.primary[200],
                                borderColor: alpha(theme.palette.primary[900], 0.7),
                                backgroundColor: alpha(theme.palette.primary[900], 0.2),
                                boxShadow: `${alpha(theme.palette.primary[900], 0.1)} 0 2px 1px inset, ${alpha(
                                    theme.palette.common.black,
                                    0.5,
                                )} 0 -3px 0 inset, ${theme.palette.common.black} 0 1px 2px 0`,
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[900],
                                    borderColor: (theme.vars || theme).palette.primary[700],
                                },
                            }),
                        }),
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            color: '#fff',
                            textShadow: `0 1px 1px ${alpha(theme.palette.common.black, 0.6)}`,
                            backgroundColor: (theme.vars || theme).palette.primary[500],
                            backgroundImage: `linear-gradient(180deg, ${alpha(
                                theme.palette.primary[500],
                                0.6,
                            )} 0%, ${theme.palette.primary[600]} 100%)`,
                            boxShadow: `${theme.palette.primary[400]} 0 2px 0.5px inset, ${theme.palette.primary[700]} 0 -3px 1px inset, ${alpha(theme.palette.common.black, 0.1)} 0 2px 4px 0`,
                            '&:hover': {
                                backgroundColor: (theme.vars || theme).palette.primary[700],
                            },
                            '&:active': {
                                backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                            },
                            borderRadius: theme.spacing(2),
                        }),
                        ...(ownerState.variant === 'text' && {
                            color: (theme.vars || theme).palette.primary[600],
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.primary[300],
                            }),
                        }),
                    }),
                },
                variants: [
                    {
                        // @ts-ignore internal repo module augmentation issue
                        props: { variant: 'code' },
                        style: ({ theme }) => [
                            {
                                cursor: 'copy',
                                padding: 0,
                                width: 'max-content',
                                backgroundColor: 'transparent',
                                color: (theme.vars || theme).palette.grey[600],
                                fontFamily: theme.typography.fontFamilyCode,
                                fontWeight: 400,
                                fontSize: defaultTheme.typography.pxToRem(12),
                                lineHeight: 21 / 14,
                                letterSpacing: 0,
                                WebkitFontSmoothing: 'subpixel-antialiased',
                                '& .MuiButton-startIcon': {
                                    color: (theme.vars || theme).palette.grey[400],
                                },
                                '& .MuiButton-endIcon': {
                                    display: 'inline-block',
                                    position: 'absolute',
                                    color: (theme.vars || theme).palette.primary.main,
                                    right: -22,
                                    top: -1,
                                    opacity: 0,
                                    transitionProperty: 'opacity',
                                    transitionDuration: '100ms',
                                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    backgroundColor: 'transparent',
                                    color: (theme.vars || theme).palette.primary.main,
                                    '& .MuiButton-endIcon': {
                                        color: (theme.vars || theme).palette.primary.main,
                                        opacity: 1,
                                    },
                                },
                            },
                            theme.applyDarkStyles({
                                '& .MuiButton-endIcon': {
                                    color: (theme.vars || theme).palette.primary[300],
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    color: (theme.vars || theme).palette.primary[300],
                                    '& .MuiButton-endIcon': {
                                        opacity: 1,
                                    },
                                },
                            }),
                        ],
                    },
                    {
                        // @ts-ignore internal repo module augmentation issue
                        props: { variant: 'codeOutlined' },
                        style: ({ theme }) => [
                            {
                                display: 'inline-block',
                                justifyContent: 'start',
                                overflowX: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                position: 'relative',
                                border: '1px solid',
                                color: (theme.vars || theme).palette.grey[900],
                                backgroundColor: alpha(theme.palette.primary[50], 0.3),
                                borderColor: (theme.vars || theme).palette.grey[200],
                                boxShadow: `0px 2px 2px ${alpha(
                                    theme.palette.primary[100],
                                    0.2,
                                )}, inset 0px 4px 4px ${alpha(theme.palette.primary[100], 0.2)}`,
                                fontFamily: theme.typography.fontFamilyCode,
                                fontWeight: 400,
                                fontSize: defaultTheme.typography.pxToRem(12),
                                lineHeight: 21 / 14,
                                letterSpacing: 0,
                                WebkitFontSmoothing: 'subpixel-antialiased',
                                '& .MuiButton-endIcon': {
                                    display: 'inline-block',
                                    position: 'absolute',
                                    top: 12,
                                    right: 0,
                                    marginRight: 10,
                                    color: (theme.vars || theme).palette.grey[600],
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    borderColor: (theme.vars || theme).palette.primary.main,
                                    backgroundColor: (theme.vars || theme).palette.primary[50],
                                    color: (theme.vars || theme).palette.primary[600],
                                    '& .MuiButton-endIcon': {
                                        color: (theme.vars || theme).palette.primary.main,
                                    },
                                },
                            } as const,
                            theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.grey[500],
                                borderColor: (theme.vars || theme).palette.primaryDark[600],
                                backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                                boxShadow: '0px 2px 2px #0B0D0E, inset 0px 4px 4px rgba(20, 25, 31, 0.3)',
                                '& .MuiButton-endIcon': {
                                    color: (theme.vars || theme).palette.grey[400],
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    backgroundColor: (theme.vars || theme).palette.primary[900],
                                    color: (theme.vars || theme).palette.primary[100],
                                    '& .MuiButton-endIcon': {
                                        color: (theme.vars || theme).palette.primary[300],
                                    },
                                },
                            }),
                        ],
                    },
                    {
                        // @ts-ignore internal repo module augmentation issue
                        props: { variant: 'link' },
                        style: ({ theme }) => ({
                            marginBottom: 1,
                            fontSize: theme.typography.pxToRem(14),
                            fontWeight: theme.typography.fontWeightBold,
                            color: (theme.vars || theme).palette.primary[600],
                            '&:hover': {
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                            },
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.primary[300],
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary[800], 0.3),
                                },
                            }),
                        }),
                    },
                ],
            },
            MuiIconButton: {
                variants: [
                    {
                        props: { color: 'primary' },
                        style: ({ theme }) => [
                            {
                                height: 34,
                                width: 34,
                                border: `1px solid`,
                                borderColor: (theme.vars || theme).palette.grey[200],
                                color: (theme.vars || theme).palette.primary[500],
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: `inset 0 1px 2px ${(theme.vars || theme).palette.grey[50]
                                    }, 0 1px 0.5px ${alpha(theme.palette.grey[100], 0.6)}`,
                                '&:hover': {
                                    borderColor: (theme.vars || theme).palette.grey[300],
                                    background: (theme.vars || theme).palette.grey[50],
                                },
                            },
                            theme.applyDarkStyles({
                                borderColor: (theme.vars || theme).palette.primaryDark[700],
                                color: (theme.vars || theme).palette.primary[300],
                                boxShadow: `inset 0 1px 1px ${(theme.vars || theme).palette.primaryDark[900]
                                    }, 0 1px 0.5px ${(theme.vars || theme).palette.common.black}`,
                                '&:hover': {
                                    borderColor: (theme.vars || theme).palette.primaryDark[600],
                                    background: alpha(theme.palette.primaryDark[700], 0.4),
                                },
                            }),
                        ],
                    },
                    {
                        props: { color: 'info' },
                        style: ({ theme }) => [
                            {
                                height: 34,
                                width: 34,
                                border: `1px solid`,
                                borderColor: (theme.vars || theme).palette.grey[200],
                                color: (theme.vars || theme).palette.grey[600],
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: `inset 0 1px 2px ${(theme.vars || theme).palette.grey[50]
                                    }, 0 1px 0.5px ${alpha(theme.palette.grey[100], 0.6)}`,
                                '&:hover': {
                                    color: (theme.vars || theme).palette.primary.main,
                                    borderColor: (theme.vars || theme).palette.grey[300],
                                    background: (theme.vars || theme).palette.grey[50],
                                },
                            },
                            theme.applyDarkStyles({
                                borderColor: (theme.vars || theme).palette.primaryDark[700],
                                color: (theme.vars || theme).palette.grey[400],
                                boxShadow: `inset 0 1px 1px ${(theme.vars || theme).palette.primaryDark[900]
                                    }, 0 1px 0.5px ${(theme.vars || theme).palette.common.black}`,
                                '&:hover': {
                                    color: (theme.vars || theme).palette.primary[400],
                                    borderColor: (theme.vars || theme).palette.primaryDark[600],
                                    background: alpha(theme.palette.primaryDark[700], 0.4),
                                },
                            }),
                        ],
                    },
                ],
            },
            MuiMenu: {
                styleOverrides: {
                    paper: ({ theme }) => [
                        {
                            minWidth: 160,
                            color: (theme.vars || theme).palette.text.secondary,
                            backgroundImage: 'none',
                            border: '1px solid',
                            backgroundColor: (theme.vars || theme).palette.background.paper,
                            borderColor: (theme.vars || theme).palette.grey[200],
                            '& .MuiMenuItem-root': {
                                fontSize: theme.typography.pxToRem(14),
                                fontWeight: 500,
                                '&:hover, &:focus': {
                                    backgroundColor: (theme.vars || theme).palette.grey[50],
                                },
                                '&:focus-visible': {
                                    outline: 'none',
                                },
                                '&.Mui-selected': {
                                    fontWeight: 500,
                                    color: (theme.vars || theme).palette.primary[600],
                                    backgroundColor: alpha(theme.palette.primary[100], 0.6),
                                },
                            },
                        },
                        theme.applyDarkStyles({
                            backgroundColor: (theme.vars || theme).palette.primaryDark[900],
                            borderColor: (theme.vars || theme).palette.primaryDark[700],
                            '& .MuiMenuItem-root': {
                                '&:hover, &:focus': {
                                    backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                                },
                                '&.Mui-selected': {
                                    color: (theme.vars || theme).palette.primary[300],
                                    backgroundColor: alpha(theme.palette.primary[900], 0.4),
                                },
                            },
                        }),
                    ],
                },
            },
            MuiPopover: {
                styleOverrides: {
                    paper: ({ theme }) => ({
                        boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.3)',
                        ...theme.applyDarkStyles({
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                        }),
                    }),
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderColor: (theme.vars || theme).palette.grey[100],
                        ...theme.applyDarkStyles({
                            borderColor: alpha(theme.palette.primaryDark[700], 0.8),
                        }),
                    }),
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: 'none',
                },
                styleOverrides: {
                    root: ({ theme }) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: theme.typography.fontWeightSemiBold,
                        '&.MuiTypography-body1 > svg': {
                            marginTop: 2,
                        },
                        '& svg:last-child': {
                            marginLeft: 2,
                        },
                        '&:focus-visible': {
                            outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
                            outlineOffset: '2px',
                        },
                    }),
                },
                variants: [
                    {
                        props: { color: 'primary' },
                        style: ({ theme }) => [
                            {
                                color: (theme.vars || theme).palette.primary[600],
                                '&:hover': {
                                    color: (theme.vars || theme).palette.primary[700],
                                },
                            },
                            theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.primary[300],
                                '&:hover': {
                                    color: (theme.vars || theme).palette.primary[200],
                                },
                            }),
                        ],
                    },
                ],
            },
            MuiChip: {
                styleOverrides: {
                    root: ({ ownerState: { color, variant }, theme }) => ({
                        fontWeight: theme.typography.fontWeightSemiBold,
                        paddingBottom: 0.2,
                        ...(variant === 'outlined' &&
                            color === 'default' && {
                            backgroundColor: alpha(theme.palette.grey[50], 0.5),
                            color: (theme.vars || theme).palette.grey[900],
                            borderColor: (theme.vars || theme).palette.grey[200],
                            '&:hover': {
                                backgroundColor: (theme.vars || theme).palette.grey[100],
                                color: (theme.vars || theme).palette.grey[900],
                            },
                            ...theme.applyDarkStyles({
                                backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                                color: (theme.vars || theme).palette.grey[300],
                                borderColor: alpha(theme.palette.primaryDark[500], 0.5),
                                '&:hover': {
                                    color: (theme.vars || theme).palette.grey[300],
                                    backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                                },
                            }),
                        }),
                        ...(variant === 'outlined' &&
                            color === 'info' && {
                            backgroundColor: alpha(theme.palette.grey[50], 0.5),
                            color: (theme.vars || theme).palette.grey[900],
                            borderColor: (theme.vars || theme).palette.grey[200],
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.grey[300],
                                backgroundColor: alpha(theme.palette.primaryDark[700], 0.5),
                                borderColor: (theme.vars || theme).palette.primaryDark[600],
                            }),
                        }),
                        ...(variant === 'outlined' &&
                            color === 'primary' && {
                            borderColor: (theme.vars || theme).palette.primary[100],
                            backgroundColor: (theme.vars || theme).palette.primary[50],
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.primary[300],
                                borderColor: alpha(theme.palette.primary[500], 0.2),
                                backgroundColor: alpha(theme.palette.primary[700], 0.2),
                            }),
                        }),
                        ...(variant === 'outlined' &&
                            color === 'success' && {
                            borderColor: (theme.vars || theme).palette.success[100],
                            backgroundColor: (theme.vars || theme).palette.success[50],
                            color: (theme.vars || theme).palette.success[900],
                            ...theme.applyDarkStyles({
                                color: (theme.vars || theme).palette.success[300],
                                borderColor: alpha(theme.palette.success[300], 0.2),
                                background: alpha(theme.palette.success[800], 0.2),
                            }),
                        }),
                        ...(variant === 'filled' && {
                            ...(color === 'default' && {
                                border: '1px solid transparent',
                                color: (theme.vars || theme).palette.primary[700],
                                backgroundColor: alpha(theme.palette.primary[100], 0.5),
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[100],
                                },
                                ...theme.applyDarkStyles({
                                    color: '#fff',
                                    backgroundColor: alpha(theme.palette.primaryDark[500], 0.8),
                                    '&:hover': {
                                        backgroundColor: (theme.vars || theme).palette.primaryDark[600],
                                    },
                                }),
                            }),
                            ...(color === 'primary' && {
                                color: (theme.vars || theme).palette.primary[600],
                                backgroundColor: alpha(theme.palette.primary[100], 0.4),
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[100],
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: (theme.vars || theme).palette.primary[600],
                                    '&:hover': {
                                        color: (theme.vars || theme).palette.primary[700],
                                    },
                                },
                                ...theme.applyDarkStyles({
                                    color: (theme.vars || theme).palette.primary[100],
                                    backgroundColor: alpha(theme.palette.primary[800], 0.5),
                                    '&:hover': {
                                        backgroundColor: alpha(theme.palette.primary[900], 0.5),
                                    },
                                    '& .MuiChip-deleteIcon': {
                                        color: (theme.vars || theme).palette.primary[100],
                                        '&:hover': {
                                            color: (theme.vars || theme).palette.primary[50],
                                        },
                                    },
                                }),
                            }),
                        }),
                        // for labelling product in the search
                        // @ts-ignore internal repo module augmentation issue
                        ...(variant === 'light' && {
                            ...(color === 'default' && {
                                color: (theme.vars || theme).palette.primary[700],
                                backgroundColor: alpha(theme.palette.primary[100], 0.3),
                                ...theme.applyDarkStyles({
                                    color: (theme.vars || theme).palette.primary[200],
                                    backgroundColor: alpha(theme.palette.primaryDark[700], 0.5),
                                }),
                            }),
                            ...(color === 'warning' && {
                                color: (theme.vars || theme).palette.warning[900],
                                backgroundColor: (theme.vars || theme).palette.warning[100],
                                ...theme.applyDarkStyles({
                                    color: '#fff',
                                    backgroundColor: (theme.vars || theme).palette.warning[900],
                                }),
                            }),
                            ...(color === 'success' && {
                                color: (theme.vars || theme).palette.success[900],
                                backgroundColor: (theme.vars || theme).palette.success[100],
                                ...theme.applyDarkStyles({
                                    color: '#fff',
                                    backgroundColor: (theme.vars || theme).palette.success[900],
                                }),
                            }),
                        }),
                    }),
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        padding: 0,
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: ({ theme }) => [
                        {
                            padding: '8px',
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: theme.typography.pxToRem(14),
                            color: theme.palette.grey[700],
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: theme.palette.grey[50],
                            },
                            '&.Mui-selected': {
                                borderRadius: 10,
                                border: '1px solid',
                                color: (theme.vars || theme).palette.primary[500],
                                borderColor: `${(theme.vars || theme).palette.primary[500]} !important`,
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[100],
                                },
                            },
                        } as const,
                        theme.applyDarkStyles({
                            color: theme.palette.grey[300],
                            '&:hover': {
                                backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                            },
                            '&.Mui-selected': {
                                color: '#fff',
                                borderColor: `${(theme.vars || theme).palette.primary[700]} !important`,
                                backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primaryDark[600],
                                },
                            },
                        }),
                    ],
                },
            },
            MuiSelect: {
                defaultProps: {
                    IconComponent: ArrowDropDownRounded,
                },
                styleOverrides: {
                    iconFilled: {
                        top: 'calc(50% - .25em)',
                    },
                },
            },
            MuiTab: {
                defaultProps: {
                    disableTouchRipple: true,
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: ({ theme, ownerState }) => [
                        {
                            backgroundImage: 'none',
                            backgroundColor: '#fff',
                            '&[href]': {
                                textDecorationLine: 'none',
                            },
                            transition: theme.transitions.create(['border', 'box-shadow'], {
                                duration: theme.transitions.duration.shortest,
                            }),
                            ...(ownerState.variant === 'outlined' && {
                                display: 'block',
                                borderColor: (theme.vars || theme).palette.grey[100],
                                '&[href]': {
                                    textDecorationLine: 'none',
                                    boxShadow: `inset 0 1px 2px ${(theme.vars || theme).palette.grey[50]
                                        }, 0 1px 2px ${alpha(theme.palette.grey[100], 0.6)}`,
                                    '&:hover': {
                                        borderColor: (theme.vars || theme).palette.primary[200],
                                        boxShadow: `0px 2px 8px ${(theme.vars || theme).palette.primary[100]}`,
                                    },
                                    '&:focus-visible': {
                                        outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
                                        outlineOffset: '2px',
                                    },
                                },
                                ':is(a&), :is(button&)': {
                                    '&:hover': {
                                        borderColor: (theme.vars || theme).palette.primary[200],
                                        boxShadow: `0px 4px 16px ${(theme.vars || theme).palette.grey[200]}`,
                                    },
                                },
                            }),
                        },
                        theme.applyDarkStyles({
                            backgroundColor: (theme.vars || theme).palette.primaryDark[900],
                            ...(ownerState.variant === 'outlined' && {
                                borderColor: (theme.vars || theme).palette.primaryDark[700],
                                backgroundColor: alpha(theme.palette.primaryDark[800], 0.6),
                                '&[href]': {
                                    textDecorationLine: 'none',
                                    boxShadow: `inset 0 1px 1px ${(theme.vars || theme).palette.primaryDark[900]
                                        }, 0 1px 2px ${(theme.vars || theme).palette.common.black}`,
                                    '&:hover': {
                                        borderColor: alpha(theme.palette.primary[600], 0.5),
                                        boxShadow: `0px 2px 8px ${alpha(theme.palette.primary[900], 0.6)}`,
                                    },
                                },
                                ':is(a&), :is(button&)': {
                                    '&:hover': {
                                        boxShadow: `0px 4px 24px ${(theme.vars || theme).palette.common.black}`,
                                    },
                                },
                            }),
                        }),
                    ],
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: ({ theme, ownerState }) => ({
                        padding: theme.spacing(1, 2),
                        borderColor: (theme.vars || theme).palette.divider,
                        ...(ownerState.variant === 'head' && {
                            color: (theme.vars || theme).palette.text.primary,
                            fontWeight: 700,
                        }),
                        ...(ownerState.variant === 'body' && {
                            color: (theme.vars || theme).palette.text.secondary,
                        }),
                    }),
                },
            },
            MuiToggleButtonGroup: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        backgroundColor: '#fff',
                        ...theme.applyDarkStyles({
                            backgroundColor: (theme.vars || theme).palette.primaryDark[900],
                        }),
                    }),
                },
            },
            MuiToggleButton: {
                styleOverrides: {
                    root: ({ theme, ownerState }) => [
                        {
                            textTransform: 'none',
                            fontWeight: 'medium',
                            color: theme.palette.text.secondary,
                            borderColor: theme.palette.grey[200],
                            ...(ownerState.size === 'small' && {
                                padding: '0.375rem 0.75rem',
                            }),
                            '&.Mui-selected': {
                                color: (theme.vars || theme).palette.primary[700],
                                borderColor: `${(theme.vars || theme).palette.primary[500]} !important`,
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[100],
                                },
                            },
                        } as const,
                        theme.applyDarkStyles({
                            borderColor: theme.palette.primaryDark[700],
                            '&:hover': {
                                backgroundColor: alpha(theme.palette.primaryDark[600], 0.2),
                            },
                            '&.Mui-selected': {
                                color: (theme.vars || theme).palette.primary[200],
                                borderColor: `${(theme.vars || theme).palette.primary[700]} !important`,
                                backgroundColor: alpha(theme.palette.primary[900], 0.4),
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary[900], 0.8),
                                    borderColor: `${(theme.vars || theme).palette.primary[400]} !important`,
                                },
                            },
                        }),
                    ],
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        borderRadius: 6,
                        padding: '6px 12px',
                    },
                },
            },
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        width: 32,
                        height: 20,
                        padding: 0,
                        '& .MuiSwitch-switchBase': {
                            '&.Mui-checked': {
                                transform: 'translateX(11px)',
                                color: '#fff',
                            },
                        },
                    },
                    switchBase: {
                        height: 20,
                        width: 20,
                        padding: 0,
                        color: '#fff',
                        '&.Mui-checked + .MuiSwitch-track': {
                            opacity: 1,
                        },
                    },
                    track: ({ theme }) => ({
                        opacity: 1,
                        borderRadius: 32,
                        backgroundColor: theme.palette.grey[400],
                        ...theme.applyDarkStyles({
                            backgroundColor: theme.palette.grey[800],
                        }),
                    }),
                    thumb: {
                        flexShrink: 0,
                        width: '14px',
                        height: '14px',
                    },
                },
            },
            MuiPaginationItem: {
                styleOverrides: {
                    root: ({ theme }) => [
                        {
                            textTransform: 'none',
                            fontWeight: theme.typography.fontWeightSemiBold,
                            color: theme.palette.grey[700],
                            borderColor: theme.palette.grey[200],
                            borderRadius: '8px',
                            '&.Mui-selected': {
                                color: (theme.vars || theme).palette.primary[500],
                                borderColor: `${(theme.vars || theme).palette.primary[500]} !important`,
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[100],
                                },
                            },
                        } as const,
                        theme.applyDarkStyles({
                            color: theme.palette.grey[200],
                            borderColor: theme.palette.primaryDark[700],
                            '&.Mui-selected': {
                                color: theme.palette.primary[100],
                                borderColor: `${(theme.vars || theme).palette.primary[700]} !important`,
                                backgroundColor: alpha(theme.palette.primary[900], 0.5),
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary[900], 0.8),
                                },
                            },
                        }),
                    ],
                },
            },
            MuiCssBaseline: {
                defaultProps: {
                    enableColorScheme: true,
                },
            },
        },
    };
}

export function getThemeBreakpoints(): ThemeOptions {
    return {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    };
}

export const brandingDarkTheme = createTheme({
    ...getDesignTokens('dark'),
    ...getThemedComponents(),
});

export const brandingLightTheme = createTheme({
    ...getDesignTokens('light'),
    ...getThemedComponents(),
});
