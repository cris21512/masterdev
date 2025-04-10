import reflex as rx
import masterdev.styles.styles as styles


def text_header() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.text(
                "Y soy:"
            ),
            rx.box(
                rx.text(
                    "",
                    class_name="text-loading"
                ),
                rx.text(
                    "Desarrollador Web",
                    class_name="text-loading"
                ),
                rx.text(
                    "Front-end",
                    class_name="text-loading"
                ),
                rx.text(
                    "Disponible para trabajar",
                    class_name="text-loading"
                ),
                rx.text(
                    "Mejorando cada dia!",
                    class_name="text-loading"
                ),
                class_name="words"
            ),
            class_name="loader",
        ),
        align="start",
    )