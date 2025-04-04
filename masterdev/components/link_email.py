import reflex as rx
from ..backend.copy_clipboard import CopyLocalState,copy_script,MyCopyEmail
from masterdev.components.link_imbox import link_inbox
import masterdev.constants.const as const


def _copy_botom():
    return rx.cond(
        CopyLocalState.value,
        rx.tooltip(
            link_inbox(
                "icons/email.svg",
                "Listo!",
                "cristopherfm21.5@gmail.com",
            ),
            content="Copied",
            open=CopyLocalState.value,
            side="top",
        ),
        rx.box(
            link_inbox(
                "icons/email.svg",
                "Respuesta rapida-Toca para copiar",
                "cristopherfm21.5@gmail.com",
            ),
            on_click=[copy_script(), MyCopyEmail.copy_email ]
        )
    )