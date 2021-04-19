import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const Spinner = () => {
  const classes = useStyles();
  return (
    <Loader
      className={classes.loader}
      type="Rings"
      color="red"
      height={100}
      width={100}
    />
  );
};

export default Spinner;
