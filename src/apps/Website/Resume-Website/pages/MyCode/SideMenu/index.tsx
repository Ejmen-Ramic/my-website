import { Stack, VStack, Text } from "@chakra-ui/react"
import IconBurger from "../../../../../../shared/icons/IconBurger"
import { Trans } from "@lingui/macro"

const SideMenu = () => {
    return(
        <VStack>
            <Stack as={'button'}><IconBurger/><Text><Trans>Ejmen</Trans></Text></Stack>
        </VStack>
    )
}

export default SideMenu