import { reactShinyInput } from 'reactR';
import TimePicker from 'react-time-picker';

const TimeInput = ({ configuration, value, setValue }) => {
  return <TimePicker onChange={newTime => setValue(newTime)}
                     value={value}
                     { ...configuration } />;
};

reactShinyInput('.time', 'shinieR.time', TimeInput);
