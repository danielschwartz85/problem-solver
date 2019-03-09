const Config = {
  pages: {
    problem: {
      description: 'כתוב את סיפור הבעיה, הקפד שבסיפור הבעיה יש בין שניים לשישה פעלים. פעולות בסיפור הבעיה הן תמיד סובייקטיביות והן מעולמו הפנימי של האדם.',
      inputText: 'הבעיה שלי היא ...',
      tab: {
        name: 'סיפור הבעיה'
      }
    },
    verbExtract: {
      description: 'התבונן בסיפור הבעיה, זהה את הפעולות ורשום אותם. במידה ואינך מזהה פעולות בסיפור הבעיה, בחר מילה או מילים משמעותיות בעיניך והפוך אותם לפעולות לדוגמא: מחשבה - ח.ש.ב.',
      inputText: 'כתוב פועל כאן..',
      cardHeader: 'סיפור הבעיה',
      emptyProblem: 'חסר תיאור הבעיה..',
      tab: {
        name:'בנק פעולות'
      }
    },
    pastVerbs: {
      description: 'במידה והינך חש תחושות דומות כמו בעבר לגבי הפעולה סמן את הפעולה כפעולה חוזרת ונשנית. במידה והינך רואה את הפעולה שלפניך כחדשה זהה אותה כפעולה חדשה. במידה והפעולה שלפניך זרה לך לחלוטין זהה אותה כפעולה זרה.',
      tab: {
        name: 'סוג הפעולות'
      }
    },
    negativeVerbs: {
      description: 'פעולה השרדותית היא כל פעולה שהאדם יפרש אותה בהקשר שלילי ולא נוח בעבר בחייו. זהה אילו פעולות הן השרדותיות בחייך.',
      tab: {
        name: 'פעולות השרדותיות'
      }
    },
    transformation: {
      description: 'התבונן בפעולות שרשמת. רשום במקום כל פעולה, פעולה חילופית שלדעתך תניע את השינוי לפתרון.',
      inputText: 'במקום $..',
      tab: {
        name: 'פעולות אתחול'
      }
    },
    name: {
      description: 'רשום את השם הפרטי שניתן לך ביום הולדתך ושם נוסף אם קיים. נסה לחקור את המשמעות לבחירת השם שניתן לך ורשום זאת. גלה את הקשר בין הפעולות ההשרדותיות לשם הולדתך.',
      inputText: '',
      tab: {
        name: 'שם למסע חיי האדם'
      }
    },
    newName: {
      description: 'בחר שם פרטי חדש למסע החדש בחייך. התבונן בפעולות האתחול שרשמת, נסה לראות את הקשר בין פעולות האתחול לבין השם החדש שבחרת.',
      inputText: 'בחר שם חדש..',
      cardHeader: 'הפעולות שבחרת',
      tab: {
        name: 'שם פרטי חדש'
      }
    },
    pastDomino: {
      description:"כתוב את ה'דומינו' ממנו הגעת. דו: האם הגעת מזוג הורים ביולוגים או מאמצים עם יחסי 'דו' שולט נשלט? מי: האם נוצרת כ-'מי' אינדיבידואל שאינו משתתף ומשתף את חוויות החיים והאם נמנעה ממך אפשרות הבחירה? נו: האם הגעת ממשפחה, ו/או קהילה בעלת יחסי שולט נשלט, ללא אפשרות בחירה?",
      inputText: "'שולט נשלט' או 'חופשי'..",
      tab: {
        name: 'דו מי נו'
      }
    },
    futureDomino: {
      description: "מי דו נו - מי אני רוצה להיות בהווה ובעתיד? מי: הוא התוצר האינדיבידואל של ה 'דו מי נו' של שותפות וקהילה. איזה סוג של 'מי' אתה כרגע ואיזה סוג של 'מי' אתה שואף להיות. דו: איזה סוג של יחסים אתה יוצר, שולט נשלט או חופשי. האם אתה רוצה לשנות את הזוגיות, שותפות, או כל סוג של יחסים דואליים בחייך, ולחיות ביחסי-גומלין עם מטרה נעלה כשהתהליכים למטרה הם החשובים ולא מי הוא השולט או הנשלט בשותפות. נו: איזו משפחה, קהילה או קבוצה תרצה ליצור בחייך, שולט נשלט או חופשי.",
      inputText: "'שולט נשלט' או 'חופשי'..",
      tab: {
        name: 'מי דו נו'
      }
    },
    problemPlanted : {
      description:"זהה את הפעולות החוזרות והנשנות בסיפור הבעיה. שנה והחלף אותם בפעולות אתחול בזמן עתיד. השאר את הפעולות החדשות ו/או הזרות לסיפור הפתרון. בטל את מילות השלילה אם קיימות כאלה והוסף מילות קישור ו/או יחס אם יש צורך על מנת שסיפור הפתרון יהפוך למשפט ברור עבורך. במידה ויש מילים שהפכת אותן לפעולות, הפוך אותן חזרה לשם תואר בהתאם.",
      cardHeader: 'פעולות האתחול',
      tab: {
        name: 'סיפור הפתרון'
      }
    },
    saveMessage: "נשמר",
    deletedMessage: "נמחק",
    saveErrorMessage: "אופס..לא הצלחנו לשמור את הבעיה :",
    retrySave: "נסה שוב",
    back: "חזור",
    next: "הבא",
    save: "שמור"
  },
  welcomeScreen: {
    header: "טכניקת הפעולות והפתרון",
    descriptions: ["בעיה היא מקום מוכר ונוח להיות בו כי פתרון דורש שינוי.", "הפתרון מגיע עם הבשלות להחלפת הפעולות.", "אירידיוסופיה® 2017"],
    descriptionSignature: "ד\"ר שלומית תמיר Ph.D",
    myProblemsText: "הבעיות שלי",
    newProblemText: "בעיה חדשה"
  },
  problemScreen: {
    showBookText: "צפה",
    editText: "ערוך",
    deleteText: "מחק",
    sendText: "שלח",
    shareText: "שתף",
    shareUrlPrefix: "נוצר עם",
    problemSubject: "הבעיה של",
    retryDeleteText: "נסה שוב",
    deleteErrorMessage: "אופס..לא הצלחנו למחוק את הבעיה :"
  },
  eyeTypesScreen: {
    headers: {
      color: "צבע",
      origin: "מקור/איפיון הקבוצה אליה שייך האדם, אבולוציה.",
      actions: "דרכי פעולות אבולוציוניות/מחסירות."
    },
    types:{
      25: {
        name: "נגזרת פרח",
        color: "חום או כחול",
        description: "סיבים פתוחים היוצרים חללים דמויי פרח.",
        origin: "תקופת האבן יוצרים ואומנים.",
        actions: ["א.ה.ב", "א.מ.ן", "ב.ט.ח", "ב.ח.ר", "ה.ו.ה", "ה.ק.ל", "ז.כ.ר", "ז.מ.ן", "ח.ב.ר", "ח.ז.ק", "ח.מ.ץ", "ל.ק.ח", "ע.ד.ד", "ע.צ.ם", "ר.ג.ש", "ת.מ.ך"],
        image: "cardBgrd.jpg",
      },
      9: {
        name: "נגזרת קטיפתית",
        color: "חום",
        description: "קטיפתי",
        origin:"נוודים",
        image: "cardBgrd.jpg",
        actions: ["א.ב.ד", "א.ה.ב", "א.ח.ד", "א.כ.ל", "ב.ט.ח", "ג.ב.ל", "ג.ש.ם", "ה.ר.ס", "ז.מ.ן", "ח.ב.ר", "ח.ו.ה", "ח.ל.ק", "י.ח.ד", "כ.א.ב", "כ.ע.ס", "ל.מ.ד", "ל.ק.ח", "מ.ח.ל", "מ.מ.ש", "מ.צ.א", "נ.ח", "נ.ע", "ס.י.ע", "ס.ל.ח", "ע.כ.ל", "פ.ס.ק", "ק.ה.ל", "ק.נ.א", "ק.נ.ה", "ק.ר.ב", "ר.ב", "ר.ג.ש", "ר.ו.ה", "ר.ח.ב", "ר.ע.ש", "ש.כ.ל", "ש.ת.ף", "ת.מ.ך"]
      }
    }
  },
  badActions: {
    title: "פעולות אבולוציוניות*",
    subHeader: "פעולות מחסירות (למתקדמים).",
    description:"זהה אם בחרת באותם דרכי הפעולה המחסירות בסיפור הבעיה. אם כן כתוב והחלף את הפעולה המחסירה לפעולה אחרת בסיפור הבעיה. במידה וברצונך להשאיר את אותה פעולה, השאר.",
    empty: "לא נמצאה קשתית, בחר 'קשתיות' בתפריט ומצא את הנגזרת המתאימה."
  },
  sideMenu: {
    newProblem: "בעיה חדשה",
    eyeTypes: "קשתיות",
    myProblems: "הבעיות שלי",
    emptyProblems: "כרגע הכל דבש, אין בעיות..",
    errorProblems: "שגיאה בטעינת הבעיות :",
    retryFetch: "נסה שוב"
  },
  solutionScreen: {
    man: {
      header: "פס PORT",
      subHeader: "דרכון מסע העבר",
      description: "דרכון זה מאגד בתוכו את בחירת מסעותיך מתוך התת מודע של עברך ומרמז על הקשר בין מסעותיך ובחירותיך מתוך הדנ'א של השרשרת הדורית אליה הנך שייך.",
      hidingConflict: "קונפליקט מתחבא: זהו קונפליקט שיש בו פעולות חוזרות ונשנות מהעבר ופעולה או פעולות חדשות ללא קשר לסיפור הבעיה.",
      newConflict: "קונפליקט דג או חדש: קונפליקט דג הוא קונפליקט שיש בו פעולה זרה אחת לפחות. הפעולה זרה היות והיא דגה אותך לעולם אחר הזר מעולמך האישי. קונפליקט חדש הוא קונפליקט שיש בו אך ורק פעולות חדשות. פעולות חדשות אלו הן פעולות שלא היו בשימושך בעבר והן אינן זרות לעולמך הפנימי. קונפליקט חדש הוא הפתרון לדפוסים הישנים שהכילו את הפעולות מן העבר (פעולות חוזרות ונשנות).",
      costumeConflict: "קונפליקט בתחפושת: זהו קונפליקט שיש בו פעולות חוזרות ונשנות מן העבר ללא קשר לסיפור הבעיה שהאדם חווה. לפנייך הזדמנות נוספת לטפל בפעולות מן העבר ולהגיע לפתרון."
    },
    beeing :{
      header: "פס PORT",
      subHeader: "חידוש דרכון",
      description: "גלה והבן את דרכך אל העתיד. בידך דרכון המראה את השינוי העתידי של מסעותייך, בחייך החדשים."
    },
    problemKeyNames: {
      description:"סיפור הבעיה",
      verbs: "בנק פעולות",
      transformationVerbs: "פעולות אתחול",
      negativeVerbs: "פעולות אבולוציוניות",
      name: "שם למסע חיי האדם",
      newName: "שם פרטי חדש",
      pastDomino: "מקומי מהעבר? דו מי נו",
      futureDomino: "מי אני רוצה להיות? מי דו נו",
      problemType: "סוג קונלפיקט",
      problemPlanted: 'סיפור הפתרון'
    }
  }
}

export default Config;
