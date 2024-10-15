import { IconType } from "react-icons";
import { BiSolidComponent } from "react-icons/bi";
import { MdWebhook } from "react-icons/md";


type Props = {
    icon?: IconType
    title: string
    link: string
}


export const menuItems: Props[] =[
    {
        icon: BiSolidComponent,
        title: 'Component',
        link: 'https://github.com/alexanderkamalov',
    },
    {
        icon: MdWebhook,
        title: 'Hooks',
        link: 'https://github.com/alexanderkamalov',
    }
]