const Config = {
  pages: {
    problem: {
      description:
        'כתוב את סיפור הבעיה, הקפד שבסיפור הבעיה יש בין שניים לשישה פעלים. פעולות בסיפור הבעיה הן תמיד סובייקטיביות והן מעולמו הפנימי של האדם.',
      inputText: 'הבעיה שלי היא ...',
      tab: {
        name: 'סיפור הבעיה',
      },
    },
    verbExtract: {
      description:
        'התבונן בסיפור הבעיה, זהה את הפעולות ורשום אותם. במידה ואינך מזהה פעולות בסיפור הבעיה, בחר מילה או מילים משמעותיות בעיניך והפוך אותם לפעולות לדוגמא: מחשבה - ח.ש.ב.',
      inputText: 'כתוב פועל כאן..',
      cardHeader: 'סיפור הבעיה',
      emptyProblem: 'חסר תיאור הבעיה..',
      tab: {
        name: 'בנק פעולות',
      },
    },
    pastVerbs: {
      description:
        'במידה והינך חש תחושות דומות כמו בעבר לגבי הפעולה סמן את הפעולה כפעולה חוזרת ונשנית. במידה והינך רואה את הפעולה שלפניך כחדשה זהה אותה כפעולה חדשה. במידה והפעולה שלפניך זרה לך לחלוטין זהה אותה כפעולה זרה.',
      tab: {
        name: 'סוג הפעולות',
      },
    },
    negativeVerbs: {
      description:
        'פעולה השרדותית היא כל פעולה שהאדם יפרש אותה בהקשר שלילי ולא נוח בעבר בחייו. זהה אילו פעולות הן השרדותיות בחייך.',
      tab: {
        name: 'פעולות השרדותיות',
      },
    },
    transformation: {
      description:
        'התבונן בפעולות שרשמת. רשום במקום כל פעולה, פעולה חילופית שלדעתך תניע את השינוי לפתרון.',
      inputText: 'במקום $..',
      tab: {
        name: 'פעולות אתחול',
      },
    },
    name: {
      description:
        'רשום את השם הפרטי שניתן לך ביום הולדתך ושם נוסף אם קיים. נסה לחקור את המשמעות לבחירת השם שניתן לך ורשום זאת. גלה את הקשר בין הפעולות ההשרדותיות לשם הולדתך.',
      inputText: '',
      tab: {
        name: 'שם למסע חיי האדם',
      },
    },
    newName: {
      description:
        'בחר שם פרטי חדש למסע החדש בחייך. התבונן בפעולות האתחול שרשמת, נסה לראות את הקשר בין פעולות האתחול לבין השם החדש שבחרת.',
      inputText: 'בחר שם חדש..',
      cardHeader: 'הפעולות שבחרת',
      tab: {
        name: 'שם פרטי חדש',
      },
    },
    pastDomino: {
      description:
        "כתוב את ה'דומינו' ממנו הגעת. דו: האם הגעת מזוג הורים ביולוגים או מאמצים עם יחסי 'דו' שולט נשלט? מי: האם נוצרת כ-'מי' אינדיבידואל שאינו משתתף ומשתף את חוויות החיים והאם נמנעה ממך אפשרות הבחירה? נו: האם הגעת ממשפחה, ו/או קהילה בעלת יחסי שולט נשלט, ללא אפשרות בחירה?",
      inputText: "'שולט נשלט' או 'חופשי'..",
      tab: {
        name: 'דו מי נו',
      },
    },
    futureDomino: {
      description:
        "מי דו נו - מי אני רוצה להיות בהווה ובעתיד? מי: הוא התוצר האינדיבידואל של ה 'דו מי נו' של שותפות וקהילה. איזה סוג של 'מי' אתה כרגע ואיזה סוג של 'מי' אתה שואף להיות. דו: איזה סוג של יחסים אתה יוצר, שולט נשלט או חופשי. האם אתה רוצה לשנות את הזוגיות, שותפות, או כל סוג של יחסים דואליים בחייך, ולחיות ביחסי-גומלין עם מטרה נעלה כשהתהליכים למטרה הם החשובים ולא מי הוא השולט או הנשלט בשותפות. נו: איזו משפחה, קהילה או קבוצה תרצה ליצור בחייך, שולט נשלט או חופשי.",
      inputText: "'שולט נשלט' או 'חופשי'..",
      tab: {
        name: 'מי דו נו',
      },
    },
    problemPlanted: {
      description:
        'זהה את הפעולות החוזרות והנשנות בסיפור הבעיה. שנה והחלף אותם בפעולות אתחול בזמן עתיד. השאר את הפעולות החדשות ו/או הזרות לסיפור הפתרון. בטל את מילות השלילה אם קיימות כאלה והוסף מילות קישור ו/או יחס אם יש צורך על מנת שסיפור הפתרון יהפוך למשפט ברור עבורך. במידה ויש מילים שהפכת אותן לפעולות, הפוך אותן חזרה לשם תואר בהתאם.',
      cardHeader: 'פעולות האתחול',
      tab: {
        name: 'סיפור הפתרון',
      },
    },
    saveMessage: 'נשמר',
    deletedMessage: 'נמחק',
    saveErrorMessage: 'אופס..לא הצלחנו לשמור את הבעיה :',
    retrySave: 'נסה שוב',
    back: 'חזור',
    next: 'הבא',
    save: 'שמור',
  },
  welcomeScreen: {
    header: 'טכניקת הפעולות והפתרון',
    descriptions: [
      'בעיה היא מקום מוכר ונוח להיות בו כי פתרון דורש שינוי.',
      'הפתרון מגיע עם הבשלות להחלפת הפעולות.',
      'אירידיוסופיה® 2017',
    ],
    descriptionSignature: 'ד"ר שלומית תמיר Ph.D',
    myProblemsText: 'הבעיות שלי',
    newProblemText: 'בעיה חדשה',
  },
  problemScreen: {
    showBookText: 'צפה',
    editText: 'ערוך',
    deleteText: 'מחק',
    sendText: 'שלח',
    shareText: 'שתף',
    shareUrlPrefix: 'נוצר עם',
    problemSubject: 'הבעיה של',
    retryDeleteText: 'נסה שוב',
    deleteErrorMessage: 'אופס..לא הצלחנו למחוק את הבעיה :',
  },
  eyeTypesScreen: {
    headers: {
      color: 'צבע',
      description: 'מרקם קשתית',
      origin: 'מקור/איפיון הקבוצה אליה שייך האדם, אבולוציה.',
      actions: 'דרכי פעולות אבולוציוניות/מחסירות',
    },
    types: {
      25: {
        name: 'נגזרת פרח',
        color: 'חום או כחול',
        description: 'סיבים פתוחים היוצרים חללים דמויי פרח.',
        origin: 'תקופת האבן יוצרים ואומנים.',
        image: 'eyes/flower-md.jpg',
        actions: [
          'א.ה.ב',
          'א.מ.ן',
          'ב.ט.ח',
          'ב.ח.ר',
          'ה.ו.ה',
          'ה.ק.ל',
          'ז.כ.ר',
          'ז.מ.ן',
          'ח.ב.ר',
          'ח.ז.ק',
          'ח.מ.ץ',
          'ל.ק.ח',
          'ע.ד.ד',
          'ע.צ.ם',
          'ר.ג.ש',
          'ת.מ.ך',
        ],
      },
      9: {
        name: 'נגזרת קטיפתית',
        color: 'חום',
        description: 'קטיפתי',
        origin: 'נוודים',
        image: 'eyes/velved-md.jpg',
        actions: [
          'א.ב.ד',
          'א.ה.ב',
          'א.ח.ד',
          'א.כ.ל',
          'ב.ט.ח',
          'ג.ב.ל',
          'ג.ש.ם',
          'ה.ר.ס',
          'ז.מ.ן',
          'ח.ב.ר',
          'ח.ו.ה',
          'ח.ל.ק',
          'י.ח.ד',
          'כ.א.ב',
          'כ.ע.ס',
          'ל.מ.ד',
          'ל.ק.ח',
          'מ.ח.ל',
          'מ.מ.ש',
          'מ.צ.א',
          'נ.ח',
          'נ.ע',
          'ס.י.ע',
          'ס.ל.ח',
          'ע.כ.ל',
          'פ.ס.ק',
          'ק.ה.ל',
          'ק.נ.א',
          'ק.נ.ה',
          'ק.ר.ב',
          'ר.ב',
          'ר.ג.ש',
          'ר.ו.ה',
          'ר.ח.ב',
          'ר.ע.ש',
          'ש.כ.ל',
          'ש.ת.ף',
          'ת.מ.ך',
        ],
      },
      13: {
        name: 'נגזרת שפנים/שמש',
        color: 'חום כחול',
        description:
          'קווים הדומים לקרני שמש עם טבעות שלמות וקטועות בקשתית. במצבם קוטביים בקשתיות אלו הקווים יתעבו לפסים עבים דמויי מעבר חצייה.',
        origin: 'שבטיים',
        image: 'eyes/rabit-sun-md.jpg',
        actions: [
          'א.ג.ר',
          'א.ז.ן',
          'ב.ד.ד',
          'ב.ל.ט',
          'ד.י.ק',
          'ד.ע',
          'ז.ע.ר',
          'ח.י.ב',
          'ח.ל.ם',
          'ח.ל.ץ',
          'ח.מ.ל',
          'ח.נ.ך',
          'ח.נ.ק',
          'ח.ר.ד',
          'ח.ר.ם',
          'ט.מ.ע',
          'ט.ר.ד',
          'כ.ב.ד',
          'כ.פ.ה',
          'ל.ח.ם',
          'ל.ח.ץ',
          'מ.ק.ד',
          'מ.ת.ח',
          'נ.ש.ם',
          'ס.כ.ם',
          'ס.פ.ג',
          'ע.י.ף',
          'ע.כ.ל',
          'ע.ש.ה',
          'פ.ז.ר',
          'פ.ח.ד',
          'פ.נ.ם',
          'פ.ס.ק',
          'פ.ר.ק',
          'צ.ב.ר',
          'צ.ע.ק',
          'ק.ב.ל',
          'ק.ר.ה',
          'ר.ג.ע',
          'ר.ח.ק',
          'ת.מ.ך',
        ],
      },
      17: {
        name: 'נגזרת קווית',
        color: 'כחול או חום',
        description: 'סיבים צפופים מתוחים וישרים ברב הקשתית ואישון קטן.',
        origin: 'פיקוד וניהול',
        image: 'eyes/lined-md.jpg',
        actions: [
          'א.ב.ד',
          'א.ה.ב',
          'א.ז.נ',
          'ג.ע',
          'ד.א.ג',
          'ד.ע',
          'ד.ר.ש',
          'ה.ש.ג',
          'ח.ב.ר',
          'ח.ז.ק',
          'ח.ז.ר',
          'ח.ט.ט',
          'ח.ל.ש',
          'ח.מ.ץ',
          'ח.ק.ר',
          'י.ג.ע',
          'י.ש.ן',
          'מ.ד.ד',
          'נ.ה.ל',
          'נ.ע.ל',
          'ס.כ.ל',
          'ק.צ.ה',
          'ר.ג.ע',
          'ר.כ.ך',
          'ש.י.ך',
          'ר.צ.ה',
          'ש.ל.ט',
        ],
      },
      49: {
        name: 'נגזרת צבעונית',
        color: 'שונה באזור האישוני מצבע הקשתית',
        description: '',
        origin: 'מניתוק למעורבות אנושית',
        image: 'eyes/colored-md.jpg',
        actions: [
          'א.ז.ן',
          'ב.ט.א',
          'ד.ח.ה',
          'ז.ר.ק',
          'ח.ז.ר',
          'ח.י.ב',
          'י.צ.א',
          'נ.ש.ם',
          'ס.י.ע',
          'ס.פ.ג',
          'ע.כ.ל',
          'צ.ב.ר',
          'ק.ב.ל',
          'ר.ג.ש',
          'ר.צ.ה',
        ],
      },
      21: {
        name: 'נגזרות בין שמיים לארץ',
        color: 'כחול',
        description: 'קשתית עם סיבים גליים ולעיתים בתווספת שרשרת פנינים בפריפרית הקשתית.',
        origin: 'בין שמיים לארץ',
        image: 'eyes/heaven-earth-md.jpg',
        actions: [
          'א.ג.ר',
          'א.ז.ן',
          'ב.ט.א',
          'ד.ח.ה',
          'ה.ג.ן',
          'ח.ז.ר',
          'ח.י.ב',
          'ח.ס.ן',
          'כ.ו.ן',
          'מ.ר',
          'נ.ש.ם',
          'ס.י.ע',
          'ע.כ.ל',
          'ע.צ.ר',
          'ע.ק.ש',
          'צ.ב.ר',
          'ר.ח.ב',
          'ש.נ.ה',
          'ת.מ.ך',
        ],
      },
      37: {
        name: 'נגזרת מוכתמת',
        color: 'חום או כחול',
        description: 'כתמים בולטים ומפוזרים במקומות שונים בקשתית.',
        origin: 'דחיית סיפוקים',
        image: 'eyes/stained-md.jpg',
        actions: [
          'ב.ד.ד',
          'ג.ב.ל',
          'ד.ח.ה',
          'ד.כ.א',
          'ז.ר.ם',
          'ח.ב.ר',
          'ח.ס.ך',
          'י.ר.ד',
          'כ.ב.ד',
          'ס.ג.ר',
          'ע.ד.ד',
          'ע.ל.ה',
          'ע.צ.ר',
          'ע.ר.ע.ר',
          'צ.מ.צ.ם',
          'ק.ה.ל',
          'ק.מ.ץ',
          'ר.א.ה',
          'ש.ב.ר',
        ],
      },
      45: {
        name: 'נגזרת לבנה או צהובה',
        color: 'קשתית בעלת גוון צהוב או לבן',
        description: '',
        origin: 'חייי נצח. שאיפה למושלם ללא פשרות.',
        image: 'eyes/white-yellow-md.jpg',
        actions: [
          'א.ש.ם',
          'ב.ק.ר',
          'ג.ז.מ',
          'ד.ל.ק',
          'ד.ע',
          'ד.ר.ש',
          'ה.ש.ג',
          'ז.ע.ם',
          'ח.ט.ט',
          'ח.מ.ץ',
          'ח.ס.ר',
          'י.ת.ר',
          'כ.ל.ה',
          'כ.ע.ס',
          'מ.ר.מ.ר',
          'ס.ב.ל',
          'ס.ד.ר',
          'ס.פ.ק',
          'ע.צ.ם',
          'ע.ק.ש',
          'פ.ח.ת',
          'פ.ר.ק',
          'ק.צ.ה',
          'ש.א.ב',
          'ש.ו.ה',
          'ש.י.ח',
          'ת.ב.ע',
        ],
      },
      29: {
        name: 'נגזרת חלולה',
        color: 'כחול או חום',
        description: 'מארג סיבים פתוח המאופיין בחללים בולטים בכל הקשתית.',
        origin: 'מעבר מעשייה לרגש',
        image: 'eyes/hollow-md.jpg',
        actions: ['ח.ז.ק', 'ל.ח.ם', 'מ.צ.א', 'נ.ת.ן', 'פ.ט.ר', 'פ.ת.ר', 'ק.צ.ה', 'ש.ב.ר', 'ת.ק.ע'],
      },
      33: {
        name: 'נגזרת מנוקדת',
        color: 'חום',
        description: 'נקודות קטנות שחורות מנוקדות בחלקים שונים. במצבים קוטביים כל הקשתית מנוקדת.',
        origin: 'זכרונות והאחזות בעבר ונוסטלגיה.',
        image: 'eyes/doted-md.jpg',
        actions: [
          'א.מ.ן',
          'ג.ע',
          'ה.ו.ה',
          'ו.ד.ה',
          'ז.כ.ר',
          'ז.ר.ם',
          'ח.ש.ב',
          'ח.ש.ד',
          'ט.מ.ע',
          'ט.ע.ה',
          'ט.ע.ן',
          'כ.ב.ד',
          'ס.ב.ל',
          'ס.ד.ר',
          'ס.ח.ב',
          'ע.ב.ר',
          'פ.ס.ק',
          'פ.ת.ח',
          'ק.ש.ה',
          'ר.ג.ש',
          'ש.מ.ח',
          'ש.מ.ר',
          'ש.נ.ה',
          'ש.ק.ט',
          'ת.ה.ה',
          'ת.מ.ך',
        ],
      },
      41: {
        name: 'נגזרת הילה',
        color: 'חום או כחול',
        description: 'הילה בהירה או צהובה בפריפריית הקשתית.',
        origin: 'עמידות יציבות ועקשנות.',
        image: 'eyes/ora-md.jpg',
        actions: [
          'א.מ.ץ',
          'ה.ק.ל',
          'ו.כ.ח',
          'ח.ל.ט',
          'ח.מ.ר',
          'נ.ג.ע',
          'ס.ג.ר',
          'ס.כ.ם',
          'ע.ב.ד',
          'ע.מ.ד',
          'ע.ק.ש',
          'ע.ל.ם',
          'ר.א.ה',
          'ר.ג.ש',
          'ש.כ.ח',
        ],
      },
    },
  },
  mandalasScreen: {
    mandalas: [
      {
        image: 'eyes/velved-md.jpg',
        id: 'A',
        title: 'מנדלת הדנ״א והשרשרת הדורית / סיום התקשרות עם דנ״א או תשתית כלשהי',
        text:
          'משמעות: דנ״א שהתנתק מהחיבור שלו בעקבות סיום תפקידו. סיום השפעה או תפקיד של משפחה, קבוצה, קהילה, סביבה, עיסוק או כל דבר אליו האדם היה קשור או מחובר, התפקיד הסתיים. בחירת מנדלה זו מראה על כך שהקונפליקט בחייך אינו קשור עוד לדנ״א או לנושא ששאלת עליו.',
        textEnd:
          'התשובה: סיימת שלב חשוב בחייך. עליך להמשיך בדרכך האישית בה הנך מאמין ולנתק את עצמך ממחשבות על אותו נושא',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'B',
        title: 'מנדלת איזון האדם',
        text:
          'משמעות: שאיפה לאיזון בכל המימדים בחייך .בחירת מנדלה זו מראה שהנך מבין את החשיבות לאיזון בחייך ועליך לנקוט בצעדים הקשורים לאיזון הנכונים בתקופה זו.',
        textEnd:
          'התשובה: עברת דרך ארוכה בתהליכי חשיבה ועשייה כדי לקטוף את פירות רצונותיך. כל שעליך לעשות הוא לאזן בין תהליכים אלו באופן שווה.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'C',
        title: 'מנדלת איזון האדם / זיכוך הכרת המחשבה מול פעולות העשייה',
        text:
          'משמעות: הכרה מחודשת של העשייה בחייך. בחירת מנדלה זו מצביעה על חוסר תאום בין מחשבותיך לפעולות העשייה בחייך. אזן את כוח המחשבה עם כוח העשייה בחייך הקפד לזהות ולנקות מחשבות חסרות תועלת ותכלית.',
        textEnd: 'התשובה: מחשבה ללא עשייה תייצר בך הרגשת ריקנות.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'D',
        title: 'מנדלת איזון האדם / זיכוך פעולות העשייה דרך מחשבה תחילה',
        text:
          'משמעות: הכרה מחודשת של המחשבה בחייך. בחירת מנדלה זו מצביעה על משמעות המחשבה לפני כל פעולת עשייה בחייך. הקפד לחשוב )דרך אחת או כמה מהפעולות הבאות: להכיר, לחקור, ללמוד, לדעת ,לבחור ועוד..( לפני שהנך פועל.',
        textEnd:
          'התשובה: עשייה לפני מחשבה תביא אותך לדרך ארוכה ומייגעת. מחשבה תחילה תפתח בפניך אפשרויות שלא הכרת.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'E',
        title: 'תרשים צומת חיי אדם / פרשת דרכים עכשווית',
        text:
          'משמעות: הנך נימצא בפרשת דרכים .בחירת תרשים זה מצביעה על היותך בצומת משמעותית בחייך. התבוננות ממרחק או ניתוק לזמנים קצובים יקדמו אותך לבחירת השלב הבא.',
        textEnd: 'התשובה: התרחק מהעומס שהנך נימצא כדי להתקרב לתשובות.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'F',
        title: 'תרשים צומת חיי האדם / מפגש צמתים',
        text:
          'משמעות: הקשר בין פרשת דרכים בהווה לפרשת דרכים לא פתורה מהעבר. בחירת תרשים זה מצביעה על שיעורים או קונפליקטים חוזרים מאמצע החיים בין הגילאים *48-24 .נסה לזהות קונפליקטים או חסכים דומים. באפשרותך לתקן או למלא בצומת חיים זו את העבר וההווה במהירות כדי להגיע לשלב הבא בחייך ולזכות בשלמות ובשלווה בחייך. *במידה והנך מתחת לגיל 24 נסה לזהות את השנים בהם עברת את משבר גיל ההתבגרות. ראה שנים אלו כצומת קדומה הדומה לצומת בה הנך נמצא.',
        textEnd:
          'התשובה: פרשת דרכים זו הגיעה כדי להבהיר לך תובנות שלא היית בשל להבין בתקופות אחרות.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'G',
        title: 'תרשים בניית ביתו הפנימי של האדם',
        text:
          'משמעות: עיבוד ופריטה של אירועים מהעבר ומההווה ייצבו את הבית הפנימי של האדם. בחירת תרשים זה מצביעה על הצורך בעיבוד ובפריטת העבר וההווה של האדם על מנת לבנות את יסודות ביתו לעתיד. ללא פריטה של העבר וההווה האדם משול לליצן עצוב הדומה לדמות פיסית חסרת איברים פנימיים כבית עם קירות ללא תוכן כך יראה האדם שאינו מכיר את עצמו.',
        textEnd:
          'התשובה: הרבה הסחות דעת מסתירות ממך את מי שהנך. רק דרך עיבוד ופריטה של העבר וההווה של חייך תמצא את התשובה שהנך מחפש לשלב הבא בחייך.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'H',
        title: 'תרשים ההוויה הרעוע',
        text:
          'משמעות: בחירה בין חיפוש או בנייה. בחירת תרשים זה מצביע על הצורך לסלק דפוסים או הרגלים מהתשתית הקודמת על מנת לבנות או להשלים את המסע של חייך. בחירת תרשים זה מצביעה על אזהרה. אם לא תזהה ותסלק דפוסים אלה, תמשיך בחיפוש ללא מוצא וללא בנייה אישית.',
        textend:
          'התשובה: הדפוסים הקדומים אינם מתאימים לשלב הבא בחייך ללא שינויים תתקבע לאותה מציאות או תשתית רעוע.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'I',
        title: 'תרשים כתבי הנשמה',
        text:
          'משמעות: חיבור אל ההכרה הפנימית של האדם אל עצמו. בחירת תרשים זה מצביעה על שביעות ומלאות מכל הדעות וההשוואות מהעולם החיצון. הגעת לנקודה בה עליך להכיר את עצמך ולהוקיר תודה לעצמך על מי שאתה. התשובות נמצאות בהכרה ובתודעה שבנית לעצמך במו ידיך או מהמקורות ששאבת. כל תשובה או מענה שתחפש מאדם או ממקור אחר, תרחיק אותך מעצמך.',
        textEnd: 'התשובה: התשובות קיימות בתוכך.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'J',
        title: 'תרשים כתבי הנשמה של האדם ושל השרשרת הדורית שלו',
        text:
          'משמעות: הכרת והבנת האדם את עצמו ואת אבותיו )אמא אבא סבא סבתא(. התשובות לשאלתך הן רחבות ומורכבות והן ימצאו אחרי הכרה והבנת כתבי הנשמה שלך ושל אבותיך. במנדלה זו ניתן לצפות בשני משולשים בצידי המנדלה המונחים גב אל גב ובאמצע מעוין החסר גם הוא בשילוב המשולשים. אילו משקפים את הרצון להכרה הבנה ואף קרבה לאותנטיות של השרשרת הדורית ממנה הגעת.',
        textEnd: 'התשובה: התשובה לשאלתך קיימת בשרשרת הדורית ממנה הגעת.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'K',
        title: 'מנדלת משברי גיל / שיעורים בתחפושת',
        text:
          'משמעות: שיעורים וקונפליקטים החוזרים במעגלי החיים בעקבות הבנות שגויות. בחירת מנדלה זו מבקשת ממך לזהות באיזה גיל התנסית בקונפליקט דומה לזה שהנך נמצא בו עכשיו ומה היו תובנותיך. קונפליקט דומה חוזר בשלב זה של כדי שתפתור את אותו קונפליקט מתוך בשלות והבנה.',
        textEnd:
          'התשובה: בגרות ללא בשלות אינה מניבה תוצאות. עליך להבשיל לשלב הבא בחייך כדי לא להישאר באותם מקומות שהיית בהם.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'L',
        title: 'מנדלות משברי גיל / האמת המתקנת של האדם',
        text:
          'משמעות: האמצ״ע המדויק של מכלול האדם. האמצ״ע היא האמת המתקנת של הצורך הערכי שלך ושל דורותיך הקודמים. בחירת מנדלה זו מצביעה על האפשרות לגלות דרך קונפליקט חייך את האמת הערכית שתתקן את כל הערכים הדוריים שלך. בפניך הזכות לתקן ולהשפיע על עצמך, על משפחתך הגרעינית ועל סובביך. הנך איש חסד.',
        textEnd:
          'התשובה: במידה והבנת את האמת הערכית שלך ושל דורותיך הרווחת את היכולת להשפיע ולרפא את סביבתך. בזכות זאת הפכת לבעל השפעה מתקנת ומרפא.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'M',
        title: 'מנדלת משברי גיל עם השפעה תהודתית',
        text:
          'משמעות: השפעה תהודתית של השרשרת הדורית. בחירת מנדלה זו מצביעה על השפעה והעתק דרכי הפעולות של השרשרת הדורית ממנה הגעת אל חייך. יש צורך לשקול אם העתק הפעולות הדוריות מתאימות לשלב זה בחייך.',
        textEnd:
          'התשובה: תשובתך מצויה בהעברה הדורית ממנה הגעת. נסה להימנע משכפול פעולות הוריך בשלב זה או בשלב הבא בחייך.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'N',
        title: 'מנדלת משברי גיל / הדרכה גבוהה',
        text:
          'משמעות: השפעת המדריכים הרוחניים שבין המימדים על חיינו הנוכחיים. בחירת מנדלה זו מצביעה על הצורך בתשובות או הבנות אודות חייך הקדומים. העזר במדיטציה, דמיון מודרך או הזמנת מדריכים רוחניים כדי לפתור קונפליקטים הקשורים לחיים הקדומים.',
        textEnd: 'התשובה: בחייך הקדומים הצלחת בזכות הדרכה/הבנה רוחנית. העזר בכך גם בשלב זה בחייך.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'O',
        title: 'מנדלת משברי גיל / השפעה של מעברים',
        text:
          'משמעות: מעוברות לזקנה בחירת מנדלה זו מצביעה על השפעת המעברים של האדם על שארית חייו. זהה קושי באחד המעברים הבאים: מעוברות, ינקות, ילדות, נערות, בגרות ועד לזקנה . לפניך אפשרות לתקן/ למלא בשלב זה חסך משמעותי מהשלבים הללו.',
        textEnd: 'התשובה: תשובה אחת מדויקת תביא מענה לכל שאר השאלות והתהיות.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'P',
        title: 'תרשים הפירמידה',
        text:
          'משמעות: עיבוד ופריטה של כל שלב בחיים מביאה לשלב בריא ומאוזן יותר. בחירת תרשים זה מראה את הצורך להבין את החסכים בחייך משלבים קודמים. באפשרותך למלא חסכים אלו בזמן זה על מנת להגיע לשלב הבא מחוזק ושלם.',
        textEnd:
          'התשובה: קיבלת את הכלים, התשובות והאפשרויות למלא את החסכים מן העבר וכך לסלול את דרכך לבטחה.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'Q',
        title: 'תרשים הקשר בין הסביבה לאדם / השפעת הסביבה על האדם',
        text:
          'משמעות: מקום האדם בסביבה בחירת מנדלה זו מצביעה על הצורך שלך ללמוד הרגלים ודפוסים מהסביבה הנוכחית בחייך.',
        textEnd:
          'התשובה: הנך רוכש ומפנים מהסביבה בה הנך נימצא עכשיו או שתימצא בעתיד מידע, דפוסים הרגלים ומיומנויות חדשים.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'R',
        title: 'תרשים הקשר בין האדם לסביבה / השפעת האדם על הסביבה',
        text:
          'משמעות: מקומו של האדם ביחס לסביבה. בחירת מנדלה זו מצביעה על היכולת של האדם להשפיע ולהוות השראה לסביבה הקרובה אליו.',
        textEnd: 'התשובה: הנך בעל השפעה והשראה על סביבתך. דברים יסתדרו מתוכך או מההשפעה שלך.',
      },
      {
        image: 'eyes/velved-md.jpg',
        id: 'S',
        title: 'תרשים המחיצות באישיות האדם',
        text:
          'משמעות: אישיות או מהות רב מימדית ונאורה. בחירת תרשים זה מצביעה על השאיפה שלך להיתרם או לקחת דוגמא מאישיות עם מהות התורמת לסביבה ושואפת לצדק ובעלת יראה כבוד וניקיון לב וכפיים בחייה. כך הינך רוצה להראות. לחילופין יתכן והנך כבר נימצא אחר חיפוש או רצון להדרכה גבוהה.',
        textEnd: 'התשובה: הגעת להשלמה או לשלב הנכון ביותר כרגע בחייך.',
      },
    ],
  },
  badActions: {
    title: 'פעולות אבולוציוניות* (למתקדמים).',
    description:
      'זהה אם בחרת באותם דרכי הפעולה המחסירות בסיפור הבעיה. אם כן כתוב והחלף את הפעולה המחסירה לפעולה אחרת בסיפור הבעיה. במידה וברצונך להשאיר את אותה פעולה, השאר.',
    empty: "לא נמצאה קשתית, בחר 'קשתיות' בתפריט ומצא את הנגזרת המתאימה.",
  },
  sideMenu: {
    newProblem: 'בעיה חדשה',
    eyeTypes: 'קשתיות',
    mandalas: 'מנדלות',
    myProblems: 'הבעיות שלי',
    emptyProblems: 'כרגע הכל דבש, אין בעיות..',
    errorProblems: 'שגיאה בטעינת הבעיות :',
    retryFetch: 'נסה שוב',
  },
  solutionScreen: {
    man: {
      header: 'פס PORT',
      subHeader: 'דרכון מסע העבר',
      description:
        "דרכון זה מאגד בתוכו את בחירת מסעותיך מתוך התת מודע של עברך ומרמז על הקשר בין מסעותיך ובחירותיך מתוך הדנ'א של השרשרת הדורית אליה הנך שייך.",
      hidingConflict:
        'קונפליקט מתחבא: זהו קונפליקט שיש בו פעולות חוזרות ונשנות מהעבר ופעולה או פעולות חדשות ללא קשר לסיפור הבעיה.',
      newConflict:
        'קונפליקט דג או חדש: קונפליקט דג הוא קונפליקט שיש בו פעולה זרה אחת לפחות. הפעולה זרה היות והיא דגה אותך לעולם אחר הזר מעולמך האישי. קונפליקט חדש הוא קונפליקט שיש בו אך ורק פעולות חדשות. פעולות חדשות אלו הן פעולות שלא היו בשימושך בעבר והן אינן זרות לעולמך הפנימי. קונפליקט חדש הוא הפתרון לדפוסים הישנים שהכילו את הפעולות מן העבר (פעולות חוזרות ונשנות).',
      costumeConflict:
        'קונפליקט בתחפושת: זהו קונפליקט שיש בו פעולות חוזרות ונשנות מן העבר ללא קשר לסיפור הבעיה שהאדם חווה. לפנייך הזדמנות נוספת לטפל בפעולות מן העבר ולהגיע לפתרון.',
    },
    beeing: {
      header: 'פס PORT',
      subHeader: 'חידוש דרכון',
      description:
        'גלה והבן את דרכך אל העתיד. בידך דרכון המראה את השינוי העתידי של מסעותייך, בחייך החדשים.',
    },
    problemKeyNames: {
      description: 'סיפור הבעיה',
      verbs: 'בנק פעולות',
      transformationVerbs: 'פעולות אתחול',
      negativeVerbs: 'פעולות אבולוציוניות',
      name: 'שם למסע חיי האדם',
      newName: 'שם פרטי חדש',
      pastDomino: 'מקומי מהעבר? דו מי נו',
      futureDomino: 'מי אני רוצה להיות? מי דו נו',
      problemType: 'סוג קונלפיקט',
      problemPlanted: 'סיפור הפתרון',
    },
  },
};

export default Config;
