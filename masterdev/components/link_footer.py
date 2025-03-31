import reflex as rx
from masterdev.components.heading import heading
import masterdev.styles.styles as styles

def link_footer(text:str) -> rx.Component:
    return rx.hstack(
        rx.vstack(
            heading("Mis redes sociales"),
            rx.text(
                text,
                style=styles.text_style
            )
        )
    )
