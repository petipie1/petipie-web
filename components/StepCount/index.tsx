// import CircleButton from 'components/BaseComponents/CircleButton';
import React from "react";
import PropTypes from "prop-types";
import CircleButton from "../Base/CircleButton";
// import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Wrapper from './Wrapper';
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface StepCountProps {
  value: number;
  // eslint-disable-next-line no-unused-vars
  onStepValueChange: (value: number) => void;
  enableDelete: boolean;

}
const StepCount = ({ value, onStepValueChange }: StepCountProps) => {
  // const [count, setCount] = useState(value);

  // useEffect(() => {
  //   setCount(value);
  // }, [value, setCount]);

  const decrement = () => {
    // if (enableDelete) {
    //   if (count - 1 >= 1) {
    //     setCount(count - 1);
    //     onStepValueChange(count - 1);
    //   } else {
    //     onStepValueChange(0);
    //   }
    // } else {
    // setCount(count - 1);
    onStepValueChange(value - 1);
  };

  const increment = () => {
    // setCount(count + 1);
    onStepValueChange(value + 1);
  };

  return (
    <>
      <CircleButton
        disabled={value === 0}
        onClick={decrement}
        onKeyDown={decrement}
      >
        <RemoveCircleIcon sx={{
          height: 35,
          width: 35,
          color: "#D70000",
          opacity: 0.5

        }} />
      </CircleButton>
      <span style={{ fontWeight: 700 }}>{value}</span>
      <CircleButton onClick={increment} onKeyDown={increment}>
        <AddCircleIcon sx={{
          height: 35,
          width: 35,
          color: "#26c48b",
          opacity: 0.7

        }} />
      </CircleButton>
    </>
  );
};

StepCount.propTypes = {
  idx: PropTypes.string.isRequired,
  value: PropTypes.number,
  enableDelete: PropTypes.bool,
  onStepValueChange: PropTypes.func,
};

StepCount.defaultProps = {
  value: 0,
  enableDelete: false,
};

export default StepCount;

// export default React.memo(StepCount);
