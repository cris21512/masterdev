import reflex as rx
from masterdev.components.link_educacion import educacion
import masterdev.styles.styles as style
from masterdev.styles.styles import Spacing,Size


def habilidades() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Habilidades blandas:",
            style=style.title_style,
            size="8"
        ),
        rx.unordered_list(
            rx.list_item("Trabajo en equipo"),
            rx.list_item("Comunicación efectiva"),
            rx.list_item("Adaptabilidad"),
            rx.list_item("Respeto"),
            rx.list_item("Aprendizaje rapido"),
            style=style.text_style,
        ),
        educacion(),
        spacing=Spacing.LARGE.value,
        max_width="900px",
        width="100%",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value,
    )