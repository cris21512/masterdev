import reflex as rx
from masterdev.components.link_technologies import link_technologies
from masterdev.styles.styles import Size,Spacing
from masterdev.components.heading import heading

def technologies() -> rx.Component:
    return rx.flex(
        rx.vstack(
            heading("Tecnologias y Herramientas"),
            rx.hstack(
                link_technologies(
                    "Python",
                    "icons/piton.svg",
                    "Intermedio"
                ),
                link_technologies(
                    "JavaScript",
                    "icons/javascript.svg",
                    "Basico"
                ),        
                link_technologies(
                    "html",
                    "icons/html.svg",
                    "Intermedio"
                ),
                link_technologies(
                    "css",
                    "icons/icons8-css.svg",
                    "Intermedio"
                ),
                link_technologies(
                    "GitHub",
                    "icons/icon-github.svg",
                    "Basico"
                ),
                link_technologies(
                    "reflex",
                    "icons/piton.svg",
                    "Intermedio"
                ),
                spacing=Spacing.MEDIUM_BIG.value,
                wrap="wrap"
            ),
            align="center",
            spacing=Spacing.MEDIUM_BIG.value,
        ),
        max_width="1000px",
        width="100%",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value,
        spacing=Spacing.MEDIUM_BIG.value,
        wrap="wrap"
    )
