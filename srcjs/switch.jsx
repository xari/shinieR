import { reactShinyInput } from 'reactR';
import Toggle from "react-toggle";
import "react-toggle/style.css"

const SwitchInput = ({ configuration = NA, value, setValue }) => {
  return <Toggle onChange={e => setValue(e.target.checked)}
                 value={value}
                 { ...configuration } />;
};

reactShinyInput('.switch', 'shinieR.switch', SwitchInput);
