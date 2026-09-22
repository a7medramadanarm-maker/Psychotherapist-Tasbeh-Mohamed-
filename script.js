"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       TRANSLATIONS
    ========================================================= */

    const translations = {

        en: {

            navHowItWorks: "How It Works",
            navServices: "Services",
            navAbout: "About",
            navFaq: "FAQ",
            getStarted: "Get Started",

            heroEyebrow: "A safe and comfortable space for you",

            heroTitle:
                "Your journey toward <span>feeling better</span> starts here.",

            heroDescription:
                "Get personalized support in a safe and comfortable environment designed around your needs, goals and personal journey.",

            heroButton: "Get Started",
            learnMore: "Learn How It Works",

            trustPrivate: "Private & Confidential",
            trustPersonalized: "Personalized Support",

            supportSession: "Support Session",
            messageOne: "You don't have to face everything alone.",
            messageTwo:
                "I finally feel comfortable talking about what's happening.",
            messageThree:
                "And that's a great place to start.",

            secure: "Safe & Private",
            personalized: "Designed For You",
            flexible: "Flexible",

            trustedText:
                "A space designed to help you move forward",

            trustPointOne: "Personal Attention",
            trustPointTwo: "Comfortable Sessions",
            trustPointThree: "Privacy Focused",

            howTag: "How It Works",
            howTitle: "Starting can be simple.",

            howDescription:
                "Simple steps to help you take the first step without feeling overwhelmed.",

            stepOneTitle: "Tell Us What You Need",
            stepOneText:
                "Share what you are going through and what kind of support you are looking for.",

            stepTwoTitle: "Find Your Approach",
            stepTwoText:
                "Explore the support approach that fits your goals and personal needs.",

            stepThreeTitle: "Start Your Sessions",
            stepThreeText:
                "Choose a suitable time and begin your journey at your own pace.",

            stepFourTitle: "Keep Growing",
            stepFourText:
                "Continue building healthier habits and a deeper understanding of yourself.",


            servicesTag: "Support That Fits You",

            servicesTitle:
                "Whatever you're going through, you don't have to face it alone.",

            servicesDescription:
                "Explore different areas of support and choose what feels closest to your needs.",

            serviceOneTitle: "Anxiety & Stress",
            serviceOneText:
                "Understand stress, manage anxiety and develop healthier ways to deal with pressure.",

            serviceTwoTitle: "Relationships",
            serviceTwoText:
                "Build better communication, healthy boundaries and balanced relationships.",

            serviceThreeTitle: "Self-Esteem",
            serviceThreeText:
                "Strengthen your self-understanding, confidence and relationship with yourself.",

            serviceFourTitle: "Personal Growth",
            serviceFourText:
                "Gain clarity, set meaningful goals and move forward with purpose.",

            serviceFiveTitle: "Family Support",
            serviceFiveText:
                "Approach family situations and challenges with more awareness and understanding.",

            serviceSixTitle: "Life Coaching",
            serviceSixText:
                "Work on personal goals, motivation and positive changes in your life.",

            explore: "Explore",

            yourJourney: "Your Journey",
            active: "Active",
            journeyOne: "Getting Started",
            journeyTwo: "Understanding Your Goals",
            journeyThree: "Building New Habits",
            completed: "Completed",
            inProgress: "In Progress",

            experienceTag: "Your Experience",
            experienceTitle:
                "Support starts with understanding you.",

            experienceText:
                "Everyone has a different journey, so your experience should feel personal, comfortable and focused on what matters to you.",

            featureOneTitle: "Personalized Approach",
            featureOneText:
                "Your goals and experiences remain at the heart of the support process.",

            featureTwoTitle: "Comfortable Environment",
            featureTwoText:
                "A calm space where you can speak freely and honestly.",

            featureThreeTitle: "Flexible Support",
            featureThreeText:
                "Build a routine that works with your life and daily schedule.",


            aboutTag: "About Tasbeeh",

            aboutTitle:
                "A space where you can be yourself.",

            aboutTextOne:
                "Tasbeeh Mohamed is built around a simple idea: meaningful support begins when you feel heard and understood.",

            aboutTextTwo:
                "The goal is to provide a comfortable, respectful and supportive experience that helps you understand what you're going through and work toward the changes you want.",

            aboutButton: "Learn More",

            aboutQuote:
                "You deserve a space where your story can be heard without judgment.",


            startTag: "Take The First Step",

            startTitle:
                "You don't need to have all the answers from the beginning.",

            startText:
                "Start by telling us a little about what you're looking for, and we'll help you understand the next step.",

            startButton: "Get Started",
            startNote: "It only takes a few minutes",


            faqTag: "Frequently Asked Questions",

            faqTitle:
                "Have questions? We're here to help.",

            faqText:
                "Find answers to some of the most common questions before you begin.",

            faqOneQuestion:
                "How does the process work?",

            faqOneAnswer:
                "You begin by sharing the type of support you are looking for. Then you can explore available options and choose what feels right for you.",

            faqTwoQuestion:
                "Is my information private?",

            faqTwoAnswer:
                "Your privacy matters. Personal information should be handled according to the privacy practices and policies of the service.",

            faqThreeQuestion:
                "Can I choose a convenient time?",

            faqThreeAnswer:
                "The platform can be designed to allow you to request or choose a session time that fits your schedule.",

            faqFourQuestion:
                "Is this therapy or personal coaching?",

            faqFourAnswer:
                "Available services may include mental wellbeing support, personal development and coaching depending on the services provided.",

            faqFiveQuestion:
                "How do I get started?",

            faqFiveAnswer:
                "Simply click Get Started and follow the short beginning steps.",


            assessmentTag: "A Personalized Start",

            assessmentTitle:
                "Let's understand what you need.",

            assessmentText:
                "Answer a few simple questions and we'll help you identify the type of support closest to your current needs.",

            assessmentButton: "Start",
            assessmentLink: "Quick Assessment",

            optionAnxiety: "Anxiety & Stress",
            optionRelationships: "Relationships",
            optionSelf: "Self-Esteem",
            optionGrowth: "Personal Growth",

            modalTag: "Let's Begin Together",

            modalTitle:
                "What are you looking for support with?",

            modalText:
                "Choose the option that feels closest to what you're looking for right now.",


            footerDescription:
                "A supportive space for wellbeing, personal development and growth.",

            footerExplore: "Explore",
            footerSupport: "Support",
            footerConnect: "Connect",

            footerConnectText:
                "Have a question? We'd be happy to hear from you.",

            contactUs: "Contact Us",

            privacy: "Privacy",
            terms: "Terms",
            allRights: "All Rights Reserved."
        },


        ar: {

            navHowItWorks: "كيف يعمل الموقع",
            navServices: "الخدمات",
            navAbout: "عن تسبيح",
            navFaq: "الأسئلة الشائعة",
            getStarted: "ابدأ الآن",

            heroEyebrow: "مساحة آمنة ومريحة لك",

            heroTitle:
                "رحلتك نحو <span>شعور أفضل</span> تبدأ من هنا.",

            heroDescription:
                "احصل على دعم شخصي في بيئة آمنة ومريحة، مصممة لتناسب احتياجاتك وأهدافك ورحلتك الخاصة.",

            heroButton: "ابدأ الآن",
            learnMore: "تعرف على طريقة العمل",

            trustPrivate: "خصوصية وسرية تامة",
            trustPersonalized: "دعم مصمم خصيصًا لك",

            supportSession: "جلسة دعم",

            messageOne:
                "مش لازم تواجه كل حاجة لوحدك.",

            messageTwo:
                "أعتقد إني أخيرًا حاسس/ة براحة إني أتكلم عن الموضوع.",

            messageThree:
                "وده مكان رائع نبدأ منه.",

            secure: "آمن وخاص",
            personalized: "مصمم لك",
            flexible: "مرن",

            trustedText:
                "مساحة مصممة لمساعدتك على التقدم إلى الأمام",

            trustPointOne: "اهتمام شخصي",
            trustPointTwo: "جلسات مريحة",
            trustPointThree: "بيئة تحافظ على الخصوصية",


            howTag: "كيف يعمل الموقع",
            howTitle: "البداية يمكن أن تكون بسيطة.",

            howDescription:
                "خطوات بسيطة تساعدك على اتخاذ الخطوة الأولى دون الشعور بالضغط أو التشتت.",

            stepOneTitle: "أخبرنا بما تحتاج إليه",

            stepOneText:
                "شاركنا ما تمر به وما نوع الدعم الذي تبحث عنه.",

            stepTwoTitle:
                "اكتشف النهج المناسب لك",

            stepTwoText:
                "استكشف طريقة الدعم التي تتناسب مع أهدافك واحتياجاتك الشخصية.",

            stepThreeTitle:
                "ابدأ جلساتك",

            stepThreeText:
                "اختر الوقت المناسب لك وابدأ رحلتك بالسرعة التي تناسبك.",

            stepFourTitle:
                "استمر في التطور",

            stepFourText:
                "واصل بناء عادات أكثر صحة وزيادة فهمك لذاتك وثقتك بنفسك.",


            servicesTag: "دعم يناسبك",

            servicesTitle:
                "أيًا كان ما تمر به، لست مضطرًا لمواجهته وحدك.",

            servicesDescription:
                "استكشف مجالات الدعم المختلفة واختر ما تشعر أنه الأقرب لاحتياجاتك.",

            serviceOneTitle:
                "القلق والتوتر",

            serviceOneText:
                "فهم التوتر، التعامل مع القلق، وتطوير طرق أكثر صحة للتعامل مع الضغوط.",

            serviceTwoTitle:
                "العلاقات",

            serviceTwoText:
                "بناء تواصل أفضل، ووضع حدود صحية، وتكوين علاقات أكثر توازنًا.",

            serviceThreeTitle:
                "تقدير الذات",

            serviceThreeText:
                "تعزيز فهمك لذاتك وثقتك بنفسك وبناء علاقة أكثر صحة مع نفسك.",

            serviceFourTitle:
                "النمو الشخصي",

            serviceFourText:
                "اكتساب الوضوح، ووضع أهداف ذات معنى، والتقدم بخطوات واضحة.",

            serviceFiveTitle:
                "الدعم الأسري",

            serviceFiveText:
                "التعامل مع المواقف والتحديات الأسرية بمزيد من الفهم والوعي.",

            serviceSixTitle:
                "التوجيه وتطوير الحياة",

            serviceSixText:
                "العمل على أهدافك الشخصية، وتعزيز الدافعية، وصنع تغييرات إيجابية.",

            explore: "استكشف",


            yourJourney: "رحلتك",
            active: "نشطة",

            journeyOne:
                "البداية",

            journeyTwo:
                "فهم أهدافك",

            journeyThree:
                "بناء عادات جديدة",

            completed: "مكتمل",
            inProgress: "قيد التقدم",


            experienceTag: "تجربتك",

            experienceTitle:
                "دعم يبدأ أولًا بفهمك.",

            experienceText:
                "كل شخص لديه رحلة مختلفة، ولذلك يجب أن تكون تجربتك شخصية ومريحة ومركزة على ما يهمك أنت.",

            featureOneTitle:
                "نهج شخصي",

            featureOneText:
                "تظل أهدافك وتجاربك في قلب عملية الدعم.",

            featureTwoTitle:
                "بيئة مريحة",

            featureTwoText:
                "مساحة هادئة يمكنك فيها التحدث بحرية وصدق.",

            featureThreeTitle:
                "دعم مرن",

            featureThreeText:
                "كوّن روتينًا يتناسب مع حياتك وجدولك اليومي.",


            aboutTag: "عن تسبيح",

            aboutTitle:
                "مساحة تقدر تكون فيها على طبيعتك.",

            aboutTextOne:
                "يقوم موقع تسبيح محمد على فكرة بسيطة: الدعم الحقيقي يبدأ عندما تشعر بأن هناك من يسمعك ويفهمك.",

            aboutTextTwo:
                "الهدف هو توفير تجربة مريحة ومحترمة وداعمة تساعدك على فهم ما تمر به والعمل نحو التغييرات التي ترغب فيها.",

            aboutButton: "اعرف المزيد",

            aboutQuote:
                "أنت تستحق مساحة يمكن أن تُسمع فيها قصتك دون أحكام.",


            startTag: "خذ الخطوة الأولى",

            startTitle:
                "مش لازم تكون عارف كل الإجابات من البداية.",

            startText:
                "ابدأ بإخبارنا قليلًا عما تبحث عنه، وسنساعدك في معرفة الخطوة التالية.",

            startButton: "ابدأ الآن",
            startNote: "لن يستغرق الأمر سوى دقائق قليلة",


            faqTag: "الأسئلة الشائعة",

            faqTitle:
                "عندك أسئلة؟ نحن هنا لمساعدتك.",

            faqText:
                "تعرف على إجابات بعض الأسئلة الأكثر شيوعًا قبل أن تبدأ.",

            faqOneQuestion:
                "كيف تسير عملية البدء؟",

            faqOneAnswer:
                "تبدأ بمشاركة نوع الدعم الذي تبحث عنه. بعد ذلك يمكنك استكشاف الخيارات المتاحة واختيار ما يناسبك.",

            faqTwoQuestion:
                "هل معلوماتي خاصة؟",

            faqTwoAnswer:
                "خصوصيتك مهمة. يجب التعامل مع المعلومات الشخصية وفقًا لممارسات وسياسات الخصوصية الخاصة بالخدمة.",

            faqThreeQuestion:
                "هل يمكنني اختيار موعد مناسب؟",

            faqThreeAnswer:
                "يمكن تصميم المنصة بحيث تتيح لك طلب أو اختيار موعد للجلسة يتناسب مع جدولك.",

            faqFourQuestion:
                "هل هذه خدمة علاج نفسي أم توجيه شخصي؟",

            faqFourAnswer:
                "يمكن أن تشمل الخدمات المتاحة الدعم المتعلق بالصحة النفسية، والتطوير الشخصي، والتوجيه، وذلك بحسب الخدمات التي يتم تقديمها.",

            faqFiveQuestion:
                "كيف أبدأ؟",

            faqFiveAnswer:
                "اضغط ببساطة على «ابدأ الآن» واتبع خطوات البداية القصيرة.",


            assessmentTag:
                "بداية مخصصة لك",

            assessmentTitle:
                "خلينا نفهم احتياجاتك.",

            assessmentText:
                "أجب عن بعض الأسئلة البسيطة وسنساعدك في الوصول إلى نوع الدعم الأكثر ارتباطًا باحتياجاتك.",

            assessmentButton: "ابدأ",
            assessmentLink: "التقييم",

            optionAnxiety:
                "القلق والتوتر",

            optionRelationships:
                "العلاقات",

            optionSelf:
                "تقدير الذات",

            optionGrowth:
                "النمو الشخصي",

            modalTag:
                "لنبدأ معًا",

            modalTitle:
                "في أي شيء تبحث عن الدعم؟",

            modalText:
                "اختر الخيار الأقرب لما تبحث عنه حاليًا.",


            footerDescription:
                "مساحة داعمة للرفاه النفسي، والتطوير الشخصي، والنمو.",

            footerExplore: "استكشف",
            footerSupport: "الدعم",
            footerConnect: "تواصل معنا",

            footerConnectText:
                "لديك سؤال؟ يسعدنا التواصل معك.",

            contactUs:
                "تواصل معنا",

            privacy:
                "الخصوصية",

            terms:
                "الشروط",

            allRights:
                "جميع الحقوق محفوظة."
        }

    };


    /* =========================================================
       LANGUAGE
    ========================================================= */

    const LANGUAGE_KEY = "tasbeehLanguage";

    let currentLanguage =
        localStorage.getItem(LANGUAGE_KEY) || "en";


    function applyTranslations(language) {

        if (!translations[language]) {
            language = "en";
        }

        currentLanguage = language;

        const html = document.documentElement;
        const body = document.body;

        const isArabic = language === "ar";

        html.lang = language;
        html.dir = isArabic ? "rtl" : "ltr";

        body.classList.toggle("arabic-mode", isArabic);

        const elements =
            document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {

            const key = element.dataset.i18n;

            if (
                translations[language] &&
                Object.prototype.hasOwnProperty.call(
                    translations[language],
                    key
                )
            ) {
                element.innerHTML =
                    translations[language][key];
            }

        });


        /* Language button */

        const languageSwitch =
            document.getElementById("languageSwitch");

        if (languageSwitch) {

            languageSwitch.textContent =
                isArabic ? "English" : "العربية";

            languageSwitch.setAttribute(
                "aria-label",
                isArabic
                    ? "Switch to English"
                    : "التبديل إلى العربية"
            );
        }


        /* Document title */

        document.title = isArabic
            ? "تسبيح محمد | الدعم الشخصي والنمو"
            : "Tasbeeh Mohamed | Personal Support & Growth";


        /* Meta description */

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {

            description.setAttribute(
                "content",
                isArabic
                    ? "مساحة آمنة وداعمة للتطوير الشخصي والرفاه النفسي والعلاقات والنمو."
                    : "A private and supportive space for personal growth, emotional wellbeing, relationships and life coaching."
            );
        }


        localStorage.setItem(
            LANGUAGE_KEY,
            language
        );
    }


    /* =========================================================
       LANGUAGE SWITCH
    ========================================================= */

    const languageSwitch =
        document.getElementById("languageSwitch");

    if (languageSwitch) {

        languageSwitch.addEventListener(
            "click",
            () => {

                const nextLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";

                applyTranslations(nextLanguage);
            }
        );
    }


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navbar.classList.toggle("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                menuToggle.innerHTML = isOpen
                    ? '<i class="fa-solid fa-xmark"></i>'
                    : '<i class="fa-solid fa-bars"></i>';
            }
        );


        navbar.querySelectorAll("a").forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navbar.classList.remove("active");

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.innerHTML =
                            '<i class="fa-solid fa-bars"></i>';
                    }
                );

            }
        );

    }


    /* =========================================================
       FAQ
    ========================================================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach((item) => {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");


        if (!question || !answer) {
            return;
        }


        question.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains("active");


                faqItems.forEach((otherItem) => {

                    otherItem.classList.remove("active");

                    const otherAnswer =
                        otherItem.querySelector(
                            ".faq-answer"
                        );

                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }

                });


                if (!isActive) {

                    item.classList.add("active");

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";
                }

            }
        );

    });


    /* =========================================================
       ASSESSMENT MODAL
    ========================================================= */

    const assessmentButton =
        document.getElementById("assessmentButton");

    const assessmentModal =
        document.getElementById("assessmentModal");

    const modalClose =
        document.getElementById("modalClose");


    function openModal() {

        if (!assessmentModal) {
            return;
        }

        assessmentModal.classList.add("active");

        assessmentModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }


    function closeModal() {

        if (!assessmentModal) {
            return;
        }

        assessmentModal.classList.remove("active");

        assessmentModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";
    }


    if (assessmentButton) {

        assessmentButton.addEventListener(
            "click",
            openModal
        );

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (assessmentModal) {

        assessmentModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === assessmentModal
                ) {
                    closeModal();
                }

            }
        );

    }


    /* =========================================================
       ASSESSMENT OPTIONS
    ========================================================= */

    const assessmentOptions =
        document.querySelectorAll(
            ".assessment-option"
        );


    assessmentOptions.forEach((option) => {

        option.addEventListener(
            "click",
            () => {

                assessmentOptions.forEach(
                    (item) => {
                        item.classList.remove("selected");
                    }
                );

                option.classList.add("selected");

                const optionKey =
                    option.dataset.option || "";

                const optionNames = {

                    anxiety:
                        currentLanguage === "ar"
                            ? "القلق والتوتر"
                            : "Anxiety & Stress",

                    relationships:
                        currentLanguage === "ar"
                            ? "العلاقات"
                            : "Relationships",

                    self:
                        currentLanguage === "ar"
                            ? "تقدير الذات"
                            : "Self-Esteem",

                    growth:
                        currentLanguage === "ar"
                            ? "النمو الشخصي"
                            : "Personal Growth"
                };


                const selectedName =
                    optionNames[optionKey] ||
                    option.textContent.trim();


                setTimeout(() => {

                    alert(
                        currentLanguage === "ar"
                            ? `اخترت: ${selectedName}\nسنكمل معك الخطوة التالية قريبًا.`
                            : `You selected: ${selectedName}\nWe'll continue with the next step soon.`
                    );

                }, 150);

            }
        );

    });


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (
                    assessmentModal &&
                    assessmentModal.classList.contains("active")
                ) {
                    closeModal();
                }


                if (
                    navbar &&
                    navbar.classList.contains("active")
                ) {

                    navbar.classList.remove("active");

                    if (menuToggle) {

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.innerHTML =
                            '<i class="fa-solid fa-bars"></i>';
                    }

                }

            }

        }
    );


    /* =========================================================
       HEADER SCROLL
    ========================================================= */

    const siteHeader =
        document.getElementById("siteHeader");


    function handleHeaderScroll() {

        if (!siteHeader) {
            return;
        }

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );
    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );


    handleHeaderScroll();


    /* =========================================================
       CURRENT YEAR
    ========================================================= */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =========================================================
       INITIALIZE
    ========================================================= */

    applyTranslations(currentLanguage);

});
