import { VStack, Text, Icon, HStack } from "@chakra-ui/react"
import { Trans } from "@lingui/macro"
import { menuItems } from "./Props"
import { Link } from "react-router-dom"
import { FC } from "react"

const SideMenu:FC = () => {
    return(
        <VStack>
            {menuItems.map(({icon, title, link}) => (
                <Link key={title} to={link}>
                <HStack as="button">
                    {icon && <Icon as={icon}/>}
                    <Text><Trans>{title}</Trans></Text>
                </HStack>
            </Link>
            ))}
            
        </VStack>
    )
}

export default SideMenu

