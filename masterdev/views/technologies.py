import reflex as rx
from masterdev.components.link_imbox import link_inbox
from masterdev.styles.styles import Size,Spacing

def inbox() -> rx.Component:
    return rx.flex(
        rx.hstack(
            link_inbox(
                "icons/email.svg",
                "Mi correo publico!",
                "master.email94@gmail.com",
            ),
            link_inbox(
                "icons/direct.svg",
                "Correo priv-respuesta rapida",
                "cristopherfm21.5@gmail.com"
            ),
            spacing=Spacing.VERY_BIG.value
        ),
        max_width="900px",
        width="100%",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value,
    )
