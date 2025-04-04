import reflex as rx
from masterdev.components.icons_link import link_icons
import masterdev.constants.const as const

def icons() -> rx.Component:
    return rx.hstack(
        link_icons(
            "icons/Gitblack.svg",
            const.GITHUB
        ),
        link_icons(
            "icons/linkwhite.svg",
            const.LINKEDIN
        ),
        link_icons(
            "icons/doc.svg",
            const.CV
        )
    )
