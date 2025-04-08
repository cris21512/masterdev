import reflex as rx
import masterdev.styles.styles as style

def link_habilidades(title:str, text:str, ) -> rx.Component:
    return rx.vstack(
        rx.heading(
            title,
            style=style.title_style,
            size="8"
        ),
        rx.text(
            text,
            style=style.text_style
        ),
        align="center",
        spacing="4",
        width="100%"
    )