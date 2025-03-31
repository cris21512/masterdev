import reflex as rx
import masterdev.styles.styles as styles

def link_mision(info:str, text:str,) -> rx.Component:
    return rx.flex(
        rx.vstack(
            rx.text(
                info,
                style=styles.text_style
            ),
            rx.text(
                text,
                style=styles.text_style
            ),
            spacing="6",
            align="center"
        ),
        direction="column"
    )

