import * as PXBThemes from '@pxblue/react-themes';
import * as Colors from '@pxblue/colors';
// import * as BrandingColors from '@pxblue/colors-branding';
import Kwanzaa from '../../app/assets/themes/kwanzaa/kwanzaa-banner-3.png';
import candleCursor from '../../app/assets/themes/kwanzaa/candle-cursor.jpeg';
import AppBarTile from '../../app/assets/themes/kwanzaa/kwanzaa-appbar-tile.png';
import { Schedule } from './types';

export const KwanzaaSchedule: Schedule = {
    start: new Date(0, 11, 26), // Dec 26
    end: new Date(0, 11, 30), // Dec 30 - should run until Jan 1 (cutting this off on early to account for New Years theme)
    config: {
        theme: {
            ...PXBThemes.blue,
            palette: {
                ...PXBThemes.blue.palette,
                type: 'light',
                primary: {
                    light: Colors.red[100],
                    main: Colors.red[500],
                    dark: Colors.red[900],
                },
                secondary: {
                    light: Colors.green[300],
                    main: Colors.green[500],
                    dark: Colors.green[900],
                },
            },
            overrides: {
                ...PXBThemes.blue.overrides,
                MuiAppBar: {
                    ...PXBThemes.blue.overrides?.MuiAppBar,
                    colorSecondary: {
                        color: Colors.white[50],
                        backgroundColor: Colors.red[500],
                        '& .MuiInputBase-root': {
                            color: Colors.white[50],
                        },
                        '& .MuiSelect-icon': {
                            color: Colors.white[50],
                        },
                    },
                },
                MuiButton: {
                    ...PXBThemes.blue.overrides?.MuiButton,
                    outlined: {},
                    outlinedPrimary: {},
                },
            },
        },
        landingPageBanner: {
            backgroundImage: `url(${Kwanzaa})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 88%',
            backgroundColor: Colors.red[900],
            cursor: `url("${candleCursor}") 0 25, auto`,
            color: Colors.white[50],
        },
        // logoColor: BrandingColors.rust[500],
        className: 'kwanzaa',
        appBarBackground: {
            backgroundImage: `url(${AppBarTile})`,
            backgroundSize: '300px',
            backgroundPosition: 'left 75%',
        },
    },
};
