import reflex as rx
from masterdev.components.link_footer import link_footer
from masterdev.components.link_imbox import link_inbox
from masterdev.components.icons import icons
from masterdev.components.icons_link import link_icons
from masterdev.components.link_email import _copy_botom
from masterdev.components.heading import heading
import masterdev.constants.const as const
from masterdev.styles.styles import Size

def footer() -> rx.Component:
    return rx.flex(
        rx.hstack(
            link_footer(
                "Contactame por aca ->"
            ),
            icons(),
            _copy_botom(),
            spacing="7",
            align="center",
        ),
        justify="center",
        max_width="900px",
        width="100%",
        spacing="9",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value,
    )
