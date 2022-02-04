import { reactShinyInput } from 'reactR';
import Toggle from "react-toggle";
import "react-toggle/style.css"

const SwitchInput = ({ configuration = NA, value, setValue }) => {
  return <Toggle onChange={e => {
                            setValue(e.target.checked);

                            const labelNodes = document.querySelectorAll(`[for = "${configuration.inputId}"]`);

                            [].forEach.call(labelNodes, function(node) {
                              node.classList.toggle("font-weight-bold");
                            });
                          }}
                 checked={value}
                 value={value}
                 { ...configuration } />;
};

reactShinyInput('.switch', 'shinieR.switch', SwitchInput);
