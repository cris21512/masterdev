/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import { jsx } from "@emotion/react"
import { Event, isTrue, refs } from "$/utils/state"
import { EventLoopContext } from "$/utils/context"
import NextHead from "next/head"



export function Fragment_05975b3671aa39d33fc8d066fde5be7d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((jsx(RadixThemesTooltip, ({ ["content"] : "Copied", ["side"] : "top" }), (jsx(RadixThemesFlex, ({ ["align"] : "center", ["className"] : "rx-Stack", ["css"] : ({ ["cursor"] : "default" }), ["direction"] : "column", ["gap"] : "3" }), (jsx("img", ({ ["css"] : ({ ["width"] : "auto", ["height"] : "30px" }), ["src"] : "icons/email.svg" }))), (jsx(RadixThemesText, ({ ["as"] : "p", ["css"] : ({ ["fontFamily"] : "'Bebas Neue'", ["--default-font-family"] : "'Bebas Neue'", ["fontWeight"] : "400", ["color"] : "#ffffff" }) }), (jsx(Fragment, ({  }), "Listo!")))), (jsx(RadixThemesText, ({ ["as"] : "p", ["css"] : ({ ["fontFamily"] : "'Bebas Neue'", ["--default-font-family"] : "'Bebas Neue'", ["fontWeight"] : "400", ["color"] : "#ffffff" }) }), (jsx(Fragment, ({  }), "cristopherfm21.5@gmail.com"))))))))) ? (
  <Fragment>

<RadixThemesBox onClick={((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"]("cristopherfm21.5@gmail.com"))), ["callback"] : null }), ({  }))), (Event("_call_function", ({ ["function"] : (() => (refs['__toast']["info"]("Correo copiado!"))), ["callback"] : null }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["cursor"] : "default" })} direction={"column"} gap={"3"}>

<img css={({ ["width"] : "auto", ["height"] : "30px" })} src={"icons/email.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "'Bebas Neue'", ["--default-font-family"] : "'Bebas Neue'", ["fontWeight"] : "400", ["color"] : "#ffffff" })}>

{"Respuesta rapida-Toca para copiar"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "'Bebas Neue'", ["--default-font-family"] : "'Bebas Neue'", ["fontWeight"] : "400", ["color"] : "#ffffff" })}>

{"cristopherfm21.5@gmail.com"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesBox>

<RadixThemesFlex className={"animate__animated animate__backInDown"} css={({ ["justifyContent"] : "center", ["alignItems"] : "center", ["position"] : "sticky", ["background"] : "#020202", ["borderBottom"] : "1px solid rgba(247, 247, 247, 0.2)", ["paddingInlineStart"] : "0.5em", ["paddingInlineEnd"] : "0.5em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["zIndex"] : "999", ["top"] : "0" })}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={""} passHref={true}>

<img alt={"Master logo"} css={({ ["width"] : "auto", ["height"] : "3em", ["justify"] : "start" })} src={"/logoM.png"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesFlex>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} className={"text-shine"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"/Cv_CristopherFu..pdf"} passHref={true}>

<RadixThemesText align={"center"} as={"p"} css={({ ["&:hover"] : ({ ["color"] : "#CFC5B0" }), ["color"] : "#8D999" })}>

{"Mi CV"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} className={"text-shine"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"mailto:cristopherfm21.5@gmail.com"} passHref={true}>

<RadixThemesText align={"center"} as={"p"} css={({ ["&:hover"] : ({ ["color"] : "#CFC5B0" }), ["color"] : "#8D999" })}>

{"contacto"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} className={"text-shine"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/cris21512"} passHref={true}>

<RadixThemesText align={"center"} as={"p"} css={({ ["&:hover"] : ({ ["color"] : "#CFC5B0" }), ["color"] : "#8D999" })}>

{"GitHub"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"base"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack animate__animated animate__fadeIn"} css={({ ["maxWidth"] : "600px", ["alignItems"] : "center", ["padding"] : "2em", ["marginTop"] : "2em", ["marginBottom"] : "2em" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack animation-one"} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })} size={"8"}>

{"\u00a1Hola! Soy Cristopher Fuentes... mas conocido como: Master"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox className={"loader"}>

<RadixThemesText as={"p"}>

{"Y soy:"}
</RadixThemesText>
<RadixThemesBox className={"words"}>

<RadixThemesText as={"p"} className={"text-loading"}>

{""}
</RadixThemesText>
<RadixThemesText as={"p"} className={"text-loading"}>

{"Desarrollador Web"}
</RadixThemesText>
<RadixThemesText as={"p"} className={"text-loading"}>

{"Front-end"}
</RadixThemesText>
<RadixThemesText as={"p"} className={"text-loading"}>

{"Disponible para trabajar"}
</RadixThemesText>
<RadixThemesText as={"p"} className={"text-loading"}>

{"Mejorando cada dia!"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesAvatar className={"image-style"} radius={"medium"} size={"9"} src={"/avatar.jpg"}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"small_two"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#FOE7D2" })}>

{"Sobre mi"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex className={"medium"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "row" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column-reverse" }), ["maxWidth"] : "900px", ["width"] : "100%", ["padding"] : "0.8em", ["marginTop"] : "2em", ["marginBottom"] : "0.8em" })}>

<RadixThemesFlex css={({ ["width"] : "100%" })} gap={"7"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"7"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })}>

{"Soy un chico de 18 a\u00f1os. Vivo en el pa\u00eds de Guatemala, en Villa Nueva. \u00a1Y asi empezo todo!"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })}>

{"Empec\u00e9 en el mundo de la programaci\u00f3n en noviembre del a\u00f1o 2024 (espec\u00edficamente el 23 de noviembre),\n            y desde entonces, mi curiosidad por aprender a programar creci\u00f3. \n            Al principio, como todo novato en el mundo de la programaci\u00f3n, no sab\u00eda muy bien qu\u00e9 podr\u00eda crear o hacer. \n            Pero hoy, con mucha seguridad, puedo decir que soy un desarrollador web Front-end. \n            Desde peque\u00f1o, la tecnolog\u00eda me ha llamado la atenci\u00f3n, as\u00ed que ahora que programo, siento que mi talento \n            y mi curiosidad... \u00a1nunca se acabar\u00e1n!"}
</RadixThemesText>
<RadixThemesAvatar className={"card"} css={({ ["width"] : "auto", ["height"] : "250px" })} radius={"medium"} src={"/foto2.jpg"}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"small_two"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#FOE7D2" })}>

{"Mi trabajo"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex className={"work"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["justifyContent"] : "center", ["maxWidth"] : "900px", ["width"] : "100%", ["padding"] : "0.8em", ["marginTop"] : "2em", ["marginBottom"] : "0.8em" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" })} gap={"6"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesHeading as={"h1"} css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })}>

{"Web Oficial de: Chito y Cris"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })}>

{"Como creador de contenido, he decidido que era hora de hacer nuestra propia web. \n            \u00a1Mi ilusi\u00f3n hecha realidad! \u00bfPor qu\u00e9 pagar por algo que puedes crear t\u00fa mismo? Eso \n            fue lo que pens\u00e9 antes de crear en este proyecto. En esta web encontrar\u00e1s parte del \n            contenido que hemos creado, pensado especialmente para esos d\u00edas en los que no sepas muy bien qu\u00e9 cocinar."}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/cris21512/Chito-Y-Cris"} passHref={true}>

<RadixThemesCard className={"icon"}>

<img css={({ ["width"] : "40px", ["height"] : "40px" })} src={"icons/Gitblack.svg"}/>
</RadixThemesCard>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://chito-y-cris.vercel.app/"} passHref={true}>

<RadixThemesButton className={"carta"}>

<img css={({ ["width"] : "auto", ["height"] : "250px" })} src={"/project1.svg"}/>
<RadixThemesButton className={"carta-boton"}>

{"Ver"}
</RadixThemesButton>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" })} gap={"6"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesHeading as={"h1"} css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })}>

{"Mi portafolio"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })}>

{"Mi portafolio es la materializaci\u00f3n de un sue\u00f1o, reflejo de todo el esfuerzo que\n            he dedicado para llegar hasta este momento. En \u00e9l encontrar\u00e1s m\u00e1s informaci\u00f3n sobre m\u00ed, \n            las tecnolog\u00edas que domino y detalles sobre mi educaci\u00f3n. Aunque actualmente no tengo experiencia laboral, \n            mis proyectos hablan por s\u00ed solos y demuestran mi esfuerzo y dedicaci\u00f3n."}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/cris21512/Master-portfolio"} passHref={true}>

<RadixThemesCard className={"icon"}>

<img css={({ ["width"] : "40px", ["height"] : "40px" })} src={"icons/Gitblack.svg"}/>
</RadixThemesCard>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://master-portfolio-sable.vercel.app/"} passHref={true}>

<RadixThemesButton className={"carta"}>

<img css={({ ["width"] : "auto", ["height"] : "250px" })} src={"/project2.svg"}/>
<RadixThemesButton className={"carta-boton"}>

{"Ver"}
</RadixThemesButton>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"small_two"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#FOE7D2" })}>

{"Certificados"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex className={"mision"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "900px", ["width"] : "100%", ["padding"] : "0.5em", ["marginTop"] : "1em", ["marginBottom"] : "0.5em" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["width"] : "100%" })} gap={"6"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"/Master_JS_Certf.pdf"} passHref={true}>

<img css={({ ["width"] : "auto", ["height"] : "300px" })} src={"/certif_1.png"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesHeading as={"h2"} css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })}>

