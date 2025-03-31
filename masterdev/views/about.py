import reflex as rx
from masterdev.components.link_about import link_about
from masterdev.styles.styles import Size




def about() -> rx.Component:
    return rx.flex(
        link_about(
            "/avatar_two.jpg",
            "Soy un chico de 18 años. Vivo en el país de Guatemala, en Villa Nueva. ¡Me gusta mucho escuchar música y soy madridista hasta la muerte!",
            """Empecé en el mundo de la programación en noviembre del año 2024 (específicamente el 23 de noviembre),
            y desde entonces, mi curiosidad por aprender a programar creció. 
            Al principio, como todo novato en el mundo de la programación, no sabía muy bien qué podría crear o hacer. 
            Pero hoy, con mucha seguridad, puedo decir que soy un desarrollador web Front-end. 
            Desde pequeño, la tecnología me ha llamado la atención, así que ahora que programo, siento que mi talento 
            y mi curiosidad... ¡nunca se acabarán!"""
        ),
        flex_direction=["row","column-reverse"],
        max_width="900px",
        width="100%",
        padding=Size.MEDIUM.value,
        margin_y=Size.MEDIUM.value,
        margin_top=Size.BIG.value
    )

