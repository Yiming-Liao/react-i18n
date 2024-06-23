import { Helmet } from "react-helmet-async";
import { useTranslations } from "../../i18n"

const About = () => {
    const t = useTranslations("About");
    return (
        <>
            <Helmet>
                <title>{t("head.title")}</title>
                <meta name="description" content={t("head.description")} />
                <meta name="theme-color" content="#000" />

                <meta property="og:title" content={t("head.ogTitle")} />
                <meta property="og:description" content={t("head.ogDescription")} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:site_name" content={t("head.ogSiteName")} />
                <meta property="og:image" content={t("head.ogImage")} />
                <meta property="og:image:alt" content={t("head.ogImageAlt")} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("head.twitterTitle")} />
                <meta name="twitter:description" content={t("head.twitterDescription")} />
                <meta name="twitter:image" content={t("head.twitterImage")} />
            </Helmet>

            <main>
                <h1 className="text-5xl">{t('p1')}</h1>
            </main>
        </>
    )
}
export default About