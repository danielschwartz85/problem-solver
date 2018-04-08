const Config = {
  pages: {
    problem: {
      description: 'תאר באופן חופשי את הבעיה',
      inputText: 'הקלד את סיפור הבעיה כאן..',
      tab: {
        name: 'בעיה'
      }
    },
    verbExtract: {
      description: 'העתק 2 עד 6 פעלים מרכזיים',
      inputText: 'כתוב פועל כאן..',
      cardHeader: 'הבעיה שתארת',
      emptyProblem: 'חסר תיאור הבעיה..',
      tab: {
        name:'פעלים'
      }
    },
    pastVerbs: {
      description: 'סמן פעלים שהופיעו בעברך',
      tab: {
        name: 'פעולות עבר'
      }
    },
    negativeVerbs: {
      description: 'סמן פעולות עם קונוטצייה שלילית בעברך',
      tab: {
        name: 'פעולות שליליות'
      }
    },
    transformation: {
      description: 'עבור כל פועל בחר פעולה אשר יותר נכונה לך',
      inputText: 'במקום $..',
      tab: {
        name: 'פעולות אתחול'
      }
    },
    name: {
      description: 'שם פרטי',
      inputText: '',
      tab: {
        name: 'שם לידה'
      }
    },
    newName: {
      description: 'בחר שם חדש המשקף את פעולות הטרנספורמציה אשר בחרת',
      inputText: 'בחר שם חדש..',
      cardHeader: 'הפעולות שבחרת',
      tab: {
        name: 'שם חדש'
      }
    },
    pastDomino: {
      description:"תאר את חייך בעבר, התחל מ 'דו'.",
      inputText: '',
      tab: {
        name: 'עבר דומינו'
      }
    },
    futureDomino: {
      description: "הסבר כיצד אתה רואה את חייך בעתיד, התחל מ 'מי'.",
      inputText: '',
      tab: {
        name: 'עתיד דומינו'
      }
    },
    problemPlanted : {
      description: 'הגדר מחדש את הבעיה, החלף את פעולות הבעיה בפעולות הטרנספורמציה אשר בחרת',
      cardHeader: 'פעולות הטרנספורמציה',
      tab: {
        name: 'פתרון בעיה'
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
    header: "תהליכי חשיבה על בעיות",
    descriptions: [
      "לכל קונפליקט יש פתרון. הפתרון מתעכב או לא נמצא באותה עת רק בגלל חוסר הבשלות של האדם להבין את הפתרון מתוך עצמו.",
      "אם ברצונכם לפתור בעיות בדרך הנכונה הגעתם לתפישה המדויקת ",
      "כי הסוד של האדם הוא בהבנה. ",
      "שלומית 2015."
    ],
    descriptionSignature: '© כל הזכויות שמורות לד"ר שלומית תמיר Ph.D בראייה אחרת, אירידוסופיה®',
    myProblemsText: "הבעיות שלי",
    newProblemText: "בעיה חדשה"
  },
  problemScreen: {
    showBookText: "צפה",
    editText: "ערוך",
    deleteText: "מחק",
    sendText: "שלח",
    problemSubject: "הבעיה של"
  },
  sideMenu: {
    newProblem: "בעיה חדשה",
    myProblems: "הבעיות שלי",
    emptyProblems: "כרגע הכל דבש, אין בעיות..",
    errorProblems: "שגיאה בטעינת הבעיות :",
    retryFetch: "נסה שוב"
  },
  solutionScreen: {
    man: {
      header: "סיפור חיי האדם",
      subHeader: "קונפליקטים אדמיים",
      description: "חלק זה מאפיין את בעיות האדם ואת הקונפליקטים שלו, האדם נוטה לקבל את הבעיות בחייו כעובדה ונוטה שלא לנהל עליהן דיאלוג עם עצמו.",
      hidingConflict: "קונפליקט מתחבא - עלייך לשנות חלק מהפעולות ולהתרכז כרגע בשינויי פעולות העבר יותר מאשר בפעולה החדשה.",
      newConflict: "קונפליקט פתרון / דג - אם הפעולות המופיעות בבעיה אינן זרות לך ואתה מרגיש נוח איתן זהו קונפליקט פתרון אחרת ייתכן כי זהו קונפליקט דג ועלייך להמנע מן הפעולות הללו.",
      costumeConflict: "קונפליקט בתחפושת - קונפליקט זה כבר חזר בחייך בצורה שונה, נסה לזהות מתי ואיך פעלת בצורה דומה להיום."
    },
    beeing :{
      header: "פעולות פילוסופיות",
      subHeader: "קונפליקטים פילוסופיים",
      description: "עלינו לנהל דיאלוג עם הבעיות שלנו ובכך לגלות את הקונפליקטים מאחוריהן, האדם אמור להתפתח מן הבעיות האדמיות שלו אל פתרונות חדשים."
    },
    problemKeyNames: {
      description:"הבעיה שלי",
      verbs: "פעלים",
      transformationVerbs: "פעולות אתחול",
      negativeVerbs: "פעולות עם קונוטצייה שלילית",
      name: "שם",
      newName: "שם חדש",
      pastDomino: "עבר דומינו",
      futureDomino: "עתיד דומינו",
      problemType: "סוג קונלפיקט"
    }
  }
}

export default Config;
