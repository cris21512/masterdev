import reflex as rx

def barra(image: str, url:str, alt:str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width="30px",
            height="30px",
            alt=alt
        ),
        href=url,
    )