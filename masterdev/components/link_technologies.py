import reflex as rx
import masterdev.styles.styles as style
from masterdev.styles.styles import Spacing

def link_technologies(name:str, image:str, level:str) -> rx.Component:
    return rx.card(
        rx.vstack(
            rx.text(
                name,
                style=style.text_style,
                size=Spacing.SMALL.value
            ),
            rx.image(
                src=image,
                width="70px",
                height="70px"
            ),
            rx.text(
                level,
                style=style.text_style,
                size=Spacing.SMALL.value
            ),
            align="center",
        ),
        class_name="card-technology"
    )