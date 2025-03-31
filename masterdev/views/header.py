import reflex as rx
from masterdev.components.heading import heading
from masterdev.styles.styles import Spacing
from masterdev.styles.colors import Colors as Color
import masterdev.styles.styles as styles
from masterdev.styles.styles import Size



def header() -> rx.Component:
    return rx.vstack(
        rx.box(
            heading(
                "¡Hola! Soy Cristopher Fuentes, mas conocido como: Master"
            ),
            rx.text(
                "Soy: ", rx.text.strong("Desarrollador Web - Front-end")
            ),
            class_name="animation-one",
            style=styles.text_style
        ),
        rx.avatar(
            src="/avatar.jpg",
            size=Spacing.VERY_BIG.value,
            radius="medium",
            class_name="image-style"
        ),
        max_width="600px",
        align_items="center",
        padding=Size.BIG.value,
        margin_y=Size.BIG.value,
        class_name=styles.FADEIN_ANIMATION
    )
