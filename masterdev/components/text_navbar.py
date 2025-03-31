import reflex as rx
import masterdev.styles.styles as styles
from masterdev.styles.colors import Colors as Color




def text_barra(text:str, url:str) -> rx.Component:
    return rx.link(
        rx.text(
            text,
            align="center",
            color=f"{Color.OSCURO.value}",
            style={
                "_hover":{
                    "color": f"{Color.FOUR.value}"
                }
            }
        ),
        class_name="text-shine",
        href=url,
        is_external=True
    )