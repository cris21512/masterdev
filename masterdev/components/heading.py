import reflex as rx
from masterdev.styles.styles import Size
import masterdev.styles.styles as style

def heading(text:str) -> rx.Component:
    return rx.heading(
        text,
        size="8",
        style=style.title_style
    )