{"Curso de JavaScript desde cero de: Brais moure(Mouredev)"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["width"] : "100%" })} gap={"6"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"/Master_Py_Certf.pdf"} passHref={true}>

<img css={({ ["width"] : "auto", ["height"] : "300px" })} src={"/certif_2.png"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesHeading as={"h2"} css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })}>

{"Curso de Python desde cero de: Brais moure(Mouredev)"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"skills"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex css={({ ["maxWidth"] : "1000px", ["width"] : "100%", ["padding"] : "0.8em", ["marginTop"] : "2em", ["marginBottom"] : "0.8em" })} gap={"7"} wrap={"wrap"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"7"}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })} size={"8"}>

{"Tecnologias y Herramientas"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"7"} wrap={"wrap"}>

<RadixThemesCard className={"card-technology"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Python"}
</RadixThemesText>
<img css={({ ["width"] : "70px", ["height"] : "70px" })} src={"icons/piton.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Intermedio"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
<RadixThemesCard className={"card-technology"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"JavaScript"}
</RadixThemesText>
<img css={({ ["width"] : "70px", ["height"] : "70px" })} src={"icons/javascript.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Basico"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
<RadixThemesCard className={"card-technology"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"html"}
</RadixThemesText>
<img css={({ ["width"] : "70px", ["height"] : "70px" })} src={"icons/html.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Intermedio"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
<RadixThemesCard className={"card-technology"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"css"}
</RadixThemesText>
<img css={({ ["width"] : "70px", ["height"] : "70px" })} src={"icons/icons8-css.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Intermedio"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
<RadixThemesCard className={"card-technology"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"GitHub"}
</RadixThemesText>
<img css={({ ["width"] : "70px", ["height"] : "70px" })} src={"icons/icon-github.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Basico"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
<RadixThemesCard className={"card-technology"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"reflex"}
</RadixThemesText>
<img css={({ ["width"] : "70px", ["height"] : "70px" })} src={"icons/piton.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em" })} size={"3"}>

{"Intermedio"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"habilidades"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "900px", ["width"] : "100%", ["padding"] : "0.8em", ["marginTop"] : "2em", ["marginBottom"] : "0.8em" })} direction={"column"} gap={"5"}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })} size={"8"}>

