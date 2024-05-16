import { sideBarStrings, tooltipText } from "@/app/lib/stringConstants";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import OptionWithSwitch from "../../components/OptionWithSwitch";
import { useSettings } from "@/app/context/SettingsContext";
import QuestionMarkIcon from "../../svg/QuestionMarkIcon";
import DropdownMenu from "../../components/DropdownMenu";

const SideBarAdvancedSettings = () => {
  const { generationRequest, setKeyOfGenerationRequest, interfaceState, setKeyOfInterfaceState } = useSettings();
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <h2>
          <AccordionButton>
            <Box
              as="div"
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="0.75rem"
              fontWeight={600}
            >
              {sideBarStrings.showAdvancedSettings}
              <AccordionIcon />
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel p={0}>
          <OptionWithSwitch
            title={sideBarStrings.recommendedSizes}
            tooltipText={tooltipText.recommendedSizes}
            enabled={false}
            toggle={() =>
              console.log('logic for setting h and w accordingly')
            }
          />
          <OptionWithSwitch
            title={sideBarStrings.useFixedSeed}
            tooltipText={tooltipText.useFixedSeed}
            enabled={interfaceState.enableSeed}
            toggle={() =>
              setKeyOfInterfaceState('enableSeed', !interfaceState.enableSeed)
            }
          />
          <input
            type="number"
            className="input-number appearance-none bg-transparent rounded-md border border-van-gogh-grey-800 hover:border-van-gogh-grey-600 focus:border-van-gogh-purple-400 outline-none h-10 w-full min-w-van-gogh-input-width text-van-gogh-sm p-4 mb-4"
            value={generationRequest?.seed ? generationRequest?.seed : ''}
            onChange={(e) =>
              setKeyOfGenerationRequest('seed', parseInt(e.target.value))
            }
            maxLength={10}
          />
          <div className="flex gap-2 items-center mb-1">
            <p className="text-van-gogh-md font-semibold">
              {sideBarStrings.scheduler}
            </p>
            <Tooltip label={tooltipText.scheduler}>
              <span>
                <QuestionMarkIcon />
              </span>
            </Tooltip>
          </div>
          <div className="h-10">
            <DropdownMenu
              value="Leonardo"
              options={[]}
              setValue={() => {}}
              isDisabled={true}
              headerTheme={false}
              large={false}
            />
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SideBarAdvancedSettings;
