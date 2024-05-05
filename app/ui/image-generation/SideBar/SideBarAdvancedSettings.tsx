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
import { SETTINGS_KEY } from "@/app/lib/definitions";
import QuestionMarkIcon from "../../svg/QuestionMarkIcon";
import DropdownMenu from "../../components/DropdownMenu";

const SideBarAdvancedSettings = () => {
  const { settings, setSetting } = useSettings();
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
            enabled={settings.recommendedSizes}
            toggle={() =>
              setSetting(
                SETTINGS_KEY.RECOMMENDED_SIZES,
                !settings.recommendedSizes
              )
            }
          />
          <OptionWithSwitch
            title={sideBarStrings.useFixedSeed}
            tooltipText={tooltipText.useFixedSeed}
            enabled={settings.useFixedSeed}
            toggle={() =>
              setSetting(SETTINGS_KEY.USE_FIXED_SEED, !settings.useFixedSeed)
            }
          />
          <input
            type="number"
            className="input-number appearance-none bg-transparent rounded-md border border-van-gogh-grey-blue hover:border-van-gogh-grey-d focus:border-van-gogh-purple outline-none h-10 w-full min-w-input-width text-van-gogh-sm p-4 mb-4"
            value={settings?.fixedSeed}
            onChange={(e) =>
              setSetting(SETTINGS_KEY.FIXED_SEED, e.target.value)
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
