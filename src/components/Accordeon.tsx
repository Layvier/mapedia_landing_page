import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
} from "@chakra-ui/accordion";
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { ReactNode } from "react";

interface AccordeonItem {
  title: string;
  bulletPoints: Array<ReactNode | string>;
}

interface AccordeonProps {
  items: AccordeonItem[];
  textAlign?: "left" | "right";
  h?: AccordionProps["h"];
  expandFirstItem?: boolean;
  color?: BoxProps["color"];
  borderColor?: BoxProps["borderColor"];
}

/**
 * Named like because Accordéons are french (:
 */
export const Accordeon: React.FC<AccordeonProps> = ({
  items,
  h,
  expandFirstItem,
  color = "teal.500",
  borderColor = "teal.400",
  textAlign = "left",
}) => {
  return (
    <Accordion allowToggle h={h} {...(expandFirstItem && { defaultIndex: 0 })}>
      {items.map(({ title, bulletPoints }, idx) => (
        <AccordionItem
          key={title}
          borderWidth={0}
          style={{ borderBottomWidth: 0 }}
        >
          <AccordionButton
            _focus={{}}
            _hover={{
              color,
            }}
            borderLeftWidth={textAlign === "left" ? 2 : 0}
            borderRightWidth={textAlign === "right" ? 2 : 0}
            borderColor="gray.500"
            fontWeight={600}
            color="gray.700"
            _expanded={{ borderColor, color }}
            mt={idx === 0 ? 0 : 2}
          >
            <Box
              flex="1"
              fontSize="lg"
              textAlign={textAlign}
              borderTopWidth={0}
            >
              {title}
            </Box>
          </AccordionButton>
          <AccordionPanel
            backgroundImage="linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,1), rgba(255,255,255,1), rgba(255,255,255,0.1))"
            textAlign={textAlign}
            pt={3}
            pb={2}
          >
            <List spacing={3}>
              {bulletPoints.map((bulletPoint, idx) => (
                <ListItem pl={5} key={idx} maxW="800px">
                  <Flex>
                    <ListIcon
                      as={TiArrowRightOutline}
                      color="blue.500"
                      boxSize={8}
                      mr={1}
                    />
                    <Box pt="5px" color="gray.800">
                      {typeof bulletPoint === "string" ? (
                        <Text>{bulletPoint}</Text>
                      ) : (
                        bulletPoint
                      )}
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
