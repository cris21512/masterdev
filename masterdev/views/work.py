import reflex as rx
from masterdev.components.link_work import link_work
from masterdev.styles.styles import Size
import masterdev.constants.const as const


def work() -> rx.Component:
    return rx.vstack(
        link_work(
            "Web Oficial de: Chito y Cris",
            """Como creador de contenido, he decidido que era hora de hacer nuestra propia web. 
            ¡Mi ilusión hecha realidad! ¿Por qué pagar por algo que puedes crear tú mismo? Eso 
            fue lo que pensé antes de crear en este proyecto. En esta web encontrarás parte del 
            contenido que hemos creado, pensado especialmente para esos días en los que no sepas muy bien qué cocinar.""",
            "/project1.svg",
            const.PROJECT_1
        ),
        link_work(
            "Mi portafolio",
            """Mi portafolio es la materialización de un sueño, reflejo de todo el esfuerzo que
            he dedicado para llegar hasta este momento. En él encontrarás más información sobre mí, 
            las tecnologías que domino y detalles sobre mi educación. Aunque actualmente no tengo experiencia laboral, 
            mis proyectos hablan por sí solos y demuestran mi esfuerzo y dedicación.""",
            "/project2.svg",
            const.PROJECT_2
        ),
        justify_content="center",
        max_width="900px",
        width="100%",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value,
        spacing="5"
    )
