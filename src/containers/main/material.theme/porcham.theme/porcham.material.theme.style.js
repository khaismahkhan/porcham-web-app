import { primaryColor } from "./porcham.material.theme.base";
// import ComfortaaFont from '../fonts/Comfortaa-Regular.ttf';
export const gradientColor = "linear-gradient(-180deg,#D12194,#1C0740)";

// const comfortaa = {
//   fontFamily: 'Comfortaa',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Comfortaa'),
//     local('Comfortaa-Regular'),
//     url(${ComfortaaFont}) format('truetype')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };
export const themeStyles = {
    MuiPaper: {},
    MuiAppBar: {
        root: {
            // background : gradientColor
            background: '#4812A5 !important'
        }
    },
    MuiBackdrop: {},
    MuiAvatar: {},
    MuiBadge: {},
    MuiBottomNavigation: {},
    MuiBottomNavigationAction: {},
    MuiBreadcrumbs: {},
    MuiButton: {
        root: {
            outline: 'none !important'
        }
    },
    MuiButtonBase: {},
    MuiButtonGroup: {},
    MuiCard: {},
    MuiCardActionArea: {},
    MuiCardActions: {},
    MuiCardContent: {},
    MuiCardHeader: {},
    MuiCardMedia: {},
    MuiCheckbox: {},
    MuiChip: {},
    MuiCircularProgress: {},
    MuiCollapse: {},
    MuiContainer: {},
    MuiDialog: {},
    MuiDialogActions: {},
    MuiDialogContent: {},
    MuiDialogContentText: {},
    MuiDialogTitle: {},
    MuiDivider: {},
    MuiDrawer: {},
    MuiExpansionPanel: {},
    MuiExpansionPanelActions: {},
    MuiExpansionPanelDetails: {},
    MuiExpansionPanelSummary: {},
    MuiFab: {},
    MuiFilledInput: {},
    MuiFormControl: {},
    MuiIcon: {},
    MuiFormControlLabel: {},
    MuiFormGroup: {},
    MuiFormHelperText: {},
    MuiFormLabel: {},
    MuiGrid: {},
    MuiGridList: {},
    MuiGridListTile: {},
    MuiGridListTileBar: {},
    MuiIconButton: {
        root: {
            outline: 'none !important'
        }
    },
    MuiInput: {},
    MuiInputAdornment: {},
    MuiInputBase: {},
    MuiInputLabel: {},
    MuiLinearProgress: {},
    MuiLink: {},
    MuiList: {},
    MuiListItem: {
        button: {
            color: '#ffffff',
            '&:hover': {
                backgroundColor: '#380e7f', // THEME_CHANGES  backgroundColor: '#f8e1f1',
                color: '#ffffff',
                "&& i": {
                    fontSize: "20px",
                    background: '#ffffff',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }
            }
        },
        root: {
            '&$selected': {
                // backgroundColor: '#D12194',//    backgroundColor: '#ffe0f5' THEME_CHANGES
                color: '#ffffff',
                "&& i": {
                    fontSize: "20px",
                    background: '#ffffff',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }
            },
            '&$selected:hover': {
                // backgroundColor: '#D12194',//     backgroundColor: '#f8e1f1' THEME_CHANGES
                color: '#ffffff',
                "&& i": {
                    fontSize: "20px",
                    color: '#ffffff',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }
            }
        }
    },
    MuiListItemAvatar: {},
    MuiListItemIcon: {
        root: {
            "&& i": {
                fontSize: "20px",
                // background: gradientColor,
                background: '#ffffff',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }
        }
    },
    MuiListItemSecondaryAction: {},
    MuiListItemText: {},
    MuiListSubheader: {},
    MuiMenu: {},
    MuiMenuItem: {},
    MuiMobileStepper: {},
    MuiNativeSelect: {},
    MuiOutlinedInput: {},
    MuiPopover: {},
    MuiRadio: {},
    MuiSelect: {},
    MuiSlider: {},
    MuiSnackbar: {},
    MuiSnackbarContent: {},
    MuiStep: {},
    MuiStepButton: {},
    MuiStepConnector: {},
    MuiStepContent: {},
    MuiStepIcon: {},
    MuiStepLabel: {},
    MuiStepper: {},
    MuiSvgIcon: {},
    MuiSwitch: {},
    MuiTab: {
        root: {
            outline: 'none !important'
        }
    },
    MuiTable: {},
    MuiTableBody: {},
    MuiTableCell: {
        head: {
            color: '#ffffff'
        },
        root: {
            verticalAlign: "top"
        }
    },
    MuiTableFooter: {},
    MuiTableHead: {
        root: {
            backgroundColor: primaryColor
        }
    },
    MuiTablePagination: {},
    MuiTableRow: {},
    MuiTableSortLabel: {},
    MuiTabs: {},
    MuiTextField: {},
    MuiToolbar: {},
    MuiTooltip: {
        tooltipPlacementTop: {},
        tooltipPlacementBottom: {
            color: '#fff',
            backgroundColor: primaryColor,
        },
        tooltipPlacementLeft: {},
        tooltipPlacementRight: {},
    },
    MuiTouchRipple: {},
    MuiTypography: {

    },
    MuiCssBaseline: {
        '@global': {
            //   '@font-face': [comfortaa],
            '*::-webkit-scrollbar': {
                width: '0.4em'
            },
            '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
            }
        },
    }
}
