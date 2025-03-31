import reflex as rx
from masterdev.components.link_footer import link_footer
from masterdev.components.icons import icons
from masterdev.components.icons_link import link_icons
from masterdev.components.heading import heading
import masterdev.constants.const as const
from masterdev.styles.styles import Size

def footer() -> rx.Component:
    return rx.flex(
        rx.hstack(
            link_footer(
                "Muchas gracias por ver!"
            ),
            icons(),
            spacing="9",
            align="center"
        ),
        justify="center",
        max_width="1100px",
        width="100%",
        spacing="9",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value,
    )
