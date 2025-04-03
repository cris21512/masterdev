import reflex as rx
from masterdev.components.link_mision import link_mision
from masterdev.styles.styles import Size
import masterdev.constants.const as const

def mision() -> rx.Component:
    return rx.vstack(
        link_mision(
            "/certif_1.png",
            "Curso de Python desde cero de: Brais moure(Mouredev)",
            const.CURSE_1
        ),
        link_mision(
            "/certif_2.png",
            "Curso de JavaScript desde cero de: Brais moure(Mouredev)",
            const.CURSE_2
        ),
        max_width="900px",
        width="100%",
        padding=Size.SMALL.value,
        margin_y=Size.SMALL.value,
        margin_top=Size.DEFAULT.value,
    )

