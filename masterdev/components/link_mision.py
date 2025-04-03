import reflex as rx
import masterdev.styles.styles as styles
from masterdev.styles.styles import Spacing


def link_mision(image:str, info:str, url:str) -> rx.Component:
    return rx.flex(
            rx.link(
                rx.image(
                    src=image,
                    width="auto",
                    height="300px"
                ),
                href=url,
                is_external=True
            ),
            rx.heading(
                info,
                as_="h2",
                style=styles.title_style
            ),
        flex_direction=["column", "column"],
        spacing=Spacing.BIG.value,
        width="100%",
        align="center"
    )

