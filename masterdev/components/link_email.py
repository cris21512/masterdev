import reflex as rx
from ..backend.backend import State
from masterdev.components.link_imbox import link_inbox
import masterdev.constants.const as const


def _copy_botom():
    return rx.cond(
        rx.tooltip(
            link_inbox(
                "icons/email.svg",
                "Listo!",
                "cristopherfm21.5@gmail.com",
            ),
            content="Copied",
            side="top",
        ),
        rx.box(
            link_inbox(
                "icons/email.svg",
                "Respuesta rapida-Toca para copiar",
                "cristopherfm21.5@gmail.com",
            ),
            on_click=[
                rx.set_clipboard("cristopherfm21.5@gmail.com"),
                rx.toast.info("Correo copiado!")
            ]
        )
    )