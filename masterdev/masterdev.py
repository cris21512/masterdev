import reflex as rx
from masterdev.components.heading import heading
from masterdev.views.navbar import navbar
from masterdev.views.header import header
from masterdev.views.work import work
from masterdev.views.mision import mision
from masterdev.views.inbox import inbox
from masterdev.views.about import about
from masterdev.views.footer import footer
from masterdev.styles.styles import STYLESHEETS,BASE_STYLE
import masterdev.styles.styles as style




def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header()
            ),
            class_name="base",
        ),
        rx.center(
            rx.heading(
                "Sobre mi",
                style=style.sub_title_style
            ),
            class_name="small_two",
        ),
        rx.center(
            rx.vstack(
                about()
            ),
            class_name="medium",
        ),
        rx.center(
            rx.heading(
                "Mi trabajo",
                style=style.sub_title_style
            ),
            class_name="small_two",
        ),
        rx.center(
            rx.vstack(
                work()
            ),
            class_name="work",
            width="100%"
        ),
        rx.center(
            rx.heading(
                "Mision",
                style=style.sub_title_style
            ),
            class_name="small_two"
        ),
        rx.center(
            rx.vstack(
                mision()
            ),
            class_name="mision",
            width="100%"
        ),
        rx.center(
            rx.vstack(
                heading("Contactame"),
                inbox(),
                align="center"
            ),
            class_name="imbox",
            width="100%",
        ),
        rx.center(
            footer(),
            class_name="footer"
        )
    )



app = rx.App(
    stylesheets=style.STYLESHEETS,
)
app.add_page(
    index,
    image="/preview.png",
    title="Master.dev | Web developer",
    description="Soy master, soy Front-end developer, enfocado en lo mio, y dando lo mejor siempre"
)