{"Habilidades blandas:"}
</RadixThemesHeading>
<ul css={({ ["direction"] : "column", ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em", ["listStyleType"] : "disc", ["marginLeft"] : "1.5rem" })}>

<li>

{"Trabajo en equipo"}
</li>
<li>

{"Comunicaci\u00f3n efectiva"}
</li>
<li>

{"Adaptabilidad"}
</li>
<li>

{"Respeto"}
</li>
<li>

{"Aprendizaje rapido"}
</li>
</ul>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em", ["listStyleType"] : "disc" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })} size={"8"}>

{"Educacion:"}
</RadixThemesHeading>
<RadixThemesText as={"p"}>

{" Soy una persona autodidacta. En mi pa\u00eds, estudi\u00e9 un poco de programaci\u00f3n en una escuela, pero la mayor parte de mis conocimientos los \n            adquir\u00ed por mi cuenta, a trav\u00e9s de cursos, proyectos personales y documentaci\u00f3n en l\u00ednea.\n            Actualmente, estoy profundizando en JavaScript para, en el futuro, \n            crear p\u00e1ginas web m\u00e1s profesionales con React. Al ser autodidacta, siempre estoy abierto a nuevas \n            formas de aprendizaje y a desafiarme con nuevos retos\u2026 \u00a1Mi aprendizaje nunca se detiene!   "}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex className={"footer"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex css={({ ["maxWidth"] : "900px", ["width"] : "100%", ["padding"] : "0.8em", ["marginTop"] : "2em", ["marginBottom"] : "0.8em" })} justify={"center"} gap={"9"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"7"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontFamily"] : "'Raleway', sans-serif", ["--default-font-family"] : "'Raleway', sans-serif", ["fontWeight"] : "600", ["fontStyle"] : "italic", ["color"] : "#4fc3f7" })}>

{"Interesado en contactarme?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["color"] : "#FAF3E0", ["fontSize"] : "1.2em", ["listStyleType"] : "disc" })}>

{"Mis redes de contacto ->"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/cris21512"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "40px", ["height"] : "40px" })} src={"icons/Gitblack.svg"}/>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/cristopher-fuentes-87868534b/"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "40px", ["height"] : "40px" })} src={"icons/linkwhite.svg"}/>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"/Cv_CristopherFu..pdf"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "40px", ["height"] : "40px" })} src={"icons/doc.svg"}/>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<Fragment_05975b3671aa39d33fc8d066fde5be7d/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Master.dev | Web developer"}
</title>
<meta content={"Soy master, soy Front-end developer, enfocado en lo mio, y dando lo mejor siempre"} name={"description"}/>
<meta content={"/preview.png"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
