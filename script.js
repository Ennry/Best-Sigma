document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const heroButton = document.querySelector('.float');
    const heroReverse = document.querySelector('.reverse');
    const headingElement = document.querySelector('.left');
    const paragraphElement = document.querySelector('.description');
    const descriptionWidth = document.querySelector('.descriptionWidth');
    const descriptionWidthProf = document.querySelector('.descriptionWidthProficiency');
    const formLeft = document.querySelector('.alignment');
    const inputName = document.getElementById('name');
    const inputSubject = document.getElementById('subject');
    const inputMessage = document.getElementById('message');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
        });
    }

    // Translations

    const langElements = document.querySelectorAll(".lang");

    if (langElements.length > 0) {
        const translations = {
            he: {
                contact: "צור קשר",
                home: "דף הבית",
                about: "מי אנחנו",
                heading: "פרישה נכונה לעתיד שקט",
                description: "בסט סיגמא כאן כדי לסייע לכם בתהליך המורכב והחשוב של הפרישה ולספק לכם את המידע והכלים הנדרשים כדי לקבל החלטות חשובות וכדי להתמודד בצורה מקצועית ומפורטת עם כל הנושאים",
                proficiency: "מקצוענות",
                proficiencyDescription: "בכל הנושאים תחת קורת גג אחת",
                together: "ביחד",
                togetherDescription: "יחס אישי ולווי צמוד",
                fifteenDescription: "לקוחות מרוצים ממתן השירות שלנו",
                firstPlace: "מקום 1",
                firstPlaceDescription: "בשירות לקוחות מחברת מנורה מבטחים",
                services: "השירותים שלנו",
                rights: "קיבוע זכויות",
                pension: "איחוד קופות וקצבה",
                retirement: "טיפול במענקי פרישה",
                forms: "טיפול בטפסי 161",
                compensation: "פריסת פיצויים",
                tax: "החזר מס",
                allowance: "ליווי בקצבאות ב''ל",
                assistance: "סיוע בשכר דירה",
                funds: "פדיון כספים",
                team: "הנבחרת שלנו",
                name: "שם מלא",
                mail: "כתובת מייל",
                phone: "מספר טלפון",
                subject: "נושא",
                message: "הודעה",
                send: "שליחה",
                meet: "נעים להכיר,",
                meetDescription: "בסט סיגמא הוקמה על ידי יאן ברונפמן ואלדר פורטנוב, החזון של החברה היא לעזור לאנשים ולתת מענה אישי ואיכותי בתחום הפרישה, מיסוי והפיננסים, תוך דגש על התאמה אישית לצרכים הפיננסיים של כל לקוח. החברה מאמינה בשילוב של ידע מקצועי ובניית יחסים אמינים עם הלקוחות, כדי להבטיח תמיכה מקסימלית בהגשת הפתרונות המתאימים לצרכיהם הפרטיים של כול לקוחותינו",
                company: "החברה מפעילה צוות של מומחים בתחום הפרישה והפנסיה, שיכולים לספק ליווי מעמיק ומקצועי ללקוחותיה",
                coder: "אתה זה נבנה על ידי Ennry - בנייה, פיתוח וקידום אתרים",
                address: "רחוב ההגנה 13, ראשון לציון, מגדל ירון מילר",
                hours: "17:00-09:00 'א'-ה",
            },
            ru: {
                contact: "Связаться с нами",
                home: "Главная Страница",
                about: "О нас",
                heading: "Правильный выход на пенсию для мирного будущего",
                description: "Best Sigma здесь, чтобы помочь вам в сложном и важном процессе выхода на пенсию и предоставить вам информацию и инструменты, необходимые для принятия важных решений и решения всех вопросов профессионально и детально.",
                proficiency: "профессионализм",
                proficiencyDescription: "Широкий спектр предоставляемых нами услуг",
                together: "вместе",
                togetherDescription: "Индивидуальный подход к каждому клиенту",
                fifteenDescription: "Довольных клиентов от нашей компании",
                firstPlace: "1-е место",
                firstPlaceDescription: "В сервисе от компании Менора Мивтахим",
                services: "Наши услуги",
                rights: "Освобождение пенсионной выплаты от налога",
                pension: "Консолидация пенсионных фондов и пенсионных выплат",
                retirement: "Сопровождение в получении пособий от работодателя",
                forms: "Оформление новой формы 161 для налогового органа",
                compensation: "Распределение компенсации от работодателя",
                tax: "Помощь с частными налоговыми декларациями от нас",
                allowance: "Сопутствующие пособия от Национального страхования",
                assistance: "Сопровождение в получении пособия на жилье",
                funds: "Помощь в снятии пенсионных накоплений",
                team: "Наша команда",
                name: "полное имя",
                mail: "почтовый адрес",
                phone: "Номер телефона",
                subject: "Тема",
                message: "сообщение",
                send: "отправлять",
                meet: "!Приветствуем",
                meetDescription: "Best Sigma была основана Яном Бронфманом и Эльдаром Портновым. Видение компании заключается в том, чтобы помогать людям и предоставлять персональное и качественное решение в области пенсионного обеспечения, налогообложения и финансов с упором на личную адаптацию к финансовым потребностям каждого клиента. Компания верит в сочетание профессиональных знаний и построения надежных отношений с клиентами, чтобы обеспечить максимальную поддержку в предоставлении решений, подходящих для всех.",
                address: "Хагана 13, Ришон Ле-Цион, Ярон Миллер Тауэр",
                coder: "Этот сайт был создан Ennry - создание, разработка и продвижение веб-сайтов",
                hours: "17:00-09:00 воскресенье-четверг",
                company: "В компании работает команда экспертов в области выхода на пенсию и пенсионного обеспечения, которые могут оказать всестороннюю и профессиональную поддержку своим клиентам.",
            }
        };

        let currentLang = langElements[0].src.includes("russian.png") ? 'he' : 'ru';

        function changeLanguage() {
            const newLang = currentLang === 'ru' ? 'he' : 'ru';

            langElements.forEach(langElement => {
                langElement.src = newLang === 'ru' ? "imgs/hebrew.png" : "imgs/russian.png";
            });

            for (const [className, text] of Object.entries(translations[newLang])) {
                const elements = document.getElementsByClassName(className);
                for (const element of elements) {
                    element.textContent = text;
                }
            }

            currentLang = newLang;

            if (heroButton) {
                newLang === 'ru' ? heroButton.classList.add('lg:float-left') : heroButton.classList.remove('lg:float-left');
            }

            if (heroReverse) {
                newLang === 'ru' ? heroReverse.classList.add('lg:flex-row-reverse') : heroReverse.classList.remove('lg:flex-row-reverse');
            }

            if (descriptionWidth) {
                newLang === 'ru' ? descriptionWidth.classList.add('max-w-[210px]') : descriptionWidth.classList.remove('max-w-[210px]');
            }

            if (descriptionWidthProf) {
                newLang === 'ru' ? descriptionWidthProf.classList.add('max-w-[250px]') : descriptionWidthProf.classList.remove('max-w-[250px]');
            }

            if (inputName) {
                inputName.placeholder = newLang === 'ru' ? 'полное имя' : 'שם מלא';
            }

            if (inputSubject) {
                inputSubject.placeholder = newLang === 'ru' ? 'Тема' : 'נושא';
            }

            if (inputMessage) {
                inputMessage.placeholder = newLang === 'ru' ? 'сообщение' : 'כתוב הודעה';
            }

            if (headingElement) {
                newLang === 'ru' ? headingElement.classList.add('lg:text-left') : headingElement.classList.remove('lg:text-left');
            }

            if (paragraphElement) {
                newLang === 'ru' ? paragraphElement.classList.add('lg:text-left') : paragraphElement.classList.remove('lg:text-left');
            }

            if (formLeft) {
                newLang === 'ru' ? formLeft.classList.add('text-left') : formLeft.classList.remove('text-left');
            }
        }

        langElements.forEach(langElement => {
            langElement.addEventListener('click', changeLanguage);
        });
    }
});
