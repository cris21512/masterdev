import reflex as rx


CopyLocalState = rx._x.client_state(default=False, var_name="Copying")

def copy_script():
    return rx.call_script(
        """
        refs['_client_state_setCopying'](true);
        setTimeout(() => {
            refs['_client_state_setCopying'](false);
        }, 1750);
        """
    )


class MyCopyEmail(rx.State):
    value: str=""

    async def copy_email(self):
        self.value = "cristopherfm21.5@gmail.com"