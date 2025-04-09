import reflex as rx
from masterdev.styles.colors import Colors as Color
from masterdev.styles.styles import Size
import masterdev.styles.styles as style
import masterdev.constants.const as const
from masterdev.components.link_navbar import barra
from masterdev.components.text_navbar import text_barra


def navbar() -> rx.Component:
    return rx.flex(
        rx.link(
            rx.image(
                src="/logoM.png",
                width="auto",
                height="3em",
                justify="start",
                alt=f"Master logo"
            ),
            href=""
        ),
        rx.flex(
            rx.hstack(
                text_barra(
                    "Mi CV",
                    const.CV
                ),
                text_barra(
                    "contacto",
                    const.EMAIL_COPY,
                ),
                text_barra(
                    "GitHub",
                    const.GITHUB
                ),
            ),
        ),
        class_name=style.BACK_ANIMATION,
        justify_content="center",
        align_items="center",
        position="sticky",
        bg=Color.BLACK.value,
        border_bottom="1px solid rgba(247, 247, 247, 0.2)",
        padding_x=Size.SMALL.value,
        padding_y=Size.SMALL.value,
        z_index="999",
        top="0"
    )

