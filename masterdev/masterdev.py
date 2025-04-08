import reflex as rx
from masterdev.components.heading import heading
from masterdev.views.navbar import navbar
from masterdev.views.header import header
from masterdev.views.work import work
from masterdev.views.certificados import certificados
from masterdev.views.technologies import technologies
from masterdev.views.about import about
from masterdev.views.footer import footer
from masterdev.views.habilidades import habilidades
from masterdev.styles.styles import STYLESHEETS,BASE_STYLE
import masterdev.styles.styles as style

class State(rx.State):
    """"""

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
                "Certificados",
                style=style.sub_title_style
            ),
            class_name="small_two"
        ),
        rx.center(
            rx.vstack(
                certificados()
            ),
            class_name="mision",
            width="100%"
        ),
        rx.center(
            rx.vstack(
                technologies(),
                align="center"
            ),
            class_name="skills",
            width="100%",
        ),
        rx.center(
            rx.vstack(
                habilidades(),
                align="center"
            ),
            class_name="habilidades",
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
