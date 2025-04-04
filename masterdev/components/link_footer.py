import reflex as rx
import masterdev.styles.styles as styles

def link_footer(text:str) -> rx.Component:
    return rx.hstack(
        rx.vstack(
            rx.heading(
                "Interesado en contactarme?",
                style=styles.title_style
            ),
            rx.text(
                text,
                style=styles.text_style
            )
        )
    )
