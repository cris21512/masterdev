from enum import Enum
import reflex as rx 
from masterdev.styles.colors import Colors, TextColor


#MAX WIDTHS
MAX_WIDTH = "600px"

#Enums
class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"

class Spacing(Enum):
    ZERO = "0"
    VERY_SMALL = "1"
    SMALL = "3"
    DEFAULT = "4"
    LARGE = "5"
    BIG = "6"
    MEDIUM_BIG = "7"
    VERY_BIG = "9"

FADEIN_ANIMATION = "animate__animated animate__fadeIn"
BOUNCEIN_ANIMATION = "animate__animated animate__bounceIn"
BACK_ANIMATION = "animate__animated animate__backInDown"

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Montserrat:wght@400;700&family=Raleway:ital,wght@1,500&display=swap",
    "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap$&family=Bebas+Neue&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    "/css/style.css"
]

BASE_STYLE = {}

title_style = {
    "font_family": "'Raleway', sans-serif",
    "font_weight": "600",
    "font_style": "italic",
    "color": Colors.SECONDARY.value,
}
text_style = {
    "font-family": "Poppins",
    "color": TextColor.BODY.value,
    "font-size": "1.2em",
}
sub_title_style = {
    "font_family": "'Raleway', sans-serif",
    "font_weight": "600",
    "font_style": "italic",
    "color": Colors.FIVE.value,
}

inbox_text_style = {
    "font_family": "'Bebas Neue'",
    "font_weight": "400",
    "color": Colors.WHITE.value
}