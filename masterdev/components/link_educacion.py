import reflex as rx
import masterdev.styles.styles as style

def educacion() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Educacion:",
            style=style.title_style,
            size="8"
        ),
        rx.text(
            """ Soy una persona autodidacta. En mi país, estudié un poco de programación en una escuela, pero la mayor parte de mis conocimientos los 
            adquirí por mi cuenta, a través de cursos, proyectos personales y documentación en línea.
            Actualmente, estoy profundizando en JavaScript para, en el futuro, 
            crear páginas web más profesionales con React. Al ser autodidacta, siempre estoy abierto a nuevas 
            formas de aprendizaje y a desafiarme con nuevos retos… ¡Mi aprendizaje nunca se detiene!   """
        ),
        style=style.text_style
    )