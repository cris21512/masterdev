import reflex as rx
import masterdev.styles.styles as styles




def link_about(image:str, text:str, text_two) -> rx.Component:
    return rx.flex(
        rx.vstack(
            rx.text(
                text,
                style=styles.text_style,
            ),
            rx.text(
                text_two,
                style=styles.text_style,
            ),
            rx.avatar(
                src=image,
                width="200px",
                height="300px",
                radius="medium",
                class_name="card"
            ),
            align="center",
            spacing="7"
        ),
        spacing="7",
        width="100%"
    )

