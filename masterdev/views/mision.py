import reflex as rx
from masterdev.components.link_mision import link_mision
from masterdev.styles.styles import Size

def mision() -> rx.Component:
    return rx.vstack(
        link_mision(
            """Mi misión a corto plazo es llegar a trabajar como desarrollador web Front-end. 
            Independientemente de la empresa en la que trabaje, mi objetivo es ampliar mis 
            conocimientos en el desarrollo web. A mediano plazo, mi meta es convertirme en un 
            desarrollador Full-stack, dominando tanto el Front-end como el Back-end. A largo plazo, 
            quiero aprender a desarrollar aplicaciones para entornos iOS y también especializarme 
            como Full-stack en el desarrollo de apps.""",
            """ En el ámbito del desarrollo de aplicaciones, tengo la ilusión de empezar aprendiendo Swift. 
            Después de eso, considero que una excelente opción sería aprender Kotlin, ideal para desarrollar 
            aplicaciones multiplataforma. Actualmente, manejo lo siguiente: HTML, CSS, JavaScript y Python. 
            Cabe mencionar que Python fue el primer lenguaje con el que empecé en este fascinante mundo 
            de la programación.""",
        ),
        max_width="900px",
        width="100%",
        padding=Size.SMALL.value,
        margin_y=Size.SMALL.value,
        margin_top=Size.DEFAULT.value,
    )

