import { reactShinyInput } from 'reactR';
import Toggle from "react-toggle";
import "react-toggle/style.css"

const SwitchInput = ({ configuration = NA, value, setValue }) => {
  return <Toggle onChange={e => {
                            setValue(e.target.checked);

                            const labelNode = document.querySelector(`[for = "${configuration.inputId}"]`);
                            const label = labelNode.textContent;
                            const altLabel = labelNode.dataset.alt;

                            labelNode.textContent = altLabel;
                            labelNode.dataset.alt = label;
                          }}
                 value={value}
                 { ...configuration } />;
};

reactShinyInput('.switch', 'shinieR.switch', SwitchInput);
