import reflex as rx
import masterdev.styles.styles as styles
from masterdev.styles.styles import Spacing, Size


def link_work(title:str,info:str, image:str, url:str) -> rx.Component:
    return rx.flex(
        rx.vstack(
            rx.heading(
                title,
                as_="h1",
                style=styles.title_style
            ),
            rx.text(
                info,
                style=styles.text_style,
            ),
            spacing=Spacing.DEFAULT.value,
            width="100%"
        ),
        rx.hstack(
            rx.link(
                rx.button(
                    rx.image(
                        src=image,
                        width="auto",
                        height="250px",
                    ),
                    rx.button(
                        "Ver",
                        class_name="carta-boton"
                    ),
                    class_name="carta"
                ),
                href=url,
                is_external=True,
            )
        ),
        flex_direction=["column", "row"],
        spacing=Spacing.BIG.value,
        width="100%",
        align="center"
    )
