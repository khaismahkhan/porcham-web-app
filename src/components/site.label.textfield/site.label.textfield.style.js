import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  textColor: {
    color: 'red'
  },
  nooutline: {
    outline: 'none',
  },
  noBorder: {
    border: 'none',
  },
  iconColor: {
    color: 'blue',
  },
  endAdn : {
     paddingRight : '3.5px',
  },
  startAdn : {
    paddingLeft : '0px'
  },
  input: {
    height: 8,
    minWidth : '13%',
    textOverflow:"ellipsis",
    backgroundColor: "#F5F7F9",
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: '#8D9CA9',
        fontWeight: "normal",
        fontSize: "16px",
        opacity: 1
    }
  },
  inputPassword: {
    width:"90%",
    minWidth : '13%',
    textOverflow:"ellipsis"
  },

  disabled : {
    color:"#000000"
  },
  paperRoot: {
    width: '100%',
    height: 'auto',
    border: '1px',
    position: "relative",
    boxShadow: 'none',
    outline: 'none',
    background: 'yellow',
    display: 'flex',
    alignItems: 'center',
  }
}))
