import reflex as rx
import masterdev.styles.styles as style
from masterdev.components.heading import heading

def link_inbox(image:str, info:str, copy:str, ) -> rx.Component:
    return rx.vstack(
        rx.image(
            src=image,
            width="auto",
            height="30px"
        ),
        rx.text(
            info,
            style=style.inbox_text_style
        ),
        rx.text(
            copy,
            style=style.inbox_text_style,
        ),
        style={
            "cursor": "default"
        },
        align="center",
    )
