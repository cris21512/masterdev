import reflex as rx


def link_icons(image:str, url:str) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.image(
                src=image,
                width="40px",
                height="40px"
            ),
        ),
        href=url,
        is_external=True
    )
